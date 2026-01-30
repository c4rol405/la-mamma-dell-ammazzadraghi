let gameover;
let bgmorte;
let mortetohome;
let pulsantemortetohome;
let mortetoagain;
let pulsantemortetoagain;

function preload (s) {
    gameover = PP.assets.image.load (s, "assets/situe/morte.png"); 
    mortetohome = PP.assets.image.load(s, "assets/icone/home.png"); 
    mortetoagain = PP.assets.image.load(s, "assets/icone/rigioca.png");
}

function restart_game_keep_hud(s) {
    // Mantieni consapevolezza e budini così come sono
    let consapevolezza_corrente = PP.game_state.get_variable("consapevolezza");
    let budini_correnti = PP.game_state.get_variable("budini");
    // Reset vite a 3
    PP.game_state.set_variable("cuori", 3);
    // Avvia la scena di gioco
    PP.scenes.start("scene");
    // Opzionale: ripristina la HUD subito dopo il reload
    PP.game_state.set_variable("consapevolezza", consapevolezza_corrente);
    PP.game_state.set_variable("budini", budini_correnti);
}


function create (s) {
    bgmorte = PP.assets.image.add (s, gameover, 0, 0, 0, 0);

    pulsantemortetohome = PP.assets.image.add(s, mortetohome, 600, 650, 0.5, 0.5); 
    pulsantemortetohome.geometry.scale_x = 0.08;
    pulsantemortetohome.geometry.scale_y = 0.08;
    PP.interactive.mouse.add(pulsantemortetohome, "pointerdown", () => PP.scenes.start("home"));

    pulsantemortetoagain = PP.assets.image.add(s, mortetoagain, 680, 650, 0.5, 0.5);
    pulsantemortetoagain.geometry.scale_x = 0.08;
    pulsantemortetoagain.geometry.scale_y = 0.08;

    PP.interactive.mouse.add(pulsantemortetoagain, "pointerdown", () => restart_game_keep_hud(s));
}

function update (s) {

}

function destroy (s) {
    
}

PP.scenes.add("gameover", preload, create, update, destroy);