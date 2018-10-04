import React, { Component } from "react";
import "./input.css";

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {
      searchVal: ""
    };
  }

  handleChangeEvent = e => {
    this.setState({ [e.target.name]: e.target.value }, () =>
      this.props.searchValue(this.state.searchVal)
    );
  };

  render() {
    return (
      <div className="searchInput">
        <input
          type="search"
          name="searchVal"
          placeholder="Search"
          value={this.state.searchVal}
          onChange={this.handleChangeEvent}
        />
      </div>
    );
  }
}
