import React from "react";
import Aux from "../../hoc/Aux";

import styles from "../Layout/Layout.module.css";

const layout = props => (
  <Aux>
    <div className={styles.header}>Toolbar Sidebar Backdrop  </div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
