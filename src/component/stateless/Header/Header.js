import React from "react";
import "./header.css";
export default props => {
  return (
    <div className="title">
      <div>{props.title}</div>
    </div>
  );
};
