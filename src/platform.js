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

function collision_platform_flip(s, player, platform) {
    if (!platform.has_flipped) {
        platform.has_flipped = true;

        PP.timers.add_timer(s, 2000, () => {
            platform.geometry.flip_y = true;
            platform.is_deadly = true;
        }, false);
        PP.timers.add_timer(s, 4000, () => {
            platform.geometry.flip_y = false;
            platform.is_deadly = false;
        }, false);
    }

    player.is_on_platform = true;
    if (platform.is_deadly) {
        if (is_dead) return;
        is_dead = true;
        morte(s, "lava");
    }
}

function create_platform(s, player) {
    //platform centrali
    platform1 = PP.assets.image.add(s, img_platform3, 3350, 3030, 0, 0);
    PP.physics.add(s, platform1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform1, collision_platform);
    PP.physics.set_collision_rectangle(platform1, 220, 50, 30, 30);

    platform2 = PP.assets.image.add(s, img_platform3, 4100, 2890, 0, 0); //piattaforma mobile orizzontale
    PP.physics.add(s, platform2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform2, true);
    PP.physics.set_allow_gravity(platform2, false);    
    PP.physics.add_collider_f(s, player, platform2, collision_platform);
    PP.physics.set_velocity_x(platform2, 100);
    PP.physics.set_collision_rectangle(platform2, 220, 50, 30, 30);

    platform3 = PP.assets.image.add(s, img_platform3, 4600, 3100, 0, 0);
    PP.physics.add(s, platform3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform3, collision_platform);
    PP.physics.set_collision_rectangle(platform3, 220, 50, 30, 30);
    platform4 = PP.assets.image.add(s, img_platform4, 4950, 3250, 0, 0);
    PP.physics.add(s, platform4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform4, collision_platform);
    PP.physics.set_collision_rectangle(platform4, 120, 50, 30, 28);
    platform5 = PP.assets.image.add(s, img_platform4, 5500, 3250, 0, 0);
    PP.physics.add(s, platform5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform5, collision_platform);
    PP.physics.set_collision_rectangle(platform5, 120, 50, 30, 28);
    platform6 = PP.assets.image.add(s, img_platform3, 5750, 3100, 0, 0);
    PP.physics.add(s, platform6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform6, collision_platform);
    PP.physics.set_collision_rectangle(platform6, 220, 50, 30, 30);
    platform7 = PP.assets.image.add(s, img_platform3, 5150, 3020, 0, 0);
    PP.physics.add(s, platform7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform7, collision_platform);
    PP.physics.set_collision_rectangle(platform7, 220, 50, 30, 30);

    platform8 = PP.assets.image.add(s, img_platform3, 3924, 2710, 0, 0);
    PP.physics.add(s, platform8, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform8, collision_platform);
    PP.physics.set_collision_rectangle(platform8, 220, 50, 30, 30);
    platform9 = PP.assets.image.add(s, img_platform3, 3582, 2550, 0, 0);
    PP.physics.add(s, platform9, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform9, collision_platform);
    PP.physics.set_collision_rectangle(platform9, 220, 50, 30, 30);
    platform10 = PP.assets.image.add(s, img_platform4, 4000, 2450, 0, 0);
    PP.physics.add(s, platform10, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform10, collision_platform);
    PP.physics.set_collision_rectangle(platform10, 120, 50, 30, 28);

    platform11 = PP.assets.image.add(s, img_platform9, 3550, 2300, 0, 0); //piattaforma che flippa
    PP.physics.add(s, platform11, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform11, true);
    PP.physics.set_allow_gravity(platform11, false); 
    PP.physics.add_collider_f(s, player, platform11, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform11, 230, 70, 14, 26); 

    platform12 = PP.assets.image.add(s, img_platform10, 3500, 2180, 0, 0);
    PP.physics.add(s, platform12, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform12, collision_platform);
    PP.physics.set_collision_rectangle(platform12, 120, 50, 16, 16);
    platform13 = PP.assets.image.add(s, img_platform8, 3760, 2030, 0, 0);
    PP.physics.add(s, platform13, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform13, collision_platform);
    PP.physics.set_collision_rectangle(platform13, 220, 50, 20, 24);

    platform14 = PP.assets.image.add(s, img_platform2, 2650, 1700, 0, 0);
    PP.physics.add(s, platform14, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform14, collision_platform);
    PP.physics.set_collision_rectangle(platform14, 120, 50, 20, 16);
    platform15 = PP.assets.image.add(s, img_platform2, 3000, 1550, 0, 0);
    PP.physics.add(s, platform15, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform15, collision_platform);
    PP.physics.set_collision_rectangle(platform15, 120, 50, 20, 16);
    platform16 = PP.assets.image.add(s, img_platform2, 3400, 1400, 0, 0);
    PP.physics.add(s, platform16, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform16, collision_platform);
    PP.physics.set_collision_rectangle(platform16, 120, 50, 20, 16);
   
    platform18 = PP.assets.image.add(s, img_platform1, 1900, 1150, 0, 0);
    PP.physics.add(s, platform18, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform18, collision_platform);
    PP.physics.set_collision_rectangle(platform18, 220, 50, 20, 12);
    platform19 = PP.assets.image.add(s, img_platform2, 2300, 1050, 0, 0);
    PP.physics.add(s, platform19, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform19, collision_platform);
    PP.physics.set_collision_rectangle(platform19, 120, 50, 20, 16);
    platform20 = PP.assets.image.add(s, img_platform1, 2050, 790, 0, 0);
    PP.physics.add(s, platform20, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform20, collision_platform);
    PP.physics.set_collision_rectangle(platform20, 220, 50, 20, 12);
    platform21 = PP.assets.image.add(s, img_platform2, 2470, 940, 0, 0);
    PP.physics.add(s, platform21, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform21, collision_platform);
    PP.physics.set_collision_rectangle(platform21, 120, 50, 20, 16);

    platform24 = PP.assets.image.add(s, img_platform7, 5270, 3800, 0, 0); //piattaforma mobile verticale
    PP.physics.add(s, platform24, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform24, true);
    PP.physics.set_allow_gravity(platform24, false);    
    PP.physics.add_collider_f(s, player, platform24, collision_platform);
    PP.physics.set_velocity_y(platform24, 70);
    PP.physics.set_collision_rectangle(platform24, 120, 50, 16, 16);
    platform25 = PP.assets.image.add(s, img_platform7, 5270, 4200, 0, 0); //piattaforma mobile verticale
    PP.physics.add(s, platform25, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform25, true);
    PP.physics.set_allow_gravity(platform25, false);    
    PP.physics.add_collider_f(s, player, platform25, collision_platform);
    PP.physics.set_velocity_y(platform25, 70);
    PP.physics.set_collision_rectangle(platform25, 120, 50, 16, 16);

    platform29 = PP.assets.image.add(s, img_platform7, 5850, 4700, 0, 0);
    PP.physics.add(s, platform29, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform29, collision_platform);
    PP.physics.set_collision_rectangle(platform29, 120, 50, 16, 16);
    platform30 = PP.assets.image.add(s, img_platform7, 5400, 5000, 0, 0);
    PP.physics.add(s, platform30, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform30, collision_platform);
    PP.physics.set_collision_rectangle(platform30, 120, 50, 16, 16);
    platform31 = PP.assets.image.add(s, img_platform7, 5150, 5150, 0, 0);
    PP.physics.add(s, platform31, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform31, collision_platform);
    PP.physics.set_collision_rectangle(platform31, 120, 50, 16, 16);
    
    //DOVE C'ERA SFIDA 2
    platform17 = PP.assets.image.add(s, img_platform7, 6370, 4450, 0, 0);
    PP.physics.add(s, platform17, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform17, collision_platform);
    PP.physics.set_collision_rectangle(platform17, 120, 50, 16, 16);
    platform22 = PP.assets.image.add(s,  img_platform6, 6060, 4600, 0, 0); //FLIPPA
    PP.physics.add(s, platform22, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform22, true);
    PP.physics.set_allow_gravity(platform22, false); 
    PP.physics.add_collider_f(s, player, platform22, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform22, 230, 70, 18, 14); 

    //BASSO CENTRO
    platform26 = PP.assets.image.add(s, img_platform7, 3600, 5350, 0, 0); //MOVIMENTO ORIZZONTALE
    PP.physics.add(s, platform26, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform26, true);
    PP.physics.set_allow_gravity(platform26, false);    
    PP.physics.add_collider_f(s, player, platform26, collision_platform);
    PP.physics.set_velocity_x(platform26, 100);
    PP.physics.set_collision_rectangle(platform26, 120, 50, 16, 16);
    platform28 = PP.assets.image.add(s, img_platform6, 3200, 5250, 0, 0); //FLIPPA
    PP.physics.add(s, platform28, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform28, true);
    PP.physics.set_allow_gravity(platform28, false); 
    PP.physics.add_collider_f(s, player, platform28, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform28, 230, 70, 18, 14);
    platform32 = PP.assets.image.add(s, img_platform7, 4300, 5200, 0, 0);
    PP.physics.add(s, platform32, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform32, collision_platform);
    PP.physics.set_collision_rectangle(platform32, 120, 50, 16, 16);

    platform33 = PP.assets.image.add(s, img_platform6, 2890, 4770, 0, 0); //FLIPPA
    PP.physics.add(s, platform33, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform33, true);
    PP.physics.set_allow_gravity(platform33, false); 
    PP.physics.add_collider_f(s, player, platform33, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform33, 230, 70, 18, 14);
    platform34 = PP.assets.image.add(s, img_platform7, 2750, 4588, 0, 0); //MOVIMENTO ORIZZONTALE
    PP.physics.add(s, platform34, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform34, true);
    PP.physics.set_allow_gravity(platform34, false);    
    PP.physics.add_collider_f(s, player, platform34, collision_platform);
    PP.physics.set_velocity_x(platform34, 100);
    PP.physics.set_collision_rectangle(platform34, 120, 50, 16, 16);
    platform51 = PP.assets.image.add(s, img_platform7, 3400, 4588, 0, 0); //MOVIMENTO ORIZZONTALE
    PP.physics.add(s, platform51, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform51, true);
    PP.physics.set_allow_gravity(platform51, false);    
    PP.physics.add_collider_f(s, player, platform51, collision_platform);
    PP.physics.set_velocity_x(platform51, 100);
    PP.physics.set_collision_rectangle(platform51, 120, 50, 16, 16);
    

    platform35 = PP.assets.image.add(s, img_platform10, 6800, 400, 0, 0); //piattaforma mobile verticale
    PP.physics.add(s, platform35, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform35, true);
    PP.physics.set_allow_gravity(platform35, false);    
    PP.physics.add_collider_f(s, player, platform35, collision_platform);
    PP.physics.set_velocity_y(platform35, 100);
    PP.physics.set_collision_rectangle(platform35, 120, 50, 16, 16);
    platform36 = PP.assets.image.add(s, img_platform10, 6630, 1240, 0, 0); 
    PP.physics.add(s, platform36, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform36, collision_platform);
    PP.physics.set_collision_rectangle(platform36, 120, 30, 16, 16);
    platform37 = PP.assets.image.add(s, img_platform8, 7100, 300, 0, 0);
    PP.physics.add(s, platform37, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform37, collision_platform);
    PP.physics.set_collision_rectangle(platform37, 220, 50, 20, 24);
    platform38 = PP.assets.image.add(s, img_platform9, 5600, 290, 0, 0); //flippa
    PP.physics.add(s, platform38, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform38, true);
    PP.physics.set_allow_gravity(platform38, false); 
    PP.physics.add_collider_f(s, player, platform38, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform38, 230, 70, 14, 26);
    platform39 = PP.assets.image.add(s, img_platform10, 5450, 560, 0, 0);
    PP.physics.add(s, platform39, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform39, collision_platform);
    PP.physics.set_collision_rectangle(platform39, 120, 50, 16, 16);
    platform40 = PP.assets.image.add(s, img_platform8, 5200, 410, 0, 0);
    PP.physics.add(s, platform40, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform40, collision_platform);
    PP.physics.set_collision_rectangle(platform40, 220, 50, 20, 24);
    platform41 = PP.assets.image.add(s, img_platform10, 6800, 1450, 0, 0); 
    PP.physics.add(s, platform41, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform41, collision_platform);
    PP.physics.set_collision_rectangle(platform41, 120, 30, 16, 16);
    platform42 = PP.assets.image.add(s, img_platform10, 6630, 1660, 0, 0); 
    PP.physics.add(s, platform42, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform42, collision_platform);
    PP.physics.set_collision_rectangle(platform42, 120, 30, 16, 16);
    platform43 = PP.assets.image.add(s, img_platform8, 6530, 1950, 0, 0);
    PP.physics.add(s, platform43, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform43, collision_platform);
    PP.physics.set_collision_rectangle(platform43, 220, 50, 20, 24);
    platform44 = PP.assets.image.add(s, img_platform9, 6890, 2050, 0, 0); //flippa
    PP.physics.add(s, platform44, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform44, true);
    PP.physics.set_allow_gravity(platform44, false); 
    PP.physics.add_collider_f(s, player, platform44, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform44, 230, 70, 14, 26);

    platform45 = PP.assets.image.add(s, img_platform2, 4180, 1750, 0, 0);
    PP.physics.add(s, platform45, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform45, collision_platform);
    PP.physics.set_collision_rectangle(platform45, 120, 50, 20, 16);
    platform46 = PP.assets.image.add(s, img_platform2, 4410, 1600, 0, 0);
    PP.physics.add(s, platform46, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform46, collision_platform);
    PP.physics.set_collision_rectangle(platform46, 120, 50, 20, 16);
    platform47 = PP.assets.image.add(s, img_platform1, 4600, 1700, 0, 0);
    PP.physics.add(s, platform47, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform47, true);
    PP.physics.set_allow_gravity(platform47, false);
    PP.physics.add_collider_f(s, player, platform47, collision_platform);
    PP.physics.set_velocity_x(platform47, 100);
    PP.physics.set_collision_rectangle(platform47, 220, 50, 20, 12);
    platform48 = PP.assets.image.add(s, img_platform10, 5300, 1550, 0, 0);
    PP.physics.add(s, platform48, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform48, collision_platform);
    PP.physics.set_collision_rectangle(platform48, 120, 50, 16, 16);
    platform49 = PP.assets.image.add(s, img_platform10, 5520, 1400, 0, 0);
    PP.physics.add(s, platform49, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform49, collision_platform);
    PP.physics.set_collision_rectangle(platform49, 120, 50, 16, 16);
    platform50 = PP.assets.image.add(s, img_platform8, 5740, 1500, 0, 0);
    PP.physics.add(s, platform50, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform50, collision_platform);
    PP.physics.set_collision_rectangle(platform50, 220, 50, 20, 24);
    platform52 = PP.assets.image.add(s, img_platform9, 5110, 1250, 0, 0); //piattaforma che flippa
    PP.physics.add(s, platform52, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform52, true);
    PP.physics.set_allow_gravity(platform52, false); 
    PP.physics.add_collider_f(s, player, platform52, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform52, 230, 70, 14, 26); 
    platform53 = PP.assets.image.add(s, img_platform10, 5200, 950, 0, 0);
    PP.physics.add(s, platform53, PP.physics.type.STATIC);   
    PP.physics.add_collider_f(s, player, platform53, collision_platform);
    PP.physics.set_collision_rectangle(platform53, 120, 50, 16, 16);
    platform54 = PP.assets.image.add(s, img_platform8, 5500, 1100, 0, 0);
    PP.physics.add(s, platform54, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, platform54, collision_platform);
    PP.physics.set_collision_rectangle(platform54, 220, 50, 20, 24);
    platform55 = PP.assets.image.add(s, img_platform10, 5500, 800, 0, 0);
    PP.physics.add(s, platform55, PP.physics.type.STATIC);   
    PP.physics.add_collider_f(s, player, platform55, collision_platform);
    PP.physics.set_collision_rectangle(platform55, 120, 50, 16, 16);

    platform56 = PP.assets.image.add(s, img_platform4, 1250, 2650, 0, 0);
    PP.physics.add(s, platform56, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform56, collision_platform);
    PP.physics.set_collision_rectangle(platform56, 120, 50, 30, 28);
    platform57 = PP.assets.image.add(s, img_platform4, 1480, 2500, 0, 0);
    PP.physics.add(s, platform57, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform57, collision_platform);
    PP.physics.set_collision_rectangle(platform57, 120, 50, 30, 28);
    platform58 = PP.assets.image.add(s, img_platform10, 1200, 2100, 0, 0);
    PP.physics.add(s, platform58, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform58, collision_platform);
    PP.physics.set_collision_rectangle(platform58, 120, 50, 16, 16);
    platform59 = PP.assets.image.add(s, img_platform10, 1450, 2250, 0, 0);
    PP.physics.add(s, platform59, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform59, collision_platform);
    PP.physics.set_collision_rectangle(platform59, 120, 50, 16, 16);
    platform60 = PP.assets.image.add(s, img_platform9, 2500, 1990, 0, 0); //piattaforma che flippa
    PP.physics.add(s, platform60, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform60, true);
    PP.physics.set_allow_gravity(platform60, false); 
    PP.physics.add_collider_f(s, player, platform60, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform60, 230, 70, 14, 26); 
    platform61 = PP.assets.image.add(s, img_platform10, 2900, 2180, 0, 0);
    PP.physics.add(s, platform61, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform61, collision_platform);
    PP.physics.set_collision_rectangle(platform61, 120, 50, 16, 16);
    platform62 = PP.assets.image.add(s, img_platform2, 1700, 2100, 0, 0);
    PP.physics.add(s, platform62, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform62, true);
    PP.physics.set_allow_gravity(platform62, false);
    PP.physics.add_collider_f(s, player, platform62, collision_platform);
    PP.physics.set_velocity_x(platform62, 100);
    PP.physics.set_collision_rectangle(platform62, 120, 50, 20, 16);

    platform63 = PP.assets.image.add(s, img_platform4, 720, 2700, 0, 0);
    PP.physics.add(s, platform63, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform63, collision_platform);
    PP.physics.set_collision_rectangle(platform63, 120, 50, 30, 28);
    platform64 = PP.assets.image.add(s, img_platform4, 480, 2550, 0, 0);
    PP.physics.add(s, platform64, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform64, collision_platform);
    PP.physics.set_collision_rectangle(platform64, 120, 50, 30, 28);
    platform65 = PP.assets.image.add(s, img_platform3, 400, 2950, 0, 0);
    PP.physics.add(s, platform65, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform65, collision_platform);
    PP.physics.set_collision_rectangle(platform65, 220, 50, 30, 30);
    platform66 = PP.assets.image.add(s, img_platform10, 200, 2800, 0, 0);
    PP.physics.add(s, platform66, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform66, true);
    PP.physics.set_allow_gravity(platform66, false);    
    PP.physics.add_collider_f(s, player, platform66, collision_platform);
    PP.physics.set_velocity_y(platform66, 100);
    PP.physics.set_collision_rectangle(platform66, 120, 50, 16, 16);

    platform67 = PP.assets.image.add(s, img_platform5, 510, 3400, 0, 0);
    PP.physics.add(s, platform67, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform67, collision_platform);
    PP.physics.set_collision_rectangle(platform67, 220, 50, 20, 12);
    platform68 = PP.assets.image.add(s, img_platform7, 800, 3500, 0, 0);
    PP.physics.add(s, platform68, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform68, collision_platform);
    PP.physics.set_collision_rectangle(platform68, 120, 50, 16, 16);
    platform69 = PP.assets.image.add(s, img_platform7, 1200, 3650, 0, 0);
    PP.physics.add(s, platform69, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform69, collision_platform);
    PP.physics.set_collision_rectangle(platform69, 120, 50, 16, 16);
    platform70 = PP.assets.image.add(s, img_platform7, 330, 3250, 0, 0);
    PP.physics.add(s, platform70, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform70, collision_platform);
    PP.physics.set_collision_rectangle(platform70, 120, 50, 16, 16);
    platform71 = PP.assets.image.add(s, img_platform10, 600, 3800, 0, 0); //verticale
    PP.physics.add(s, platform71, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform71, true);
    PP.physics.set_allow_gravity(platform71, false);    
    PP.physics.add_collider_f(s, player, platform71, collision_platform);
    PP.physics.set_velocity_y(platform71, 100);
    PP.physics.set_collision_rectangle(platform71, 120, 50, 16, 16);
    platform72 = PP.assets.image.add(s, img_platform10, 150, 3900, 0, 0);
    PP.physics.add(s, platform72, PP.physics.type.STATIC);     
    PP.physics.add_collider_f(s, player, platform72, collision_platform);
    PP.physics.set_collision_rectangle(platform72, 120, 50, 16, 16);
    platform73 = PP.assets.image.add(s, img_platform7, 1000, 4100, 0, 0);
    PP.physics.add(s, platform73, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform73, collision_platform);
    PP.physics.set_collision_rectangle(platform73, 120, 50, 16, 16);
    platform74 = PP.assets.image.add(s, img_platform7, 400, 3800, 0, 0);
    PP.physics.add(s, platform74, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform74, collision_platform);
    PP.physics.set_collision_rectangle(platform74, 120, 50, 16, 16);
    platform75 = PP.assets.image.add(s, img_platform7, 800, 3950, 0, 0);
    PP.physics.add(s, platform75, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform75, collision_platform);
    PP.physics.set_collision_rectangle(platform75, 120, 50, 16, 16);
    platform76 = PP.assets.image.add(s, img_platform10, 1200, 4250, 0, 0);
    PP.physics.add(s, platform76, PP.physics.type.STATIC);     
    PP.physics.add_collider_f(s, player, platform76, collision_platform);
    PP.physics.set_collision_rectangle(platform76, 120, 50, 16, 16);
    platform77 = PP.assets.image.add(s, img_platform10, 400, 4300, 0, 0); //verticale
    PP.physics.add(s, platform77, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform77, true);
    PP.physics.set_allow_gravity(platform77, false);    
    PP.physics.add_collider_f(s, player, platform77, collision_platform);
    PP.physics.set_velocity_y(platform77, 100);
    PP.physics.set_collision_rectangle(platform77, 120, 50, 16, 16);
    platform78 = PP.assets.image.add(s, img_platform10, 50, 5650, 0, 0);
    PP.physics.add(s, platform78, PP.physics.type.STATIC);     
    PP.physics.add_collider_f(s, player, platform78, collision_platform);
    PP.physics.set_collision_rectangle(platform78, 120, 50, 16, 16);
    platform79 = PP.assets.image.add(s, img_platform9, 350, 5500, 0, 0); //flippa
    PP.physics.add(s, platform79, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform79, true);
    PP.physics.set_allow_gravity(platform79, false); 
    PP.physics.add_collider_f(s, player, platform79, collision_platform_flip);
    PP.physics.set_collision_rectangle(platform79, 230, 70, 14, 26);
    platform80 = PP.assets.image.add(s, img_platform7, 970, 5400, 0, 0);
    PP.physics.add(s, platform80, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform80, collision_platform);
    PP.physics.set_collision_rectangle(platform80, 120, 50, 16, 16);
    platform81 = PP.assets.image.add(s, img_platform10, 1100, 5050, 0, 0); //verticale
    PP.physics.add(s, platform81, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform81, true);
    PP.physics.set_allow_gravity(platform81, false);    
    PP.physics.add_collider_f(s, player, platform81, collision_platform);
    PP.physics.set_velocity_y(platform81, 150);
    PP.physics.set_collision_rectangle(platform81, 120, 50, 16, 16);
    platform82 = PP.assets.image.add(s, img_platform5, 700, 5050, 0, 0);
    PP.physics.add(s, platform82, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform82, collision_platform);
    PP.physics.set_collision_rectangle(platform82, 220, 50, 20, 12);
    platform83 = PP.assets.image.add(s, img_platform7, 150, 4300, 0, 0);
    PP.physics.add(s, platform83, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform83, collision_platform);
    PP.physics.set_collision_rectangle(platform83, 120, 50, 16, 16);

    platform84 = PP.assets.image.add(s, img_platform5, 1850, 5230, 0, 0);
    PP.physics.add(s, platform84, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform84, collision_platform);
    PP.physics.set_collision_rectangle(platform84, 220, 50, 20, 12);
    platform85 = PP.assets.image.add(s, img_platform7, 1600, 5360, 0, 0);
    PP.physics.add(s, platform85, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform85, collision_platform);
    PP.physics.set_collision_rectangle(platform85, 120, 50, 16, 16);
    platform86 = PP.assets.image.add(s, img_platform7, 2070, 5290, 0, 0);
    PP.physics.add(s, platform86, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform86, collision_platform);
    PP.physics.set_collision_rectangle(platform86, 120, 50, 16, 16);
    platform87 = PP.assets.image.add(s, img_platform7, 2170, 4960, 0, 0);
    PP.physics.add(s, platform87, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform87, collision_platform);
    PP.physics.set_collision_rectangle(platform87, 120, 50, 16, 16);
}

