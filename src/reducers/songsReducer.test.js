// songsReducer.test.js

import { combineReducers } from "redux";
import songsReducer, { selectedSongReducer } from "./index"; // Adjust the import path

describe("Reducers", () => {
  describe("songsReducer", () => {
    it("should return the initial state and a list of songs", () => {
      const expectedState = [
        { id: 1, title: "No Scrubs", duration: "4:05" },
        { id: 2, title: "Macarena", duration: "2:30" },
        { id: 3, title: "All Star", duration: "3:15" },
        { id: 4, title: "I Want it that Way", duration: "4:45" },
        { id: 5, title: "Mohammed Abdo", duration: "5:05" },
      ];
      
      const state = songsReducer(undefined, {});
      expect(state).toEqual(expectedState );
    });
  });

  describe("selectedSongReducer", () => {
    it("should return the selected song when action type is SONG_SELECTED", () => {
      const action = {
        type: "SONG_SELECTED",
        payload: { id: 1, title: "No Scrubs", duration: "4:05" },
      };
      
      const state = selectedSongReducer(null, action);
      expect(state).toEqual(action.payload);
    });

    it("should return the previous state when action type is not SONG_SELECTED", () => {
      const action = {
        type: "OTHER_ACTION",
      };
      
      const previousState = { id: 1, title: "No Scrubs", duration: "4:05" };
      const state = selectedSongReducer(previousState, action);
      expect(state).toEqual(previousState);
    });
  });

  describe("combined reducers", () => {
    it("should return the initial state for combined reducers", () => {
      const combinedReducer = combineReducers({
        songs: songsReducer,
        selectedSong: selectedSongReducer,
      });
      
      const state = combinedReducer(undefined, {});
      expect(state).toEqual({
        songs: [
          { id: 1, title: "No Scrubs", duration: "4:05" },
          { id: 2, title: "Macarena", duration: "2:30" },
          { id: 3, title: "All Star", duration: "3:15" },
          { id: 4, title: "I Want it that Way", duration: "4:45" },
          { id: 5, title: "Mohammed Abdo", duration: "5:05" },
        ],
        selectedSong: null,
      });
    });
  });
});