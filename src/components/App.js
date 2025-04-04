import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  console.log(props)
  const [vis , setVis] = useState(false)

  function handleClick(){
    setVis(true);
  }
  return (

    <div className="App" id="main">
      {/* // Do not alter the main div */}
      {vis === false ? (
        <button 
        onClick={handleClick}
        id="click">Show</button>
        
      ):(
          <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        )
      }
    </div>
  );
}

export default App
