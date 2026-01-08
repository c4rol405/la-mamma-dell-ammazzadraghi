let enemy;
let img_enemy;

let player_health = 5; // Assicurati di inizializzare questa variabile
let counter = 0;

function preload_enemy (s){
   img_enemy = PP.assets.sprite.load_spritesheet(s, "assets/images/enemy.png", 106, 106);
}

/* QUESTO CODICE ERA  PER FAR PERDERE SOLO LE VITE E NON MORIRE DIRETTO
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
} */

function collision_enemy(s, player, enemy) { //perchè non vaaaaa
    if (enemy.is_dead) return;

    enemy.is_dead = true;
    death_cause = "fantasma";
    morte(s);
}

function create_enemy (s, player) {
    fantasma1 = PP.assets.sprite.add(s, img_enemy, 4250, 3150, 0, 1);
    PP.physics.add(s, fantasma1, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma1, true); PP.physics.set_allow_gravity(fantasma1, false);  
    PP.physics.set_velocity_x(fantasma1, 200);
    PP.physics.set_velocity_y(fantasma1, 50);
    PP.physics.set_collision_rectangle(fantasma1, 80, 80, 14, 28); PP.physics.add_collider(s, player, fantasma1, collision_enemy);
    PP.assets.sprite.animation_add(fantasma1, "normale", 0, 9, 6, -1); PP.assets.sprite.animation_play(fantasma1, "normale");

    fantasma2 = PP.assets.sprite.add(s, img_enemy, 4550, 5300, 0, 1);
    PP.physics.add(s, fantasma2, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma2, true); PP.physics.set_allow_gravity(fantasma2, false);  
    PP.physics.set_velocity_x(fantasma2, 200);
    PP.physics.set_velocity_y(fantasma2, 50);
    PP.physics.set_collision_rectangle(fantasma2, 80, 80, 14, 28); PP.physics.add_collider(s, player, fantasma2, collision_enemy);
    PP.assets.sprite.animation_add(fantasma2, "verde", 20, 29, 6, -1); PP.assets.sprite.animation_play(fantasma2, "verde");

    fantasma3 = PP.assets.sprite.add(s, img_enemy, 3100, 5500, 0, 1);
    PP.physics.add(s, fantasma3, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma3, true); PP.physics.set_allow_gravity(fantasma3, false);  
    PP.physics.set_velocity_x(fantasma3, 200);
    PP.physics.set_velocity_y(fantasma3, 50);
    PP.physics.set_collision_rectangle(fantasma3, 80, 80, 14, 28); PP.physics.add_collider(s, player, fantasma3, collision_enemy);
    PP.assets.sprite.animation_add(fantasma3, "rosso", 10, 19, 6, -1); PP.assets.sprite.animation_play(fantasma3, "rosso");

    fantasma4 = PP.assets.sprite.add(s, img_enemy, 5800, 4800, 0, 1);
    PP.physics.add(s, fantasma4, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma4, true); PP.physics.set_allow_gravity(fantasma4, false);  
    PP.physics.set_velocity_x(fantasma4, 200);
    PP.physics.set_velocity_y(fantasma4, 30);
    PP.physics.set_collision_rectangle(fantasma4, 80, 80, 14, 28); PP.physics.add_collider(s, player, fantasma4, collision_enemy);
    PP.assets.sprite.animation_add(fantasma4, "blu", 30, 39, 6, -1); PP.assets.sprite.animation_play(fantasma4, "blu");

    fantasma5 = PP.assets.sprite.add(s, img_enemy, 2600, 1230, 0, 1);
    PP.physics.add(s, fantasma5, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma5, true); PP.physics.set_allow_gravity(fantasma5, false);  
    PP.physics.set_velocity_x(fantasma5, 200);
    PP.physics.set_velocity_y(fantasma5, 50);
    PP.physics.set_collision_rectangle(fantasma5, 80, 80, 14, 28); PP.physics.add_collider(s, player, fantasma5, collision_enemy);
    PP.assets.sprite.animation_add(fantasma5, "normale", 0, 9, 6, -1); PP.assets.sprite.animation_play(fantasma5, "normale");
}


