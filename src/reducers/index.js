import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Me", duration: "4:09" },
    { title: "Suge", duration: "5:00" },
    { title: "Sucker", duration: "3:19" },
    { title: "You need to calm down", duration: "4:19" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

//store
export default combineReducers({
  songsReducerTag: songsReducer,
  selectedSongReducerTag: selectedSongReducer
});
