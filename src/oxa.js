let casa1
let casa2
let casa3
let casa4
let casa5
let casa6
let casa7
let casa8
let casa9

function collision_casa(s, player, casa) {
    player.is_on_casa = true;
}

function create_casa(s, player) {
    casa1 = PP.shapes.rectangle_add(s, 6740, 2840, 290, 1, "0x000000", 0);
    PP.physics.add(s, casa1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, casa1, collision_casa);
    casa2 = PP.shapes.rectangle_add(s, 7050, 2690, 200, 1, "0x000000", 0);
    PP.physics.add(s, casa2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, casa2, collision_casa);
    casa3 = PP.shapes.rectangle_add(s, 7250, 2760, 250, 1, "0x000000", 0);
    PP.physics.add(s, casa3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, casa3, collision_casa);
    casa4 = PP.shapes.rectangle_add(s, 7500, 2610, 200, 1, "0x000000", 0);
    PP.physics.add(s, casa4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, casa4, collision_casa);
    casa5 = PP.shapes.rectangle_add(s, 7260, 2510, 80, 1, "0x000000", 0);
    PP.physics.add(s, casa5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, casa5, collision_casa);
    casa6 = PP.shapes.rectangle_add(s, 7500, 2370, 80, 1, "0x000000", 0);
    PP.physics.add(s, casa6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, casa6, collision_casa);
    casa7 = PP.shapes.rectangle_add(s, 7810, 2910, 300, 1, "0x000000", 0);
    PP.physics.add(s, casa7, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, casa7, collision_casa);
    casa8 = PP.shapes.rectangle_add(s, 8190, 3064, 160, 1, "0x000000", 0);
    PP.physics.add(s, casa8, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, casa8, collision_casa);
    casa9 = PP.shapes.rectangle_add(s, 8550, 3128, 200, 1, "0x000000", 0);
    PP.physics.add(s, casa9, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, casa9, collision_casa);
}

