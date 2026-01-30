function collision_floor(s, player, floor) {
   // Funzione di collisione con il floor, devo verificare che il giocatore si trovi sopra
   // in quel caso aggiorno la variabile che abilita il salto (v. player.js) 
    player.is_on_floor = true;
    
} 


function create_floor(s, player) {
    floor1 = PP.shapes.rectangle_add(s, 1820, 4130, 740, 1840, "0x000000", 0); 
    PP.physics.add(s, floor1, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor1, collision_floor);

    floor2 = PP.shapes.rectangle_add(s, 1576, 3060, 1063, 450, "0x000000", 0);
    PP.physics.add(s, floor2, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor2, collision_floor);

    floor3 = PP.shapes.rectangle_add(s, 2010, 2730, 200, 350, "0x000000", 0);
    PP.physics.add(s, floor3, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor3, collision_floor);

    floor4 = PP.shapes.rectangle_add(s, 2220, 2512, 620, 280, "0x000000", 0);
    PP.physics.add(s, floor4, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor4, collision_floor);

    floor5 = PP.shapes.rectangle_add(s, 1258, 1556, 2700, 570, "0x000000", 0);
    PP.physics.add(s, floor5, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor5, collision_floor);

    floor6 = PP.shapes.rectangle_add(s, 390, 2024, 900, 554, "0x000000", 0);
    PP.physics.add(s, floor6, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor6, collision_floor);

    floor7 = PP.shapes.rectangle_add(s, 430, 660 , 3000, 1250, "0x000000", 0);
    PP.physics.add(s, floor7, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor7, collision_floor);

    floor8 = PP.shapes.rectangle_add(s, 4330, 996, 1500, 712, "0x000000", 0);
    PP.physics.add(s, floor8, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor8, collision_floor);

    floor9 = PP.shapes.rectangle_add(s, 3804, 400, 2550, 740, "0x000000", 0);
    PP.physics.add(s, floor9, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor9, collision_floor);

    floor10 = PP.shapes.rectangle_add(s, 3274, 2240, 458, 710, "0x000000", 0);
    PP.physics.add(s, floor10, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor10, collision_floor);

    floor11 = PP.shapes.rectangle_add(s, 5270, 2244, 2250, 704, "0x000000", 0);
    PP.physics.add(s, floor11, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor11, collision_floor);

    floor12 = PP.shapes.rectangle_add(s, 6240, 1680, 462, 700, "0x000000", 0);
    PP.physics.add(s, floor12, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor12, collision_floor);

    floor13 = PP.shapes.rectangle_add(s, 6170, 1002, 600, 710, "0x000000", 0);
    PP.physics.add(s, floor13, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor13, collision_floor);

    floor14 = PP.shapes.rectangle_add(s, 3236, 3790, 2251, 1250, "0x000000", 0);
    PP.physics.add(s, floor14, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor14, collision_floor);
    
    floor15 = PP.shapes.rectangle_add(s, 4300, 4270, 1420, 1500, "0x000000", 0);
    PP.physics.add(s, floor15, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor15, collision_floor);

    floor16 = PP.shapes.rectangle_add(s, 6440, 5860, 1140, 2000, "0x000000", 0);
    PP.physics.add(s, floor16, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor16, collision_floor);

    floor17 = PP.shapes.rectangle_add(s, 3680, 6550, 4480, 2000, "0x000000", 0);
    PP.physics.add(s, floor17, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor17, collision_floor);

    floor18 = PP.shapes.rectangle_add(s, 2770, 5844, 310, 1855, "0x000000", 0);
    PP.physics.add(s, floor18, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor18, collision_floor);

    floor19 = PP.shapes.rectangle_add(s, 6670, 3910, 2000, 792, "0x000000", 0);
    PP.physics.add(s, floor19, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor19, collision_floor);

    floor20 = PP.shapes.rectangle_add(s, 8116, 3560, 3500, 800, "0x000000", 0);
    PP.physics.add(s, floor20, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor20, collision_floor);

    floor21 = PP.shapes.rectangle_add(s, 9786, 2800, 200, 2000, "0x000000", 0);
    PP.physics.add(s, floor21, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor21, collision_floor);

    floor22 = PP.shapes.rectangle_add(s, 8590, 1270, 3000, 1314, "0x000000", 0);
    PP.physics.add(s, floor22, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor22, collision_floor);

    floor23 = PP.shapes.rectangle_add(s, 800, 6254, 1500, 400, "0x000000", 0);
    PP.physics.add(s, floor23, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor23, collision_floor);

    floor24 = PP.shapes.rectangle_add(s, 30, 4000, 100, 10000, "0x000000", 0);
    PP.physics.add(s, floor24, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor24, collision_floor);

    floor25 = PP.shapes.rectangle_add(s, 5000, 30, 10000, 150, "0x000000", 0);
    PP.physics.add(s, floor25, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor25, collision_floor);

    floor26 = PP.shapes.rectangle_add(s, 8642, 1010, 2100, 2020, "0x000000", 0);
    PP.physics.add(s, floor26, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor26, collision_floor);

    floor27 = PP.shapes.rectangle_add(s, 7100, 4668, 1140, 900, "0x000000", 0);
    PP.physics.add(s, floor27, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor27, collision_floor);

    floor28 = PP.shapes.rectangle_add(s, 1080, 3188, 700, 170, "0x000000", 0);
    PP.physics.add(s, floor28, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor28, collision_floor);

    floor29 = PP.shapes.rectangle_add(s, 9300, 2220, 800, 800, "0x000000", 0);
    PP.physics.add(s, floor29, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor29, collision_floor);

    
}


