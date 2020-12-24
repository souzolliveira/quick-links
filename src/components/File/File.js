import React from "react";
import { Link } from "react-router-dom";

import styles from "./File.module.scss";

const File = ({ fileName, onClick }) => {
  return (
    <Link
      to={`/${fileName}`}
      id={fileName}
      className={styles.file}
      onClick={() => onClick(fileName)}
    >
      {fileName}
    </Link>
  );
};

export default File;
