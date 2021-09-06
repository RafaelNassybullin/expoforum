import React from 'react';
import styled from 'styled-components';
// import { gsap } from "gsap";


const Titles = () => {

    return (
        <Main>
            <Wrapperr>
                <h2>
                    <Line>
                        <span>Creating unique brand is</span>
                    </Line>
                    <Line>
                        <span>what we do</span>
                    </Line>
                </h2>
                <Button>
                    <a href="/">More about us <Icons>7</Icons></a>
                </Button>
            </Wrapperr>
        </Main>
    );
};
export default Titles;


const Main = styled.main`
  background-color: #fff;
  height: 50vh;
`
const Wrapperr = styled.div`
  width: 1560px;
  padding: 0 32px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 3rem;
    line-height: 4.2rem;
    font-weight: 700;
    user-select: none;
    z-index: 10;
    color: white;
    padding-top: 7%;
    mix-blend-mode: difference;
    letter-spacing: 3px;
    @media (max-width: 768px) {
      font-size: 2.4rem;
      line-height: 3rem;
    }
    @media (max-width: 425px) {
      font-size: 1.7rem;
      margin-top: 72px;
      line-height: 2.2rem;
    }
  }

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
    padding: 0 16px;
  }
`
const Line = styled.div`
  margin-bottom: 8px;
  height: 60px;
  position: relative;
  overflow: hidden;

  span {
    position: absolute;
  }

  @media (max-width: 768px) {
    height: 48px;
  }
  @media (max-width: 425px) {
    height: 32px;
  }
`
const Button = styled.div`
  width: 256px;
  position: relative;
  z-index: 2;
  margin-top: 1rem;

  a {
    font-size: 1.6rem;
    color: black;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 600;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    @media (max-width: 425px) {
      font-size: 1.1rem;
    }

    &:hover {
      div {
        background: black;
        color: white;
      }
    }
  }
`
const Icons = styled.div`
  margin-left: 16px;
  border: 2px solid black;
  padding: 12px;
  height: 24px;
  width: 25px;
  border-radius: 50%;
  transition: 400ms ease-in-out;
  transition-property: background, color;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    padding: 6px;
    width: 20px;
    height: 20px;
    font-size: 1rem;
  }
  @media (max-width: 425px) {
    padding: 4px;
    width: 16px;
    height: 16px;
    font-size: 0.8rem;
  }
`