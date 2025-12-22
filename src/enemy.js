let enemy;
let img_enemy;

let player_health = 5; // Assicurati di inizializzare questa variabile
let counter = 0;

function preload_enemy (s){
   img_enemy = PP.assets.sprite.load_spritesheet(s, "assets/images/enemy.png", 106, 106);
}

// Modifica variabile "health"
function get_damage(s, player, enemy) {
    if (player_immunity == true)  {
        return;
    }
    if (player_health > 0) {
        player_health = player_health - 1;
    }
    if (player_health == 0) {
        PP.timers.add_timer(s, 1500, timer_gameover, false);
    }
    player_immunity = true;

    // Timer per riabilitare il danno
    PP.timers.add_timer(s, 1500, reenable_immunity, false);
}

function reenable_immunity(s, player) {
  player_immunity = false;
}

function create_enemy (s, player) {
    fantasma1 = PP.assets.sprite.add(s, img_enemy, 4250, 3150, 0, 1);
    PP.physics.add(s, fantasma1, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(fantasma1, true);
    PP.physics.set_allow_gravity(fantasma1, false);  
    PP.physics.set_velocity_x(fantasma1, 200);
    PP.physics.set_collision_rectangle(fantasma1, 80, 80, 14, 28);
    PP.physics.add_collider(s, player, fantasma1, get_damage);
    PP.assets.sprite.animation_add(fantasma1, "base", 0, 9, 6, -1);
    PP.assets.sprite.animation_play(fantasma1, "base");
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