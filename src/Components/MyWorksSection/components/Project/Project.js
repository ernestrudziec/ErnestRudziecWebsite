import styled from "styled-components";
import React from "react";

const StyledProject = styled.div`
  flex: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 0.3em;
  font-size: 3em;
  color: white;
  width: 320px;
  height: 320px;
  position: relative;
  margin: 0.3rem;
  border-radius: 10px;

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

  :before {
    z-index: -2;
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${({ url }) => (url ? `url(${url})` : "black")};
    background-size: cover;
    border-radius: 10px;
  }

  :after {
    z-index: -1;
    position: absolute;

    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: ${({ bgcolor }) => (bgcolor ? bgcolor : "black")};
    opacity: 0.9;

    border-radius: 10px;
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
  width: 100%;
  border: solid 2px white;
  font-size: 1rem;
  background: transparent;
  color: white;
  padding: 10px 5px;
  border-radius: 5px;
  outline: none;

  i {
    margin-left: 6px;
  }

  :hover {
    background: white;
    color: ${({ bgcolor }) => (bgcolor ? bgcolor : "black")};
  }
`;

const StyledTop = styled.div`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledA = styled.a`
  width: 50%;
  margin: 0 0.1em;

  opacity: ${({ active }) => (active ? "1" : "0.5")};
  pointer-events: ${({ active }) => (active ? "inital" : "none")};
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
            <StyledButton bgcolor={bgcolor}>
              Github
              <i className="fab fa-github"></i>
            </StyledButton>
          </StyledA>

          <StyledA target="_blank" active={link} href={link}>
            <StyledButton bgcolor={bgcolor}>
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
