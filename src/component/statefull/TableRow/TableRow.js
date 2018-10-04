import TableCell from "../../stateless/TableCell";
import PopOver from "../PopOver";
import React, { Component } from "react";

export default class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopover: false
    };
  }
  displayPopOver = () => {};
  render() {
    let { data, sno } = this.props;
    return (
      <tr>
        <td className="snumber">{sno}</td>
        <TableCell
          type="name"
          id={data.id}
          value={data.name}
          onEditClick={this.props.onEditClick}
        />
        <TableCell
          type="age"
          id={data.id}
          value={data.age}
          onEditClick={this.props.onEditClick}
        />
        <TableCell
          type="gender"
          id={data.id}
          value={data.gender}
          onEditClick={this.props.onEditClick}
        />
        <TableCell
          type="mobile"
          id={data.id}
          value={data.mobile}
          onEditClick={this.props.onEditClick}
        />
        {this.state.showPopover && <PopOver top={0} left={0} />}
      </tr>
    );
  }
}
