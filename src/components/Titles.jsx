import React from 'react';
import styled from 'styled-components';


const Titles = () => {
    return (
        <Main>
            <Wrapperr>
                <h2>
                    <Line>
                        <span className={'spano'}>Creating unique brand is</span>
                    </Line>
                    <Line>
                        <span className={'spano'}>what we do</span>
                    </Line>
                </h2>
                <Button>
                    <a href="/">More about us <Icons>
                        <svg width='2vw' fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 593.98 594"><path d="M297.14,0C460.88.05,594.07,133.3,594,297c-.09,164.34-133.3,297.2-297.8,297C133,593.82-.12,460.27,0,296.78.12,133.05,133.38,0,297.14,0Zm60.19,339c-1.66,1.77-2.53,2.75-3.44,3.68-16.11,16.63-32.36,33.12-48.29,49.91-15.15,16-15.67,40.56-1.58,56.32,17.62,19.7,45.1,19.74,63.8.2q18.82-19.68,37.83-39.17c27.37-28.2,54.92-56.23,82.1-84.61,15.07-15.74,14.82-40.74,0-56.73-4.75-5.13-9.74-10-14.61-15.06q-52.68-54.33-105.35-108.69c-11.54-11.94-25.24-17.21-41.61-13.29-31.74,7.62-43,46-20.54,69.87,12.22,13,24.8,25.6,37.19,38.4,4.65,4.8,9.24,9.65,14.49,15.14h-136c-28.32,0-56.64-.15-85,.06-25.18.18-44.46,23.29-40.55,48.18,3.29,20.93,20.38,35.74,41.6,35.76q104,.09,207.93,0Z"/></svg>
                    </Icons></a>
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

    
  }
`
const Icons = styled.div`
  margin-left: 10px;
  padding: 12px;
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