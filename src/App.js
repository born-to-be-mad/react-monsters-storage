import React, { Component } from "react";
import { SearchBox } from "./components/search-box/search-box.component";
import { CardList } from "./components/card-list/card-list.component";
import Lifecycles from "./components/misc/lifecycles.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "hello",
      monsters: [],
      searchFilter: "",
      showChild: true
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  onHandleChange = e => {
    this.setState({ searchFilter: e.target.value });
  };

  render() {
    const { monsters, searchFilter } = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchFilter.toLowerCase());
    });
    return (
      <div className="App">
        <header className="App-header">
          {this.state.showChild ? <Lifecycles text={this.state.text} /> : null}
          <button onClick={() => 
            this.setState(state =>({ 
              string: state.string + '...hello'
            }))
          }>
            say 'Hello'
          </button>
          <br/>

          <button onClick={() => 
            this.setState(state =>({ 
              showChild: !state.showChild
            }))
          }>
            toggle lifecycle
          </button>
        </header>

        <h1>Monster's storage</h1>
        <SearchBox
          placeholder="Enter search criteria"
          handleChange={this.onHandleChange}
        />

        <CardList items={filteredMonsters} />
      </div>
    );
  }
}

export default App;
