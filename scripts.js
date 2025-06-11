document.addEventListener("DOMContentLoaded", () => {
  const themes = ["Star Wars", "Harry Potter", "Jurassic Park", "LOTR", "Hobbit"];
  const themeSelector = document.getElementById("themeSelector");
  const toggleMusic = document.getElementById("toggleMusic");
  const quote = document.getElementById("quote");
  let currentAudio = null;

  // Populate theme selector
  themes.forEach(theme => {
    const option = document.createElement("option");
    option.value = theme;
    option.textContent = theme;
    themeSelector.appendChild(option);
  });

  // Load music & background per theme
  themeSelector.addEventListener("change", () => {
    const theme = themeSelector.value.toLowerCase().replace(/\s+/g, "-");

    // Background
    document.body.style.backgroundImage = `url('assets/backgrounds/${theme}.jpg')`;

    // Music
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    if (!toggleMusic.textContent.includes("OFF")) {
      currentAudio = new Audio(`assets/music/${theme}.mp3`);
      currentAudio.loop = true;
      currentAudio.volume = 0.5;
      currentAudio.play();
    }
  });

  // Toggle music
  toggleMusic.addEventListener("click", () => {
    const musicOn = toggleMusic.textContent.includes("ON");
    toggleMusic.textContent = musicOn ? "🔇 Music: OFF" : "🔊 Music: ON";
    if (currentAudio) {
      musicOn ? currentAudio.pause() : currentAudio.play();
    }
  });

  // Splash quote
  const quotes = [
    "There is no try. Only do.",
    "Happiness can be found even in the darkest of times.",
    "Life finds a way.",
    "Even the smallest person can change the course of the future.",
    "Home is now behind you. The world is ahead."
  ];
  quote.textContent
new Audio(`assets/music/${theme}.mp3`);
