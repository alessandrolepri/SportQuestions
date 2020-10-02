import React from "react";

const QuestionForm = ({ data, handleChange, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="form-new">
        <h3>Add new question</h3>
        <div className="section-one">
          <div className="field">
            <label className="label"> Category </label>
            <div className="control">
              <input className="input" value="Sport" onChange={handleChange} />
            </div>
          </div>

          <div className="field">
            <label className="label">Type</label>
            <div className="control">
              <input
                className="input"
                name="type"
                onChange={handleChange}
                value="Multiple"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Difficulty</label>
            <div className="control">
              <input
                className="input"
                name="difficulty"
                onChange={handleChange}
                value="Medium"
              />
            </div>
          </div>
        </div>

        <div className="question">
          <div className="field">
            <label className="label-question">Question</label>
            <div className="control">
              <input
                className="input-question"
                name="question"
                onChange={handleChange}
                value={data.question}
              />
            </div>
          </div>
        </div>

        <div className="answers">
          <div className="field-answer">
            <label className="label">CORRECT ANSWER</label>
            <div className="control">
              <input
                className="input"
                placeholder="Correct answer"
                name="correct_answer"
                onChange={handleChange}
                value={data.correct_answer}
              />
            </div>
          </div>

          <div className="answers">
            <div className="field-answer">
              <label className="label">Incorrect answer#1</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Incorrect answer#1"
                  name="incorrect_answer1"
                  onChange={handleChange}
                  value={data.incorrect_answer1}
                />
              </div>
            </div>
          </div>

          <div className="answers">
            <div className="field-answer">
              <label className="label">Incorrect answer#2</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Incorrect answer#2"
                  name="incorrect_answer2"
                  onChange={handleChange}
                  value={data.incorrect_answer2}
                />
              </div>
            </div>
          </div>

          <div className="answers">
            <div className="field-answer">
              <label className="label">Incorrect answer#3</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Incorrect answer#3"
                  name="incorrect_answer3"
                  onChange={handleChange}
                  value={data.incorrect_answer3}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="button is-primary new-question">Submit</button>
      </form>
    </>
  );
};

export default QuestionForm;
