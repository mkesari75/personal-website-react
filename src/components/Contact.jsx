import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { mobile } from "../Responsive";

const Container = styled.div`
  background-color: #171c28;
  height: 100%;
  width: 100%;
  color: white;
  ${mobile({ height: "70vh" })};
`;

const Header = styled.h1`
  margin-left: 5%;
`;

const Line = styled.div`
  width: 9%;
  margin-left: 6%;
  border: 2px solid white;
  border-radius: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 5%;
  height: auto;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubHeader = styled.div`
  font-size: 1.3rem;
  color: grey;
`;

const Icons = styled.div`
  display: flex;
  align-items: right;
  font-size: 3rem;
  margin: 1%;
`;

const Icon = styled.div`
  margin: 1%;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Location = styled.div`
  font-size: 2rem;
`;

const Link = styled.a`
  color: white;
  &:hover {
    color: #8884ff;
  }
`;

const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Header>Contact</Header>
        <Line />
        <Wrapper>
          <Content>
            <SubHeader>
              DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
            </SubHeader>
            <Icons>
              <Icon>
                <Link href="https://www.linkedin.com/in/mayur-kesari/">
                  <FaLinkedin />
                </Link>
              </Icon>
              <Icon>
                <Link href="https://github.com/mkesari75">
                  <FaGithub />
                </Link>
              </Icon>
              <Icon>
                <Link href="mailto:mkesari75@gmail.com">
                  <GrMail />
                </Link>
              </Icon>
            </Icons>
            <Location>
              <MdLocationPin style={{ color: "#8884ff" }} />
              Mumbai, India
            </Location>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};

export default Contact;
