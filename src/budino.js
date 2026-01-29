let img_budino;
let budino;
let can_create_budino = true;

function preload_budino(s) {
   img_budino = PP.assets.image.load(s, "assets/images/budino.png");
}


function collision_budino(s, player, budino) {
   //PP.physics.set_collision_rectangle(player, 180, 410, 150, 50);  // per regolare la hitbox del mio player
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

   budino = PP.assets.image.add(s, img_budino, player.geometry.x+10, player.geometry.y-100, 0, 0);
   budino.geometry.scale_x = 0.3;
   budino.geometry.scale_y = 0.3;
   PP.physics.add(s, budino, PP.physics.type.STATIC); // nella fisica il giocatore deve essere un'entità dinamica
   PP.physics.add_collider_f(s, player, budino, collision_budino);
   PP.physics.set_collision_rectangle(budino, 10, 40, 40, 30);

   PP.game_state.set_variable("budini", curr_budini - 1);

   // Blocca la creazione temporaneamente
   can_create_budino = false;
   PP.timers.add_timer(s, 1000, () => {can_create_budino = true}, false);
   //PP.timers.add_timer(s, 100, enable_budino_creation, false);
   //PP.timers.add_timer(s, 500, () => {enable_budino_creation = false}, false);
}

function enable_budino_creation(s) { // Funzione che viene chiamata allo scadere del timer
   can_create_budino = true; //ora posso creare budino
}


function update_budino(s, player) {
   if(budino === false) return;


}