import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../actions";

class Songs extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="song" key={song.title}>
          <div className="content">{song.title}</div>
          <button onClick={() => this.props.selectSong(song)}>Select</button>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="songs">
        <h1>Song List</h1>
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { selectSong })(Songs);
