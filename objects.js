var playlist = {surfaces: 'bloom'};


function updatePlaylist(playlist,artistName,songTitle){
  //var playlist = {surfaces: 'bloom'};
      playlist['Slowdive'] = 'Alison',
      playlist['My Bloody Valentine'] = 'Sometimes',
playlist2 = playlist;
  playlist = Object.assign({}, playlist, { [artistName]: songTitle })

  return playlist2;
}
