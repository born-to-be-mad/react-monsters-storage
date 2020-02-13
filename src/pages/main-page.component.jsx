import React, { Component } from "react";

import Header from "../components/header/header.component";
import SearchBox from "../components/search-box/search-box.component";
import CardList from "../components/card-list/card-list.component";
import Scroll from "../components/scroll/scroll.component";
import ErrorBoundry from "../components/error-boundary/error-boundary.component";

import "./main-page.css";

class MainPage extends Component {
  constructor() {
    super();
    this.state = {
      string: "hello",
      monsters: [],
      searchFilter: "",
      showChild: true,
      isPending: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users, isPending: false }));
  }

  onHandleChange = e => {
    this.setState({ searchFilter: e.target.value });
  };

  render() {
    const { monsters, searchFilter, isPending } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFilter.toLowerCase());
    });

    //console.log(filteredMonsters);
    return (
      <div className="main-page">
        <Header />
        <SearchBox
          placeholder="Enter search criteria"
          handleChange={this.onHandleChange}
        />

        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList items={filteredMonsters} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
