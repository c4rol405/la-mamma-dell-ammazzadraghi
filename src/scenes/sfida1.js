let img_sfida1;
let sfondo;
let floor;

function preload(s) {
    //assets grafici
    img_sfida1 = PP.assets.image.load(s, "assets/images/sfida1.png");

    //elementi js
    preload_player(s);
    preload_budino(s);
}

function create(s) {
    create_player(s);
    sfondo = PP.assets.image.add(s, img_sfida1, 2210, 2530, 0, 0);
    sfondo.geometry.scale_x = 0.6;
    sfondo.geometry.scale_y = 0.6;

    floor = PP.shapes.rectangle_add(s, 2600, 3200, 5000, 1, "0x000000", 0)
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor);

    // codice per creare un layer sopra tutti per il player
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 10);

    configure_player_animations(s);

}


function update(s) {
    update_player(s);
    update_budino(s, player);
}

function destroy(s) {
}

PP.scenes.add("sfida1", preload, create, update, destroy);
