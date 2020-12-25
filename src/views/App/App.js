import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Mainbar from "components/Mainbar/Mainbar";
import Sidebar from "components/Sidebar/Sidebar";

import styles from "./App.module.scss";

const App = () => {
  const [quickLinks, setQuickLinks] = useState([]);

  const handleAddLink = (link) => {
    const temp = [...quickLinks];
    if (temp.findIndex((ql) => ql === link) !== -1) {
      temp.splice(
        temp.findIndex((ql) => ql === link),
        1
      );
    }
    if (quickLinks.length === 10) {
      temp.splice(9, 1);
    }
    setQuickLinks([link, ...temp]);
  };

  return (
    <Router>
      <div id="app" className={styles.app}>
        <Sidebar quickLinks={quickLinks} />
        <Mainbar handleAddLink={(link) => handleAddLink(link)} />
      </div>
    </Router>
  );
};

export default App;
