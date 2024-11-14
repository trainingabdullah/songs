import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  // Log the song prop to see its structure
  console.log(song);

  // Check if a song is selected
  if (!song) {
    return <div>Select a song to see the details</div>;
  }

  // Render song details
  return (
    <div>
      <h2>Song Details</h2>
      <p><strong>Title:</strong> {song.title}</p>
      <p><strong>Duration:</strong> {song.duration}</p>
      {/* Add more song details as needed */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong, // Assuming selectedSong is an object with song details
  };
};

export default connect(mapStateToProps)(SongDetail);