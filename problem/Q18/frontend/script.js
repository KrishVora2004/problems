fetch("http://localhost:3000/api/songs/all")
  .then(res => res.json())
  .then(data => {
    let html = `
      <h4>Total Songs: ${data.count}</h4>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Song</th><th>Film</th><th>Music Director</th>
            <th>Singer</th><th>Actor</th><th>Actress</th>
          </tr>
        </thead>
        <tbody>
    `;

    data.songs.forEach(song => {
      html += `<tr>
        <td>${song.songname}</td>
        <td>${song.film}</td>
        <td>${song.music_director}</td>
        <td>${song.singer}</td>
        <td>${song.actor || ''}</td>
        <td>${song.actress || ''}</td>
      </tr>`;
    });

    html += '</tbody></table>';
    document.getElementById('songTable').innerHTML = html;
  });
