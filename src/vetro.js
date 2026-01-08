let img_verde;
let img_rosa;
let img_blu;

function preload_vetro(s) {
    img_verde = PP.assets.image.load(s, "assets/images/vetrov.png");
    img_rosa = PP.assets.image.load(s, "assets/images/vetror.png");
    img_blu = PP.assets.image.load(s, "assets/images/vetrob.png");
}

function collision_vetro(s, player, vetro) {
    PP.assets.destroy(vetro); // con la collisione sparisce il vetro
    let curr = PP.game_state.get_variable("consapevolezza"); // leggo lo score
    curr++; //aumento score
    if (curr > 20) curr = 20; //per sicurezza metto limite a 20
    PP.game_state.set_variable("consapevolezza", curr); //salvo nuovo valore
    update_hud_consapevolezza(s); //aggiorno HUD
}

function create_vetro(s, player) {
    let vetro1 = PP.assets.image.add(s, img_verde, 3760, 2800, 0, 0);
    PP.physics.add(s, vetro1, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro1, collision_vetro);
    PP.physics.set_collision_rectangle(vetro1, 40, 40, 14, 14);

    let vetro2 = PP.assets.image.add(s, img_rosa, 4386, 3150, 0, 0);
    PP.physics.add(s, vetro2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro2, collision_vetro);
    PP.physics.set_collision_rectangle(vetro2, 40, 40, 14, 14);

    let vetro3 = PP.assets.image.add(s, img_blu, 5250, 2950, 0, 0);
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

    let vetro8 = PP.assets.image.add(s, img_rosa, 5050, 4520, 0, 0);
    PP.physics.add(s, vetro8, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro8, collision_vetro);
    PP.physics.set_collision_rectangle(vetro8, 40, 40, 14, 14);

    let vetro9 = PP.assets.image.add(s, img_blu, 6408, 4390, 0, 0);
    PP.physics.add(s, vetro9, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro9, collision_vetro);
    PP.physics.set_collision_rectangle(vetro9, 40, 40, 14, 14);

    let vetro10 = PP.assets.image.add(s, img_verde, 3300, 5170, 0, 0);
    PP.physics.add(s, vetro10, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro10, collision_vetro);
    PP.physics.set_collision_rectangle(vetro10, 40, 40, 14, 14);

    let vetro11 = PP.assets.image.add(s, img_rosa, 2470, 4510, 0, 0);
    PP.physics.add(s, vetro11, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro11, collision_vetro);
    PP.physics.set_collision_rectangle(vetro11, 40, 40, 14, 14);

    let vetro12 = PP.assets.image.add(s, img_blu, 2350, 980, 0, 0);
    PP.physics.add(s, vetro12, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro12, collision_vetro);
    PP.physics.set_collision_rectangle(vetro12, 40, 40, 14, 14);

    let vetro13 = PP.assets.image.add(s, img_verde, 3448, 1340, 0, 0);
    PP.physics.add(s, vetro13, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro13, collision_vetro);
    PP.physics.set_collision_rectangle(vetro13, 40, 40, 14, 14);

    let vetro14 = PP.assets.image.add(s, img_rosa, 5170, 160, 0, 0);
    PP.physics.add(s, vetro14, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro14, collision_vetro);
    PP.physics.set_collision_rectangle(vetro14, 40, 40, 14, 14);

    let vetro15 = PP.assets.image.add(s, img_verde, 7500, 160, 0, 0);
    PP.physics.add(s, vetro15, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, vetro15, collision_vetro);
    PP.physics.set_collision_rectangle(vetro15, 40, 40, 14, 14);
}

function update_vetro(s) {
    
}

