import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ mySelectedSongPropTag }) => {
  if (!mySelectedSongPropTag) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <div>Title:{mySelectedSongPropTag.title}</div>
      <div>Duration:{mySelectedSongPropTag.duration}</div>
    </div>
  );
};

const mapStateToProps = state => {
  // this line of code will gives error
  //console.log(mySelectedSong);
  return { mySelectedSongPropTag: state.selectedSongReducerTag };
};

export default connect(mapStateToProps)(SongDetail);
