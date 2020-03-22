import React from "react";
import styles from './AboutMeSection.module.scss';
import blob from '../../assets/svg/blob1.svg';
import picture from '../../assets/svg/picture2.svg';
import wave1 from '../../assets/svg/wave1.svg';

const AboutMeSection = () => {

    return(
<>
        <div className={styles.wrapper}>

            <div className={styles.absoluteBackground}></div>

            <div className={styles.contentWrapper}>

            <div className={styles.aboutMeParagraph}>

                <h1>Cześć, tu Ernest. Fajnie że wpadłeś 👋🏻</h1>

                <p>Jestem początkującym <strong>front-end developerem</strong> ⌨️ oraz nieco bardziej doświadczonym <strong>graphic designerem</strong> ✏️ co daje mi możliwość tworzenia aplikacji webowych od podstaw całkowicie samodzielnie.</p>






                <p> W swojej pracy wykorzystuję <strong>najnowsze technologie</strong> 🚀 zapewniające doskonałą wydajność. Dbam o <strong>czystość i przejrzystość kodu</strong>, utrzymując przy tym odpowiednią <strong>semantykę i standardy</strong> np. (W3C, BEM, CamelCase). </p>


            </div>


            <div className={styles.pictureWrapper}>
            <img className={styles.picture} src={picture}/>
            <img className={styles.blob} src={blob}/>
            </div>

            </div>

            <img className={styles.wave1} src={wave1}/>

        </div>

    </>
    );


};

export default AboutMeSection;