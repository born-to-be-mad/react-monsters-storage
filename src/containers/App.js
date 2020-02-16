import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchFilter, requestMonsters } from "../redux/actions";

import MainPage from "../pages/main-page.component";

import "./App.css";

const mapStateToProps = state => {
  return {
    searchFilter: state.searchMonsters.searchFilter,
    monsters: state.requestMonsters.monsters,
    isPending: state.requestMonsters.isPending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchFilter(event.target.value)),
    onRequestMonsters: () => dispatch(requestMonsters())
  };
};

class App extends Component {
  render() {
    return <MainPage {...this.props} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
