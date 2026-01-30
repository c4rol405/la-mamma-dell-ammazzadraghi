let img_platsfida1, img_platsfida2, img_platsfida3;

function preload_platsfida(s) {
    img_platsfida1 = PP.assets.image.load(s, "assets/platform/sfida1.png");
    img_platsfida2 = PP.assets.image.load(s, "assets/platform/sfida2.png");
    img_platsfida3 = PP.assets.image.load(s, "assets/platform/sfida3.png");
}

function collision_platsfida(s, player, platsfida) {
//Funzione di collisione con le piattaforme, devo verificare che il giocatore si trovi sopra e in quel caso aggiorno la variabile che abilita il salto
    if( player.geometry.x >= platsfida.geometry.x &&
        player.geometry.x <= platsfida.geometry.x + platsfida.geometry.display_width) {
            player.is_on_platform = true;
    }
}

function danno_platsfida(s, player) { //funziona esattamente come danno dell'enemy
    if (player_immunity) return;
    player_immunity = true;
    PP.timers.add_timer(s, 1000, () => { player_immunity = false; }, false);
    move_disable = true;
    jump_disable = true;
    let vite = PP.game_state.get_variable("cuori");
    if (vite > 0) PP.game_state.set_variable("cuori", vite - 1);
    if (vite - 1 <= 0) {
        morte(s);
    } else {
        next_anim = "hurt";
        PP.timers.add_timer(s, 1000, () => {
            move_disable = false;
            jump_disable = false;
            next_anim = "stop";
        }, false);
    }
}


function collision_platsfida_flip(s, player, platsfida) {
    // evita ri-trigger mentre è già in animazione
    if (!platsfida.is_flipping) {
        platsfida.is_flipping = true;
        // dopo tot diventa pericolosa
        PP.timers.add_timer(s, 1500, () => {
            platsfida.geometry.flip_y = true;
            platsfida.is_deadly = true;
        }, false);
        // dopo tot ritorna normale (lo sommo al timer del flip)
        PP.timers.add_timer(s, 3000, () => {
            platsfida.geometry.flip_y = false;
            platsfida.is_deadly = false;
            platsfida.is_flipping = false; // così ritorna ad essere pronta per il prossimo contatto
        }, false);
    }
    player.is_on_platform = true;
    if (platsfida.is_deadly) {
        danno_platsfida(s, player);
    }
}


function create_platsfida(s, player) {
    platsfida1 = PP.assets.image.add(s, img_platsfida1, 2000, 3400, 0, 0);
    PP.physics.add(s, platsfida1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida1, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida1, 100, 20, 0, 4);
    platsfida2 = PP.assets.image.add(s, img_platsfida1, 1500, 3140, 0, 0);
    PP.physics.add(s, platsfida2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida2, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida2, 100, 20, 0, 4);
    platsfida3 = PP.assets.image.add(s, img_platsfida1, 1700, 3200, 0, 0);
    PP.physics.add(s, platsfida3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida3, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida3, 100, 20, 0, 4);
    platsfida4 = PP.assets.image.add(s, img_platsfida1, 1800, 3550, 0, 0); //ok
    PP.physics.add(s, platsfida4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida4, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida4, 100, 20, 0, 4);
    platsfida5 = PP.assets.image.add(s, img_platsfida1, 2200, 3130, 0, 0);
    PP.physics.add(s, platsfida5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida5, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida5, 100, 20, 0, 4);

    platsfida6 = PP.assets.image.add(s, img_platsfida2, 1950, 3180, 0, 0);
    PP.physics.add(s, platsfida6, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platsfida6, true);
    PP.physics.set_allow_gravity(platsfida6, false); 
    PP.physics.add_collider_f(s, player, platsfida6, collision_platsfida_flip);
    PP.physics.set_collision_rectangle(platsfida6, 80, 20, 10, 4);
    platsfida7 = PP.assets.image.add(s, img_platsfida2, 1500, 3300, 0, 0);
    PP.physics.add(s, platsfida7, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platsfida7, true);
    PP.physics.set_allow_gravity(platsfida7, false); 
    PP.physics.add_collider_f(s, player, platsfida7, collision_platsfida_flip);
    PP.physics.set_collision_rectangle(platsfida7, 80, 20, 10, 4); 
    platsfida8 = PP.assets.image.add(s, img_platsfida2, 2100, 3550, 0, 0); //ok
    PP.physics.add(s, platsfida8, PP.physics.type.DYNAMIC); 
    PP.physics.set_immovable(platsfida8, true);
    PP.physics.set_allow_gravity(platsfida8, false); 
    PP.physics.add_collider_f(s, player, platsfida8, collision_platsfida_flip);
    PP.physics.set_collision_rectangle(platsfida8, 80, 20, 10, 4); 

    platsfida9 = PP.assets.image.add(s, img_platsfida3, 1800, 3080, 0, 0);
    PP.physics.add(s, platsfida9, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida9, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida9, 50, 20, 0, 4);
    platsfida10 = PP.assets.image.add(s, img_platsfida3, 2200, 3300, 0, 0);
    PP.physics.add(s, platsfida10, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida10, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida10, 50, 20, 0, 4);
    platsfida11 = PP.assets.image.add(s, img_platsfida3, 1850, 3300, 0, 0);
    PP.physics.add(s, platsfida11, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida11, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida11, 50, 20, 0, 4);
    platsfida12 = PP.assets.image.add(s, img_platsfida3, 1700, 3400, 0, 0);
    PP.physics.add(s, platsfida12, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platsfida12, collision_platsfida);
    PP.physics.set_collision_rectangle(platsfida12, 50, 20, 0, 4);

}