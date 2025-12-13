let img_map;
let map;

function preload(s) {
    //assets grafici
    img_map = PP.assets.image.load(s, "assets/images/map.png");

    //elementi js
    preload_player(s);
    preload_platform(s);
    preload_budino(s);
    preload_meg(s);
    preload_dialogo (s);
    preload_enemy(s);
    preload_vetro(s);
}

function create(s) {
    create_player(s);
    map = PP.assets.image.add(s, img_map, 0, 0, 0, 0);

    // codice per creare un layer sopra tutti per il player
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 10);

    create_floor(s, player)
    create_platform(s, player);
    create_meg(s);
    create_dialogo(s);
    create_enemy(s, player);
    configure_player_animations(s);
    create_vetro(s, player)

    PP.camera.start_follow(s, player, 0, 200); //camera segue il player
}


function update(s) {
    /*
    //camera fissa all'inizio 
    if(player.geometry.x < 2680) {
        PP.camera.set_follow_offset(s, player.geometry.x-2680, 225);
    }
    */

    update_player(s);
    update_platform(s, player);
    update_budino(s, player);
    update_meg (s);
    update_dialogo(s);
    update_enemy(s);
    
    /*
    // Ottieni la posizione della camera
    let cam_x = PP.camera.get_scroll_x(s);
    let cam_y = PP.camera.get_scroll_y(s);
    */
}

function destroy(s) {
}

PP.scenes.add("scene", preload, create, update, destroy);
