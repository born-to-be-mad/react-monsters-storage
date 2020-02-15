import React, { Component } from "react";

import MainPage from "./pages/main-page.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFilter: "",
      showChild: true,
      isPending: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users =>
        this.setState({
          monsters: users,
          isPending: false,
          onHandleChange: e => {
            this.setState({ searchFilter: e.target.value });
          }
        })
      );
  }

  render() {
    //console.log(this.state);
    return <MainPage {...this.state} />;
  }
}

export default App;
