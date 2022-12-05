import React from "react";
import styled from "styled-components";
import photo from "../resources/mayur.png";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 90vh;
  width: auto;
  ${mobile({ height: "80vh" })};
`;
const Wrapper = styled.div`
  height: 100%;
  background-color: #171c28;
  display: flex;
  align-items: center;
  /* ${mobile({ flexDirection: "column" })}; */
`;

const Heading = styled.p`
  color: white;
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 3rem;
  ${mobile({
    fontSize: "1.5rem",
    flex: 2,
    padding: "10px",
    alignItems: "center",
  })};
  .name {
    ${mobile({ fontSize: "1.7rem" })};
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  color: white;
  height: 100%;
  align-items: center;
  ${mobile({ height: "auto", padding: "10px" })};
`;

const Photo = styled.img`
  height: 20rem;
  width: 20rem;
  ${mobile({ height: "100%", width: "100%" })};
`;

const Br = styled.br``;

const Intro = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Heading>
            <span>
              <span style={{ fontFamily: "Source Code Pro, monospace" }}>
                Hello World!
              </span>
              <Br /> I'm&nbsp;&nbsp;
              <span
                style={{
                  fontFamily: "Norican, cursive",
                  color: "#8884FF",
                }}
                className="name"
              >
                Mayur Kesari.
              </span>
              <Br />
              <span style={{ fontSize: "1.5rem", color: "grey" }}>
                IT Student | Web Developer
              </span>
            </span>
          </Heading>
          <PhotoContainer>
            <Photo src={photo} alt="Mayur Kesari" />
          </PhotoContainer>
        </Wrapper>
      </Container>
    </>
  );
};

export default Intro;
