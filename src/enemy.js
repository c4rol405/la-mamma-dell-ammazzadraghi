let enemy;
let img_enemy;
let curr_enemy = "walk"; 

function preload_enemy (s){
   img_enemy = PP.assets.sprite.load_spritesheet(s, "assets/images/enemy.png", 106, 106);
}

function create_enemy (s, player) {
    fantasma1 = PP.assets.sprite.add(s, img_enemy, 4250, 3198, 0, 1);
    PP.physics.add(s, fantasma1, PP.physics.type.DYNAMIC);
    PP.assets.sprite.animation_add(fantasma1, "base", 0, 9, 6, -1);
    PP.assets.sprite.animation_play(fantasma1, "base");
    PP.physics.set_immovable(fantasma1, true);
    PP.physics.set_allow_gravity(fantasma1, false);    
    PP.physics.add_collider(s, player, fantasma1, collision_platform);
    PP.physics.set_velocity_x(fantasma1, 200);
    PP.physics.set_collision_rectangle(fantasma1, 80, 80, 14, 28); //da aggiustare
}

function update_enemy(s) {
    if (PP.physics.get_velocity_x(fantasma1) < 0) {
        fantasma1.geometry.flip_x = true;
    }
    else if (PP.physics.get_velocity_x(fantasma1) > 0) {
        fantasma1.geometry.flip_x = false;
    }
    
    if(fantasma1.geometry.x >= 4250) {      //limite destro
        PP.physics.set_velocity_x(fantasma1, -100);
    }
    else if(fantasma1.geometry.x <= 3800) {     //limite sinistro
        PP.physics.set_velocity_x(fantasma1, 100);
    }

}