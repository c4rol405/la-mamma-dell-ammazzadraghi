let img_menu
let menu

let img_tutorial
let tutorial
let img_comandi;
let comandi_aperti = false;
let comandi;

let img_barra;
let barra;
PP.game_state.set_variable ("consapevolezza", 0);
let consapevolezza_prima = -1;

let img_cuori;
let cuori;
PP.game_state.set_variable ("cuori", 3);

let img_budini;
let budini;
PP.game_state.set_variable ("budini", 7);
let budini_prima = -1;

let img_fine;
let pulsantefine;
let img_sfida;
let pulsantesfida;

function preload_hud(s) {
    img_menu = PP.assets.image.load(s, "assets/icone/home.png");
    img_tutorial = PP.assets.image.load(s, "assets/icone/i.png");
    img_comandi = PP.assets.image.load(s, "assets/icone/comandi.png");

    img_barra = PP.assets.sprite.load_spritesheet(s, "assets/icone/spriteconsap.png", 208, 61);
    img_cuori = PP.assets.sprite.load_spritesheet(s, "assets/icone/spritecuori.png", 145, 50);
    img_budini = PP.assets.sprite.load_spritesheet(s, "assets/icone/spritebudini.png", 213, 68);

    img_fine = PP.assets.image.load(s, "assets/icone/fine.png");
    img_sfida = PP.assets.image.load(s, "assets/icone/sfida.png");
}

