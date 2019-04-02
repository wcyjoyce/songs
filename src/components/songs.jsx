import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Songs extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="song" key={song.title}>
          <div className="content">{song.title}</div>
          <button>Select</button>
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

export default connect(mapStateToProps)(Songs);
