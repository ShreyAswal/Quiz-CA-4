import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

// export const ToggleTheme = React.createContext()

function App() {



  const [state,setState] = useState(true)


  const handleToggle = ()=>{
    setState(state=>!state)
  }

  // const theme = (handleToggle);
  // const themeStyle = {
  //   backgroundColor: theme?"white":"grey",
  //   color:theme?"grey":"white",
  //   padding:"2rem",
  //   margin:"2rem"
  // }

  return (
    <div className="fullContainer">
      {/* <div value={state} style={themeStyle}> */}
        {/* <header className='header' >
          <span className='font'>Kalvium</span>
          <button className='toggleButton' onClick={handleToggle}>Dark</button>
        </header> */}
      {/* </div> */}
      <QuestionBox/>
        {/* <button id='toggle' >Toggle</button> */}
        
    </div>
    
  

  );
}

export default App;