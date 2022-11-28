import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Container = styled.div`
  height: 4.5rem;
  width: auto;
  background-color: #171c28;
  top: 0;
  position: sticky;
  border-bottom: 1px solid grey;
  box-shadow: 0px 15px 10px -15px #111;
  ${mobile({ height: "auto" })};
`;

const Wrapper = styled.div`
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  ${mobile({ display: "flex", flexDirection: "column" })};
`;

const Brand = styled.div`
  color: white;
  font-family: "Norican", cursive;
  display: flex;
  flex: 2;
  font-size: 2.5rem;
  font-weight: bold;
  margin-left: 2rem;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  text-transform: sentencecase;
  ${mobile({ display: "flex", width: "100%" })};
`;

const MenuItem = styled.div`
  color: white;
  cursor: pointer;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  &:hover {
    color: #8884ff;
  }
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Brand>Mayur Kesari .</Brand>
          <Menu>
            <MenuItem>
              <Link href="#about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#skills">Skills</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#projects">Projects</Link>
            </MenuItem>
            <MenuItem>
              <Link href="#contact">Contact</Link>
            </MenuItem>
            <MenuItem>Resume</MenuItem>
          </Menu>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
