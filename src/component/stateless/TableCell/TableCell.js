import React from "react";
import "./tableCell.css";

export default props => {
  let reference = React.createRef();

  function calculateLeft_Top(e) {
    let halfOfPopover = 160;
    let widthOfDiv = reference.current.offsetWidth;
    let heightOfDiv = reference.current.offsetHeight;
    let halfWidthOfdiv = widthOfDiv / 2;

    let finalLeft =
      reference.current.offsetLeft + halfWidthOfdiv - halfOfPopover;
    let finaltop = reference.current.offsetTop + heightOfDiv - 5;

    props.onEditClick(finalLeft, finaltop, props.type, props.id);
  }
  return (
    <td ref={reference}>
      {props.value}
      <i onClick={e => calculateLeft_Top(e)} className="fas fa-pen" />
    </td>
  );
};
