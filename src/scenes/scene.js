let img_map;
let map;

let txt_score;
let txt_vetri;


function preload(s) {
    //assets grafici
    img_map = PP.assets.image.load(s, "assets/images/mappa.png");

    //elementi js
    preload_player(s);
    preload_vite(s);
    preload_platform(s);
    preload_budino(s);
    preload_meg(s);
    preload_dialogo (s);
    preload_enemy(s);
    preload_vetro(s);
    //preload_hud (s);
}

function create(s) {
    create_player(s);
    create_vite(s);
    map = PP.assets.image.add(s, img_map, 0, 0, 0, 0);

    // codice per creare un layer sopra tutti per il player
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 10);

    create_floor(s, player);
    create_platform(s, player);
    create_lava(s, player);
    create_meg(s);
    create_dialogo(s);
    create_enemy(s, player);
    configure_player_animations(s);
    create_vetro(s, player);
    create_casa(s, player);
    //create_hud (s);

    // Creo una variabile per lo "score" della scena
    /*PP.gameState.set_variable("score", 0);
    txt_score = PP.shapes.text_styled_add(s, 10, 10, "Score: 0", 30, "Helvetica", "normal", "0xFFFFFF", null, 0, 0);
    txt_vetri = PP.shape.text_add(s, 50, 50, "Vetri: " + PP.game_state.get_variable("vetri")); 
    // Impostiamo il testo in alto a sx in modo che non si muova
    // con la camera (essendo HUD deve rimanere fisso)
    txt_score.tile_geometry.scroll_factor_x = 0;
    txt_score.tile_geometry.scroll_factor_y = 0; */


    PP.camera.start_follow(s, player, 0, 230); //camera segue il player
}


function update(s) {
    /*
    //camera fissa all'inizio 
    if(player.geometry.x < 2680) {
        PP.camera.set_follow_offset(s, player.geometry.x-2680, 225);
    }
    */

    update_player(s);
    update_vite(s);
    update_platform(s, player);
    update_budino(s, player);
    update_meg (s);
    update_dialogo(s);
    update_enemy(s);
    
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.UP)) {
        PP.scenes.start("sfida1")
    }
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.DOWN)) {
        PP.scenes.start("sfida2")
    }

    // Aggiorno il punteggio visualizzato:
    /*PP.shapes.text_change(txt_score, "Score: " + PP.gameState.get_variable("score"));
    PP.shapes.text_change(txt_mushrooms, "Vetri: " + PP.gameState.get_variable("vetri")); */


    /*
    // Ottieni la posizione della camera
    let cam_x = PP.camera.get_scroll_x(s);
    let cam_y = PP.camera.get_scroll_y(s);
    */
}

function destroy(s) {
}

PP.scenes.add("scene", preload, create, update, destroy);
