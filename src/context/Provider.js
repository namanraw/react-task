import React, { Component } from "react";

let MyContext = React.createContext();
class Provider extends Component {
  render() {
    return (
      <MyContext.Provider value={this.props.value}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export { MyContext, Provider };
