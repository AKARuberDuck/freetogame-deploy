document.addEventListener("DOMContentLoaded", () => {
  const toggleTheme = document.getElementById("toggleTheme");
  const quote = document.getElementById("quote");

  // Light/Dark theme toggle
  toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark")
      ? "🌙 Dark Mode"
      : "☀️ Light Mode";
  });

  // Inspirational quotes for splash screen
  const quotes = [
    "There is no try. Only do.",
    "Happiness can be found even in the darkest of times.",
    "Life finds a way.",
    "Even the smallest person can change the course of the future.",
    "Home is now behind you. The world is ahead."
  ];
  quote.textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

  // Splash screen auto-dismiss
  setTimeout(() => {
    const splash = document.getElementById("splashScreen");
    if (splash) splash.style.display = "none";
  }, 4500);
});
