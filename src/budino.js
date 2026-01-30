let img_budino;
let budino;
let can_create_budino = true;

function preload_budino(s) {
   img_budino = PP.assets.sprite.load_spritesheet(s, "assets/images/budino.png", 91, 88);
}


function collision_budino(s, player, budino) {
   player.is_on_budino = true;
  
   if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
       if(player.is_on_budino) {
           PP.physics.set_velocity_y(player, -1.5 * player_jump);
       }
   }
}


function create_budino(s) {
   let curr_budini = PP.game_state.get_variable("budini"); 
   if (!can_create_budino || curr_budini <= 0) return;
   if (!player.is_on_floor && !player.is_on_platform && !player.is_on_casa) return; // non va se player in aria

   budino = PP.assets.sprite.add(s, img_budino, player.geometry.x+10, player.geometry.y-100, 0, 0);
   PP.physics.add(s, budino, PP.physics.type.STATIC); // nella fisica il giocatore deve essere un'entità dinamica
   PP.physics.add_collider_f(s, player, budino, collision_budino);
   PP.physics.set_collision_rectangle(budino, 30, 50, 30, 18);
   PP.assets.sprite.animation_add(budino, "budino", 0, 1, 1, -1);  
   PP.assets.sprite.animation_play(budino, "budino");

   PP.game_state.set_variable("budini", curr_budini - 1);

   // Blocca la creazione temporaneamente
   can_create_budino = false;
   PP.timers.add_timer(s, 1000, () => {can_create_budino = true}, false);
}

function enable_budino_creation(s) { // Funzione che viene chiamata allo scadere del timer
   can_create_budino = true; //ora posso creare budino
}


function update_budino(s, player) {
   if(budino === false) return;


}