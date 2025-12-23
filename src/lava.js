function collision_lava(s, player, lava) {
    player.is_on_lava = true;
    morte(s); //da capire perché non c'è animazione in cui cade
    PP.timers.add_timer(s, 1000, () => {PP.scenes.start("gameover1");}, false);
}

function create_lava(s, player) {
    lava1 = PP.shapes.rectangle_add(s, 4660, 3540, 700, 100, "0x000000", 0);
        PP.physics.add(s, lava1, PP.physics.type.STATIC);
        PP.physics.add_collider_f(s, player, lava1, collision_lava);
    lava2 = PP.shapes.rectangle_add(s, 6020, 3540, 700, 100, "0x000000", 0);
        PP.physics.add(s, lava2, PP.physics.type.STATIC);
        PP.physics.add_collider_f(s, player, lava2, collision_lava);
    lava3 = PP.shapes.rectangle_add(s, 5380, 5530, 1000, 100, "0x000000", 0);
        PP.physics.add(s, lava3, PP.physics.type.STATIC);
        PP.physics.add_collider_f(s, player, lava3, collision_lava);
    lava4 = PP.shapes.rectangle_add(s, 2130, 5530, 1300, 100, "0x000000", 0);
        PP.physics.add(s, lava4, PP.physics.type.STATIC);
        PP.physics.add_collider_f(s, player, lava4, collision_lava);
    lava5 = PP.shapes.rectangle_add(s, 1300, 6030, 1000, 100, "0x000000", 0);
        PP.physics.add(s, lava5, PP.physics.type.STATIC);
        PP.physics.add_collider_f(s, player, lava5, collision_lava);
}