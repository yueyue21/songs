//action creator
// instead of doing a default, do a named export
export const selectSong = song => {
  //return an actions
  return { type: "SONG_SELECTED", payload: song };
};
