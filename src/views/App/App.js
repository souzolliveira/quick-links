import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Mainbar from "components/Mainbar/Mainbar";
import Sidebar from "components/Sidebar/Sidebar";

import styles from "./App.module.scss";

const App = () => {
  const [quickLinks, setQuickLinks] = useState([]);

  const handleAddLink = (link) => {
    setQuickLinks((links) => [...links, link]);
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
