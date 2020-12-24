import React from "react";
import { withRouter } from "react-router-dom";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ quickLinks }) => {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <h4>Quick Links</h4>
      <div className={styles.files}>
        {quickLinks?.map((file, index) => {
          return <a key={index}>{file}</a>;
        })}
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
