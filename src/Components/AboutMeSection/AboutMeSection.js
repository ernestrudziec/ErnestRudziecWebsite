import React from "react";
import styles from "./AboutMeSection.module.scss";
import blob from "../../assets/svg/blob1.svg";
import picture from "../../assets/svg/picture2.svg";
import wave1 from "../../assets/svg/wave1.svg";
import picture2 from "../../assets/svg/picture3.svg";
import picture3 from "../../assets/svg/picture4.svg";
import ScrollAnimation from "react-animate-on-scroll";
import wave2 from "../../assets/svg/wave2.svg";
import smallLogo from "../../assets/svg/miniicon.svg";
import MyWorksSection from "../MyWorksSection/MyWorksSection";

const AboutMeSection = () => {
  return (
    <>
      <section id="about-me" className={styles.wrapper}>
        <div className={styles.paragraphWrapper}>
          {/*<h1>Cześć, tu Ernest. Fajnie że wpadłeś 👋🏻</h1>*/}
          <h1>Hi, I'm Ernest. Nice to meet you 👋🏻 </h1>

          {/*<p>Jestem początkującym <strong>front-end developerem</strong> ⌨️ oraz nieco bardziej doświadczonym <strong>graphic designerem</strong> ✏️ co daje mi możliwość tworzenia aplikacji webowych od podstaw całkowicie samodzielnie.</p>*/}

          <p>
            <strong>
              I am a beginner front-end developer ⌨️ and a bit more experienced
              graphic designer{" "}
            </strong>{" "}
            ✏️ which gives me the opportunity to create web applications from
            scratch completely alone.{" "}
          </p>

          {/*<p> W swojej pracy wykorzystuję <strong>najnowsze technologie</strong> 🚀 zapewniające doskonałą wydajność. Dbam o <strong>czystość i przejrzystość kodu</strong>, utrzymując przy tym odpowiednią <strong>semantykę, standardy oraz nazewnictwo</strong> np. (W3C, BEM, CamelCase). </p>*/}

          <p>
            In my work I use the latest technologies 🚀 ensuring excellent
            performance.{" "}
            <strong>
              I care about the purity and transparency of the code,{" "}
            </strong>
            while maintaining appropriate semantics, standards and naming, e.g.
            (W3C, BEM, camelCase).
          </p>
        </div>
      </section>

      <section id="about-responsive" className={styles.aboutResponsiveWrapper}>
        <div className={styles.content}>
          <img src={picture2} className={styles.responsivePicture} />

          <div className={styles.description}>
            <h1>
              <span>👨🏻‍💻</span>Responsive Web Design{" "}
            </h1>

            {/*<p>Strony projektuję z myślą o <strong>poprawnym ich wyświetlaniu</strong> na każdym ekranie  💻*/}
            {/*    <p>*/}

            <p>
              I design websites with a view to
              <strong>
                {" "}
                displaying them correctly on every screen, even mobile phones
                and 💻 tablets
              </strong>
            </p>
          </div>
        </div>

        <div className={styles.content2}>
          <div className={styles.description}>
            {/*<h1>Ale dlaczego i po co? ✅ </h1>*/}
            <h1>
              <span>✅</span>But why?{" "}
            </h1>

            {/*<p>Jest to istotne, ponieważ dziś prawdziwą siłę internetu stanowią użytkownicy mobilni 📱 korzystający z małych ekranów telefonów czy tabletów.</p>*/}

            <p>
              This is important because today the real power of the Internet are{" "}
              <strong> mobile users 📱 </strong> using small screens of phones
              or tablets.
            </p>
          </div>

          <img src={picture3} className={styles.responsivePicture} />
        </div>
      </section>
    </>
  );
};

export default AboutMeSection;
