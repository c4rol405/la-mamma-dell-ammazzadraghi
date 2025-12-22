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


function preload_hud(s) {
    img_menu = PP.assets.image.load(s, "assets/icone/home_icona.png");
    img_tutorial = PP.assets.image.load(s, "assets/icone/tutorial_icona.png");
    //img_vite5 = PP.assets.image.load(s, "assets/icone/altro/5vite.png");
    img_budini5 = PP.assets.image.load(s, "assets/icone/altro/5budini.png");
    img_barra0 = PP.assets.image.load(s, "assets/icone/altro/barra0.png");

    img_counter_vite = PP.assets.sprite.load_spritesheet(s, "assets/icone/spritevite.png", 437, 124);
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
    barra0.tile_geometry.scroll_factor_x = 0;
    barra0.tile_geometry.scroll_factor_y = 0;

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

function destroy_hud(s) {

}
