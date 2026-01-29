let testi;
let img_testi;

let curr_dialogo = "P"; 
let next_dialogo;
next_dialogo = curr_dialogo;

let keyP_last = false;
let keyC_last = false;
let c_premuta = false;  // C premuto solo una volta
let p_bloccato = false; // P bloccato dopo che C è stato premuto

function preload_dialogo (s){
   img_testi = PP.assets.sprite.load_spritesheet(s, "assets/meg/testimeg.png", 550, 200);
}

function create_dialogo (s) {
    testi = PP.assets.sprite.add(s, img_testi, 2810, 2760, 0, 0);

    testi.tile_geometry.x = 0;
    testi.tile_geometry.y = 0;

    testi.geometry.scale_x = 0.6;
    testi.geometry.scale_y = 0.6;

    // Configuro le animazioni secondo lo spritesheet
    PP.assets.sprite.animation_add(testi, "P", 0, 1, 6, -1);
    PP.assets.sprite.animation_add(testi, "1", 2, 3, 1, -1);    
    PP.assets.sprite.animation_add(testi, "2", 4, 5, 1, -1);
    PP.assets.sprite.animation_add(testi, "3", 6, 7, 1, -1);    
    PP.assets.sprite.animation_add(testi, "4", 8, 9, 1, -1);
    PP.assets.sprite.animation_add(testi, "5", 10, 11, 1, -1);
    PP.assets.sprite.animation_add(testi, "vuoto", 12, 13, 1, -1);

    PP.assets.sprite.animation_play(testi, "P");
}

function update_dialogo (s) {
    let keyP_now = PP.interactive.kb.is_key_down(s, PP.key_codes.P);
    if (keyP_now && !keyP_last && !p_bloccato) {
        if (curr_dialogo === "P") curr_dialogo = "1";
        else if (curr_dialogo === "1") curr_dialogo = "2";
        else if (curr_dialogo === "2") curr_dialogo = "3";
        else if (curr_dialogo === "3") curr_dialogo = "4";
        else if (curr_dialogo === "4") curr_dialogo = "5";
        PP.assets.sprite.animation_play(testi, curr_dialogo);
    }
    keyP_last = keyP_now;

    let keyC_now = PP.interactive.kb.is_key_down(s, PP.key_codes.C); 
    if (keyC_now && !keyC_last && curr_dialogo === "5" && !c_premuta) { //tasto abilitato solo dopo dialogo 5
        PP.assets.sprite.animation_play(testi, "vuoto");
        c_premuta = true;
        p_bloccato = true; //bloccato sia tasto c che tasto p
    }
    keyC_last = keyC_now;
}
