import React from "react";
import styles from './HeroSection.module.scss';
import logoPicture from "../../assets/svg/logotyp.svg";
import programmerPicture from "../../assets/svg/programmer.svg";
import lightPicture from '../../assets/svg/lightProgrammer.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import wave from '../../assets/svg/wave1.svg';
import logoPicture2 from '../../assets/svg/logotyp2.svg';

const HeroSection = () => {

    return(

    <div className={styles.wrapper}>


        <div className={styles.socialMediaIcons}>
            <ScrollAnimation offset={0} animateOnce={true} animateIn="fadeInLeft" delay={2000}>

            <i className="fab fa-linkedin-in"></i>

            <i className="fab fa-instagram"></i>
            <i className="fab fa-dribbble"></i>

            <i className="fab fa-behance"></i>
            </ScrollAnimation>
        </div>



        <header>

            <ScrollAnimation animateOnce={true} animateIn="fadeIn" offset={0}>
            <img className={styles.logoPicture2} src={logoPicture2}/>
            <img className={styles.logoPicture} src={logoPicture}/>

            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInDown" delay={500} animateOnce={true}>
            <h1>Front-end developer ‍💻 and UI/UX Designer 🎨</h1>
            </ScrollAnimation>
        </header>
        <div className={styles.contactInfos} >
        <ScrollAnimation animateOnce={true} offset={0} animateIn="fadeInRight" delay={1500}>


            <i className="fab fa-github"></i>
            <i className="fas fa-address-card"></i>
            <i className="fas fa-envelope"></i>
            <i className="fas fa-phone"></i>


        </ScrollAnimation>
        </div>



        <a href="#about-me"><div className={styles.scrollDown}>trochę o mnie<i className="fas fa-arrow-down"></i></div></a>
        <img className={styles.lightPicture} src={lightPicture}/>
        <img className={styles.programmerPicture} src={programmerPicture}/>




    </div>

    );

}

export default HeroSection;