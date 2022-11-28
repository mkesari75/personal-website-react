import React from "react";
import styled from "styled-components";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiJava } from "react-icons/si";

const Container = styled.div`
  background-color: #171c28;
  height: 100%;
  width: 100%;
  color: white;
`;

const Header = styled.h1`
  margin-left: 5%;
`;

const Line = styled.div`
  width: 5%;
  margin-left: 6%;
  border: 2px solid white;
  border-radius: 2rem;
`;

const IconContainer = styled.div`
  margin-left: 2%;
`;

const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin: 1%;
  cursor: pointer;
  &:hover {
    color: #8884ff;
  }
`;

const IconTitle = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: center;
`;

const Skills = () => {
  return (
    <>
      <Container id="skills">
        <Header>Skills</Header>
        <Line />
        <IconContainer>
          <Icons>
            <Icon>
              <AiFillHtml5 />
              <IconTitle>html-5</IconTitle>
            </Icon>
            <Icon>
              <FaCss3Alt />
              <IconTitle>css-3</IconTitle>
            </Icon>
            <Icon>
              <SiJavascript />
              <IconTitle>js-3</IconTitle>
            </Icon>
            <Icon>
              <FaReact />
              <IconTitle>react.js</IconTitle>
            </Icon>
            <Icon>
              <FaNodeJs />
              <IconTitle>node.js</IconTitle>
            </Icon>
            <Icon>
              <FaGitAlt />
              <IconTitle>git</IconTitle>
            </Icon>
            <Icon>
              <SiJava />
              <IconTitle>Java</IconTitle>
            </Icon>
          </Icons>
        </IconContainer>
      </Container>
    </>
  );
};

export default Skills;
