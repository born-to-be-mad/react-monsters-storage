import React, { Component } from "react";

import MainPage from "./pages/main-page.component";

import "./App.css";

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default App;
