let img_map;
let map;
let img_platform1;
let platform1;

let floor;

function preload(s) {
    //assets grafici
    img_map = PP.assets.image.load(s, "assets/images/map.png")
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 223, 190)
    img_platform1 = PP.assets.image.load(s, "assets/images/greenplatform2.png")

    //elementi js
    preload_player(s);
    //preload_platform(s);
}

function create(s) {
    create_player(s);
    map = PP.assets.image.add(s, img_map, 0, 0, 0, 0);
    platform1 = PP.assets.image.add(s, img_platform1, 2500, 3000, 0, 0);
    platform1 = PP.shapes.rectangle_add(s, 2620, 3030, 230, 1, "0x000000", 0); 
    PP.physics.add(s, platform1, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform1); 

    floor = PP.shapes.rectangle_add(s, 3236, 3198, 2251, 1, "0x000000", 0); // Creiamo un pavimento "trasparente"
    PP.physics.add(s, floor, PP.physics.type.STATIC); // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add_collider(s, player, floor); // Creiamo un collider tra pavimento e giocatore

     // codice per creare un layer sopra tutti per il player
    let layer_player = PP.layers.create(s);
    PP.layers.add_to_layer(layer_player, player);
    PP.layers.set_z_index(layer_player, 10);

    //create_platform(s, player);

    PP.camera.start_follow(s, player, 0, 200); //camera segue il player
}

function update(s) {
    update_player(s);
    //update_platform(s, player);
}

function destroy(s) {
    console.log("Executing destroy() - SCENE");
}

PP.scenes.add("scene", preload, create, update, destroy);