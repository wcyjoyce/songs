import React, { Component } from "react";
import { connect } from "react-redux";

const Song = (props) => {
  if (!props.song) {
    return <div className="selected"></div>
  }

  return (
    <div className="selected">
      <h1>{props.song.title}</h1>
      <h3>{props.song.artist}</h3>
      <p>Album: {props.song.album}</p>
      <p>Duration: {props.song.duration}</p>
    </div>
  );
}

function mapStateToProps(state) {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(Song);
