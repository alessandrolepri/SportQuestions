import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import './style.scss'

import QuestionsIndex from "./components/questions/QuestionsIndex";
import Home from "./components/Home";
import QuestionsShow from "./components/questions/QuestionsShow";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import QuestionsNew from "./components/questions/QuestionsNew";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <nav>
            <Link to="/"> Home </Link>
            <Link to="/questions"> Questions </Link>
            <Link to="/questions/new"> New Question </Link>
            <Link to="/register"> Sign Up </Link>
            <Link to="/login"> Login </Link>
          </nav>

          <Switch>
            <Route path="/questions/new" component={QuestionsNew} />
            <Route path="/questions/:id" component={QuestionsShow} />
            <Route path="/questions" component={QuestionsIndex} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
