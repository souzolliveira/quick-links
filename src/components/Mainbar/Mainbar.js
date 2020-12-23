import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import File from "components/File/File";

import styles from "./Mainbar.module.scss";

const Mainbar = ({ history }) => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    setFiles([
      "file01.txt",
      "file02.txt",
      "file03.txt",
      "file04.txt",
      "file05.txt",
      "file06.txt",
      "file07.txt",
      "file08.txt",
      "file09.txt",
      "file10.txt",
      "file11.txt",
      "file12.txt",
      "file13.txt",
      "file14.txt",
      "file15.txt",
      "file16.txt",
      "file17.txt",
      "file18.txt",
      "file19.txt",
      "file20.txt",
      "file21.txt",
      "file22.txt",
      "file23.txt",
      "file24.txt",
      "file25.txt",
      "file26.txt",
      "file27.txt",
      "file28.txt",
      "file29.txt",
      "file30.txt",
    ]);
  }, []);

  return (
    <div id="mainbar" className={styles.mainbar}>
      <h2 onClick={() => history.push({ pathname: "/" })} id="filesTitle">
        Files
      </h2>
      <div className={styles.files}>
        {files?.map((file, index) => {
          return <File key={index} fileName={file} />;
        })}
      </div>
    </div>
  );
};

export default withRouter(Mainbar);
