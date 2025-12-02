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
           PP.physics.set_velocity_y(player, -2 * player_jump);
       }
   }
}


function create_budino(s) {
   budino = PP.assets.image.add(s, img_budino, player.geometry.x+10, player.geometry.y-100, 0, 0);
   budino.geometry.scale_x = 0.3;
   budino.geometry.scale_y = 0.3;
   PP.physics.add(s, budino, PP.physics.type.STATIC); // nella fisica il giocatore deve essere un'entità dinamica
   PP.physics.add_collider_f(s, player, budino, collision_budino);


   if(can_create_budino === false) return; // se non posso creare, esci
   can_create_budino = false;     // blocco nuovo budino
   PP.timers.add_timer(s, 120, enable_budino_creation, false); // dopo 2 sec riattivo
}


function enable_budino_creation(s) { // Funzione che viene chiamata allo scadere del timer
   can_create_budino = true; //ora posso creare budino
}


function update_budino(s, player) {
   if(budino === false) return;


}
