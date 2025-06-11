document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("games-container");

  fetch("https://freetogame-proxy.onrender.com/api/games")
    .then((res) => res.json())
    .then((games) => {
      container.innerHTML = ""; // Clear any placeholder content

      games.forEach((game) => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
          <img src="${game.thumbnail}" alt="${game.title}" class="game-img">
          <h3>${game.title}</h3>
          <p>${game.short_description}</p>
          <a href="${game.game_url}" target="_blank">Play Now</a>
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error fetching games:", err);
      container.innerHTML = "<p>Failed to load games. Try again later.</p>";
    });
});
