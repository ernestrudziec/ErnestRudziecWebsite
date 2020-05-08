import React from "react";
import styles from "./WhatICanSection.module.scss";
import smallLogo from "../../assets/svg/miniicon.svg";

const WhatICanSection = () => {
  return (
    <section className={styles.wrapper}>
      {/*<h1>Co potrafię? 🖖🏻</h1>*/}
      <div className={styles.mySkills}>
        <img src={smallLogo} />
        <h1>My skills 🖖🏻</h1>
      </div>

      <div className={styles.wrapperInside}>
        <div className={styles.designerWrapper}>
          <h2>as graphic designer</h2>
          {/*<article>Stawiam na prostotę. <strong>Lubię elegancki i na maksa*/}
          {/*    czytelny design.</strong> Kiedy trzeba potrafię też użyć różnych kolorów i kształtów.*/}
          {/*</article>*/}
          <i className="fas fa-pencil-ruler"></i>
          <article>
            I focus on simplicity.{" "}
            <strong> I like elegant and easy to read design. </strong> When I
            need to, I can also use different colors and shapes.
          </article>

          <h3>
            {/*W czym tworzę?*/}
            What am I using?
          </h3>
          <article className={styles.whatIUseDesign}>
            <ul>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Lightroom</li>
              <li>Atomic Design</li>
              <li>Material Design</li>
            </ul>

            <p className={styles.adobe}>
              {/*Dzięki zajawce do fotografii i kręcenia wideo większość produktów z pakietu Adobe Creative nie stanowi dla mnie wyzwania.*/}
              Thanks to the love for photography and video shooting, most
              products from the <b>Adobe Creative Suite</b> are not a challenge
              for me.
            </p>
          </article>
          <h3>
            {/*Co lubię projektować?*/}
            What I like design?
          </h3>
          {/*<article>*/}
          {/*    UI/UX desing | logotypy | strony internetowe | banery | wizytówki | ulotki | brand | social media*/}
          {/*</article>*/}

          <article>
            UI / UX | logotypes | websites | banners | business cards | leaflets
            | brand design | social media
          </article>
        </div>

        <div className={styles.developerWrapper}>
          <h2>as front-end developer</h2>
          <i className="fas fa-code" />
          <article>
            {/*Porządek w kodzie i plikach to podstawa. Staram się zawsze wybierać <strong>najlepsze rozwiązanie do danej realizacji</strong>, które zapewni najlepszą efektywność.*/}
            Order in code and files is the basis. I always try to choose the
            best solution for a given implementation that will ensure{" "}
            <strong>the best efficiency.</strong>
          </article>
          <h3>
            {/*Z czego dobrze korzystam?*/}
            What am I familiar with?
          </h3>
          <article className={styles.whatIUse}>
            <ul>
              <li>HTML</li>
              <li>CSS (Grid, Flex)</li>
              <li>SASS</li>
              <li>Javascript ES6+</li>
              <li>React + Redux</li>
              <li>Git/Github</li>
              <li>Bootstrap</li>
              <li>Npm</li>
              <li>Terminal, brew</li>
              <li>Webstorm, Visual Studio</li>
            </ul>
          </article>
          <h3>What will I be good at?</h3>
          <article className={styles.whatIWillUse}>
            express.js | node.js | mongoDB | graphCMS | graphQL | gatsby.js |
            GSAP.js | less | typescript | webpack | gulp
          </article>
        </div>

        <div className={styles.humanWrapper}>
          <h2>as person</h2>

          <i className="fas fa-user-tie"></i>
          <article>
            {/*Porządek w kodzie i plikach to podstawa. Staram się zawsze wybierać <strong>najlepsze rozwiązanie do danej realizacji</strong>, które zapewni najlepszą efektywność.*/}
            I am a communicative, helpful and creative person. I am still
            learning and I like to face new problems. I am not afraid of new
            experiences.
          </article>

          <h3>
            {/*Z czego dobrze korzystam?*/}
            What I like to do?
          </h3>
          <article className={styles.whatIUse}>
            <ul>
              <li>Photographing</li>
              <li>Drone shooting</li>
              <li>Video editing</li>
              <li>Helping other people</li>
              <li>Watching football (vamos Barca!)</li>
              <li>Public speaking, I like talk...</li>
              <li>Reading books, mostly fact literature or sci-fi.</li>
              <li>Watching TV series (Mr Robot, HIMYM) </li>
              <li>Learning new skills</li>
              <li>Playing videogames </li>
            </ul>
          </article>
          <h3>Languages i speak</h3>
          <article className={styles.whatIWillUse}>
            My native language is <s>javascript</s> polish but I also speak and
            write well in english. (My level is B2/C1)
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhatICanSection;
