let img_platform1;
let img_platform2;
let img_platform3;
let img_platform4;
let img_platform5;
let img_platform6;
let img_platform7;
let img_platform8;
let img_platform9;
let img_platform10;

//ricordarsi di farle max 150 di distanza

function preload_platform(s) {
    img_platform1 = PP.assets.image.load(s, "assets/platform/albero1.png");
    img_platform2 = PP.assets.image.load(s, "assets/platform/albero2.png");
    img_platform3 = PP.assets.image.load(s, "assets/platform/erba1.png");
    img_platform4 = PP.assets.image.load(s, "assets/platform/erba2.png");
    img_platform5 = PP.assets.image.load(s, "assets/platform/grotta1.png");
    img_platform6 = PP.assets.image.load(s, "assets/platform/grotta2.png");
    img_platform7 = PP.assets.image.load(s, "assets/platform/grotta3.png");
    img_platform8 = PP.assets.image.load(s, "assets/platform/roccia1.png");
    img_platform9 = PP.assets.image.load(s, "assets/platform/roccia2.png");
    img_platform10 = PP.assets.image.load(s, "assets/platform/roccia3.png");
}

function collision_platform(s, player, platform) {
//Funzione di collisione con le piattaforme, devo verificare che il giocatore si trovi sopra e in quel caso aggiorno la variabile che abilita il salto
    if( player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
            player.is_on_platform = true;
    }
}

let platform_to_flip;
function platform_flip(s, platform) {
    platform_to_flip.geometry.flip_y = true;
}
function collision_platform_flip(s, player, platform){
    if( player.geometry.x >= platform.geometry.x && player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
        player.is_on_platform = true;
    }
    if (player.is_on_platform) { 
        if (!platform_to_flip) {
            platform_to_flip = platform
        }
        PP.timers.add_timer(s, 500, platform_flip, true)
    }
} 

