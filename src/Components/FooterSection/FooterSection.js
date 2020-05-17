import React from "react";
import styles from "./FooterSection.module.scss";
import logo from "../../assets/svg/logotyp3.svg";
import smallLogo from "../../assets/svg/miniicon.svg";

const FooterSection = () => {
  return (
    <footer id="contact" className={styles.wrapper}>
      <div className={styles.contactWrapper}>
        <div className={styles.contact}>
          <div>ernest.rudziec@gmail.com</div>

          <div>
            <a target="_blank" href="https://github.com/ernestrudziec">
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ernest-rudziec-4225231a7/"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1ZjDvJ9ddfySpQyLYHCaaF7bxToX6Q02k/view?usp=sharing"
            >
              resume/cv
            </a>
          </div>
        </div>
      </div>

      <div className={styles.madeBy}>
        <div>
          Made with <span>❤️</span> by
        </div>{" "}
        <img alt="logo" src={logo} /> &copy; 2020 All rights reserved
      </div>
    </footer>
  );
};

export default FooterSection;
