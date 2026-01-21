let img_sfida1;
let sfondo;
let muro1, muro2, muro3, muro4;
let img_drago;
let drago;
let img_platsfida;
let platsfida;

function preload(s) {
    //assets grafici
    img_sfida1 = PP.assets.image.load(s, "assets/images/sfida-03.png");
    img_drago = PP.assets.sprite.load_spritesheet(s, "assets/images/drago.png", 480, 400);

    img_platsfida = PP.assets.image.load(s, "assets/platform/grotta1.png");

    //elementi js
    preload_player(s);
    preload_budino(s);
}

function collision_muro(s, player, muro) {
    player.is_on_floor = true;
}

function collision_platsfida(s, player, platsfida) {
//Funzione di collisione con le piattaforme, devo verificare che il giocatore si trovi sopra e in quel caso aggiorno la variabile che abilita il salto
    if( player.geometry.x >= platsfida.geometry.x &&
        player.geometry.x <= platsfida.geometry.x + platsfida.geometry.display_width) {
            player.is_on_platform = true;
    }
}
function create(s) {
    create_player(s);
    configure_player_animations(s);
    muro1 = PP.shapes.rectangle_add(s, 2600, 2634, 2000, 1, "0x000000", 0)
    PP.physics.add(s, muro1, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muro1, collision_muro);
    muro2 = PP.shapes.rectangle_add(s, 2600, 3284, 2000, 1, "0x000000", 0)
    PP.physics.add(s, muro2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muro2, collision_muro);
    muro3 = PP.shapes.rectangle_add(s, 2224, 3000, 1, 800, "0x000000", 0)
    PP.physics.add(s, muro3, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muro3, collision_muro);
    muro4 = PP.shapes.rectangle_add(s, 3450, 3000, 1, 800, "0x000000", 0)
    PP.physics.add(s, muro4, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, muro4, collision_muro);
    
    sfondo = PP.assets.image.add(s, img_sfida1, 2195, 2602, 0, 0);
    
    platsfida = PP.assets.image.add(s, img_platsfida, 2500, 3154, 0, 0);
    PP.physics.add(s, platsfida, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida, 220, 50, 20, 12);

    drago = PP.assets.sprite.add(s, img_drago, 3050, 2950, 0, 0);
    PP.physics.add(s, drago, PP.physics.type.STATIC);
    PP.assets.sprite.animation_add(drago, "drago", 0, 12, 4, -1);
    PP.assets.sprite.animation_play(drago, "drago");

    // codice per creare un layer sopra tutti per il player
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 10);
    
    s.cameras.main.setBounds(2195, 2602, 1280, 720); //camera si ferma esattamente ai limiti della foto
    PP.camera.start_follow(s, player, 0, 230); //camera segue il player
    
    //forse rallenterei player??
}


function update(s) {
    update_player(s);
    update_budino(s, player);
}

function destroy(s) {
}

PP.scenes.add("sfida1", preload, create, update, destroy);
