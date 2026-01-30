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
PP.game_state.set_variable ("budini", 10);
let budini_prima = -1;

let img_fine;
let pulsantefine;
let img_sfida;
let pulsantesfida;

function preload_hud(s) {
    img_menu = PP.assets.image.load(s, "assets/icone/homenuovo.png");
    img_tutorial = PP.assets.image.load(s, "assets/icone/iconaagain.png");
    img_comandi = PP.assets.image.load(s, "assets/icone/comandi.png");

    img_barra = PP.assets.sprite.load_spritesheet(s, "assets/icone/bar3.png", 268, 48);
    img_cuori = PP.assets.sprite.load_spritesheet(s, "assets/icone/cuoricini.png", 170, 50);
    img_budini = PP.assets.sprite.load_spritesheet(s, "assets/icone/budi.png", 180, 80);

    img_fine = PP.assets.image.load(s, "assets/icone/fine.png");
    img_sfida = PP.assets.image.load(s, "assets/icone/sfida.png");
}

function create_hud(s) {
    layer_hud = PP.layers.create(s);        // creo layer dedicato all'HUD
    PP.layers.set_z_index(layer_hud, 60);   // sopra il mondo ma sotto tutorial

    menu = PP.assets.image.add(s, img_menu, 24, 24, 0, 0);
    menu.geometry.scale_x = 0.3;
    menu.geometry.scale_y = 0.3;
    PP.interactive.mouse.add(menu, "pointerdown", () => PP.scenes.start("home"));
    menu.tile_geometry.scroll_factor_x = 0;
    menu.tile_geometry.scroll_factor_y = 0;

    tutorial = PP.assets.image.add(s, img_tutorial, 94, 24, 0, 0);
    tutorial.geometry.scale_x = 0.10;
    tutorial.geometry.scale_y = 0.10;
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

    barra = PP.assets.sprite.add(s, img_barra, 710, 24, 0, 0);
    barra.tile_geometry.scroll_factor_x = 0;
    barra.tile_geometry.scroll_factor_y = 0;
    PP.assets.sprite.animation_add(barra, "consapevolezza: 0", 0, 1, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 1", 2, 3, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 2", 4, 5, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 3", 6, 7, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 4", 8, 9, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 5", 10, 11, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 6", 12, 13, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 7", 14, 15, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 8", 16, 17, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 9", 18, 19, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 10", 20, 21, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 11", 22, 23, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 12", 24, 25, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 13", 26, 27, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 14", 28, 29, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 15", 30, 31, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 16", 32, 33, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 17", 34, 35, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 18", 36, 37, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 19", 38, 39, 1, -1);
    PP.assets.sprite.animation_add(barra, "consapevolezza: 20", 40, 41, 1, -1);
    
    //PP.assets.sprite.animation_play(barra, "consapevolezza: 0");

    // Riprendi il valore corretto dalla variabile game_state
    let consapevolezza_corrente = PP.game_state.get_variable("consapevolezza");
    // Sicurezza: tra 0 e 20
    if(consapevolezza_corrente < 0) consapevolezza_corrente = 0;
    if(consapevolezza_corrente > 20) consapevolezza_corrente = 20;
    PP.assets.sprite.animation_play(barra, "consapevolezza: " + consapevolezza_corrente);


    cuori = PP.assets.sprite.add(s, img_cuori, 470, 22, 0, 0);
    cuori.tile_geometry.scroll_factor_x = 0;
    cuori.tile_geometry.scroll_factor_y = 0;
    PP.assets.sprite.animation_add(cuori, "cuori: 3", 0, 1, 1, -1);
    PP.assets.sprite.animation_add(cuori, "cuori: 2", 2, 3, 1, -1);
    PP.assets.sprite.animation_add(cuori, "cuori: 1", 4, 5, 1, -1);
    PP.assets.sprite.animation_add(cuori, "cuori: 0", 6, 7, 1, -1);
    PP.assets.sprite.animation_play(cuori, "cuori: 3");

    budini = PP.assets.sprite.add(s, img_budini, 1080, 10, 0, 0);
    budini.tile_geometry.scroll_factor_x = 0;
    budini.tile_geometry.scroll_factor_y = 0;
    PP.assets.sprite.animation_add(budini, "budini: 10", 0, 1, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 9", 2, 3, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 8", 4, 5, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 7", 6, 7, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 6", 8, 9, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 5", 10, 11, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 4", 12, 13, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 3", 14, 15, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 2", 16, 17, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 1", 18, 19, 1, -1);
    PP.assets.sprite.animation_add(budini, "budini: 0", 20, 21, 1, -1);
    PP.assets.sprite.animation_play(budini, "budini: 10");

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
