let img_map;
let map;

function preload(s) {
    //assets grafici
    img_map = PP.assets.image.load(s, "assets/images/map.png");
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 223, 190);
    img_platform1 = PP.assets.image.load(s, "assets/images/greenplatform2.png")

    //elementi js
    preload_player(s);
    preload_platform(s);
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

    PP.camera.start_follow(s, player, 0, 200); //camera segue il player
}

function update(s) {
    update_player(s);
    update_platform(s, player);
}

function destroy(s) {
    console.log("Executing destroy() - SCENE");
}

PP.scenes.add("scene", preload, create, update, destroy);