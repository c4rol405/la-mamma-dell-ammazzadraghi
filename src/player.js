let img_player;
let player;
let player_x = 2300; //dove spawna
let player_y = 3198;
let player_speed = 300;

let floor_height = 200;
let max_jump_height = 200;
let jump_size = 15;
let player_jump = 700

function preload_player(s) {
    img_player = PP.assets.sprite.load_spritesheet(s, "assets/images/player.png", 4000, 400);
}

function create_player(s) {
    player = PP.assets.sprite.add(s, img_player, player_x, player_y, 0.5, 1);
    PP.physics.add(s, player, PP.physics.type.DYNAMIC);
    player.geometry.scale_x = 0.3;
    player.geometry.scale_y = 0.3;
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); // nella fisica il giocatore deve essere un'entità dinamica
    //PP.physics.set_collision_rectangle(player, 180, 410, 150, 50);  // per regolare la hitbox del mio player

}

function update_player(s) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.RIGHT)) {
            PP.physics.set_velocity_x(player, player_speed);
            player.geometry.flip_x = false;
    } else if (PP.interactive.kb.is_key_down(s, PP.key_codes.LEFT)) {
            PP.physics.set_velocity_x(player, -player_speed);
            player.geometry.flip_x = true;
    } else {
            PP.physics.set_velocity_x(player, 0);
    }

    //prima era così e non funzionava, il prof diceva di sistemare mettendo is_on_floor oltre che is_on_platform
      if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
       if(player.is_on_platform || player.is_on_floor) {
           PP.physics.set_velocity_y(player, -player_jump);
       }
   }


    /*
    // salta
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE)) {
        if (player.geometry.y > floor_height - max_jump_height)
            player.geometry.y -= jump_size;
        console.log("Pressed spacebar.");
        next_animation = "jump";
    } 
    // controlla la caduta 
    if (PP.interactive.kb.is_key_up(s, PP.key_codes.SPACE) && player.geometry.y <= floor_height) {
        player.geometry.y += jump_size;
        next_animation = "jump";
    }
    */
   
   if(PP.interactive.kb.is_key_down(s, PP.key_codes.B)) {
       create_budino(s);
    }

 
    player.is_on_platform = false;
    player.is_on_floor = false

}




