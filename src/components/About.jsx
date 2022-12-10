import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Conatiner = styled.div`
  background-color: #171c28;
  height: 100%;
  width: 100%;
  color: white;
  ${mobile({ height: "90vh" })};
`;

const Header = styled.h1`
  margin-left: 5%;
`;

const Line = styled.div`
  width: 6%;
  margin-left: 6%;
  border: 2px solid white;
  border-radius: 2rem;
`;

const Content = styled.div`
  font-size: 1.8rem;
  margin: 2rem;
  ${mobile({ fontSize: "1rem" })};
  &.size {
    ${mobile({ fontSize: "1.2rem" })};
  }
`;

const About = () => {
  return (
    <>
      <Conatiner id="about">
        <Header>About</Header>
        <Line />
        <Content>
          I am currently a student pursuing my{" "}
          <strong style={{ fontSize: "140%", color: "#8884FF" }}>
            (M.C.A) Master of Computer Applications
          </strong>{" "}
          in{" "}
          <strong style={{ fontSize: "140%", color: "#8884FF" }}>
            Thakur Institute of Management Studies and Career Development and
            Research&nbsp;
          </strong>
          .
        </Content>
      </Conatiner>
    </>
  );
};

export default About;
