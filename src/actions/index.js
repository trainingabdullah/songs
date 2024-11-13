/**
 * @author 'abdullah allhayni  '
 * @version v1.0
 * @description Action Creater and retern action  .
 * @TODO : selectSong  .
 * 
 * @step :
 * 1- create function
 * 2- Add type and payload 
 * 3- return an action 
 * 4- export *
 */
export const selectSong = (song) => {
  // return an action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
