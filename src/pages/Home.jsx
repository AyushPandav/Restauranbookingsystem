import React from "react";
import BookNow from '../component/BookNow'
import styles from "./Home.module.css"; // Assuming you use CSS Modules

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <BookNow/>
    </div>
  );
};

export default Home;
