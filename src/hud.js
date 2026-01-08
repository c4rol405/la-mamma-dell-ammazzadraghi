let img_menu
let menu
let img_tutorial
let tutorial
//let img_vite5
//let vite5
let img_budini5
let budini5
let img_barra0
let barra0
let img_counter_vite;
let counter_vite;
let health;

let img_barra;
let barra;
let barra_consapevolezza;
PP.game_state.set_variable ("consapevolezza", 0);
let consapevolezza_prima = -1;

function preload_hud(s) {
    img_menu = PP.assets.image.load(s, "assets/icone/home_icona.png");
    img_tutorial = PP.assets.image.load(s, "assets/icone/tutorial_icona.png");
    //img_vite5 = PP.assets.image.load(s, "assets/icone/altro/5vite.png");
    img_budini5 = PP.assets.image.load(s, "assets/icone/altro/5budini.png");
    img_barra0 = PP.assets.image.load(s, "assets/icone/altro/barra0.png");
    img_counter_vite = PP.assets.sprite.load_spritesheet(s, "assets/icone/spritevite.png", 437, 124);


    img_barra = PP.assets.sprite.load_spritesheet(s, "assets/icone/bar2.png", 670, 120);
}

function create_hud(s) {
    menu = PP.assets.image.add(s, img_menu, 10, 10, 0, 0);
    menu.geometry.scale_x = 0.8;
    menu.geometry.scale_y = 0.8;

    tutorial = PP.assets.image.add(s, img_tutorial, 70, 9, 0, 0);
    tutorial.geometry.scale_x = 0.8;
    tutorial.geometry.scale_y = 0.8;

    /*vite5 = PP.assets.image.add(s, img_vite5, 420, 5, 0, 0);
    vite5.geometry.scale_x = 0.7;
    vite5.geometry.scale_y = 0.7;*/

    budini5 = PP.assets.image.add(s, img_budini5, 1000, 3, 0, 0);
    budini5.geometry.scale_x = 0.7;
    budini5.geometry.scale_y = 0.7;

    barra0 = PP.assets.image.add(s, img_barra0, 720, 8, 0, 0);
    barra0.geometry.scale_x = 0.7;
    barra0.geometry.scale_y = 0.7;

    //HUD fisso alla camera
    menu.tile_geometry.scroll_factor_x = 0;
    menu.tile_geometry.scroll_factor_y = 0;
    tutorial.tile_geometry.scroll_factor_x = 0;
    tutorial.tile_geometry.scroll_factor_y = 0;
    /*vite5.tile_geometry.scroll_factor_x = 0;
    vite5.tile_geometry.scroll_factor_y = 0;*/
    budini5.tile_geometry.scroll_factor_x = 0;
    budini5.tile_geometry.scroll_factor_y = 0;
    //barra0.tile_geometry.scroll_factor_x = 0;
    //barra0.tile_geometry.scroll_factor_y = 0;

    //budini = PP.assets.sprite.add(s, img_budini, 20, 20, 0, 1);

    // HUD fisso
    //budini.tile_geometry.scroll_factor_x = 0;
    //budini.tile_geometry.scroll_factor_y = 0;

    // animazioni: 1 frame ciascuna
    //PP.assets.sprite.animation_add(budini, "budini_5", 0, 0, 1, 0);
    //PP.assets.sprite.animation_add(budini, "budini_4", 1, 1, 1, 0);
    //PP.assets.sprite.animation_add(budini, "budini_3", 2, 2, 1, 0);
    //PP.assets.sprite.animation_add(budini, "budini_2", 3, 3, 1, 0);
    //PP.assets.sprite.animation_add(budini, "budini_1", 4, 4, 1, 0);
    //PP.assets.sprite.animation_add(budini, "budini_0", 5, 5, 1, 0);

    // stato iniziale
    //PP.assets.sprite.animation_play(budini, "budini_5");

    // Variabili x HUD
    health = 5;

    // Creazione counter vite
    counter_vite = PP.assets.sprite.add(s, img_counter_vite, 420, 5, 0, 0);
    counter_vite.geometry.scale_x = 0.7;
    counter_vite.geometry.scale_y = 0.7;
    counter_vite.tile_geometry.scroll_factor_x = 0;
    counter_vite.tile_geometry.scroll_factor_y = 0;
    PP.assets.sprite.animation_add(counter_vite, "vite: 5", 0, 1, 1, -1);
    PP.assets.sprite.animation_add(counter_vite, "vite: 4", 2, 3, 1, -1);
    PP.assets.sprite.animation_add(counter_vite, "vite: 3", 4, 5, 1, -1);
    PP.assets.sprite.animation_add(counter_vite, "vite: 2", 6, 7, 1, -1);
    PP.assets.sprite.animation_add(counter_vite, "vite: 1", 8, 9, 1, -1);
    PP.assets.sprite.animation_add(counter_vite, "vite: 0", 10, 11, 1, -1);
    PP.assets.sprite.animation_play(counter_vite, "vite: 5");




    barra = PP.assets.sprite.add(s, img_barra, 710, 24, 0, 0);
    barra.geometry.scale_x = 0.4;
    barra.geometry.scale_y = 0.4;
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

    PP.assets.sprite.animation_play(barra, "consapevolezza: 0");
}

function update_hud(s, player) {
    // Gestione cuori
    if (health == 5) {
        PP.assets.sprite.animation_stop(counter_vite, "vite: 0");
        PP.assets.sprite.animation_play(counter_vite, "vite: 5");   
    }
    if (health == 4) {
        PP.assets.sprite.animation_stop(counter_vite, "vite: 5");
        PP.assets.sprite.animation_play(counter_vite, "vite: 4");   
    }
    if (health == 3) {
        PP.assets.sprite.animation_stop(counter_vite, "vite: 4");
        PP.assets.sprite.animation_play(counter_vite, "vite: 3");   
    }
    if (health == 2) {
        PP.assets.sprite.animation_stop(counter_vite, "vite: 3");
        PP.assets.sprite.animation_play(counter_vite, "vite: 2");
    }
    if (health == 1) {
        PP.assets.sprite.animation_stop(counter_vite, "vite: 2");
        PP.assets.sprite.animation_play(counter_vite, "vite: 1");
    }
    if (health == 0) {
        PP.assets.sprite.animation_stop(counter_vite, "vite: 1");
        PP.assets.sprite.animation_play(counter_vite, "vite: 0");
    }
}

function update_hud_consapevolezza(s) {
    let curr_score = PP.game_state.get_variable("consapevolezza");
    // evita replay inutile dell’animazione
    if (curr_score === consapevolezza_prima) return;
    consapevolezza_prima = curr_score;
    // sicurezza extra
    if (curr_score < 0) curr_score = 0;
    if (curr_score > 20) curr_score = 20;
    let anim_name = "consapevolezza: " + curr_score; // nome animazione
    PP.assets.sprite.animation_play(barra, anim_name); // play animazione
}

function destroy_hud(s) {

}
