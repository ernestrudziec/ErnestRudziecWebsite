import React from "react";
import styles from './WhatICanSection.module.scss';
import standingGuyPicture from '../../assets/svg/picture5.svg';

const WhatICanSection = () => {




return(
<section className={styles.wrapper}>

    {/*<h1>Co potrafię? 🖖🏻</h1>*/}
    <h1>My skills 🖖🏻</h1>

    <div className={styles.wrapperInside}>

        <div className={styles.designerWrapper}>
            <h2>graphic designer</h2>
            <div className="fas fa-pencil-ruler"></div>

            {/*<article>Stawiam na prostotę. <strong>Lubię elegancki i na maksa*/}
            {/*    czytelny design.</strong> Kiedy trzeba potrafię też użyć różnych kolorów i kształtów.*/}
            {/*</article>*/}

            <article>

                I focus on simplicity. I like elegant and easy to read design. When I need to, I can also use different colors and shapes.
            </article>


            <h3>
                {/*W czym tworzę?*/}
                What am I using?
            </h3>
            <article className={styles.whatIUseDesign}>
                <div className="fab fa-figma"></div>
                <div className="devicon-gimp-plain"></div>
                <div className="devicon-photoshop-plain"></div>
                <div className="devicon-illustrator-plain"></div>

               <p className={styles.adobe}>   <div className="fab fa-adobe"></div>
                   {/*Dzięki zajawce do fotografii i kręcenia wideo większość produktów z pakietu Adobe Creative nie stanowi dla mnie wyzwania.*/}

                   Thanks to the love for photography and video shooting, most products from the Adobe Creative suite are not a challenge for me.
               </p>

            </article>
            <h3>
                {/*Co lubię projektować?*/}

                What i like design?

            </h3>
            {/*<article>*/}
            {/*    UI/UX desing | logotypy | strony internetowe | banery | wizytówki | ulotki | brand | social media*/}
            {/*</article>*/}

            <article>

                UI / UX | logotypes | websites | banners | business cards | leaflets | brand design | social media
            </article>



        </div>



  <img className={styles.picture} src={standingGuyPicture} ></img>


        <div className={styles.developerWrapper}>
            <h2>front-end developer</h2>
            <div className="fas fa-code"></div>
            <article>
                {/*Porządek w kodzie i plikach to podstawa. Staram się zawsze wybierać <strong>najlepsze rozwiązanie do danej realizacji</strong>, które zapewni najlepszą efektywność.*/}
                Order in code and files is the basis. I always try to choose the best solution for a given implementation that will ensure the best efficiency.
            </article>

            <h3>
                {/*Z czego dobrze korzystam?*/}
                What am I good at?
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
                What will I be good at?
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