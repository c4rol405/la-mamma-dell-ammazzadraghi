let img_menu
let menu
let img_tutorial
let tutorial

let img_barra;
let barra;
PP.game_state.set_variable ("consapevolezza", 0);
let consapevolezza_prima = -1;

let img_cuori;
let cuori;
PP.game_state.set_variable ("cuori", 3);

let img_budini;
let budini;

function preload_hud(s) {
    img_menu = PP.assets.image.load(s, "assets/icone/homenuovo.png");
    img_tutorial = PP.assets.image.load(s, "assets/icone/iconaagain.png");

    img_barra = PP.assets.sprite.load_spritesheet(s, "assets/icone/bar3.png", 268, 48);
    img_cuori = PP.assets.sprite.load_spritesheet(s, "assets/icone/cuoricini.png", 170, 50);
    img_budini = PP.assets.sprite.load_spritesheet(s, "assets/icone/budi.png", 180, 80);
}

function create_hud(s) {
    menu = PP.assets.image.add(s, img_menu, 24, 24, 0, 0);
    menu.geometry.scale_x = 0.3;
    menu.geometry.scale_y = 0.3;
    PP.interactive.mouse.add(menu, "pointerdown", () => PP.scenes.start("home"));

    tutorial = PP.assets.image.add(s, img_tutorial, 94, 24, 0, 0);
    tutorial.geometry.scale_x = 0.10;
    tutorial.geometry.scale_y = 0.10;


    //HUD fisso alla camera
    menu.tile_geometry.scroll_factor_x = 0;
    menu.tile_geometry.scroll_factor_y = 0;
    tutorial.tile_geometry.scroll_factor_x = 0;
    tutorial.tile_geometry.scroll_factor_y = 0;


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
    PP.assets.sprite.animation_play(barra, "consapevolezza: 0");

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

    //budini5 = PP.assets.image.add(s, img_budini5, 1000, 3, 0, 0);
    //budini5.geometry.scale_x = 0.7;
    //budini5.geometry.scale_y = 0.7;

    //budini5.tile_geometry.scroll_factor_x = 0;
    //budini5.tile_geometry.scroll_factor_y = 0;

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
        death_cause = "fantasma";
        morte(s);
    }

    /* altra versione
    if (vite_rimanenti < 0) return; // sicurezza
    // diminuisci vite
    vite_rimanenti--;
    let prev_score = PP.game_state.get_variable("cuori");
    PP.game_state.set_variable("cuori", prev_score - 1);

    // aggiorna HUD cuori
    if (cuori && cuori[vite_rimanenti]) {
        PP.assets.destroy(cuori[vite_rimanenti]);
    }

    // chiama danno se non è l'ultima vita
    if (PP.game_state.get_variable("cuori") > 0) {
        danno(s);
    } else {
        // ultima vita persa
        death_cause = "fantasma"; // o "fantasma" se vuoi
        morte(s);
        console.log("Vite rimanenti:", PP.game_state.get_variable("Vite"));
    } */

    /*let vite = PP.game_state.get_variable("cuori");
    // evita replay inutile
    if (vite === vite_precedenti) return;
    vite_precedenti = vite;
    // clamp di sicurezza
    if (vite < 0) vite = 0;
    if (vite > 3) vite = 3;
    PP.assets.sprite.animation_play(cuori, "cuori: " + vite);
    // GAME OVER
    if (vite === 0) {
        PP.scenes.load(s, "gameover2");
    } */
}


function destroy_hud(s) {

}
