import React, { Component } from "react";
import "./popover.css";
import { MyContext } from "../../../context/Provider";

export default class PopOver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updatedValue: ""
    };
    this.positionStyle = {
      opacity: 1,
      top: this.props.top,
      left: this.props.left
    };
  }
  handleChangeEvent = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSumbitEvent = (e, s) => {
    e.preventDefault();
    let deltaObject = {
      f_type: this.props.type,
      value: this.state.updatedValue,
      id: this.props.id
    };
    s.updateValue(deltaObject);
  };

  render() {
    return (
      <MyContext.Consumer>
        {storeData => (
          <div className="popoverOuter" style={this.positionStyle}>
            <p>Update The {this.props.type} Value !!!</p>
            <form
              onSubmit={e => {
                this.handleSumbitEvent(e, storeData);
              }}
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <input
                type="text"
                value={this.state.updatedValue}
                name="updatedValue"
                onChange={this.handleChangeEvent}
              />
              <button type="submit">
                <i className="fa fa-check" aria-hidden="true" />
              </button>
            </form>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}
