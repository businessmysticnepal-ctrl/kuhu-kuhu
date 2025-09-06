const songs = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Track Title ${i + 1}`,
    artist: i === 3 ? "Sushant Ghimire ft. Collaborator" : "Sushant Ghimire",
    albumArtUrl: `https://via.placeholder.com/120x120/FFC107/000000?Text=Song+${i + 1}`,
    streamUrl: `https://example.com/stream/song${i + 1}`
  }));
  document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("music-grid");
    if (!songs.length) {
      const msg = document.createElement("p");
      msg.textContent = "No songs available at the moment.";
      msg.style.textAlign = "center";
      msg.style.color = "#ccc";
      grid.appendChild(msg);
      return;
    }
    songs.forEach(song => {
      const card = document.createElement("div");
      card.className = "song-card";
      card.innerHTML = `
        <div class="song-media">
          <img src="${song.albumArtUrl}" alt="Album Art ${song.id}">
          <div class="song-info">
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <a href="${song.streamUrl}" target="_blank" class="listen-btn">Listen Now</a>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    const year = new Date().getFullYear();
    document.getElementById("copyright").innerHTML = `© ${year} Sushant Ghimire. All Rights Reserved.`;
  });