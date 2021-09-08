import React from 'react';
import styled from 'styled-components';
// import { gsap } from "gsap";

import img1 from './assets/img/IMG0401.JPG'
import img2 from './assets/img/IMG0403.JPG'
import img3 from './assets/img/IMG0400.JPG'

const imageData = [
    {id: 1, subtitle: 'Curology', title: 'A custom for your skins unique needs', img: img1},
    {id: 2, subtitle: 'Curology', title: 'A custom for your skins unique needs', img: img2},
    {id: 3, subtitle: 'Curology', title: 'A custom for your skins unique needs', img: img3}
]

const Images = () => {

    return (
        <Section>
            <Wrapper>
                <Navi>
                    <div className='disable'>1</div>
                    <div>2</div>
                </Navi>
                <ImageWrap>
                    {imageData.map(item => (
                        <div className="images-testimonials" key={item.id}>
                            <div className="image-titles">
                                <h3>{item.subtitle}</h3>
                                <h2>{item.title}</h2>
                            </div>
                            <div className="image">
                                <img src={item.img} alt={item.subtitle}/>
                            </div>
                        </div>
                    ))}
                </ImageWrap>
            </Wrapper>
        </Section>
    );
};
export default Images;

const Section = styled.section`
  height: 50vh;
  color: white;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Navi = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px;
  z-index: 6;
  @media (max-width: 768px) {
    display: none;
  }

  div {
    background: black;
    color: white;
    width: 3.5rem;
    height: 3.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    border-radius: 50%;
  }

  .disable {
    opacity: 0.3;
  }
`

const ImageWrap = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  .image {
    overflow: hidden;
  }

  .images-testimonials {
    width: 33.333%;
    height: 100%;
    position: relative;
    background: black;
    cursor: pointer;

    &:hover {
      .image {
        opacity: 1;
      }
    }

    @media (max-width: 758px) {
      width: 100vw;
    }

    .image-titles {
      width: 33.333vw;
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 32px;
      @media (max-width: 768px) {
        width: 100%;
      }

      h3 {
        font-size: 1.2rem;
        opacity: 0.8;

        @media (max-width: 768px) {
          font-size: 1.4rem;
        }
        @media (max-width: 425px) {
          font-size: 1.2rem;
          line-height: 2.2rem;
        }
      }

      h2 {
        font-size: 1.5rem;
        line-height: 2rem;
        width: 85%;
        margin-top: 16px;
        color: white;

        @media (max-width: 768px) {
          font-size: 1.5rem;

        }
        @media (max-width: 425px) {
          line-height: 2rem;
          margin-top: 8px;
        }

      }
    }

    .image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      opacity: 0.6;
      transition: 400ms ease-in-out;
      transition-property: opacity;
      left: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`