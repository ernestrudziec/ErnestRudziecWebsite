import React from "react";
import styles from './WhatICanSection.module.scss';
import standingGuyPicture from '../../assets/svg/picture5.svg';

const WhatICanSection = () => {




return(
<section className={styles.wrapper}>

    <h1>Co potrafię? 🖖🏻</h1>

    <div className={styles.wrapperInside}>

        <div className={styles.designerWrapper}>
            <h2>graphic designer</h2>
            <div className="fas fa-pencil-ruler"></div>
            <article>Stawiam na prostotę. <strong>Lubię elegancki i na maksa
                czytelny design.</strong> Kiedy trzeba potrafię też użyć różnych kolorów i kształtów.
            </article>


            <h3>
                W czym tworzę?
            </h3>
            <article className={styles.whatIUseDesign}>
                <div className="fab fa-figma"></div>
                <div className="devicon-gimp-plain"></div>
                <div className="devicon-photoshop-plain"></div>
                <div className="devicon-illustrator-plain"></div>

               <p className={styles.adobe}>   <div className="fab fa-adobe"></div> Dzięki zajawce do fotografii i kręcenia wideo większość produktów z pakietu Adobe Creative nie stanowi dla mnie wyzwania.</p>

            </article>
            <h3>
                Co lubię projektować?
            </h3>
            <article>
                UI/UX desing | logotypy | strony internetowe | banery | wizytówki | ulotki | brand | social media
            </article>



        </div>



  <img className={styles.picture} src={standingGuyPicture} ></img>


        <div className={styles.developerWrapper}>
            <h2>front-end developer</h2>
            <div className="fas fa-code"></div>
            <article>
                Porządek w kodzie i plikach to podstawa. Staram się zawsze wybierać <strong>najlepsze rozwiązanie do danej realizacji</strong>, które zapewni najlepszą efektywność.
            </article>

            <h3>
                Z czego dobrze korzystam?
            </h3>
            <article className={styles.whatIUse}>
                <div className="devicon-html5-plain-wordmark "></div>
                <div className="devicon-css3-plain-wordmark "></div>
                <div className="devicon-javascript-plain "></div>
                <div className="devicon-react-original"></div>
                <div className="devicon-sass-original"></div>
                <div className="devicon-github-plain"></div>
                <div className="devicon-git-plain"></div>
                <div className="devicon-bootstrap-plain"></div>

            </article>
            <h3>
                Z tego będę dobrze korzystać.
            </h3>
            <article className={styles.whatIWillUse}>
                express.js | node.js | mongoDB | graphCMS | graphQL | gatsby.js | GSAP.js | less |
                typescript | webpack | gulp

            </article>

        </div>

    </div>
</section>
);

}

export default WhatICanSection;