document.addEventListener("DOMContentLoaded", () => {
  const themes = ["Mass Effect", "Cyberpunk", "Halo", "Zelda"];
  const themeSelector = document.getElementById("themeSelector");
  const toggleMusic = document.getElementById("toggleMusic");
  const quote = document.getElementById("quote");

  themes.forEach(theme => {
    const option = document.createElement("option");
    option.value = theme;
    option.textContent = theme;
    themeSelector.appendChild(option);
  });

  toggleMusic.addEventListener("click", () => {
    const on = toggleMusic.textContent.includes("ON");
    toggleMusic.textContent = on ? "🔇 Music: OFF" : "🔊 Music: ON";
    // Simulated music toggle — replace with audio control logic
  });

  // Simulate a random motivational quote
  const quotes = [
    "Finish the fight.",
    "We all make choices, but in the end our choices make us.",
    "Hope is what makes us strong.",
    "Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters."
  ];
  quote.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
});
setTimeout(() => {
  document.getElementById("splashScreen").style.display = "none";
}, 4500);
