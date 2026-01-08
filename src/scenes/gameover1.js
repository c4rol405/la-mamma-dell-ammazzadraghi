let go1;
let bgm1;
let m1tohome;
let pulsantem1_home;
let m1toagain;
let pulsantem1_again;

function preload (s) {
    go1 = PP.assets.image.load (s, "assets/situe/m1.png"); 
    m1tohome = PP.assets.image.load(s, "assets/icone/home_icona.png"); 
    m1toagain = PP.assets.image.load(s, "assets/icone/iconaagain.png");
}

function create (s) {
    bgm1 = PP.assets.image.add (s, go1, 0, 0, 0, 0);

    pulsantem1_home = PP.assets.image.add(s, m1tohome, 600, 630, 0.5, 0.5);
    PP.interactive.mouse.add(pulsantem1_home, "pointerdown", () => PP.scenes.start("home"));

    pulsantem1_again = PP.assets.image.add(s, m1toagain, 680, 630, 0.5, 0.5);
    pulsantem1_again.geometry.scale_x = 0.11;
    pulsantem1_again.geometry.scale_y = 0.11;
    PP.interactive.mouse.add(pulsantem1_again, "pointerdown", () => PP.scenes.start("scene"));

}

function update (s) {

}

function destroy (s) {
    
}

PP.scenes.add("gameover1", preload, create, update, destroy);