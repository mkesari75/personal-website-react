import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
