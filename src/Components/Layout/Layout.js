import React from "react";
import Aux from "../../hoc/Aux";

import styles from "../Layout/Layout.module.css";
import Toolbar from '../../Components/Navigation/ToolBar/Toolbar';

const layout = props => (
  <Aux>
    <Toolbar/>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
