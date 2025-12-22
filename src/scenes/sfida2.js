let img_sfida2;
let sfondo;

function preload(s) {
    //assets grafici
    img_sfida2 = PP.assets.image.load(s, "assets/images/sfida2.png");

    //elementi js
    preload_player(s);
    preload_budino(s);
}

function create(s) {
    create_player(s);
    sfondo = PP.assets.image.add(s, img_sfida2, 0, 0, 0, 0);

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

PP.scenes.add("sfida2", preload, create, update, destroy);
