import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Landing_page.module.css";

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>_____________________</h1>
      <NavLink to="/Home" className={styles.link}>
      ☛ Home ☚  
      </NavLink>
    </div>
  );
};

export default LandingPage;
