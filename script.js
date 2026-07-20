/* SKY MAGIC */
const sky = document.getElementById("sky");

for (let i = 0; i < 120; i++) {
    let s = document.createElement("div");
    s.className = "star";
    s.style.top = Math.random() * 100 + "%";
    s.style.left = Math.random() * 100 + "%";
    sky.appendChild(s);
}
for (let i = 0; i < 10; i++) {
    let c = document.createElement("div");
    c.className = "candle";
    c.style.top = Math.random() * 80 + "%";
    c.style.left = Math.random() * 100 + "%";

    let f = document.createElement("div");
    f.className = "flame";

    c.appendChild(f);
    sky.appendChild(c);
}

/*======================================================
CUENTA REGRESIVA
======================================================*/

const fechaEvento = new Date("May 15, 2027 17:00:00").getTime();

function actualizarContador(){

    const ahora = new Date().getTime();

    const diferencia = fechaEvento - ahora;

    if(diferencia <= 0){

        document.getElementById("dias").textContent = "00";
        document.getElementById("horas").textContent = "00";
        document.getElementById("minutos").textContent = "00";
        document.getElementById("segundos").textContent = "00";

        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);


const music = document.getElementById("bg-music");
const btn = document.getElementById("music-btn");


btn.addEventListener("click", () => {


    if(music.paused){

        music.play();

        btn.innerHTML="🔊";

    }else{

        music.pause();

        btn.innerHTML="🎵";

    }


});