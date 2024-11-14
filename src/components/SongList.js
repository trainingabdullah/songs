import React, { Component } from "react";
import { connect } from "react-redux"; //reducer
import { selectSong } from "../actions/index.js"; //action

class SongList extends Component {
  // Directly return the list of songs from render()
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.selectSong(song);
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
    return (
      <div className="ui divided list">
        <h2>Song List</h2>
        {this.renderList()} {/* Call the renderList method here */}
      </div>
    );
  }
}

// mapStateToProps function to access the Redux state and pass it as props
const mapStateToProps = (state) => {
  return {
    songs: state.songs, // Assuming `songs` is in the Redux store
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps, {
  selectSong: selectSong,
})(SongList);
