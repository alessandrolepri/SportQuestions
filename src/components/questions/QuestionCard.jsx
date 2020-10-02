import React from "react";
import Buttons from '../Buttons'

const QuestionCard = ({ question, category, difficulty }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{question} </h4>
      </div>

      <div className="card-content">
        <div className="content">
          <p>Origin:{category}</p>
        </div>
      </div>

      <div className="card-content">
        <div className="content">
          <p>Origin:{difficulty}</p>
        </div>
      </div>
        <Buttons />
    </div>
  );
};

export default QuestionCard;
