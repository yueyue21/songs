import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songsPropTag.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.selectSongPropTag(song);
              }}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    //console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
//always is a good place to show the state
const mapStateToProps = state => {
  //console.log(state);
  return { songsPropTag: state.songsReducerTag };
};

export default connect(
  mapStateToProps,
  { selectSongPropTag: selectSong }
)(SongList);