function update_enemy(s) {
    if(fantasma1.geometry.x >= 4250) {PP.physics.set_velocity_x(fantasma1, -100)} //limite destro
    else if(fantasma1.geometry.x <= 3800) {PP.physics.set_velocity_x(fantasma1, 100)} //limite sinistro
    if (PP.physics.get_velocity_x(fantasma1) < 0) {fantasma1.geometry.flip_x = true;}
    else if (PP.physics.get_velocity_x(fantasma1) > 0) {fantasma1.geometry.flip_x = false;}
    if(fantasma1.geometry.y >= 3150) {PP.physics.set_velocity_y(fantasma1, -50)} //limite basso
    else if(fantasma1.geometry.y <= 3100) {PP.physics.set_velocity_y(fantasma1, 50)} //limite alto

    if(fantasma2.geometry.x >= 4530) {PP.physics.set_velocity_x(fantasma2, -100)} //limite destro
    else if(fantasma2.geometry.x <= 3980) {PP.physics.set_velocity_x(fantasma2, 100)} //limite sinistro
    if (PP.physics.get_velocity_x(fantasma2) < 0) {fantasma2.geometry.flip_x = true;}
    else if (PP.physics.get_velocity_x(fantasma2) > 0) {fantasma2.geometry.flip_x = false;}
    if(fantasma2.geometry.y >= 5380) {PP.physics.set_velocity_y(fantasma2, -50)} //limite basso
    else if(fantasma2.geometry.y <= 5330) {PP.physics.set_velocity_y(fantasma2, 50)} //limite alto

    if(fantasma3.geometry.x >= 3670) {PP.physics.set_velocity_x(fantasma3, -100)} //limite destro
    else if(fantasma3.geometry.x <= 3020) {PP.physics.set_velocity_x(fantasma3, 100)} //limite sinistro
    if (PP.physics.get_velocity_x(fantasma3) < 0) {fantasma3.geometry.flip_x = true;}
    else if (PP.physics.get_velocity_x(fantasma3) > 0) {fantasma3.geometry.flip_x = false;}
    if(fantasma3.geometry.y >= 5550) {PP.physics.set_velocity_y(fantasma3, -50)} //limite basso
    else if(fantasma3.geometry.y <= 5500) {PP.physics.set_velocity_y(fantasma3, 50)} //limite alto

    if(fantasma4.geometry.x >= 6400) {PP.physics.set_velocity_x(fantasma4, -100)} //limite destro
    else if(fantasma4.geometry.x <= 5650) {PP.physics.set_velocity_x(fantasma4, 100)} //limite sinistro
    if (PP.physics.get_velocity_x(fantasma4) < 0) {fantasma4.geometry.flip_x = true;}
    else if (PP.physics.get_velocity_x(fantasma4) > 0) {fantasma4.geometry.flip_x = false;}
    if(fantasma4.geometry.y >= 4870) {PP.physics.set_velocity_y(fantasma4, -30)} //limite basso
    else if(fantasma4.geometry.y <= 4840) {PP.physics.set_velocity_y(fantasma4, 30)} //limite alto

    if(fantasma5.geometry.x >= 2760) {PP.physics.set_velocity_x(fantasma5, -100)} //limite destro
    else if(fantasma5.geometry.x <= 2160) {PP.physics.set_velocity_x(fantasma5, 100)} //limite sinistro
    if (PP.physics.get_velocity_x(fantasma5) < 0) {fantasma5.geometry.flip_x = true;}
    else if (PP.physics.get_velocity_x(fantasma5) > 0) {fantasma5.geometry.flip_x = false;}
    if(fantasma5.geometry.y >= 1280) {PP.physics.set_velocity_y(fantasma5, -50)} //limite basso
    else if(fantasma5.geometry.y <= 1230) {PP.physics.set_velocity_y(fantasma5, 50)} //limite alto
}