let tavola1, tavola2, tavola3, tavola4, tavola5, tavola6;
let tavola_attiva;
let numero_tavola = 0;
let tavole = [];
let timer_lettura_tavola = false;

// Pulsanti
let p_avanti, p_indietro, p_gotohome, p_gotogame;
let pulsante_avanti, pulsante_indietro, pulsante_gotohome, pulsante_gotogame;

function preload(s) {
    // Carica tavole
    tavola1 = PP.assets.image.load(s, "assets/situe/testi1.jpg");
    tavola2 = PP.assets.image.load(s, "assets/situe/scena1.png");
    tavola3 = PP.assets.image.load(s, "assets/situe/testi2.jpg");
    tavola4 = PP.assets.image.load(s, "assets/situe/scena2.png");
    tavola5 = PP.assets.image.load(s, "assets/situe/testi3.jpg");
    tavola6 = PP.assets.image.load(s, "assets/situe/scena3.png");
    tavole = [tavola1, tavola2, tavola3, tavola4, tavola5, tavola6];

    // Carica immagini pulsanti (solo per add successivo)
    p_avanti = PP.assets.image.load(s, "assets/icone/avanti.png");
    p_indietro = PP.assets.image.load(s, "assets/icone/indietro.png");
    p_gotohome = PP.assets.image.load(s, "assets/icone/home_icona.png");
    p_gotogame = PP.assets.image.load(s, "assets/icone/iconagame.png");
}

function seleziona_tavole(s) {
    // distruggi tavola precedente
    if (tavola_attiva) PP.assets.destroy(tavola_attiva);

    // aggiungi nuova tavola
    tavola_attiva = PP.assets.image.add(s, tavole[numero_tavola], 0, 0, 0, 0);

    // distruggi tutti i pulsanti attivi
    if (pulsante_avanti) PP.assets.destroy(pulsante_avanti);
    if (pulsante_indietro) PP.assets.destroy(pulsante_indietro);
    if (pulsante_gotohome) PP.assets.destroy(pulsante_gotohome);
    if (pulsante_gotogame) PP.assets.destroy(pulsante_gotogame);

    // Se siamo all'ultima tavola
	if (numero_tavola === tavole.length - 1) {
		pulsante_indietro = PP.assets.image.add(s, p_indietro, 70, 370, 0.5, 0.5);
		pulsante_gotohome = PP.assets.image.add(s, p_gotohome, 640, 630, 0.5, 0.5);
		pulsante_gotogame = PP.assets.image.add(s, p_gotogame, 1220, 370, 0.5, 0.5);
		
		pulsante_indietro.geometry.scale_x = 0.15;
		pulsante_indietro.geometry.scale_y = 0.15;
		pulsante_gotogame.geometry.scale_x = 0.1;
		pulsante_gotogame.geometry.scale_y = 0.1;

		PP.interactive.mouse.add(pulsante_indietro, "pointerdown", () => tavola_prima(s));
		PP.interactive.mouse.add(pulsante_gotohome, "pointerdown", () => PP.scenes.start("home"));
		PP.interactive.mouse.add(pulsante_gotogame, "pointerdown", () => PP.scenes.start("scene"));

	} else {
		// pulsanti normali
		pulsante_avanti = PP.assets.image.add(s, p_avanti, 1220, 370, 0.5, 0.5);
		pulsante_gotohome = PP.assets.image.add(s, p_gotohome, 640, 630, 0.5, 0.5);

		pulsante_avanti.geometry.scale_x = 0.15;
		pulsante_avanti.geometry.scale_y = 0.15;

		PP.interactive.mouse.add(pulsante_gotohome, "pointerdown", () => PP.scenes.start("home"));

		// Aggiungi pulsante indietro solo se NON siamo alla prima tavola
		if (numero_tavola > 0) {
			pulsante_indietro = PP.assets.image.add(s, p_indietro, 70, 370, 0.5, 0.5);
			pulsante_indietro.geometry.scale_x = 0.15;
			pulsante_indietro.geometry.scale_y = 0.15;
			PP.interactive.mouse.add(pulsante_indietro, "pointerdown", () => tavola_prima(s));
		}

		// click
		PP.interactive.mouse.add(pulsante_avanti, "pointerdown", () => tavola_dopo(s));
	}
}

function tavola_dopo(s) {
    if (timer_lettura_tavola) return;
	if (numero_tavola >= tavole.length - 1) {
		PP.scenes.start("home");
		return;
	}

	numero_tavola++;
	seleziona_tavole(s);

	timer_lettura_tavola = true;
	PP.timers.add_timer(s, 800, () => {
		timer_lettura_tavola = false;
	}, false);
}

function tavola_prima(s) {
    if (timer_lettura_tavola) return;
	if (numero_tavola <= 0) return;

	numero_tavola--;
	seleziona_tavole(s);

	timer_lettura_tavola = true;
	PP.timers.add_timer(s, 800, () => {
		timer_lettura_tavola = false;
	}, false);
}

function create(s) {
    numero_tavola = 0
	tavola_attiva = null;
	seleziona_tavole(s);
}

function update(s) {

}

function destroy(s) {

}

PP.scenes.add("storia", preload, create, update, destroy);
