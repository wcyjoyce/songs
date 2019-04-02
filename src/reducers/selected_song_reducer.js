const selectedSongReducer = (state = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  } else {
    return state;
  }
}

export default selectedSongReducer;
