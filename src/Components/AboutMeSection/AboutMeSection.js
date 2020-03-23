import React from "react";
import styles from './AboutMeSection.module.scss';
import blob from '../../assets/svg/blob1.svg';
import picture from '../../assets/svg/picture2.svg';
import wave1 from '../../assets/svg/wave1.svg';
import picture2 from '../../assets/svg/picture3.svg';


const AboutMeSection = () => {

    return(
<>
        <div id="about-me" className={styles.wrapper}>

            <div className={styles.absoluteBackground}></div>

            <div className={styles.contentWrapper}>

            <div className={styles.aboutMeParagraph}>

                <h1>Cześć, tu Ernest. Fajnie że wpadłeś 👋🏻</h1>

                <p>Jestem początkującym <strong>front-end developerem</strong> ⌨️ oraz nieco bardziej doświadczonym <strong>graphic designerem</strong> ✏️ co daje mi możliwość tworzenia aplikacji webowych od podstaw całkowicie samodzielnie.</p>






                <p> W swojej pracy wykorzystuję <strong>najnowsze technologie</strong> 🚀 zapewniające doskonałą wydajność. Dbam o <strong>czystość i przejrzystość kodu</strong>, utrzymując przy tym odpowiednią <strong>semantykę, standardy oraz nazewnictwo</strong> np. (W3C, BEM, CamelCase). </p>


            </div>


            <div className={styles.pictureWrapper}>
            <img className={styles.picture} src={picture}/>
            <img className={styles.blob} src={blob}/>
            </div>

            </div>



        </div>

    <div className={styles.aboutResponsiveWrapper}>
        <img src={wave1} className={styles.wave}/>

        <div className={styles.contentWrapper2}>

        <img src={picture2} className={styles.responsivePicture}/>

        <div className={styles.responsiveDescription}>
            <h1>Responsive Web Design 👨🏻‍💻</h1>
        <p>Strony projektuję z myślą o <strong>poprawnym ich wyświetlaniu</strong> na każdym ekranie 💻
            </p>
        </div>

        </div>

    </div>

    </>
    );


};

export default AboutMeSection;