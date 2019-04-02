import React, { Component } from "react";

import Songs from "./songs.jsx";
import Song from "./song.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Songs />
        <Song />
      </div>
    );
  }
}

export default App;
