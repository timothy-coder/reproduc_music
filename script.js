const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const progressBar = document.getElementById('progress-bar');
const lyrics = document.getElementById('lyrics');

const lyricsData = [
    { time: "0:00", text: "Negra, rara vez" },
    { time: "0:04", text: "Te vi bien 'tando con aquel" },
    { time: "0:04", text: "No lo sé, no me vo' a meter" },
    { time: "0:04", text: "Pero te noté algo mentirosa" },
    { time: "0:04", text: "Cuando te besé sentí que vos sentiste cosa'" },
    { time: "0:04", text: "Entonces supe que" },
    { time: "0:04", text: "Sos lo que me da paz" },
    { time: "0:04", text: "Lo que andaba buscando" },
    { time: "0:04", text: "Y esa felicidad" },
    { time: "0:04", text: "Que hace que ande sonriendo" },
    { time: "0:04", text: "Quiero verte feli'" },
    { time: "0:04", text: "Mejor si es al la'o de mí" },
    { time: "0:04", text: "Love incondicional" },
    { time: "0:04", text: "Como perro a su amo, te sigo amando" },
    { time: "0:04", text: "Sos lo que me da paz" },
    { time: "0:04", text: "Lo que andaba buscando" },
    { time: "0:04", text: "Y esa felicidad" },
    { time: "0:04", text: "Que hace que ande sonriendo" },
    { time: "0:04", text: "Quiero verte feli'" },
    { time: "0:04", text: "Mejor si es al la'o de mí" },
    { time: "0:04", text: "Love incondicional" },
    { time: "0:04", text: "Como perro a su amo, te sigo amando" },
    { time: "0:04", text: "Dama con fama 'e cama alta gama y corazón partido" },
    { time: "0:04", text: "Fono lleno 'e fane' que llaman" },
    { time: "0:04", text: "Y solo atiende el mío" },
    { time: "0:04", text: "Vamo' a verno' con frío o calor" },
    { time: "0:04", text: "Picnic, Netflix, voy en tren" },
    { time: "0:04", text: "En ten o fifteen estoy" },
    { time: "0:04", text: "Y siendo honesto, baby" },
    { time: "0:04", text: "Negra, rara ve'" },
    { time: "0:04", text: "Te vi bien 'tando con aquel" },
    { time: "0:04", text: "No lo sé, no me vo' a meter" },
    { time: "0:04", text: "Pero te noté algo mentirosa" },
    { time: "0:04", text: "Cuando te besé sentí que vos sentiste cosa'" },
    { time: "0:04", text: "Entonces supe que" },
    { time: "0:04", text: "Sos lo que me da paz" },
    { time: "0:04", text: "Lo que andaba buscando" },
    { time: "0:04", text: "Y esa felicidad" },
    { time: "0:04", text: "Que hace que ande sonriendo" },
    { time: "0:04", text: "Quiero verte feli'" },
    { time: "0:04", text: "Mejor si es al la'o de mí" },
    { time: "0:04", text: "Love incondicional" },
    { time: "0:04", text: "Como perro a su amo, te sigo amando" },
    { time: "0:04", text: "Sos lo que me da paz" },
    { time: "0:04", text: "Lo que andaba buscando" },
    { time: "0:04", text: "Y esa felicidad" },
    { time: "0:04", text: "Que hace que ande sonriendo" },
    { time: "0:04", text: "Quiero verte feli'" },
    { time: "0:04", text: "Mejor si es al la'o de mí" },
    { time: "0:04", text: "Love incondicional" },
    { time: "2:12", text: "Como perro a su amo, te sigo amando" }
  ]
  ;
playButton.addEventListener('click', () => {
  audio.play();
});

pauseButton.addEventListener('click', () => {
  audio.pause();
});

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('timeupdate', updateLyrics);

function updateProgress() {
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
}

function updateLyrics() {
    const currentTime = audio.currentTime;
  
    // Verificar si el audio está en pausa
    if (audio.paused) {
      return; // Salir de la función sin actualizar las letras
    }
  
    for (let i = 0; i < lyricsData.length; i++) {
      if (currentTime >= lyricsData[i].time && currentTime < lyricsData[i + 1]?.time) {
        lyrics.textContent = lyricsData[i].text;
        break;
      }
    }
  }
  