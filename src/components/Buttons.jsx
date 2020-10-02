import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Buttons extends React.Component {
  constructor() {
    super()

    this.state = {
      question: []
    }
  }
    
  deleteContact () {
    axios
      .delete(
        `https://opentdb.com/api.php?amount=1&category=21&difficulty=medium&type=multiple/${question.id}`
      )
      .then((res) => {
        const question = res.data;
        this.setState({ question });
      })
}
render() {

  const { question } = this.state;
    return (
      <div className="buttons">
        <Link to={`/questions/${question.id}`}>
          <button>EDIT</button>
        </Link>

        <button onClick={() => this.deleteContact(question.id)}>DELETE</button>
      </div>
    );
    }
    }

export default Buttons;