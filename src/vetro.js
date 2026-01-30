let img_verde;
let img_rosa;
let img_blu;

/* ================= PRELOAD ================= */

function preload_vetro(s) {
    img_verde = PP.assets.image.load(s, "assets/images/vetrov.png");
    img_rosa  = PP.assets.image.load(s, "assets/images/vetror.png");
    img_blu   = PP.assets.image.load(s, "assets/images/vetrob.png");
}

/* ================= DATI VETRI ================= */

const VETRI_DATA = [
    { id: 0,  img: "verde", x: 3760, y: 2800 },
    { id: 1,  img: "rosa",  x: 4386, y: 3150 },
    { id: 2,  img: "blu",   x: 5250, y: 2950 },
    { id: 3,  img: "verde", x: 6700, y: 2750 },
    { id: 4,  img: "rosa",  x: 7460, y: 2270 },
    { id: 5,  img: "blu",   x: 7780, y: 2830 },
    { id: 6,  img: "verde", x: 9000, y: 3100 },
    { id: 7,  img: "rosa",  x: 5050, y: 4520 },
    { id: 8,  img: "blu",   x: 6408, y: 4390 },
    { id: 9,  img: "verde", x: 3300, y: 5170 },
    { id: 10, img: "rosa",  x: 2470, y: 4510 },
    { id: 11, img: "blu",   x: 2350, y: 980  },
    { id: 12, img: "verde", x: 3448, y: 1340 },
    { id: 13, img: "rosa",  x: 5170, y: 160  },
    { id: 14, img: "blu",   x: 7500, y: 160  },
    { id: 15, img: "verde", x: 5900, y: 1460 },
    { id: 16, img: "rosa",  x: 900,  y: 1930 },
    { id: 17, img: "blu",   x: 180,  y: 2370 },
    { id: 18, img: "verde", x: 7000, y: 1740 },
    { id: 19, img: "rosa",  x: 260,  y: 5960 }
];

/* ================= COLLISIONE ================= */

function collision_vetro(s, player, vetro) {

    // segna vetro come preso
    let presi = PP.game_state.get_variable("vetri_presi");
    presi[vetro.vetro_id] = true;
    PP.game_state.set_variable("vetri_presi", presi);

    PP.assets.destroy(vetro);

    let curr = PP.game_state.get_variable("consapevolezza");
    curr++;
    if (curr > 20) curr = 20;
    PP.game_state.set_variable("consapevolezza", curr);

    update_hud_consapevolezza(s);
}

/* ================= CREATE ================= */

function create_vetro(s, player) {

    // inizializza stato vetri se non esiste
    if (PP.game_state.get_variable("vetri_presi") === undefined) {
        PP.game_state.set_variable("vetri_presi", {});
    }

    let presi = PP.game_state.get_variable("vetri_presi");

    for (let v of VETRI_DATA) {

        if (presi[v.id]) continue; // già preso → non ricreare

        let img =
            v.img === "verde" ? img_verde :
            v.img === "rosa"  ? img_rosa  :
                                img_blu;

        let vetro = PP.assets.image.add(s, img, v.x, v.y, 0, 0);
        vetro.vetro_id = v.id;

        PP.physics.add(s, vetro, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, vetro, collision_vetro);
        PP.physics.set_collision_rectangle(vetro, 40, 40, 14, 14);
    }
}

function update_vetro(s) {}