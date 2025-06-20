import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [vis, setVis] = useState(false); // Initially hidden

  function handleClick() {
    setVis(vis => !vis);
  }

  return (
    <div className="App" id="main">
      {/* Do not alter the main div */}
      <p id="para" className={vis ? "show" : "hide"}>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
      </p>

      <button onClick={handleClick} id="click">
        {vis ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
