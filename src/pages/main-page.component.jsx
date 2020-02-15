import React, { Component } from "react";

import Header from "../components/header/header.component";
import SearchBox from "../components/search-box/search-box.component";
import CardList from "../components/card-list/card-list.component";
import Scroll from "../components/scroll/scroll.component";
import ErrorBoundry from "../components/error-boundary/error-boundary.component";

import "./main-page.css";

class MainPage extends Component {
  filterMonsters = () => {
    return this.props.monsters.filter(monster => {
      return monster.name
        .toLowerCase()
        .includes(this.props.searchFilter.toLowerCase());
    });
  };

  render() {
    const { isPending, onHandleChange } = this.props;

    //console.log(filteredMonsters);
    return (
      <div className="main-page">
        <Header />
        <SearchBox
          placeholder="Enter search criteria"
          handleChange={onHandleChange}
        />

        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList items={this.filterMonsters()} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
