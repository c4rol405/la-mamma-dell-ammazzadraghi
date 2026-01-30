let img_sfida1;
let sfondo;
let muro1, muro2, muro3, muro4, muro5;
let img_pergamena, pergamena;
let img_pergsfida, pergaperta = false, pergsfida;
let layer_perg;
let img_portale, portale;

function preload(s) {
    //assets grafici
    img_sfida1 = PP.assets.image.load(s, "assets/images/sfida.png");
    
    img_pergamena = PP.assets.image.load(s, "assets/meg/pergamena.png");
    img_pergsfida = PP.assets.image.load(s, "assets/meg/pergsfida.png");

    img_portale = PP.assets.image.load(s, "assets/meg/portale.png");

    //elementi js
    preload_player(s);
    preload_platsfida(s);
    preload_budino(s);
    preload_drago(s);
    preload_hud(s);
}

function collision_muro(s, player, muro) {
    player.is_on_floor = true;
}

function create(s) {
    create_player(s);
    player.geometry.scale_x = 0.7;
    player.geometry.scale_y = 0.7;
    player.speed = player_speed * 0.7;
    player.jump  = player_jump * 0.7;
    configure_player_animations(s);

    muro1 = PP.shapes.rectangle_add(s, 1800, 2960, 2000, 1, "0x000000", 0)
    PP.physics.add(s, muro1, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muro1, collision_muro);
    muro2 = PP.shapes.rectangle_add(s, 1700, 3610, 2000, 1, "0x000000", 0)
    PP.physics.add(s, muro2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muro2, collision_muro);
    muro3 = PP.shapes.rectangle_add(s, 1456, 3300, 1, 800, "0x000000", 0)
    PP.physics.add(s, muro3, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muro3, collision_muro);
    muro4 = PP.shapes.rectangle_add(s, 2670, 3300, 1, 800, "0x000000", 0)
    PP.physics.add(s, muro4, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muro4, collision_muro);
    muro5 = PP.shapes.rectangle_add(s, 2560, 3170, 400, 1, "0x000000", 0)
    PP.physics.add(s, muro5, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muro5, collision_muro);
    sfondo = PP.assets.image.add(s, img_sfida1, 1420, 2926, 0, 0);

    layer_perg = PP.layers.create(s);
    PP.layers.set_z_index(layer_perg, 70);
    pergamena = PP.assets.image.add(s, img_pergamena, 1470, 3510, 0, 0);
    PP.physics.add(s, pergamena, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, pergamena, (s, player, pergamena) => {
        if (!pergaperta) {
            pergsfida = PP.assets.image.add(s, img_pergsfida, 640, 360, 0.5, 0.5);
            pergsfida.tile_geometry.scroll_factor_x = 0;
            pergsfida.tile_geometry.scroll_factor_y = 0;
            pergaperta = true;
            PP.layers.add_to_layer(layer_perg, pergsfida);

            // opzionale: sparisce la pergamena originale
            PP.assets.destroy(pergamena);

            portale = PP.assets.image.add(s, img_portale, 2400, 2870, 0, 0);
            PP.physics.add(s, portale, PP.physics.type.STATIC);
            PP.physics.add_collider_f(s, player, portale, (s, player, portale) => {
                PP.scenes.start("scene");
            });
            PP.physics.set_collision_rectangle(portale, 150, 200, 100, 100);
        }
    });

    create_platsfida(s, player);
    create_drago(s);
    create_hud(s);
    create_budino(s);

    // codice per creare un layer sopra tutti per il player
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 10);
    
    s.cameras.main.setBounds(1420, 2926, 1280, 720); //camera si ferma esattamente ai limiti della foto
    
    //forse rallenterei player??
}


function update(s) {
    update_player(s);
    update_budino(s, player);
    update_drago(s);
    update_hud(s);

    if (pergaperta && pergsfida && PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        PP.assets.destroy(pergsfida);
        pergsfida = null;     // evita doppi destroy
        pergaperta = false;
    }
}

function destroy(s) {
    player_speed = player._speed_original;
    player_jump  = player._jump_original;
}

PP.scenes.add("sfida1", preload, create, update, destroy);
