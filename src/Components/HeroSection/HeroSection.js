import React from "react";
import styles from "./HeroSection.module.scss";
import logoPicture from "../../assets/svg/logotyp.svg";
import programmerPicture from "../../assets/svg/programmer.svg";
import lightPicture from "../../assets/svg/lightProgrammer.svg";
import ScrollAnimation from "react-animate-on-scroll";
import wave from "../../assets/svg/wave1.svg";
import logoPicture2 from "../../assets/svg/logotyp2.svg";

const HeroSection = () => {
  return (
    <div id="home" className={styles.wrapper}>
      <header className={styles.headerWrapper}>
        <div className={styles.logoPictureWrapper}>
          <img className={styles.logoPicture2} src={logoPicture2} />
          <img className={styles.logoPicture} src={logoPicture} />
        </div>

        <h1>front-end developer ‍💻 and UI/UX designer 🎨</h1>
        <h4>love to design and code simple things </h4>
      </header>

      <a href="#about-me">
        <div className={styles.scrollDown}>
          {/*trochę o mnie*/}
          about me
          <i className="fas fa-arrow-down"></i>
        </div>
      </a>

      <div className={styles.heroPicWrapper}>
        <img className={styles.lightPicture} src={lightPicture} />
        <img className={styles.programmerPicture} src={programmerPicture} />
      </div>
    </div>
  );
};

export default HeroSection;
