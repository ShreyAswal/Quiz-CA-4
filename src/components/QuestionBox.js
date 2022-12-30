import React, { useState, useContext, useEffect } from 'react'
import questions from '../questions'
// import { ToggleTheme } from "../App";
import  './component.css'




function QuestionBox() {

  console.log(questions[0])

  // const theme = useContext(ToggleTheme);
  // const themeStyle = {
  //   backgroundColor: theme?"white":"grey",
  //   color:theme?"grey":"white",
  //   padding:"2rem",
  //   margin:"2rem"
  // }

  const initState = 0;
  const initScore = false

  const [currQuestion,nextQuestion] = useState(initState);
  const [score,setScore] = useState(initScore);
  const [totalScore,setTotalScore] = useState(0)
  const [theme,setTheme] = useState(true)
  const [color,changeColor] = useState('light')


  const changingColor = () => {

    if(color==='light'){
      changeColor('dark')
      document.container.style.backgroundColor = "grey"
    }
    else{
      changeColor('light')
    }
    return color
  }

  const handleToggle =() => {
    setTheme(theme ? false:true)
  }

  function backgroundColor(color){
    document.body.style.background = color ? "white" : "grey" 
    return {
      backgroundColor : color ? "white" : "grey"
    }
  }


  const changeQuestion = (isCorrect) => {

    // const totalScoring
    if(isCorrect) {
      setTotalScore(totalScore +1)
    }


    const changeQuestion = currQuestion + 1;
    

    if(changeQuestion < questions.length){
      nextQuestion(changeQuestion)
      // {const count = questions.map((check) => (
      //   check.options.map((insideCorrect) => (
      //   insideCorrect.isCorrect
      //   ))

        
      // ))}

    }
    else if(changeQuestion >= questions.length){

      setScore(true)
      
    }
  }


  

  return (

    <div className='app' style={backgroundColor(theme)}>
      {score ? (       
        <div className='container'>
          <header className='header' >
              <span className='font'>Kalvium</span>
              <button className='toggleButton' onClick={handleToggle}>{color}</button>
          </header>
          <div className='questionsContainer'>
          <h1 className='score'>You Scored {totalScore} out of {questions.length}!</h1>
          </div>
        </div>
      ) : (
      <>
        <div className='container' style={backgroundColor(theme)}>
          <header className='header' >
              <span className='font'>Kalvium</span>
              <button className='toggleButton' onClick={changingColor}>{color}</button>
          </header>
          <div className='questionsContainer'>
            <div className='QuestionHeading'>
              <h3 className='questionNumber'>Question: </h3><h1 className='questionNumber'>{currQuestion + 1} / {questions.length}</h1>
              <h3 className='question'>{questions[currQuestion].text}</h3>
            </div>
            <div className='options'>
              {questions[currQuestion].options.map((ans) => (
                <button className='eachOption' onClick={changeQuestion}>{ans.text}</button>
              ))}
            </div>
          </div>
        </div>
      </>
      )} 
    </div>
  
  )
}

export default QuestionBox
