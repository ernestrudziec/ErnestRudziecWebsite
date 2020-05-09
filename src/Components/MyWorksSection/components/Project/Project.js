import styled from "styled-components";
import React from "react";

const StyledProject = styled.div`
  flex: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 1em 0.3em;
  font-size: 3em;
  color: white;
  width: 500px;
  height: 320px;
  position: relative;
  border-radius: 10px;

  margin: 0.3em;
  box-shadow: 0px 0px 100px -10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 726px) {
    margin: 0;
    border-radius: 0;
    width: 100%;
  }

  h1 {
    margin: 0;
    font-size: 1.6rem;
  }

  h4 {
    margin: 0;
    font-size: 1rem;
    font-weight: 400;
    max-width: 600px;
  }

  &:before {
    position: absolute;
    z-index: -2;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${({ url }) => (url ? `url(${url})` : "black")} center no-repeat;
    background-size: cover;
    border-radius: 10px;

    @media screen and (max-width: 726px) {
      border-radius: 0;
    }
  }

  &:after {
    z-index: -1;
    position: absolute;
    opacity: 0.8;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${({ bgcolor }) => (bgcolor ? bgcolor : "black")};

    border-radius: 10px;

    @media screen and (max-width: 726px) {
      border-radius: 0;
    }
  }
`;

const StyledBottom = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: solid 2px white;
  font-size: 1rem;
  background: transparent;
  padding: 10px 5px;
  border-radius: 5px;
  outline: none;

  width: 100%;

  i {
    margin-left: 6px;
  }

  :hover {
    background: white;
    color: ${({ bgcolor }) => (bgcolor ? bgcolor : "transparent")};
  }
  pointer-events: ${({ active }) => (active ? "initial" : "none")};
  color: ${({ active }) =>
    active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)"};

  border: ${({ active }) =>
    active ? "solid 2px white" : "solid 2px rgba(255,255,255,0.3)"};
`;

const StyledTop = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledA = styled.a`
  display: flex;
  margin: 0.1em 0.1em;
  background: transparent;
  width: 100%;
`;

const Project = ({ bgcolor, url, name, link, description, github }) => {
  return (
    <>
      <StyledProject bgcolor={bgcolor} url={url}>
        <StyledTop>
          <h1>{name}</h1>
          <h4>{description}</h4>
        </StyledTop>

        <StyledBottom>
          <StyledA target="_blank" active={github} href={github}>
            <StyledButton active={github} bgcolor={bgcolor}>
              Github
              <i className="fab fa-github"></i>
            </StyledButton>
          </StyledA>

          <StyledA target="_blank" active={link} href={link}>
            <StyledButton active={link} bgcolor={bgcolor}>
              Demo
              <i className="fas fa-play"></i>
            </StyledButton>
          </StyledA>
        </StyledBottom>
      </StyledProject>
    </>
  );
};

export default Project;
