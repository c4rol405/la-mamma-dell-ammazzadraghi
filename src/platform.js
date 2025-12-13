let img_platform1;
let platform1;
let img_platform2;
let platform2;

//ricordarsi di farle max 150 di distanza

function preload_platform(s) {
    img_platform1 = PP.assets.image.load(s, "assets/images/greenplatform2.png");
    img_platform2 = PP.assets.image.load(s, "assets/images/woodplatform2.png");
}

function collision_platform(s, player, platform) {
//Funzione di collisione con le piattaforme, devo verificare che il giocatore si trovi sopra e in quel caso aggiorno la variabile che abilita il salto
    if( player.geometry.x >= platform.geometry.x &&
        player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
            player.is_on_platform = true;
    }
}
//fondamentale metterla altrimenti non risulta che il player sia sulla piattaforma

function create_platform(s, player) {
    //platform centrali
    platform1 = PP.assets.image.add(s, img_platform1, 3350, 3054, 0, 0);
    PP.physics.add(s, platform1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform1, collision_platform);
    PP.physics.set_collision_rectangle(platform1, 230, 40, 10, 20);

    platform2 = PP.assets.image.add(s, img_platform1, 4100, 2950, 0, 0); //piattaforma mobile orizzontale
    PP.physics.add(s, platform2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform2, true);
    PP.physics.set_allow_gravity(platform2, false);    
    PP.physics.add_collider_f(s, player, platform2, collision_platform);
    PP.physics.set_velocity_x(platform2, 100);
    PP.physics.set_collision_rectangle(platform2, 230, 40, 10, 20);

    platform3 = PP.assets.image.add(s, img_platform2, 4450, 3150, 0, 0);
    PP.physics.add(s, platform3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform3, collision_platform);
    PP.physics.set_collision_rectangle(platform3, 230, 40, 10, 20);
    platform4 = PP.assets.image.add(s, img_platform2, 4800, 3250, 0, 0);
    PP.physics.set_collision_rectangle(platform1, 230, 40, 10, 20);
    PP.physics.add(s, platform4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform4, collision_platform);
    PP.physics.set_collision_rectangle(platform4, 230, 40, 10, 20);
    platform5 = PP.assets.image.add(s, img_platform2, 5600, 3250, 0, 0);
    PP.physics.add(s, platform5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform5, collision_platform);
    PP.physics.set_collision_rectangle(platform5, 230, 40, 10, 20);
    platform6 = PP.assets.image.add(s, img_platform2, 5950, 3150, 0, 0);
    PP.physics.add(s, platform6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform6, collision_platform);
    PP.physics.set_collision_rectangle(platform6, 230, 40, 10, 20);

    platform7 = PP.assets.image.add(s, img_platform1, 5200, 3070, 0, 0); //piattaforma che scompare
    PP.physics.add(s, platform7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform7, collision_platform);
    PP.physics.set_collision_rectangle(platform7, 230, 40, 10, 20);

    platform8 = PP.assets.image.add(s, img_platform1, 3924, 2750, 0, 0);
    PP.physics.add(s, platform8, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform8, collision_platform);
    PP.physics.set_collision_rectangle(platform8, 230, 40, 10, 20);
    platform9 = PP.assets.image.add(s, img_platform1, 3510, 2600, 0, 0);
    PP.physics.add(s, platform9, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform9, collision_platform);
    PP.physics.set_collision_rectangle(platform9, 230, 40, 10, 20);
    platform10 = PP.assets.image.add(s, img_platform1, 3924, 2450, 0, 0);
    PP.physics.add(s, platform10, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform10, collision_platform);
    PP.physics.set_collision_rectangle(platform10, 230, 40, 10, 20);

    platform11 = PP.assets.image.add(s, img_platform1, 3550, 2250, 0, 0); //piattaforma che flippa
    PP.physics.add(s, platform11, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform11, true);
    PP.physics.set_allow_gravity(platform11, false); 
    PP.physics.add_collider_f(s, player, platform11, collision_platform);
    PP.physics.set_collision_rectangle(platform11, 230, 40, 10, 20);

}

function update_platform(s) {
// Aggiorno la velocita' della piattaforma mobile nel caso in cui si trovi al limite destro o il limite sinistro scelto

    if(platform2.geometry.x >= 4100) {      //limite destro
        PP.physics.set_velocity_x(platform2, -100);
    }
    else if(platform2.geometry.x <= 3700) {     //limite sinistro
        PP.physics.set_velocity_x(platform2, 100);
    }


}
