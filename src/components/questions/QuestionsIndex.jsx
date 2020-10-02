import React from "react"
import axios from "axios"
import ReactPaginate from "react-paginate"
import Buttons from '../Buttons'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 3,
      currentPage: 0,
      results: [],
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  receivedData() {
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple`
      )
      .then((res) => {
        console.log(res.data.results);
        const data = res.data;
        const results = data.results;
        this.setState({ data });
        this.setState({ results });
        const slice = results.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );
        const postData = slice.map((result) => (
          <section className="right-box">
            <div className="questions">
              <div className="test">
                <div className="q-box">
                  <strong>Question</strong>
                  <p>{result.question}</p>
                  <strong>Category</strong>
                  <p>{result.category}</p>
                  <strong>Difficulty</strong>
                  <p>{result.difficulty}</p>
                </div>
                <Buttons />
              </div>
            </div>
          </section>
        ));

        this.setState({
          pageCount: Math.ceil(results.length / this.state.perPage),

          postData,
        });
      });
  }
  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.receivedData();
      }
    );
  };

  componentDidMount() {
    this.receivedData();
  }
  render() {
    return (
      <>
      <div className="question">
        {this.state.postData}
        </div>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </>
    );
  }
}

export default Test