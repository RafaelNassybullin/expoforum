import React from 'react';
import styled from 'styled-components';
// import { gsap } from "gsap";


const Header = () => {

    return (
        <Navbar>
            <Wrapper>
                <Logo>
                    <a href="/">Rafael.</a>
                </Logo>
                <Burger>
                    <span> </span>
                    <span> </span>
                </Burger>
            </Wrapper>
        </Navbar>
    );
};
export default Header;

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  height: 128px;
  z-index: 4;
  padding: 0 32px;
  @media (max-width: 425px) {
    height: 96px;
    padding: 0 16px;
  }
`
const Wrapper = styled.div`
  width: 1560px;
  margin: 0 auto;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1560px) {
    width: 1280px;
  }

  @media (max-width: 1366px) {
    width: 1080px;
  }

  @media (max-width: 1080px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 100%;
    margin-right: 16px ;
  }
`
const Logo = styled.div`
  a {
    font-size: 1.2rem;
    letter-spacing: .3rem;
    color: black;
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
  }
`
const Burger = styled.div`
  width: 25px;
  cursor: pointer;
  @media (max-width: 425px) {
    width: 20px;
  }

  span {
    margin-bottom: .3rem;
    background: black;
    height: 2px;
    width: 25px;
    display: block;
  }
`