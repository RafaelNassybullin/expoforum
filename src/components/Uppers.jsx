import React from 'react';
import styled from 'styled-components';

import img1 from './assets/img/IMG0401.JPG'
import img2 from './assets/img/IMG0403.JPG'
import img3 from './assets/img/IMG0400.JPG'

const imageData = [
    {
        id: 1,
        subtitle: 'Curology',
        title: 'A custom for your skins unique needs',
        img: img1
    },
    {
        id: 2,
        subtitle: 'Curology',
        title: 'A custom for your skins unique needs',
        img: img2
    },
    {
        id: 3,
        subtitle: 'Curology',
        title: 'A custom for your skins unique needs',
        img: img3
    }
]

const Images = () => {

    return (
        <Section>
            <Wrapper>
                <Navi>
                    <div className='disable'><svg width="0.95vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498.04 872">
    <path fill='white' d="M146.28,434.34c3-2.61,5.83-4.72,8.3-7.17q162.36-161.1,324.64-322.28C506.32,78,503.79,35,474,12.35a60.45,60.45,0,0,0-79.08,5.08c-28.95,28.31-57.55,57-86.29,85.51Q164.9,245.58,21.13,388.16C8.49,400.68.5,415,0,433c-.48,18.34,6.46,33.63,19.35,46.54Q64,524.26,108.51,569.23,249.22,711,390,852.69c27.83,28,71.81,25.16,94.13-6.08,17.45-24.4,14.52-57-7.26-79Q396,686.16,315.17,604.78L150.34,438.72C149.3,437.67,148.32,436.54,146.28,434.34Z"/>
</svg></div>
                    <div><svg width="0.95vw" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 498.04 872">
    <path fill='white' d="M351.76,434.34c-3-2.61-5.83-4.72-8.3-7.17Q181.12,266.07,18.82,104.89C-8.28,78-5.75,35,24.07,12.35a60.45,60.45,0,0,1,79.08,5.08c29,28.31,57.55,57,86.29,85.51q143.7,142.64,287.47,285.22C489.55,400.68,497.54,415,498,433c.49,18.34-6.46,33.63-19.34,46.54Q434,524.26,389.53,569.23,248.82,711,108.09,852.69c-27.83,28-71.8,25.16-94.13-6.08-17.45-24.4-14.52-57,7.26-79Q102,686.16,182.87,604.78L347.7,438.72C348.74,437.67,349.72,436.54,351.76,434.34Z"/>
</svg></div>
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
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        object-fit: cover;
      }
    }
  }
`