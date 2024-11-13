/**
 * @author 'abdullah allhayni  '
 * @version v1.0
 * @description reduser Creater and retern reduser  .
 * @TODO : selectSong  .
 * @TODO : songsReducer
 * @TODO :selectedSongReducer
 * @step :
 * 1- create three  function
 * 2- nit list song && create condetion for selcet list and Add type and payload
 * 3- wierd to reducer function by used combineReducers modal
 * 4- export combineReducers
 */

import { combineReducers } from "redux"; //wier reducer
// 1- funcun reducer
const songsReducer = () => {
  return [
    { id: 1, title: "No Scrubs", duration: "4:05" },
    { id: 2, title: "Macarena", duration: "2:30" },
    { id: 3, title: "All Star", duration: "3:15" },
    { id: 4, title: "I Want it that Way ", duration: "4:45" },
    { id: 5, title: "Mohammed Abdo ", duration: "5:05" },
  ];
};

// reduser {type or state , acttion }
const selectedSongReducer = (selectedSong = null, action) => {
  // check type action
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  // return icommeing value
  return selectedSong;
};
//wier reducer
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
