let enemy;
let img_enemy;
let fantasma1, fantasma2, fantasma3, fantasma4, fantasma5;

function preload_enemy (s){
   img_enemy = PP.assets.sprite.load_spritesheet(s, "assets/images/enemy.png", 106, 106);
   
}

function danno_player(s, fantasma, player) {
    if (player_immunity) return; // evita danno multiplo istantaneo
    player_immunity = true; // imposta immunità temporanea
    PP.timers.add_timer(s, 1500, () => { player_immunity = false; }, false);

    // Blocca il movimento e fermalo
    move_disable = true;
    jump_disable = true;
    
    let vite = PP.game_state.get_variable("cuori"); // prendi vite correnti
    if (vite > 0) PP.game_state.set_variable("cuori", vite - 1); // decrementa vite se > 0
    
    // Se l’ultima vita è stata persa, chiama morte(s)
    if (vite - 1 <= 0) {
        morte(s, "fantasma");
    } else {
        next_anim = "hurt";
        move_disable = true;
        jump_disable = true;
        PP.timers.add_timer(s, 1500, () => {
            move_disable = false;
            jump_disable = false;
            player_immunity = false;
            PP.physics.set_immovable(player, false);
            next_anim = "stop";
        }, false);
    }
}

function create_enemy (s, player) {
    fantasma1 = PP.assets.sprite.add(s, img_enemy, 4250, 3150, 0, 1);
    PP.physics.add(s, fantasma1, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma1, true); PP.physics.set_allow_gravity(fantasma1, false);  
    PP.physics.set_velocity_x(fantasma1, 200);
    PP.physics.set_velocity_y(fantasma1, 50);
    PP.physics.set_collision_rectangle(fantasma1, 80, 80, 14, 28); PP.physics.add_overlap_f(s, fantasma1, player, danno_player);
    PP.assets.sprite.animation_add(fantasma1, "normale", 0, 9, 6, -1); PP.assets.sprite.animation_play(fantasma1, "normale");

    fantasma2 = PP.assets.sprite.add(s, img_enemy, 4550, 5300, 0, 1);
    PP.physics.add(s, fantasma2, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma2, true); PP.physics.set_allow_gravity(fantasma2, false);  
    PP.physics.set_velocity_x(fantasma2, 200);
    PP.physics.set_velocity_y(fantasma2, 50);
    PP.physics.set_collision_rectangle(fantasma2, 80, 80, 14, 28); PP.physics.add_overlap_f(s, fantasma2, player, danno_player);
    PP.assets.sprite.animation_add(fantasma2, "verde", 20, 29, 6, -1); PP.assets.sprite.animation_play(fantasma2, "verde");

    fantasma3 = PP.assets.sprite.add(s, img_enemy, 3100, 5500, 0, 1);
    PP.physics.add(s, fantasma3, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma3, true); PP.physics.set_allow_gravity(fantasma3, false);  
    PP.physics.set_velocity_x(fantasma3, 200);
    PP.physics.set_velocity_y(fantasma3, 50);
    PP.physics.set_collision_rectangle(fantasma3, 80, 80, 14, 28); PP.physics.add_overlap_f(s, fantasma3, player, danno_player);
    PP.assets.sprite.animation_add(fantasma3, "rosso", 10, 19, 6, -1); PP.assets.sprite.animation_play(fantasma3, "rosso");
    
    fantasma4 = PP.assets.sprite.add(s, img_enemy, 5800, 4800, 0, 1);
    PP.physics.add(s, fantasma4, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma4, true); PP.physics.set_allow_gravity(fantasma4, false);  
    PP.physics.set_velocity_x(fantasma4, 200);
    PP.physics.set_velocity_y(fantasma4, 30);
    PP.physics.set_collision_rectangle(fantasma4, 80, 80, 14, 28); PP.physics.add_overlap_f(s, fantasma4, player, danno_player);
    PP.assets.sprite.animation_add(fantasma4, "blu", 30, 39, 6, -1); PP.assets.sprite.animation_play(fantasma4, "blu");
    
    fantasma5 = PP.assets.sprite.add(s, img_enemy, 2600, 1230, 0, 1);
    PP.physics.add(s, fantasma5, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma5, true); PP.physics.set_allow_gravity(fantasma5, false);  
    PP.physics.set_velocity_x(fantasma5, 200);
    PP.physics.set_velocity_y(fantasma5, 50);
    PP.physics.set_collision_rectangle(fantasma5, 80, 80, 14, 28); PP.physics.add_overlap_f(s, fantasma5, player, danno_player);
    PP.assets.sprite.animation_add(fantasma5, "normale", 0, 9, 6, -1); PP.assets.sprite.animation_play(fantasma5, "normale");

    fantasma6 = PP.assets.sprite.add(s, img_enemy, 5200, 1900, 0, 1);
    PP.physics.add(s, fantasma6, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma6, true); PP.physics.set_allow_gravity(fantasma6, false);  
    PP.physics.set_velocity_x(fantasma6, 200);
    PP.physics.set_velocity_y(fantasma6, 30);
    PP.physics.set_collision_rectangle(fantasma6, 80, 80, 14, 28); PP.physics.add_overlap_f(s, fantasma6, player, danno_player);
    PP.assets.sprite.animation_add(fantasma6, "blu", 30, 39, 6, -1); PP.assets.sprite.animation_play(fantasma6, "blu");
    
    fantasma7 = PP.assets.sprite.add(s, img_enemy, 5800, 1850, 0, 1);
    PP.physics.add(s, fantasma7, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma7, true); PP.physics.set_allow_gravity(fantasma7, false);  
    PP.physics.set_velocity_x(fantasma7, 200);
    PP.physics.set_velocity_y(fantasma7, 50);
    PP.physics.set_collision_rectangle(fantasma7, 80, 80, 14, 28); PP.physics.add_overlap_f(s, fantasma7, player, danno_player);
    PP.assets.sprite.animation_add(fantasma7, "normale", 0, 9, 6, -1); PP.assets.sprite.animation_play(fantasma7, "normale");

    fantasma8 = PP.assets.sprite.add(s, img_enemy, 4050, 1650, 0, 1);
    PP.physics.add(s, fantasma8, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma8, true); PP.physics.set_allow_gravity(fantasma8, false);  
    PP.physics.set_velocity_x(fantasma8, 200);
    PP.physics.set_velocity_y(fantasma8, 50);
    PP.physics.set_collision_rectangle(fantasma8, 80, 80, 14, 28); PP.physics.add_overlap_f(s, fantasma8, player, danno_player);
    PP.assets.sprite.animation_add(fantasma8, "normale", 0, 9, 6, -1); PP.assets.sprite.animation_play(fantasma8, "normale");

    fantasma9 = PP.assets.sprite.add(s, img_enemy, 1700, 2300, 0, 1);
    PP.physics.add(s, fantasma9, PP.physics.type.DYNAMIC); PP.physics.set_immovable(fantasma9, true); PP.physics.set_allow_gravity(fantasma9, false);  
    PP.physics.set_velocity_x(fantasma9, 200);
    PP.physics.set_velocity_y(fantasma9, 50);
    PP.physics.set_collision_rectangle(fantasma9, 80, 80, 14, 28); PP.physics.add_overlap_f(s, fantasma9, player, danno_player);
    PP.assets.sprite.animation_add(fantasma9, "normale", 0, 9, 6, -1); PP.assets.sprite.animation_play(fantasma9, "normale");
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

    if(fantasma6.geometry.x >= 5100) {PP.physics.set_velocity_x(fantasma6, -100)} //limite destro
    else if(fantasma6.geometry.x <= 4400) {PP.physics.set_velocity_x(fantasma6, 100)} //limite sinistro
    if (PP.physics.get_velocity_x(fantasma6) < 0) {fantasma6.geometry.flip_x = true;}
    else if (PP.physics.get_velocity_x(fantasma6) > 0) {fantasma6.geometry.flip_x = false;}
    if(fantasma6.geometry.y >= 1880) {PP.physics.set_velocity_y(fantasma6, -30)} //limite basso
    else if(fantasma6.geometry.y <= 1830) {PP.physics.set_velocity_y(fantasma6, 30)} //limite alto

    if(fantasma7.geometry.x >= 5900) {PP.physics.set_velocity_x(fantasma7, -100)} //limite destro
    else if(fantasma7.geometry.x <= 5200) {PP.physics.set_velocity_x(fantasma7, 100)} //limite sinistro
    if (PP.physics.get_velocity_x(fantasma7) < 0) {fantasma7.geometry.flip_x = true;}
    else if (PP.physics.get_velocity_x(fantasma7) > 0) {fantasma7.geometry.flip_x = false;}
    if(fantasma7.geometry.y >= 1880) {PP.physics.set_velocity_y(fantasma7, -50)} //limite basso
    else if(fantasma7.geometry.y <= 1830) {PP.physics.set_velocity_y(fantasma7, 50)} //limite alto

    if(fantasma8.geometry.x >= 4050) {PP.physics.set_velocity_x(fantasma8, -100)} //limite destro
    else if(fantasma8.geometry.x <= 3350) {PP.physics.set_velocity_x(fantasma8, 100)} //limite sinistro
    if (PP.physics.get_velocity_x(fantasma8) < 0) {fantasma8.geometry.flip_x = true;}
    else if (PP.physics.get_velocity_x(fantasma8) > 0) {fantasma8.geometry.flip_x = false;}
    if(fantasma8.geometry.y >= 1680) {PP.physics.set_velocity_y(fantasma8, -50)} //limite basso
    else if(fantasma8.geometry.y <= 1630) {PP.physics.set_velocity_y(fantasma8, 50)} //limite alto

    if(fantasma9.geometry.x >= 2580) {PP.physics.set_velocity_x(fantasma9, -100)} //limite destro
    else if(fantasma9.geometry.x <= 1700) {PP.physics.set_velocity_x(fantasma9, 100)} //limite sinistro
    if (PP.physics.get_velocity_x(fantasma9) < 0) {fantasma9.geometry.flip_x = true;}
    else if (PP.physics.get_velocity_x(fantasma9) > 0) {fantasma9.geometry.flip_x = false;}
    if(fantasma9.geometry.y >= 2350) {PP.physics.set_velocity_y(fantasma9, -50)} //limite basso
    else if(fantasma9.geometry.y <= 2300) {PP.physics.set_velocity_y(fantasma9, 50)} //limite alto
}