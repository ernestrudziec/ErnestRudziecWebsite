import React from "react";

import styles from "./MyWorksSection.module.scss";

const MyWorksSection = () => {
  return (
    <div className={styles.wrapper}>
      <h1>My works 🙋‍♂️</h1>
      <div className={styles.gallery}>
        <div className={styles.projectWrapper}>
          <div className={styles.description}>
            <h1>koronawirus-live.pl</h1>
            <h4>
              Web application made in React to provide newest data about
              coronavirus worldwide
            </h4>
          </div>
          <img
            src="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.project}
          />
        </div>
        <div className={styles.projectWrapper}>
          <div className={styles.description}>
            <h1>zjazdkum.online</h1>
            <h4>
              Web application made in React as guide for military student
              councils meeting called "KUM".
            </h4>
          </div>
          <img
            src="https://images.pexels.com/photos/163443/war-desert-guns-gunshow-163443.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.project}
          />
        </div>
        <div className={styles.projectWrapper}>
          <div className={styles.description}>
            <h1>koronawirus-live.pl</h1>
            <h4>Aplikacja</h4>
          </div>
          <img
            src="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.project}
          />
        </div>
        <div className={styles.projectWrapper}>
          <div className={styles.description}>
            <h1>koronawirus-live.pl</h1>
            <h4>Aplikacja</h4>
          </div>
          <img
            src="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className={styles.project}
          />
        </div>
      </div>
    </div>
  );
};

export default MyWorksSection;
