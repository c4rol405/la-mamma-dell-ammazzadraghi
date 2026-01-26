let img_drago;
let drago;
let img_fireball;
let fireball;
let fireball_al_muro = false; 
let fireballD_al_muro = false; 

function preload_drago(s) {
    img_drago = PP.assets.sprite.load_spritesheet(s, "assets/images/drago.png", 480, 400);
    img_fireball = PP.assets.sprite.load_spritesheet(s, "assets/images/fireball.png", 220, 200);
}

function collision_fireball(s, fireball, player) {
    if (player_immunity) return; // evita danno multiplo istantaneo
    player_immunity = true; // imposta immunità temporanea
    PP.timers.add_timer(s, 1500, () => { player_immunity = false; }, false);

    // Blocca il movimento e fermalo
    move_disable = true;
    jump_disable = true;
    
    let vite = PP.game_state.get_variable("cuori"); // prendi vite correnti
    if (vite > 0) PP.game_state.set_variable("cuori", vite - 1); // decrementa vite se > 0
    
    // Se l’ultima vita è stata persa, chiama morte(s)
    if (vite - 1 <= 0) {
        morte(s, "fantasma");
    } else {
        next_anim = "hurt";
        move_disable = true;
        jump_disable = true;
        PP.timers.add_timer(s, 1500, () => {
            move_disable = false;
            jump_disable = false;
            player_immunity = false;
            PP.physics.set_immovable(player, false);
            next_anim = "stop";
        }, false);
    }
}

function spara_fireball(s) {
    // reset posizione (bocca del drago)
    fireballorizz.geometry.x = 3180;
    fireballorizz.geometry.y = 3150;

    // riparte animazione fuoco e velocità
    PP.assets.sprite.animation_play(fireballorizz, "fuoco");
    PP.physics.set_velocity_x(fireballorizz, -400);
    fireball_al_muro = false; // pronta per l’animazione muro
}
function spara_fireballD(s) {
    // reset posizione (bocca del drago)
    fireballdiag.geometry.x = 3180;
    fireballdiag.geometry.y = 3100;

    // riparte animazione fuoco e velocità
    PP.assets.sprite.animation_play(fireballdiag, "fuoco");
    PP.physics.set_velocity_x(fireballdiag, -400);
    PP.physics.set_velocity_y(fireballdiag, -200);
    fireballD_al_muro = false; // pronta per l’animazione muro
}


function create_drago(s) {
    drago = PP.assets.sprite.add(s, img_drago, 3050, 2950, 0, 0);
    PP.physics.add(s, drago, PP.physics.type.STATIC);
    PP.assets.sprite.animation_add(drago, "drago", 0, 12, 4, -1);
    PP.assets.sprite.animation_play(drago, "drago");

    let layer_drago = PP.layers.create(s);
    PP.layers.add_to_layer(layer_drago, drago);
    PP.layers.set_z_index(layer_drago, 4);
    
    fireballorizz = PP.assets.sprite.add(s, img_fireball, 3180, 3150, 0, 0);
    PP.physics.add(s, fireballorizz, PP.physics.type.DYNAMIC);
    fireballorizz.geometry.scale_x = 0.7;
    fireballorizz.geometry.scale_y = 0.7;
    PP.assets.sprite.animation_add(fireballorizz, "fuoco", 0, 4, 2, -1);
    PP.assets.sprite.animation_add(fireballorizz, "muro", 5, 8, 6, 0);
    PP.assets.sprite.animation_play(fireballorizz, "fuoco");
    PP.physics.set_allow_gravity(fireballorizz, false); 
    PP.physics.add_overlap_f(s, fireballorizz, player, collision_fireball);
    PP.physics.set_collision_rectangle(fireballorizz, 200, 80, 20, 60);
    // Primo sparo singolo
    PP.timers.add_timer(s, 600, () => spara_fireball(s), false);

    fireballdiag = PP.assets.sprite.add(s, img_fireball, 3180, 3100, 0, 0);
    PP.physics.add(s, fireballdiag, PP.physics.type.DYNAMIC);
    fireballdiag.geometry.scale_x = 0.7;
    fireballdiag.geometry.scale_y = 0.7;
    PP.assets.sprite.animation_add(fireballdiag, "fuoco", 0, 4, 2, -1);
    PP.assets.sprite.animation_add(fireballdiag, "muro", 5, 8, 6, 0);
    PP.assets.sprite.animation_play(fireballdiag, "fuoco");
    PP.physics.set_allow_gravity(fireballdiag, false); 
    PP.physics.add_overlap_f(s, fireballdiag, player, collision_fireball);
    PP.physics.set_collision_rectangle(fireballdiag, 200, 80, 20, 60);
    // Primo sparo singolo
    PP.timers.add_timer(s, 2000, () => spara_fireballD(s), false);
}


function update_drago(s) {
    if (fireballorizz.geometry.x < 2214 && !fireball_al_muro) {
        fireball_al_muro = true;
        PP.physics.set_velocity_x(fireballorizz, 0);
        fireballorizz.current_frame = 5; // primo frame della animazione muro
        PP.assets.sprite.animation_play(fireballorizz, "muro");
        // dopo animazione, reset posizione e riparti
        PP.timers.add_timer(s, 900, () => {
            fireballorizz.geometry.x = 3180;
            fireballorizz.geometry.y = 3150;
            PP.assets.sprite.animation_play(fireballorizz, "fuoco");
            PP.physics.set_velocity_x(fireballorizz, -400);
            fireball_al_muro = false;
        }, false);
    }

    if (fireballdiag.geometry.x < 2214 && !fireballD_al_muro) {
        fireballD_al_muro = true;
        PP.physics.set_velocity_x(fireballdiag, 0);
        PP.physics.set_velocity_y(fireballdiag, 0);
        fireballdiag.current_frame = 5; // primo frame della animazione muro
        PP.assets.sprite.animation_play(fireballdiag, "muro");
        // dopo animazione, reset posizione e riparti
        PP.timers.add_timer(s, 900, () => {
            fireballdiag.geometry.x = 3180;
            fireballdiag.geometry.y = 3100;
            PP.assets.sprite.animation_play(fireballdiag, "fuoco");
            PP.physics.set_velocity_x(fireballdiag, -400);
            PP.physics.set_velocity_y(fireballdiag, -200);
            fireballD_al_muro = false;
        }, false);
    }
}

function destroy_drago(s) {
}

PP.scenes.add("drago", preload, create, update, destroy);

