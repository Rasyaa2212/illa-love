// =======================
// COUNTER SEJAK 10 MARET 2025
// =======================

const startDate = new Date("2025-03-10T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();

    document.getElementById("time").innerHTML =
        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik ❤️`;

}

setInterval(updateCounter,1000);

updateCounter();


// =======================
// SLIDESHOW
// =======================

const slides = document.querySelectorAll(".slide");

let index = 0;

setInterval(()=>{

    slides[index].classList.remove("active");

    index++;

    if(index>=slides.length){

        index=0;

    }

    slides[index].classList.add("active");

},3000);


// =======================
// TOMBOL MUSIK
// =======================

const music = new Audio(
"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
);

const btn = document.getElementById("musicBtn");

btn.onclick = ()=>{

    if(music.paused){

        music.play();

        btn.innerHTML="⏸ Pause Musik";

    }else{

        music.pause();

        btn.innerHTML="🎵 Putar Musik";

    }

}
