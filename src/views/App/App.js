import React from "react";

import Mainbar from "components/Mainbar/Mainbar";
import Sidebar from "components/Sidebar/Sidebar";

import styles from "./App.module.scss";

const App = () => {
  return (
    <div id="app" className={styles.app}>
      <Sidebar />
      <Mainbar />
    </div>
  );
};

export default App;
