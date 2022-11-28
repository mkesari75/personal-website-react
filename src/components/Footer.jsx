import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #171c28;
  height: 10vh;
  color: white;
  border-top: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <>
      <Container>Made with ❤ by Mayur Kesari. </Container>
    </>
  );
};

export default Footer;
