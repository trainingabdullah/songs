// action.test.js

// Import the action to be tested
import { selectSong } from './index'; // Adjust the path accordingly

describe('selectSong action creator', () => {
  it('should create an action to select a song', () => {
    const song = { title: 'Test Song', duration: '4:05' }; // Example song object
    const expectedAction = {
      type: 'SONG_SELECTED',
      payload: song,
    };

    expect(selectSong(song)).toEqual(expectedAction);
  });
});