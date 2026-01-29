let img_map;
let map;
let img_porta;
let porta;

function preload(s) {
    //assets grafici
    img_map = PP.assets.image.load(s, "assets/images/mappaf.png");
    img_porta = PP.assets.image.load(s, "assets/images/porta.png");

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
    morto = false;
    is_dead = false;

    move_disable = false;
    jump_disable = false;
    player_immunity = false;
    
    map = PP.assets.image.add(s, img_map, 0, 0, 0, 0);
    porta = PP.assets.image.add(s, img_porta, 9474, 2786, 0, 0);

    // codice per creare un layer sopra tutti per il player
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 10);
    let layer_porta = PP.layers.create(s);
    PP.layers.add_to_layer(layer_porta, porta);
    PP.layers.set_z_index(layer_porta, 50);

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
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.H)) {
        let consapevolezza_val = PP.game_state.get_variable("consapevolezza");
        let budini_val = PP.game_state.get_variable("budini");
        console.log("CHECK HUD: consapevolezza =", consapevolezza_val, ", budini =", budini_val);
    }

    update_player(s);
    update_hud(s);
    //update_hud_consapevolezza(s);
    //update_hud_cuori(s);
    //update_hud_budini(s);

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
