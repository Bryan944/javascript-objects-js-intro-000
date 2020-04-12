var playlist = {surfaces: 'bloom'};


function updatePlaylist(playlist,artistName,songTitle){
  //var playlist = {surfaces: 'bloom'};
      playlist['Slowdive'] = 'Alison',
      playlist['My Bloody Valentine'] = 'Sometimes',

  playlist = Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist;
}
