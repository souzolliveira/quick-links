import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Content from "components/Content/Content";
import File from "components/File/File";

import styles from "./Mainbar.module.scss";

const Mainbar = ({ history }) => {
  const files = [
    "file01",
    "file02",
    "file03",
    "file04",
    "file05",
    "file06",
    "file07",
    "file08",
    "file09",
    "file10",
    "file11",
    "file12",
    "file13",
    "file14",
    "file15",
    "file16",
    "file17",
    "file18",
    "file19",
    "file20",
    "file21",
    "file22",
    "file23",
    "file24",
    "file25",
    "file26",
    "file27",
    "file28",
    "file29",
    "file30",
  ];

  return (
    <div id="mainbar" className={styles.mainbar}>
      <h2 onClick={() => history.push({ pathname: "/" })} id="filesTitle">
        Files
      </h2>
      <Switch>
        <Route
          exact
          path="/"
          children={
            <div className={styles.files}>
              {files?.map((file, index) => {
                return <File key={index} fileName={file} />;
              })}
            </div>
          }
        />
        <Route path="/:file" children={Content} />
      </Switch>
    </div>
  );
};

export default withRouter(Mainbar);
