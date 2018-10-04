import React, { Component } from "react";
import "./app.css";
import "./assets/css/main.css";
import Header from "./component/stateless/Header";
import SearchInput from "./component/statefull/SearchInput";
import TableHeaders from "./component/statefull/TableHeaders";
import Constants from "./utiles/constants/Constant";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "./context/Provider";

export default class App extends Component {
  constructor(props) {
    super(props);
    let c = new Constants();
    this.masterData = JSON.parse(localStorage.getItem("json_data"))
      ? JSON.parse(localStorage.getItem("json_data"))
      : c.JSON_DATA;

    this.state = {
      JSON_DATA: this.masterData,
      updateValue: obj => {
        let people = this.masterData;
        let index = people.findIndex(person => person.id === obj.id);
        people[index][obj.f_type] = obj.value;
        this.setState({ JSON_DATA: people }, () => {
          this.masterData = people;
          localStorage.setItem("json_data", JSON.stringify(people));
        });
      }
    };
  }
  searchVal = value => {
    let newData;
    try {
      let data = this.masterData;
      let pattern = new RegExp(value, "i");
      newData = data.filter(
        (d, i) =>
          pattern.test(d.name) ||
          pattern.test(d.age) ||
          pattern.test(d.gender) ||
          pattern.test(d.mobile)
      );
      if (value.length === 0) {
        newData = this.masterData;
      }
    } catch (e) {
      newData = [];
    } finally {
      this.setState({ JSON_DATA: newData });
    }
  };

  render() {
    return (
      <Router>
        <Provider value={this.state}>
          {/* <Consumer ></Consumer> */}
          <div className="containerOuterDiv">
            <Header title="Data Table React Task !!!" />

            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <div>
                    <SearchInput searchValue={this.searchVal} />
                    <TableHeaders JSON_DATA={this.state.JSON_DATA} />
                  </div>
                )}
              />
              <Route exact path="/ecdd" render={() => <div>hell</div>} />
              <Route render={() => <div>heyyyyll</div>} />
            </Switch>
          </div>
        </Provider>
      </Router>
    );
  }
}