function create_platform(s, player) {
    //platform centrali
    platform1 = PP.assets.image.add(s, img_platform3, 3350, 3030, 0, 0);
    PP.physics.add(s, platform1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform1, collision_platform);
    PP.physics.set_collision_rectangle(platform1, 250, 50, 10, 30);

    platform2 = PP.assets.image.add(s, img_platform3, 4100, 2880, 0, 0); //piattaforma mobile orizzontale
    PP.physics.add(s, platform2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform2, true);
    PP.physics.set_allow_gravity(platform2, false);    
    PP.physics.add_collider_f(s, player, platform2, collision_platform);
    PP.physics.set_velocity_x(platform2, 100);
    PP.physics.set_collision_rectangle(platform2, 250, 50, 10, 30);

    platform3 = PP.assets.image.add(s, img_platform3, 4450, 3100, 0, 0);
    PP.physics.add(s, platform3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform3, collision_platform);
    PP.physics.set_collision_rectangle(platform3, 250, 50, 10, 30);
    platform4 = PP.assets.image.add(s, img_platform4, 4850, 3250, 0, 0);
    PP.physics.add(s, platform4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform4, collision_platform);
    PP.physics.set_collision_rectangle(platform4, 150, 50, 10, 30);
    platform5 = PP.assets.image.add(s, img_platform4, 5550, 3250, 0, 0);
    PP.physics.add(s, platform5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform5, collision_platform);
    PP.physics.set_collision_rectangle(platform5, 150, 50, 10, 30);
    platform6 = PP.assets.image.add(s, img_platform3, 5950, 3150, 0, 0);
    PP.physics.add(s, platform6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform6, collision_platform);
    PP.physics.set_collision_rectangle(platform6, 250, 50, 10, 30);

    platform7 = PP.assets.image.add(s, img_platform3, 5200, 3070, 0, 0); //piattaforma che scompare
    PP.physics.add(s, platform7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform7, collision_platform);
    PP.physics.set_collision_rectangle(platform7, 250, 50, 10, 30);

    platform8 = PP.assets.image.add(s, img_platform3, 3924, 2700, 0, 0);
    PP.physics.add(s, platform8, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform8, collision_platform);
    PP.physics.set_collision_rectangle(platform8, 250, 50, 10, 30);
    platform9 = PP.assets.image.add(s, img_platform3, 3582, 2550, 0, 0);
    PP.physics.add(s, platform9, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform9, collision_platform);
    PP.physics.set_collision_rectangle(platform9, 250, 50, 10, 30);
    platform10 = PP.assets.image.add(s, img_platform4, 4000, 2450, 0, 0);
    PP.physics.add(s, platform10, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform10, collision_platform);
    PP.physics.set_collision_rectangle(platform10, 150, 50, 10, 30);

    platform11 = PP.assets.image.add(s, img_platform9, 3550, 2300, 0, 0); //piattaforma che flippa
    PP.physics.add(s, platform11, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform11, true);
    PP.physics.set_allow_gravity(platform11, false); 
    PP.physics.add_collider_f(s, player, platform11, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform11, 250, 60, 10, 20); 

    platform12 = PP.assets.image.add(s, img_platform10, 3500, 2180, 0, 0);
    PP.physics.add(s, platform12, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform12, collision_platform);
    PP.physics.set_collision_rectangle(platform12, 140, 50, 0, 10);
    platform13 = PP.assets.image.add(s, img_platform8, 3760, 2030, 0, 0);
    PP.physics.add(s, platform13, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform13, collision_platform);
    PP.physics.set_collision_rectangle(platform13, 250, 50, 0, 20);

    platform14 = PP.assets.image.add(s, img_platform2, 2650, 1700, 0, 0);
    PP.physics.add(s, platform14, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform14, collision_platform);
    PP.physics.set_collision_rectangle(platform14, 140, 50, 0, 10);
    platform15 = PP.assets.image.add(s, img_platform2, 3000, 1550, 0, 0);
    PP.physics.add(s, platform15, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform15, collision_platform);
    PP.physics.set_collision_rectangle(platform15, 140, 50, 0, 10);
    platform16 = PP.assets.image.add(s, img_platform2, 3400, 1400, 0, 0);
    PP.physics.add(s, platform16, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform16, collision_platform);
    PP.physics.set_collision_rectangle(platform16, 140, 50, 0, 10);
    platform17 = PP.assets.image.add(s, img_platform1, 2620, 1270, 0, 0);
    PP.physics.add(s, platform17, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform17, collision_platform);
    PP.physics.set_collision_rectangle(platform17, 250, 50, 0, 10);
    platform18 = PP.assets.image.add(s, img_platform1, 2100, 1100, 0, 0);
    PP.physics.add(s, platform18, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform18, collision_platform);
    PP.physics.set_collision_rectangle(platform18, 250, 50, 0, 10);
    platform19 = PP.assets.image.add(s, img_platform2, 2600, 950, 0, 0);
    PP.physics.add(s, platform19, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform19, collision_platform);
    PP.physics.set_collision_rectangle(platform19, 140, 50, 0, 10);
    platform20 = PP.assets.image.add(s, img_platform1, 2100, 800, 0, 0);
    PP.physics.add(s, platform20, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform20, collision_platform);
    PP.physics.set_collision_rectangle(platform20, 250, 50, 0, 10);
    platform21 = PP.assets.image.add(s, img_platform2, 2400, 500, 0, 0);
    PP.physics.add(s, platform21, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform21, collision_platform);
    PP.physics.set_collision_rectangle(platform21, 140, 50, 0, 10);

    platform22 = PP.assets.image.add(s, img_platform3, 5450, 3650, 0, 0);
    PP.physics.add(s, platform22, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform22, collision_platform);
    PP.physics.set_collision_rectangle(platform22, 250, 50, 10, 30);
    platform23 = PP.assets.image.add(s, img_platform5, 4980, 3750, 0, 0);
    PP.physics.add(s, platform23, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform23, collision_platform);
    PP.physics.set_collision_rectangle(platform23, 250, 50, 10, 10);

    platform24 = PP.assets.image.add(s, img_platform7, 5280, 3850, 0, 0); //piattaforma mobile verticale
    PP.physics.add(s, platform24, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform24, true);
    PP.physics.set_allow_gravity(platform24, false);    
    PP.physics.add_collider_f(s, player, platform24, collision_platform);
    PP.physics.set_velocity_y(platform24, 70);
    PP.physics.set_collision_rectangle(platform24, 150, 50, 10, 10);

    platform25 = PP.assets.image.add(s, img_platform5, 5470, 4150, 0, 0);
    PP.physics.add(s, platform25, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform25, collision_platform);
    PP.physics.set_collision_rectangle(platform25, 250, 50, 10, 10);
}

function update_platform(s) {
// Aggiorno la velocita' della piattaforma mobile nel caso in cui si trovi al limite destro o il limite sinistro scelto

    if(platform2.geometry.x >= 4100) {      //limite destro
        PP.physics.set_velocity_x(platform2, -100);
    }
    else if(platform2.geometry.x <= 3600) {     //limite sinistro
        PP.physics.set_velocity_x(platform2, 100);
    }

    if(platform24.geometry.y >= 4100) {      //limite basso
        PP.physics.set_velocity_y(platform24, -100);
    }
    else if(platform24.geometry.y <= 3800) {     //limite alto
        PP.physics.set_velocity_y(platform24, 100);
    }


}
