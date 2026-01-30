let fc;
let bgfc;
let fctohome;
let pulsantefc_home;

function preload (s) {
    fc = PP.assets.image.load (s, "assets/situe/f2.png"); 
    fctohome = PP.assets.image.load(s, "assets/icone/home.png");
}

function create (s) {
    bgfc = PP.assets.image.add (s, fc, 0, 0, 0, 0);

    pulsantefc_home = PP.assets.image.add(s, fctohome, 640, 650, 0.5, 0.5);
    pulsantemortetohome.geometry.scale_x = 0.08;
    pulsantemortetohome.geometry.scale_y = 0.08;
    PP.interactive.mouse.add(pulsantefc_home, "pointerdown", () => PP.scenes.start("home"));
}

function update (s) {

}

function destroy (s) {
    
}

PP.scenes.add("finalecorretto", preload, create, update, destroy);