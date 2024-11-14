import React from "react";
import SongList from "./SongList.js";
import SongDetail from "./SongDetail.js";
const App = () => {
  return (
    <div className="ui container grid ">
      {/* Optional: add a class for styling */}
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
