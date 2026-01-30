let sprite_player;
let player;

let player_x = 2600; //dove spawna
let player_y = 3190;
let player_speed = 300;
let player_jump = 550;

let player_immunity = false;   // immunità temporanea dopo danno
let health = 3;                // vite del player
let move_disable = false;
let jump_disable = false;
let death_cause = null; // "lava" "fantasma"

let curr_anim = "stop"; //animazione corrente

let next_anim;
next_anim = curr_anim;
let morto = false;

function configure_player_animations(s) {
    // Configuro le animazioni secondo lo spritesheet
    PP.assets.sprite.animation_add(player, "walk", 10, 17, 12, -1);
    PP.assets.sprite.animation_add(player, "run", 20, 27, 12, -1);
    PP.assets.sprite.animation_add(player, "jump_up", 32, 34, 5, 0);
    PP.assets.sprite.animation_add(player, "jump_down", 35, 39, 5, 0);
    PP.assets.sprite.animation_add(player, "stop", 0, 9, 6, -1);
    PP.assets.sprite.animation_add(player, "hurt", 40, 44, 8, 0);
    PP.assets.sprite.animation_add(player, "die", 45, 49, 8, 0);
    
    PP.assets.sprite.animation_play(player, "stop");
}

function preload_player(s) {
    sprite_player = PP.assets.sprite.load_spritesheet(s, "assets/images/player.png", 196, 196);
}

function reset_player_state(s) {
    is_dead = false;
    move_disable = false;
    jump_disable = false;
    player_immunity = false;

    curr_anim = "stop";
    next_anim = "stop";
}

function create_player(s) {
    player = PP.assets.sprite.add(s, sprite_player, player_x, player_y, 0.5, 1);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(player, 60, 130, 70, 42);

    //disattivo il blocco del movimento creato dalla morte  
    PP.camera.start_follow(s, player, -235, 230);
    move_disable = false;

    reset_player_state(s);
}

function update_player(s) {
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.P)) { 
        console.log("Player position:", player.geometry.x, player.geometry.y);
    } //per capire dove posizionare cose

    // MOVIMENTO
    if (move_disable == false) {
        if (PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
            PP.physics.set_velocity_x(player, player_speed);
            next_anim = "walk";
        }
        else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
            PP.physics.set_velocity_x(player, -player_speed);
            next_anim = "walk";
        }
        else if (PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
            PP.physics.set_velocity_x(player, player_speed*2);
            next_anim = "run";
        }
        else if (PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
            PP.physics.set_velocity_x(player, -player_speed*2);
            next_anim = "run";
        }
        else {
            PP.physics.set_velocity_x(player, 0);
            next_anim = "stop";
        }
    }    
    else {
       PP.physics.set_velocity_x(player, 0);
    }


    // CREA BUDINO
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.B)) {
       create_budino(s);
    }

    // SALTO
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
       if(player.is_on_platform || player.is_on_floor || player.is_on_casa) {
           PP.physics.set_velocity_y(player, -player_jump);
       }
    }
    player.is_on_platform = false;
    player.is_on_floor = false; 
    player.is_on_casa = false;
    
    // Le animazioni del salto vengono gestite in base alla velocita' verticale
    if (PP.physics.get_velocity_y(player) > 0 && !player_immunity) next_anim = "jump_down";
    else if (PP.physics.get_velocity_y(player) < 0 && !player_immunity) next_anim = "jump_up";

    // Ora verifico l'animazione scelta:
    // - se e' uguale a quella attuale, non faccio niente
    // - se e' cambiata, la applico e aggiorno curr_anim
    if (next_anim != curr_anim) {
        curr_anim = next_anim;
        PP.assets.sprite.animation_play(player, next_anim);
    }

    // Logica per specchiare il giocatore:
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    }
    else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }
}

// FUNZIONE PER IL SALTO IN COLLISIONE
function salto (s, obj1, obj2) {
    // necessario per impedire che si possa saltare anche toccando il lato degli oggetti
    if (jump_disable != false) {
        if ((obj2).geometry.y >= ((obj1).geometry.y - 1)) {
            jump_disable = false;
        }
    }
}


function morte(s) {
    if (morto) return;
    morto = true;
    move_disable = true;
    jump_disable = true;
    player_immunity = true;
    PP.physics.set_velocity_x(player, 0);
    PP.physics.set_velocity_y(player, -30);
    PP.assets.sprite.animation_stop(player);
    curr_anim = "die";
    next_anim = "die";
    PP.assets.sprite.animation_play(player, "die");
    PP.timers.add_timer(s, 1000, () => {PP.scenes.start("gameover")}, false);
}