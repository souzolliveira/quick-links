import React from "react";
import { Link, withRouter } from "react-router-dom";

import styles from "./Sidebar.module.scss";

const Sidebar = ({ quickLinks }) => {
  return (
    <div id="sidebar" className={styles.sidebar}>
      <div className={styles.header}>
        <h4>Quick Links</h4>
        <button id="clearButton" type="button">
          Clear
        </button>
      </div>
      <div className={styles.files}>
        {quickLinks?.map((file, index) => {
          return (
            <Link to={`/${file}`} key={index}>
              {file}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default withRouter(Sidebar);
