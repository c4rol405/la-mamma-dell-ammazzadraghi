let go2;
let bgm2;
let m2tohome;
let pulsantem2_home;
let m2toagain;
let pulsantem2_again;

function preload (s) {
    go2 = PP.assets.image.load (s, "assets/situe/m2.png"); 
    m2tohome = PP.assets.image.load(s, "assets/icone/home_icona.png"); 
    m2toagain = PP.assets.image.load(s, "assets/icone/iconaagain.png");
}

function create (s) {
    bgm2 = PP.assets.image.add (s, go2, 0, 0, 0, 0);

    pulsantem2_home = PP.assets.image.add(s, m2tohome, 600, 630, 0.5, 0.5);
    PP.interactive.mouse.add(pulsantem2_home, "pointerdown", () => PP.scenes.start("home"));

    pulsantem2_again = PP.assets.image.add(s, m2toagain, 680, 630, 0.5, 0.5);
    pulsantem2_again.geometry.scale_x = 0.11;
    pulsantem2_again.geometry.scale_y = 0.11;
    PP.interactive.mouse.add(pulsantem2_again, "pointerdown", () => PP.scenes.start("scene"));

}

function update (s) {

}

function destroy (s) {
    
}

PP.scenes.add("gameover2", preload, create, update, destroy);