import React from "react";
import styles from './AboutMeSection.module.scss';
import blob from '../../assets/svg/blob1.svg';
import picture from '../../assets/svg/picture2.svg';
import wave1 from '../../assets/svg/wave1.svg';
import picture2 from '../../assets/svg/picture3.svg';
import picture3 from '../../assets/svg/picture4.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import wave2 from '../../assets/svg/wave2.svg';


const AboutMeSection = () => {

    return(

<>
        <section id="about-me" className={styles.wrapper}>

            <div className={styles.paragraphWrapper}>

                <h1>Cześć, tu Ernest. Fajnie że wpadłeś 👋🏻</h1>

                <p>Jestem początkującym <strong>front-end developerem</strong> ⌨️ oraz nieco bardziej doświadczonym <strong>graphic designerem</strong> ✏️ co daje mi możliwość tworzenia aplikacji webowych od podstaw całkowicie samodzielnie.</p>

                <p> W swojej pracy wykorzystuję <strong>najnowsze technologie</strong> 🚀 zapewniające doskonałą wydajność. Dbam o <strong>czystość i przejrzystość kodu</strong>, utrzymując przy tym odpowiednią <strong>semantykę, standardy oraz nazewnictwo</strong> np. (W3C, BEM, CamelCase). </p>


            </div>
            <div className={styles.pictureWrapper}>
            <img className={styles.picture} alt="img" src={picture}/>
            <img className={styles.blob} alt="img" src={blob}/>
            </div>





        </section>

    <section className={styles.aboutResponsiveWrapper}>


        <div className={styles.contentWrapper2}>

            <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>

        <img src={picture2} className={styles.responsivePicture}/>
            </ScrollAnimation>
        <div className={styles.responsiveDescriptionRight}>
            <h1>Responsive Web Design 👨🏻‍💻</h1>
        <p>Strony projektuję z myślą o <strong>poprawnym ich wyświetlaniu</strong> na każdym ekranie  💻
            </p>
        </div>

        </div>



        <div className={styles.contentWrapper3}>

            <div className={styles.responsiveDescriptionLeft}>

                <h1>Ale dlaczego i po co? ✅ </h1>

                <p>Jest to istotne, ponieważ dziś prawdziwą siłę internetu stanowią użytkownicy mobilni 📱 korzystający z małych ekranów telefonów czy tabletów.</p>

            </div>
            <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>

                <img src={picture3} className={styles.responsivePicture}/>

            </ScrollAnimation>

    </div>


    </section>




</>

    );


};

export default AboutMeSection;