function create_hud(s) {
    layer_hud = PP.layers.create(s);        // creo layer dedicato all'HUD
    PP.layers.set_z_index(layer_hud, 60);   // sopra il mondo ma sotto tutorial

    //PP.game_state.set_variable("consapevolezza", 0);
    PP.game_state.set_variable("cuori", 3);
    //PP.game_state.set_variable("budini", 7);

    menu = PP.assets.image.add(s, img_menu, 24, 14, 0, 0);
    menu.geometry.scale_x = 0.08;
    menu.geometry.scale_y = 0.08;
    PP.interactive.mouse.add(menu, "pointerdown", () => PP.scenes.start("home"));
    menu.tile_geometry.scroll_factor_x = 0;
    menu.tile_geometry.scroll_factor_y = 0;

    tutorial = PP.assets.image.add(s, img_tutorial, 80, 13, 0, 0);
    tutorial.geometry.scale_x = 0.08;
    tutorial.geometry.scale_y = 0.08;
    tutorial.tile_geometry.scroll_factor_x = 0;
    tutorial.tile_geometry.scroll_factor_y = 0;
    PP.interactive.mouse.add(tutorial, "pointerdown", () => {
        if (!comandi_aperti) {
            comandi = PP.assets.image.add(s, img_comandi, 640, 360, 0.5, 0.5); // centrato nello schermo
            comandi.tile_geometry.scroll_factor_x = 0;
            comandi.tile_geometry.scroll_factor_y = 0;
            comandi_aperti = true;
            PP.layers.add_to_layer(layer_hud, comandi);
        } else {
            PP.assets.destroy(comandi);
            comandi_aperti = false;
        }
    });

    barra = PP.assets.sprite.add(s, img_barra, 820, 14, 0, 0);
    barra.tile_geometry.scroll_factor_x = 0;
    barra.tile_geometry.scroll_factor_y = 0;
    PP.assets.sprite.animation_add(barra, "consapevolezza: 0", 0, 0, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 1", 1, 1, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 2", 2, 2, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 3", 3, 3, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 4", 4, 4, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 5", 5, 5, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 6", 6, 6, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 7", 7, 7, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 8", 8, 8, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 9", 9, 9, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 10", 10, 10, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 11", 11, 11, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 12", 12, 12, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 13", 13, 13, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 14", 14, 14, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 15", 15, 15, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 16", 16, 16, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 17", 17, 17, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 18", 18, 18, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 19", 19, 19, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 20", 20, 20, 1, -1);
    
    //PP.assets.sprite.animation_play(barra, "consapevolezza: 0");

    // Riprendi il valore corretto dalla variabile game_state
    let consapevolezza_corrente = PP.game_state.get_variable("consapevolezza");
    // Sicurezza: tra 0 e 20
    if(consapevolezza_corrente < 0) consapevolezza_corrente = 0;
    if(consapevolezza_corrente > 20) consapevolezza_corrente = 20;
    PP.assets.sprite.animation_play(barra, "consapevolezza: " + consapevolezza_corrente);


    cuori = PP.assets.sprite.add(s, img_cuori, 655, 22, 0, 0);
    cuori.tile_geometry.scroll_factor_x = 0;
    cuori.tile_geometry.scroll_factor_y = 0;
    PP.assets.sprite.animation_add(cuori, "cuori: 3", 0, 0, 1, -1);
    PP.assets.sprite.animation_add(cuori, "cuori: 2", 1, 1, 1, -1);
    PP.assets.sprite.animation_add(cuori, "cuori: 1", 2, 2, 1, -1);
    PP.assets.sprite.animation_add(cuori, "cuori: 0", 3, 3, 1, -1);
    PP.assets.sprite.animation_play(cuori, "cuori: 3");

    budini = PP.assets.sprite.add(s, img_budini, 1050, 10, 0, 0);
    budini.tile_geometry.scroll_factor_x = 0;
    budini.tile_geometry.scroll_factor_y = 0;
    PP.assets.sprite.animation_add(budini, "budini: 7", 0, 0, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 6", 1, 1, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 5", 2, 2, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 4", 3, 3, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 3", 4, 4, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 2", 5, 5, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 1", 6, 6, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 0", 7, 7, 1, -1);
    PP.assets.sprite.animation_play(budini, "budini: 7");

    pulsantefine = PP.assets.image.add(s, img_fine, 9500, 2870, 0.5, 0.5);
    
    pulsantefine.visible = false; // invisibile di default

    pulsantesfida = PP.assets.image.add(s, img_sfida, 2250, 250, 0.5, 0.5);
    PP.layers.add_to_layer(layer_hud, pulsantesfida);
    pulsantesfida.visible = false; // invisibile di default
    
}

function update_hud_consapevolezza(s) {
    let curr_score = PP.game_state.get_variable("consapevolezza");
    // evita replay inutile dell’animazione
    if (curr_score === consapevolezza_prima) return;
    consapevolezza_prima = curr_score;
    // sicurezza extra
    if (curr_score < 0) curr_score = 0;
    if (curr_score > 20) curr_score = 20;
    PP.assets.sprite.animation_play(barra, "consapevolezza: " + curr_score); // play animazione
}

function update_hud_cuori(s) {
    let vite = PP.game_state.get_variable("cuori");
    PP.assets.sprite.animation_play(cuori, "cuori: " + vite);
    if (vite <= 0) {
        morte(s);
    }
}

function update_hud_budini(s) {
    let curr_budini = PP.game_state.get_variable("budini");
    PP.assets.sprite.animation_play(budini, "budini: " + curr_budini);
}

function update_pulsantefine(s) {
    if(player.geometry.x >= 9350 && player.geometry.x <= 9650) {
        pulsantefine.visible = true;
        PP.layers.add_to_layer(layer_hud, pulsantefine);
    } else {
        pulsantefine.visible = false;
    }
}
function update_pulsantesfida(s) {
    if(player.geometry.x >= 1958 && player.geometry.x <= 2258 && player.geometry.y === 353.5) {
        pulsantesfida.visible = true;
    } else {
        pulsantesfida.visible = false;
    }
}

function update_hud(s) {
    update_hud_consapevolezza(s);
    update_hud_cuori(s);
    update_hud_budini(s);
    update_pulsantefine(s);
    update_pulsantesfida(s);
}

function destroy_hud(s) {

}
