let fs;
let bgfs;
let fstohome;
let pulsantefs_home;
let fstoagain;
let pulsantefs_again;

function preload (s) {
    fs = PP.assets.image.load (s, "assets/situe/f1.png"); 
    fstohome = PP.assets.image.load(s, "assets/icone/home.png"); 
    fstoagain = PP.assets.image.load(s, "assets/icone/rigioca.png");
}

function create (s) {
    bgfs = PP.assets.image.add (s, fs, 0, 0, 0, 0);

    pulsantefs_home = PP.assets.image.add(s, fstohome, 600, 630, 0.5, 0.5);
    PP.interactive.mouse.add(pulsantefs_home, "pointerdown", () => PP.scenes.start("home"));

    pulsantefs_again = PP.assets.image.add(s, fstoagain, 680, 630, 0.5, 0.5);
    pulsantefs_again.geometry.scale_x = 0.08;
    pulsantefs_again.geometry.scale_y = 0.08;
    PP.interactive.mouse.add(pulsantefs_again, "pointerdown", () => PP.scenes.start("scene"));

}

function update (s) {

}

function destroy (s) {
    
}

PP.scenes.add("finalesbagliato", preload, create, update, destroy);