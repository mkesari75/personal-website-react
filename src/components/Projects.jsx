import React from "react";
import styled from "styled-components";
import { VscLiveShare } from "react-icons/vsc";
import { mobile } from "../Responsive";

const Conatiner = styled.div`
  background-color: #171c28;
  height: 100%;
  width: 100%;
  color: white;
  ${mobile({ height: "auto" })};
`;

const Header = styled.h1`
  margin-left: 5%;
`;

const Line = styled.div`
  width: 8.5%;
  margin-left: 6%;
  border: 2px solid white;
  border-radius: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 85%;
  margin-left: 5%;
  margin-top: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Content = styled.div`
  height: auto;
  margin: 5px;
  width: 20rem;
  padding: 10px;
  background-color: #1c2230;
  box-shadow: 1px 2px 3px 4px rgba(12, 12, 12, 0.2);
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const ProjectTitle = styled.div`
  color: #8884ff;
  font-size: large;
  font-weight: 700;
`;

const ProjectContent = styled.div`
  width: auto;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const Live = styled.div`
  display: flex;
  margin-left: auto;
  width: fit-content;
  font-size: 2rem;
  opacity: 0.1;
  z-index: 3;
  &:hover {
    opacity: 1;
  }
`;

const Projects = () => {
  return (
    <>
      <Conatiner id="projects">
        <Header>Projects</Header>
        <Line />
        <Wrapper>
          <ContentContainer>
            <Content>
              <Link href="https://github.com/mkesari75/Web-based-online-blood-donation-system">
                <ProjectTitle>
                  Web Based Onlne Blood Donation System
                </ProjectTitle>
                <ProjectContent>Website made with Jsp</ProjectContent>
              </Link>
            </Content>

            <Content>
              <Link href="https://github.com/mkesari75/kbc">
                <ProjectTitle>KBC App</ProjectTitle>
                <ProjectContent>
                  App made with MERN stack
                  <Live>
                    <Link href="https://kbc-reactapp.netlify.app/">
                      <VscLiveShare />
                    </Link>
                  </Live>
                </ProjectContent>
              </Link>
            </Content>

            <Content>
              <Link href="https://github.com/mkesari75/meme-template">
                <ProjectTitle>Meme Template</ProjectTitle>
                <ProjectContent>App made with MERN stack</ProjectContent>
              </Link>
            </Content>

            <Content>
              <Link href="https://github.com/mkesari75/blog">
                <ProjectTitle>Blog</ProjectTitle>
                <ProjectContent>App made with MERN stack</ProjectContent>
              </Link>
            </Content>

            <Content>
              <Link href="https://github.com/mkesari75/todolist">
                <ProjectTitle>To-do-List</ProjectTitle>
                <ProjectContent>App made with MERN stack</ProjectContent>
              </Link>
            </Content>
          </ContentContainer>
        </Wrapper>
      </Conatiner>
    </>
  );
};

export default Projects;
