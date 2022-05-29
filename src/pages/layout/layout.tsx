import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./style.module.scss";

export const Layout = () => {
  return (
    <div className={styles.container}>
      <Outlet />
    </div>
  );
};
