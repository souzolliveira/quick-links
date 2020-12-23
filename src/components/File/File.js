import React from "react";

import styles from "./File.module.scss";

const File = ({ fileName }) => {
  return (
    <a href={`/${fileName}`} className={styles.file}>
      {fileName}
    </a>
  );
};

export default File;
