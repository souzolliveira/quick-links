import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Mainbar from "components/Mainbar/Mainbar";
import Sidebar from "components/Sidebar/Sidebar";

import styles from "./App.module.scss";

const App = () => {
  return (
    <Router>
      <div id="app" className={styles.app}>
        <Sidebar />
        <Mainbar />
      </div>
    </Router>
  );
};

export default App;
