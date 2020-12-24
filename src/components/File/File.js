import React from "react";
import { Link } from "react-router-dom";

import styles from "./File.module.scss";

const File = ({ fileName }) => {
  return (
    <Link to={`/${fileName}`} id={fileName} className={styles.file}>
      {fileName}
    </Link>
  );
};

export default File;
