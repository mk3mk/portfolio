import React from 'react';
import styles from "./home.module.css";


const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.row}>
          <span className={styles.pretitle}>Welcome to my World</span>
          <h1 className={styles.title_row1}>Hi, I’m Alex Nikitin</h1>
          <h1 className={styles.title_row2}>WEB Developer.</h1>
          <h2 className={styles.subtitle}>based in BELARUS.</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;