import React, { Component } from "react";
import "./tableHead.css";
import Constants from "../../../utiles/constants/Constant";
import TableRow from "../../statefull/TableRow";
import PopOver from "../PopOver";
import { MyContext } from "../../../context/Provider";

export default class TableHeaders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.JSON_DATA,
      popover: {
        show: false,
        position: {
          x: 0,
          y: 0
        },
        type: "",
        id: ""
      }
    };
  }

  componentWillMount = () => {
    document.addEventListener("keydown", e => {
      if (e.keyCode === 27 && this.state.popover.show) {
        this.resetPopover();
      }
    });
  };
  componentWillUpdate = (newProps) => {
    this.state.data = newProps.JSON_DATA
  };
  resetPopover = callback => {
    this.setState(
      {
        popover: {
          show: false,
          position: {
            x: 0,
            y: 0
          },
          type: "",
          id: ""
        }
      },
      callback
    );
  };
  getPopoverpositions = (x, y, fieldType, id) => {
    this.resetPopover(() => {
      this.setState({
        popover: {
          show: true,
          position: {
            x: x,
            y: y + 15
          },
          type: fieldType,
          id: id
        }
      });
    });
  };
  render() {
    let people = this.state.data.map((person, i) => {
      return (
        <TableRow
          sno={i + 1}
          data={person}
          key={person.id}
          onEditClick={this.getPopoverpositions}
        />
      );
    });

    return (
      <div>
        <table className="t_head_outer">
          <thead>
            <tr>
              <th className="snumber">S No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>{people}</tbody>
        </table>
        {this.state.popover.show && (
          <PopOver
            top={this.state.popover.position.y}
            left={this.state.popover.position.x}
            type={this.state.popover.type}
            id={this.state.popover.id}
          />
        )}
      </div>
    );
  }
}
