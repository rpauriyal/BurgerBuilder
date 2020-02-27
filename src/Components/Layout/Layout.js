import React from "react";
import Aux from "../../hoc/Aux";

import classes from "../Layout/layout.css";

const layout = props => (
  <Aux>
    <div className={classes.header}>Toolbar Sidebar Backdrop </div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
