let img_verde;
let img_rosa;
let img_blu;

function preload_vetro(s) {
    img_verde = PP.assets.image.load(s, "assets/images/vetrov.png");
    img_rosa = PP.assets.image.load(s, "assets/images/vetror.png");
    img_blu = PP.assets.image.load(s, "assets/images/vetrob.png");
}

function collision_vetro(s, player, vetro) {
    // In caso di collisione distruggo il funghetto
    PP.assets.destroy(vetro);
    // Poi aumento di 1 lo score
    //dlet prev_score = PP.gameState.get_variable("score");
    //PP.gameState.set_variable("score", prev_score+1);
}

function create_vetro(s, player) {
    let vetro1 = PP.assets.image.add(s, img_verde, 3760, 2800, 0, 0);
    PP.physics.add(s, vetro1, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro1, collision_vetro);
    PP.physics.set_collision_rectangle(vetro1, 40, 40, 14, 14);

    let vetro2 = PP.assets.image.add(s, img_rosa, 4380, 3180, 0, 0);
    PP.physics.add(s, vetro2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro2, collision_vetro);
    PP.physics.set_collision_rectangle(vetro2, 40, 40, 14, 14);

    let vetro3 = PP.assets.image.add(s, img_blu, 5290, 3000, 0, 0);
    PP.physics.add(s, vetro3, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro3, collision_vetro);
    PP.physics.set_collision_rectangle(vetro3, 40, 40, 14, 14);

    let vetro4 = PP.assets.image.add(s, img_verde, 6700, 2750, 0, 0);
    PP.physics.add(s, vetro4, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro4, collision_vetro);
    PP.physics.set_collision_rectangle(vetro4, 40, 40, 14, 14);

    let vetro5 = PP.assets.image.add(s, img_rosa, 7460, 2270, 0, 0);
    PP.physics.add(s, vetro5, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro5, collision_vetro);
    PP.physics.set_collision_rectangle(vetro5, 40, 40, 14, 14);

    let vetro6 = PP.assets.image.add(s, img_blu, 7780, 2830, 0, 0);
    PP.physics.add(s, vetro6, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro6, collision_vetro);
    PP.physics.set_collision_rectangle(vetro6, 40, 40, 14, 14);

    let vetro7 = PP.assets.image.add(s, img_verde, 9000, 3100, 0, 0);
    PP.physics.add(s, vetro7, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro7, collision_vetro);
    PP.physics.set_collision_rectangle(vetro7, 40, 40, 14, 14);

}

function update_vetro(s) {
    
}

