let img_map;
let map;

let img_budino;
let budino;

let img_barra0;
let barra0;
let img_barra1;
let barra1;
let img_barra2;
let barra2;
let img_barra3;
let barra3;
let img_barra4;
let barra4;
let img_barra5;
let barra5;

let img_budini0;
let budini0;
let img_budino1;
let budino1;
let img_budini2;
let budini2;
let img_budini3;
let budini3;
let img_budini4;
let budini4;
let img_budini5;
let budini5;

let img_vite0;
let vite0;
let img_vita1;
let vita1;
let img_vite2;
let vite2;
let img_vite3;
let vite3;
let img_vite4;
let vite4;
let img_vite5;
let vite5;

let img_iconahome;
let iconahome;
let img_iconatutorial;
let iconatutorial;



function preload(s) {
    //assets grafici
    img_map = PP.assets.image.load(s, "assets/images/map.png");
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/spritesheet_player.png", 223, 190);
    img_platform1 = PP.assets.image.load(s, "assets/images/greenplatform2.png");
    img_budino = PP.assets.image.load(s, "assets/images/budino.png");

    img_barra0 = PP.assets.image.load(s, "assets/images/barra0.png");
    img_barra1 = PP.assets.image.load(s, "assets/images/barra1.png");
    img_barra2 = PP.assets.image.load(s, "assets/images/barra2.png");
    img_barra3 = PP.assets.image.load(s, "assets/images/barra3.png");
    img_barra4 = PP.assets.image.load(s, "assets/images/barra4.png");
    img_barra5 = PP.assets.image.load(s, "assets/images/barra5.png");

    img_budini0 = PP.assets.image.load(s, "assets/images/0budini.png");
    img_budino1 = PP.assets.image.load(s, "assets/images/1budino.png");
    img_budini2 = PP.assets.image.load(s, "assets/images/2budini.png");
    img_budini3 = PP.assets.image.load(s, "assets/images/3budini.png");
    img_budini4 = PP.assets.image.load(s, "assets/images/4budini.png");
    img_budini5 = PP.assets.image.load(s, "assets/images/5budini.png");

    img_vite0 = PP.assets.image.load(s, "assets/images/0vite.png");
    img_vita1 = PP.assets.image.load(s, "assets/images/1vita.png");
    img_vite2 = PP.assets.image.load(s, "assets/images/2vite.png");
    img_vite3 = PP.assets.image.load(s, "assets/images/3vite.png");
    img_vite4 = PP.assets.image.load(s, "assets/images/4vite.png");
    img_vite5 = PP.assets.image.load(s, "assets/images/5vite.png");

    img_iconahome = PP.assets.image.load(s, "assets/images/home_icona.png");
    img_iconatutorial = PP.assets.image.load(s, "assets/images/tutorial_icona.png");

    //elementi js
    preload_player(s);
    preload_platform(s);
    preload_budino(s);
}

function create(s) {
    create_player(s);
    map = PP.assets.image.add(s, img_map, 0, 0, 0, 0);

    let layer_interfaccia = PP.layers.create(s);

    iconahome = PP.assets.image.add(s, img_iconahome, 10, 10, 0, 0);
    iconatutorial = PP.assets.image.add(s, img_iconatutorial, 65, 9, 0, 0);
    barra0 = PP.assets.image.add(s, img_barra0, 120, 1, 0, 0);
    vite5 = PP.assets.image.add(s, img_vite5, 1050, 2, 0, 0);
    budini5 = PP.assets.image.add(s, img_budini5, 1045, 730, 0, 0);
    iconahome.geometry.scale_x = 0.7;
    iconahome.geometry.scale_y = 0.7;
    iconatutorial.geometry.scale_x = 0.7;
    iconatutorial.geometry.scale_y = 0.7;
    barra0.geometry.scale_x = 0.7;
    barra0.geometry.scale_y = 0.7;
    vite5.geometry.scale_x = 0.6;
    vite5.geometry.scale_y = 0.6;
    budini5.geometry.scale_x = 0.6;
    budini5.geometry.scale_y = 0.6;


    PP.layers.add_to_layer(layer_interfaccia, iconahome);
    PP.layers.add_to_layer(layer_interfaccia, iconatutorial);
    PP.layers.add_to_layer(layer_interfaccia, barra0);
    PP.layers.add_to_layer(layer_interfaccia, vite5);
    PP.layers.add_to_layer(layer_interfaccia, budini5);

    PP.layers.set_z_index(layer_interfaccia, 100);

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
    update_budino(s, player);
    
    // Ottieni la posizione della camera
    let cam_x = PP.camera.get_scroll_x(s);
    let cam_y = PP.camera.get_scroll_y(s);
    
    // Aggiorna le posizioni degli elementi UI per seguire la camera
    iconahome.geometry.x = cam_x + 5;
    iconahome.geometry.y = cam_y + 4;
    
    iconatutorial.geometry.x = cam_x + 60;
    iconatutorial.geometry.y = cam_y + 2;
    
    barra0.geometry.x = cam_x + 120;
    barra0.geometry.y = cam_y + -8;
    
    vite5.geometry.x = cam_x + 1045;
    vite5.geometry.y = cam_y + -5;
    
    budini5.geometry.x = cam_x + 1045; 
    budini5.geometry.y = cam_y + 710;

    

    //camera fissa all'inizio 
    if(player.geometry.x < 2680) {
        PP.camera.set_follow_offset(s, player.geometry.x-2680, 225);
    }
}

function destroy(s) {
    console.log("Executing destroy() - SCENE");
}

PP.scenes.add("scene", preload, create, update, destroy);
