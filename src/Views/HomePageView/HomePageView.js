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
  z-index: 999;
  color: black;
  right: 2em;
  top: 2em;
  padding: 1em;
  padding-top: 3.5em;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  height: 380px;

  @media screen and (max-width: 600px) {
    width: calc(100% - 4em);
  }
  box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 1200px) {
    right: calc(50% - 600px);
  }

  ul {
    list-style: none;
    padding: 0;
    font-weight: 400;
    font-size: 1.1em;
  }

  transition: all 0.5s ease-in-out;
  ${({ active }) =>
    active &&
    css`
      width: 4.5em;
      height: 2.5em;
      box-shadow: none;
      border-radius: 50%;

      @media screen and (max-width: 600px) {
        width: 4.5em;
      }
    `}
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  font-size: 2em;
  width: 40px;
  height: 40px;
  background: transparent;

  @media screen and (max-width: 400px) {
    right: 0.5em;
    top: 0.5em;
  }

  div {
    position: absolute;
    left: 50%;
    bottom: 50%;
  }
`;

const StyledX = styled.div`
  transform-origin: center;
  transition: 0.3s ease-in-out;
  transform: translate(-50%, 50%)
    ${({ active }) => (active ? "scale(1)" : "scale(0)")} !important;
`;

const StyledHam = styled.div`
  transform-origin: center;
  transition: 0.3s ease-in-out;
  transform: translate(-50%, 50%)
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
    <StyledNavigation active={isNavOpened}>
      <StyledButton onClick={() => setNavIsOpened(!isNavOpened)}>
        <StyledX className="fas fa-times" active={!isNavOpened} />
        <StyledHam className="fas fa-hamburger" active={isNavOpened} />
      </StyledButton>
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
