import React from "react";

import axios from "axios";

import Auth from "../../lib/Auth";

import QuestionForm from "./QuestionForm";

class QuestionsNew extends React.Component {
  constructor() {
    super();

    this.state = {
      data: {
        question: "",
        category: "",
        difficulty: "",
        correct_answer: "",
        incorrect_answer1: "",
        incorrect_answer2: "",
        incorrect_answer3: ""
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value };
    this.setState({ data });
  }

  handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "https://opentdb.com/api.php/questions",
        this.state.data,
        console.log(this.state, 'state'),
        {
          headers: { 
            Authorization: `Bearer ${Auth.getToken()}` 
          },
        },
      ) 
      .then(() => this.props.history.push("/questions"))
      .catch((err) => alert(err.message));
  }

  render() {
    console.log(this.state.data, 'data')
    return (
      <main className="section">
        <div className="container">
          <QuestionForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </main>
    );
  }
}

export default QuestionsNew;
