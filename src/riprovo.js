let perg;
let img_perg;

function preload_riprovo (s){
   img_perg = PP.assets.sprite.load_spritesheet(s, "assets/meg/perg.png", 1815, 567);
}

function create_riprovo (s) {
    perg = PP.assets.sprite.add(s, img_perg, 2650, 2820, 0, 0);

    perg.tile_geometry.x = 0;
    perg.tile_geometry.y = 0;

    perg.geometry.scale_x = 0.2;
    perg.geometry.scale_y = 0.2;

    // Configuro le animazioni secondo lo spritesheet
    PP.assets.sprite.animation_add(perg, "0", 0, 1, 1, -1);    
    PP.assets.sprite.animation_add(perg, "1", 2, 3, 1, -1);
    PP.assets.sprite.animation_add(perg, "2", 4, 5, 1, -1);    
    PP.assets.sprite.animation_add(perg, "3", 6, 7, 1, -1);
    PP.assets.sprite.animation_add(perg, "4", 8, 9, 1, -1);

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        PP.assets.sprite.animation_play(perg, "0");
    }
}

function update_riprovo (s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.C)) {
        curr_anim = "0";
        PP.assets.sprite.animation_play(perg, "0");
        if (curr_anim === "0") {
            PP.assets.sprite.animation_play(perg, "0");
            next_anim = "1";
        }
        else if (curr_anim === "1") {
            PP.assets.sprite.animation_play(perg, "1");
            next_anim = "2";
        }
        else if (curr_anim === "2") {
            PP.assets.sprite.animation_play(perg, "2");
            next_anim = "3";
        }
        else if (curr_anim === "3") {
            PP.assets.sprite.animation_play(perg, "3");
            next_anim = "4";
        }
        else if (curr_anim === "4") {
            PP.assets.sprite.animation_play(perg, "4");
            PP.assets.destroy(perg);
            return;
        }
        curr_anim = next_anim;
        PP.assets.sprite.animation_play(perg, curr_anim);
        
    }
}

//due problemi 1 appare fin dall'inizio, 2 non si arriva mai alla 3