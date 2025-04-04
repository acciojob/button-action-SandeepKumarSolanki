import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [vis , setVis] = useState(false)
  return (
    <div className="App" id="main">
      {/* // Do not alter the main div */}
      {vis === false ? (
        <button 
          onClick={setVis(true)}
        id="click">Show</button>
      ):(
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        )
      }
    </div>
  );
}

export default App
