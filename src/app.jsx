import React from "react";
import ReactDOM from 'react-dom'

import Questions from "./components/QuestionsIndex";

function App() {
  return (
    <div className="App">
      <Questions />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root")) 
