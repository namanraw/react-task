import React, { Component } from "react";
import "./app.css";
import "./assets/css/main.css"
import Header from "./component/stateless/Header";
import SearchInput from "./component/statefull/SearchInput";
import TableHeaders from "./component/stateless/TableHeaders";
export default class App extends Component {
  render() {
    return (
      <div className="containerOuterDiv">
        <Header title="Data Table React Task !!!" />
        <SearchInput />
        <TableHeaders />
      </div>
    );
  }
}
