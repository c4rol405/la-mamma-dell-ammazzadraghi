let go1;
let bg;


function preload (s) {
    go1 = PP.assets.image.load (s, "assets/images/gameover1.png");  
}

function create (s) {
    //PP.game_state.set_variable("Vetri", 0);
    //PP.game_state.set_variable("Lettere", 0);
    let bg = PP.assets.image.add (s, go1, 0, 0, 0, 0);
    bg.geometry.scale_x = 0.4;
    bg.geometry.scale_y = 0.4;
    /*
    PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width / 2,
        PP.game.config.canvas_height / 2,
        "Game Over",
        100,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        0.5);
        
    PP.shapes.text_styled_add(s, 
        PP.game.config.canvas_width / 2,
        PP.game.config.canvas_height / 2,
        "Premi Q per riavviare il livello",
        40,
        "Helvetica",
        "normal",
        "0xFFFFFF",
        null,
        0.5,
        -2);

        PP.shapes.text_styled_add(s, 
            PP.game.config.canvas_width / 2,
            PP.game.config.canvas_height / 4,
            "Premi C per tornare al menù",
            40,
            "Helvetica",
            "normal",
            "0xFFFFFF",
            null,
            0.5,
            -2); */
}

function update (s) {
    /*
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        //riavvia la partita
        console.log("sus");
        PP.scenes.start("level1");
    }

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.M)) {
        //riavvia la partita
        console.log("sus");
        PP.scenes.start("Main_Menu");
    }
    */
}

function destroy (s) {
    
}

PP.scenes.add("gameover1", preload, create, update, destroy);