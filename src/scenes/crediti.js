let sfondo_crediti;
let credits;
let home;
let pulsante_home;

function preload(s) {
    sfondo_crediti = PP.assets.image.load(s, "assets/situe/crediti.png");
    home = PP.assets.image.load(s, "assets/icone/home_icona.png");
}

function create(s) {
    credits = PP.assets.image.add(s, sfondo_crediti, 0, 0, 0, 0);
    pulsante_home = PP.assets.image.add(s, home, 640, 630, 0.5, 0.5);
    PP.interactive.mouse.add(pulsante_home, "pointerdown", goto_home);
}

function update(s) {

}

function goto_home (s){
    PP.scenes.start("home");
}

function destroy(s) {

}

PP.scenes.add("crediti", preload, create, update, destroy);
