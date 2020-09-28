import React from "react";
import ReactDOM from 'react-dom'
import Logo from '../assets/buff.jpeg'

import './style.scss'

import Questions from "./components/QuestionsIndex";

function App() {
  return (
    <div className="App">
    <img src={Logo} alt="SportBuff" />
      <Questions />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root")) 
