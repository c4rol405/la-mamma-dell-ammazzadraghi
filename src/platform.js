let img_platform1;
let platform1;
let img_platform2;
let platform2;
let img_platform3;
let platform3;
let img_platform4;
let platform4;

function preload_platform(s) {
    img_platform1 = PP.assets.image.load(s, "assets/images/greenplatform2.png");
    img_platform2 = PP.assets.image.load(s, "assets/images/greenplatform3.png");
    img_platform3 = PP.assets.image.load(s, "assets/images/woodplatform2.png");
    img_platform4 = PP.assets.image.load(s, "assets/images/greenplatform1.png");
}

function collision_platform(s, player, platform) {
//Funzione di collisione con le piattaforme, devo verificare che il giocatore si trovi sopra e in quel caso aggiorno la variabile che abilita il salto
   if( player.geometry.x >= platform.geometry.x &&
       player.geometry.x <= platform.geometry.x + platform.geometry.display_width) {
           player.is_on_platform = true;
   }
   else {
       player.is_on_platform = false;
   }
}

//fondamentale metterla altrimenti non risulta che il player sia sulla piattaforma

function create_platform(s, player) {
    //platform centrali
    platform1 = PP.assets.image.add(s, img_platform1, 3100, 3054, 0, 0);
    PP.physics.add(s, platform1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform1, collision_platform);
    PP.physics.set_collision_rectangle(platform1, 200, 40, 20, 25)

    platform2 = PP.assets.image.add(s, img_platform2, 3200, 2900, 0, 0); //piattaforma mobile
    PP.physics.add(s, platform2, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platform2, true);
    PP.physics.set_allow_gravity(platform2, false);    
    PP.physics.add_collider_f(s, player, platform2, collision_platform);
    PP.physics.set_velocity_x(platform2, 200);
    PP.physics.set_collision_rectangle(platform2, 350, 40, 20, 25)


    platform3 = PP.assets.image.add(s, img_platform3, 4450, 3150, 0, 0);
    PP.physics.add(s, platform3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform3, collision_platform);
    PP.physics.set_collision_rectangle(platform3, 200, 40, 20, 25)
    platform4 = PP.assets.image.add(s, img_platform3, 4800, 3250, 0, 0);
    PP.physics.add(s, platform4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform4, collision_platform);
    PP.physics.set_collision_rectangle(platform4, 200, 40, 20, 25);
    platform5 = PP.assets.image.add(s, img_platform3, 5600, 3250, 0, 0);
    PP.physics.add(s, platform5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform5, collision_platform);
    
    platform6 = PP.assets.image.add(s, img_platform3, 5950, 3150, 0, 0);
    PP.physics.add(s, platform6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform6, collision_platform);

    platform7 = PP.assets.image.add(s, img_platform4, 5380, 3000, 0, 0); //piattaforma che scompare
    PP.physics.add(s, platform7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform7, collision_platform);


}

function update_platform(s) {
// Aggiorno la velocita' della piattaforma mobile nel caso in cui si trovi al limite destro o il limite sinistro scelto

    if(platform2.geometry.x >= 3900) {      //limite destro
        PP.physics.set_velocity_x(platform2, -100);
    }
    else if(platform2.geometry.x <= 3400) {     //limite sinistro
        PP.physics.set_velocity_x(platform2, 100);
    }


}
