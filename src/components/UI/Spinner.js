import React from "react";
import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={classes.overlay}>
      <div className={classes.spinner}>{props.children}</div>
    </div>
  );
};

export default Spinner;
