import React, { useState } from "react";
import programmerPicture from "../../assets/svg/programmer.svg";
import styles from "./HomePageView.module.scss";
import logoPicture from "../../assets/svg/logotyp.svg";
import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutMeSection from "../../Components/AboutMeSection/AboutMeSection";
import "animate.css/animate.min.css";
import MyWorksSection from "../../Components/MyWorksSection/MyWorksSection";
import WhatICanSection from "../../Components/WhatICanSection/WhatICanSection";
import FooterSection from "../../Components/FooterSection/FooterSection";

import styled, { css } from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import img1 from "../../assets/svg/miniicon.svg";
import img2 from "../../assets/svg/logotyp2.svg";

// $mint: #52C0D6;
// $dark-blue: #111126;
// $pink: #ff2a6d;

const StyledNavigation = styled.nav`
  position: fixed;
  z-index: 997;
  color: black;
  right: 2em;
  top: 2em;

  padding: 1em;
  padding-top: 3.5em;
  background: white;
  border-radius: 10px;
  overflow: hidden;

  transform: scale(1);
  @media screen and (max-width: 600px) {
    left: 2em;
  }
  box-shadow: 0px 0px 80px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 1200px) {
    right: calc(50% - 600px);
  }

  ul {
    list-style: none;
    padding: 0;
    font-weight: 400;
    font-size: 1.1em;
    margin: 0 10px;
    width: auto;
  }

  transition: all 0.5s ease-in;

  ${({ active }) =>
    active &&
    css`
      transform-origin: right top;
      transform: scale(0);
      //width: 4.5em;
      //height: 2.5em;
      box-shadow: none;
      border-radius: 50%;
      transition: all 0.5s ease-in-out;
    `}
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: fixed;
  font-size: 2em;

  width: 72px;
  height: 72px;
  background: white;
  right: 1em;
  top: 1em;
  z-index: 999;

  border-radius: 50%;

  @media screen and (min-width: 1200px) {
    right: calc(50% - 600px);
  }
`;

const StyledX = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;

  transform-origin: center;
  transition: 0.3s ease-in-out;
  transform: translate(-50%, -50%)
    ${({ active }) => (active ? "scale(1)" : "scale(0)")} !important;
`;

const StyledHam = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: center;
  transition: 0.3s ease-in-out;
  transform: translate(-50%, -50%)
    ${({ active }) => (active ? "scale(1)" : "scale(0)")} !important;
`;

const StyledLi = styled.li`
  
   padding: 5px 20px;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      border-radius: 10px;
       

      :hover {
        background: ${({ color }) => color || "#52C0D6"};
        transform: scale(1.05);
        color: white;
       
       
      }

    }

    img {
      width: 60%;
    }
    span {
      display: inline-block;
      width: 30px !important;
    }
`;

// $mint: #52C0D6;
// $dark-blue: #111126;
// $pink: #ff2a6d;

const Navigation = () => {
  const [isNavOpened, setNavIsOpened] = useState(true);
  return (
    <>
      <StyledButton onClick={() => setNavIsOpened(!isNavOpened)}>
        <StyledX className="fas fa-times" active={!isNavOpened} />
        <StyledHam className="fas fa-hamburger" active={isNavOpened} />
      </StyledButton>

      <StyledNavigation active={isNavOpened}>
        <ul>
          <AnchorLink onClick={() => setNavIsOpened(!isNavOpened)} href="#home">
            <StyledLi color="transparent">
              <img src={img2} />
            </StyledLi>
          </AnchorLink>

          <AnchorLink
            onClick={() => setNavIsOpened(!isNavOpened)}
            href="#about-me"
          >
            <StyledLi color="#52C0D6">
              <span>😅</span>about me
            </StyledLi>
          </AnchorLink>

          <AnchorLink
            onClick={() => setNavIsOpened(!isNavOpened)}
            href="#about-responsive"
          >
            <StyledLi color="#ff2a6d">
              <span>👨‍💻</span>rwd
            </StyledLi>
          </AnchorLink>
          <AnchorLink
            onClick={() => setNavIsOpened(!isNavOpened)}
            href="#my-skills"
          >
            <StyledLi color="#52C0D6">
              <span>⚡️</span>my skills
            </StyledLi>
          </AnchorLink>
          <AnchorLink
            onClick={() => setNavIsOpened(!isNavOpened)}
            href="#my-works"
          >
            <StyledLi color="#ff2a6d">
              <span>🎨</span>my works
            </StyledLi>
          </AnchorLink>
          <AnchorLink
            onClick={() => setNavIsOpened(!isNavOpened)}
            href="#contact"
          >
            <StyledLi color="#52C0D6">
              <span>🤝</span>contact/cv
            </StyledLi>
          </AnchorLink>
        </ul>
      </StyledNavigation>
    </>
  );
};

const HomePageView = () => {
  return (
    <>
      <Navigation />

      <HeroSection />
      <AboutMeSection />
      <WhatICanSection />
      <MyWorksSection />
      <FooterSection />
    </>
  );
};

export default HomePageView;
