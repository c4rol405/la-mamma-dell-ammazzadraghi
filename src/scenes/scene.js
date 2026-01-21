let img_map;
let map;

function preload(s) {
    //assets grafici
    img_map = PP.assets.image.load(s, "assets/images/mappacorretta.png");

    //elementi js
    preload_player(s);
    preload_platform(s);
    preload_budino(s);
    preload_meg(s);
    preload_dialogo (s);
    preload_enemy(s);
    preload_vetro(s);
    preload_hud (s);
}

function create(s) {
    create_player(s);
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
    create_hud (s);

    s.cameras.main.setBounds(0, 0, 9686, 6142); //camera si ferma esattamente ai limiti della foto
    PP.camera.start_follow(s, player, 0, 230); //camera segue il player
}


function update(s) {
    /*if(player.geometry.x < 2680 && player.geometry.x > 662) {
        PP.camera.set_follow_offset(s, player.geometry.x-2680, 225);
    } */

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.P)) { 
    console.log("Player position:", player.geometry.x, player.geometry.y);
    } //per capire dove posizionare cose

    update_player(s);
    update_hud_consapevolezza(s);
    update_hud_cuori(s);

    update_platform(s, player);
    update_budino(s, player);
    update_meg (s);
    update_dialogo(s);
    update_enemy(s);
    
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.L)) {
        PP.scenes.start("sfida1");
    }

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.ENTER)) {
        let consapevolezza = PP.game_state.get_variable("consapevolezza");
        if (consapevolezza < 20) {
            PP.scenes.start("finalesbagliato");
        } 
        else if (consapevolezza === 20) {
            PP.scenes.start("finalecorretto");
        }
    }



}

function destroy(s) {
}

PP.scenes.add("scene", preload, create, update, destroy);
