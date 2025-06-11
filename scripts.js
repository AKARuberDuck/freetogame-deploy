document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("games-container");

  // Fetch games from your working proxy
  fetch("https://freetogame-proxy.onrender.com/api/games")
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((games) => {
      container.innerHTML = ""; // Clear loading text

      games.forEach((game) => {
        const card = document.createElement("div");
        card.className = "game-card";

        card.innerHTML = `
          <img src="${game.thumbnail}" alt="${game.title}" class="game-img" />
          <h3>${game.title}</h3>
          <p>${game.short_description}</p>
          <a href="${game.game_url}" target="_blank">🎮 Play Now</a>
        `;

        container.appendChild(card);
      });
    })
    .catch((err) => {
      console.error("Error fetching games:", err);
      container.innerHTML = `
        <p style="color:red;">Failed to load games. Try again in a moment.</p>
      `;
    });
});
