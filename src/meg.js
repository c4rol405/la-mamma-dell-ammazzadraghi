let meg;
let img_meg;

let curr_meg = "base"; 
let next_meg;
next_meg = curr_meg;

let meg_keyP_last = false;
let meg_keyC_last = false;
let meg_c_premuta = false;  // C premuto solo una volta
let meg_p_bloccato = false; // P bloccato dopo che C è stato premuto

function preload_meg (s){
   img_meg = PP.assets.sprite.load_spritesheet(s, "assets/meg/spritesheet.png", 420, 420);
}

function create_meg (s) {
    meg = PP.assets.sprite.add(s, img_meg, 2700, 3198, 0, 1);
    PP.physics.add(s, meg, PP.physics.type.DYNAMIC);
    PP.physics.add_collider (s, meg, floor14);

    PP.assets.sprite.animation_add(meg, "base", 0, 6, 4, -1);    //meg gira gli occhi
    PP.assets.sprite.animation_add(meg, "padella", 9, 15, 6, 0); //meg fa il gesto della padella
    PP.assets.sprite.animation_add(meg, "sparisce", 18, 26, 10, 0); 
    PP.assets.sprite.animation_add(meg, "vuoto", 7, 8, 6, 0);

    PP.assets.sprite.animation_play(meg, "base");
}

function finepadella(s) {
  curr_meg = "base";
  PP.assets.sprite.animation_play(meg, "base");
}
function finedialogo(s) {
  curr_meg = "vuoto";
  PP.assets.sprite.animation_play(meg, "vuoto");
}

function update_meg (s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.P)) {
        curr_meg = "padella";
        PP.assets.sprite.animation_play(meg, "padella");
        PP.timers.add_timer(s, 800, finepadella, false);
    }
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        curr_meg = "sparisce";
        PP.assets.sprite.animation_play(meg, "sparisce");
        PP.timers.add_timer(s, 1000, finedialogo, false);
    }

}

function update_meg(s) {
    let meg_keyP_now = PP.interactive.kb.is_key_down(s, PP.key_codes.P);
    if (meg_keyP_now && !meg_keyP_last && !meg_p_bloccato) {
        curr_meg = "padella";
        PP.assets.sprite.animation_play(meg, "padella");
        PP.timers.add_timer(s, 800, finepadella, false);
    }
    meg_keyP_last = meg_keyP_now;

    let meg_keyC_now = PP.interactive.kb.is_key_down(s, PP.key_codes.C);
    if (meg_keyC_now && !meg_keyC_last && !meg_c_premuta) {
        curr_meg = "sparisce";
        PP.assets.sprite.animation_play(meg, "sparisce");
        PP.timers.add_timer(s, 1000, finedialogo, false);

        meg_c_premuta = true;
        meg_p_bloccato = true;
    }
    meg_keyC_last = meg_keyC_now;
}