var playlist = {surfaces: 'bloom'};

//var playlist = {surfaces: 'bloom'};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}
