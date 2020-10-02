import React from "react";
import axios from "axios";

class QuestionsShow extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    axios
      .put(
        `https://opentdb.com/api.php?amount=1&category=21&difficulty=medium&type=multiple/questions/${this.props.match.params.id}`
      )
      .then((res) => this.setState({ question: res.data.results }));
  }

  render() {
    if (!this.state.question) return null;
    const { question, category, difficulty } = this.state.question;
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{question}</h1>
          <hr />

            <div className="column">
              <h4 className="title is-4">{category}</h4>
              <hr />

              <h4 className="title is-4"></h4>
              <p>{difficulty}</p>
              <hr />
            </div>
          </div>
      </section>
    );
  }
}

export default QuestionsShow;
