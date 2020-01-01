import React, { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "hello",
      monsters: [],
      searchFilter: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onHandleChange = e => {
    this.setState({ searchFilter: e.target.value });
  }

  render() {
    const { monsters, searchFilter } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      {
        return monster.name.toLowerCase().includes(searchFilter.toLowerCase());
      }
    );
    return (
      <div className="App">
        <h1>Monster's storage</h1>
        <SearchBox
          placeholder="Enter search criteria"
          handleChange={this.onHandleChange}
        />

        <CardList items={filteredMonsters} />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.string}</p>

          <button onClick={() => this.setState({ string: "bye" })}>
            click
          </button>

          <hr />
        </header>
      </div>
    );
  }
}

export default App;
