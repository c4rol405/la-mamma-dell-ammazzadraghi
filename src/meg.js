let meg;
let img_meg;
let curr_anim = "base"; 
let next_anim;
next_anim = curr_anim;

function preload_meg (s){
   img_meg = PP.assets.sprite.load_spritesheet(s, "assets/meg/meg.png", 709, 709);
}

function create_meg (s) {
    meg = PP.assets.sprite.add(s, img_meg, 2700, 3198, 0, 1);

    meg.geometry.scale_x = 0.4;
    meg.geometry.scale_y = 0.4;

    PP.physics.add(s, meg, PP.physics.type.DYNAMIC);


    // Configuro le animazioni secondo lo spritesheet
    PP.assets.sprite.animation_add(meg, "base", 0, 2, 2, -1);    //meg gira gli occhi
    PP.assets.sprite.animation_add(meg, "padella", 3, 5, 6, 0); //meg fa il gesto della pdella
    // Animazione eseguita
    PP.assets.sprite.animation_play(meg, "base");

    PP.physics.add_collider (s, meg, floor14);
}

function finepadella(s) {
  curr_anim = "base";
  PP.assets.sprite.animation_play(meg, "base");
}

function update_meg (s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        curr_anim = "padella";
        PP.assets.sprite.animation_play(meg, "padella");
        PP.timers.add_timer(s, 1000, finepadella, false);
    }
}