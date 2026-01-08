let sfondo_home;
let crediti;
let storia;
let game;
let sfondo;
let pulsante_storia;
let pulsante_game;
let pulsante_crediti; 

function preload (s) {
    sfondo_home = PP.assets.image.load(s, "assets/situe/home.png");
    crediti = PP.assets.image.load(s, "assets/situe/pulsantecrediti.png");
    storia = PP.assets.image.load(s, "assets/situe/pulsantestoria.png");
    game = PP.assets.image.load(s, "assets/situe/pulsantegame.png");
}

function create (s){
    sfondo = PP.assets.image.add(s, sfondo_home, 0, 0, 0, 0);
    pulsante_crediti = PP.assets.image.add(s, crediti, 65, 400, 0, 0);
    pulsante_crediti.geometry.scale_x = 0.2;
    pulsante_crediti.geometry.scale_y = 0.2;
    pulsante_storia = PP.assets.image.add(s, storia, 65, 500, 0, 0);
    pulsante_storia.geometry.scale_x = 0.2;
    pulsante_storia.geometry.scale_y = 0.2;
    pulsante_game = PP.assets.image.add(s, game, 65, 600, 0, 0);
    pulsante_game.geometry.scale_x = 0.2;
    pulsante_game.geometry.scale_y = 0.2;
    PP.interactive.mouse.add(pulsante_storia, "pointerdown", goto_storia);
    PP.interactive.mouse.add(pulsante_crediti, "pointerdown", goto_crediti);
    PP.interactive.mouse.add(pulsante_game, "pointerdown", goto_game);
   
}

function update (s) {
    
}

function goto_storia (s){
    PP.scenes.start("storia");
}

function goto_crediti (s){
    PP.scenes.start("crediti");
}

function goto_game (s){
    PP.scenes.start("scene");
}

function destroy (s) {
    
}



PP.scenes.add("home", preload, create, update, destroy);