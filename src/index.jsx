import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import App from "./components/app";
import "../assets/stylesheets/application.scss";

import songsReducer from "./reducers/songs_reducer";
import selectedSongReducer from "./reducers/selected_song_reducer";

const reducers = combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
