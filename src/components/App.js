import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  console.log(props)
  const [vis , setVis] = useState(false)

  function handleClick(){
    setVis(vis => !vis);
  }
  return (

    <div className="App" id="main">

      {/* // Do not alter the main div */}
      {vis && <p id="para" className="show">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p> }
        <button 
        onClick={handleClick}
        id="click">{vis ? "Hide" : "Show"}</button>
        
    </div>
  );
}

export default App
