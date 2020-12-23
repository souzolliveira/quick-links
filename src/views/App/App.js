import React from "react";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div id="app" className={styles.app}>
      <div id="sidebar" className={styles.sidebar}>
        <h4>Quick Links</h4>
      </div>
      <div id="mainbar" className={styles.mainbar}>
        <h2>Files</h2>
      </div>
    </div>
  );
};

export default App;
