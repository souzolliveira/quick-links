import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Mainbar from "components/Mainbar/Mainbar";
import Sidebar from "components/Sidebar/Sidebar";

import styles from "./App.module.scss";

const App = () => {
  const [quickLinks, setQuickLinks] = useState([]);

  const handleAddLink = (link) => {
    if (quickLinks.findIndex((ql) => ql === link) !== -1) {
      setQuickLinks([link, ...quickLinks.filter((ql) => ql !== link)]);
    } else {
      setQuickLinks((links) => [link, ...links]);
    }
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
