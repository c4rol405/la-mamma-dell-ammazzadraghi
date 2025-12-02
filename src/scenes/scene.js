let img_map;
let map;

let img_platform1;
let platform1;

let platform2
let platform3
let platform4
let platform5
let platform6
let platform7
let platform8
let platform9
let platform10
let platform11
let platform12
let platform13
let platform14
let floor11
let floor10
let floor9
let floor8
let floor7
let floor6
let floor5
let floor4
let floor3
let floor2;
let floor;


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

    //platform
    platform1 = PP.assets.image.add(s, img_platform1, 2500, 3000, 0, 0);
    
    platform1 = PP.shapes.rectangle_add(s, 2620, 3030, 230, 1, "0x000000", 0); 
    PP.physics.add(s, platform1, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform1); 
    
    platform2 = PP.shapes.rectangle_add(s, 5300, 3330, 230, 1, "0x000000", 0); 
    PP.physics.add(s, platform2, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform2); 
   
    platform3 = PP.shapes.rectangle_add(s, 5800, 3330, 230, 1, "0x000000", 0); 
    PP.physics.add(s, platform3, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform3); 
    
    platform4 = PP.shapes.rectangle_add(s, 8500, 3000, 400, 1, "0x000000", 0); 
    PP.physics.add(s, platform4, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform4);
   
    platform5 = PP.shapes.rectangle_add(s, 8500, 2750, 400, 1, "0x000000", 0); 
    PP.physics.add(s, platform5, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform5);
    
    platform6 = PP.shapes.rectangle_add(s, 8100, 2550, 800, 1, "0x000000", 0); 
    PP.physics.add(s, platform6, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform6);

    platform7 = PP.shapes.rectangle_add(s, 7400, 2500, 800, 1, "0x000000", 0); 
    PP.physics.add(s, platform7, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform7);

    platform8 = PP.shapes.rectangle_add(s, 6500, 2350, 250, 1, "0x000000", 0); 
    PP.physics.add(s, platform8, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform8);

    platform9 = PP.shapes.rectangle_add(s, 6500, 2100, 250, 1, "0x000000", 0); 
    PP.physics.add(s, platform9, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform9);

    platform10 = PP.shapes.rectangle_add(s, 6500, 1900, 250, 1, "0x000000", 0); 
    PP.physics.add(s, platform10, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform10);

    platform11 = PP.shapes.rectangle_add(s, 6500, 1700, 250, 1, "0x000000", 0); 
    PP.physics.add(s, platform11, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform11);

    platform12 = PP.shapes.rectangle_add(s, 6500, 1450, 250, 1, "0x000000", 0); 
    PP.physics.add(s, platform12, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform12);

    platform13 = PP.shapes.rectangle_add(s, 6500, 1200, 250, 1, "0x000000", 0); 
    PP.physics.add(s, platform13, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform13);

    platform14 = PP.shapes.rectangle_add(s, 3500, 5400, 230, 1, "0x000000", 0); 
    PP.physics.add(s, platform14, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, platform14); 

    //mura/pavimenti
    floor = PP.shapes.rectangle_add(s, 3236, 3450, 2251, 500, "0x000000", 0); // Creiamo un pavimento "trasparente"
    PP.physics.add(s, floor, PP.physics.type.STATIC); // Aggiungiamo il pavimento alla fisica come entità statica
    PP.physics.add_collider(s, player, floor); // Creiamo un collider tra pavimento e giocatore

    floor2 = PP.shapes.rectangle_add(s, 4300, 4270, 1450, 1500, "0x000000", 0); 
    PP.physics.add(s, floor2, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor2); 

    floor3 = PP.shapes.rectangle_add(s, 6250, 5855, 1150, 2000, "0x000000", 0); 
    PP.physics.add(s, floor3, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor3); 

    floor4 = PP.shapes.rectangle_add(s, 3700, 6580, 4480, 2000, "0x000000", 0); 
    PP.physics.add(s, floor4, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor4); 

    floor5 = PP.shapes.rectangle_add(s, 2770, 5855, 310, 1855, "0x000000", 0); 
    PP.physics.add(s, floor5, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor5);
    
    floor6 = PP.shapes.rectangle_add(s, 6670, 3910, 2000, 800, "0x000000", 0); 
    PP.physics.add(s, floor6, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor6); 

    floor7 = PP.shapes.rectangle_add(s, 7780, 3600, 3000, 800, "0x000000", 0); 
    PP.physics.add(s, floor7, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor7); 

    floor8 = PP.shapes.rectangle_add(s, 9115, 2800, 200, 2000, "0x000000", 0); 
    PP.physics.add(s, floor8, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor8); 
    
    floor9 = PP.shapes.rectangle_add(s, 8630, 1320, 3000, 1355, "0x000000", 0); 
    PP.physics.add(s, floor9, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor9); 

    floor10 = PP.shapes.rectangle_add(s, 800, 6265, 1500, 400, "0x000000", 0); 
    PP.physics.add(s, floor10, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor10);

    floor11 = PP.shapes.rectangle_add(s, -30, 5400, 200, 3000, "0x000000", 0); 
    PP.physics.add(s, floor11, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, floor11);

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