function update_platform(s) {
    // MOVIMENTO ORIZZONTALE
    if(platform2.geometry.x >= 4100) {PP.physics.set_velocity_x(platform2, -100);} //dx
    else if(platform2.geometry.x <= 3600) {PP.physics.set_velocity_x(platform2, 100);} //sx

    if(platform26.geometry.x >= 4400) {PP.physics.set_velocity_x(platform26, -100);} //dx
    else if(platform26.geometry.x <= 3550) {PP.physics.set_velocity_x(platform26, 100);} //sx

    if(platform34.geometry.x >= 2750) {PP.physics.set_velocity_x(platform34, -100);} //dx
    else if(platform34.geometry.x <= 2330) {PP.physics.set_velocity_x(platform34, 100);} //sx
    if(platform51.geometry.x >= 3400) {PP.physics.set_velocity_x(platform51, -100);} //dx
    else if(platform51.geometry.x <= 2980) {PP.physics.set_velocity_x(platform51, 100);} //sx

    if(platform47.geometry.x >= 5000) {PP.physics.set_velocity_x(platform47, -100);} //dx
    else if(platform47.geometry.x <= 4650) {PP.physics.set_velocity_x(platform47, 100);} //sx

    if(platform62.geometry.x >= 2250) {PP.physics.set_velocity_x(platform62, -100);} //dx
    else if(platform62.geometry.x <= 1750) {PP.physics.set_velocity_x(platform62, 100);} //sx

    // MOVIMENTO VERTICALE
    if(platform24.geometry.y >= 4100) {PP.physics.set_velocity_y(platform24, -100);} //giu
    else if(platform24.geometry.y <= 3800) {PP.physics.set_velocity_y(platform24, 100);} //su
    if(platform25.geometry.y >= 4500) {PP.physics.set_velocity_y(platform25, -100);} //giu
    else if(platform25.geometry.y <= 4200) {PP.physics.set_velocity_y(platform25, 100);} //su
    if(platform35.geometry.y >= 1100) {PP.physics.set_velocity_y(platform35, -100);} //giu
    else if(platform35.geometry.y <= 350) {PP.physics.set_velocity_y(platform35, 100);} //su
    if(platform66.geometry.y >= 2850) {PP.physics.set_velocity_y(platform66, -100);} //giu
    else if(platform66.geometry.y <= 2600) {PP.physics.set_velocity_y(platform66, 100);} //su
    if(platform71.geometry.y >= 4600) {PP.physics.set_velocity_y(platform71, -100);} //giu
    else if(platform71.geometry.y <= 3800) {PP.physics.set_velocity_y(platform71, 100);} //su
    if(platform77.geometry.y >= 5100) {PP.physics.set_velocity_y(platform77, -100);} //giu
    else if(platform77.geometry.y <= 4300) {PP.physics.set_velocity_y(platform77, 100);} //su
    if(platform81.geometry.y >= 5250) {PP.physics.set_velocity_y(platform81, -100);} //giu
    else if(platform81.geometry.y <= 4380) {PP.physics.set_velocity_y(platform81, 100);} //su
}
