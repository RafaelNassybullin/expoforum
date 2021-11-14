import React from 'react';
import styled from 'styled-components';

const Overlay = () => {

    return (
        <>
            <overlaywrap className={'wrap'}>
                <OverlayTop >
                    <Top className={'top'} > </Top>
                    <Top className={'top'} > </Top>
                    <Top className={'top'} > </Top>
                </OverlayTop>
                <OverlayBottom>
                    <Bottom className={'bottom'}> </Bottom>
                    <Bottom className={'bottom'}> </Bottom>
                    <Bottom className={'bottom'}> </Bottom>
                </OverlayBottom>
            </overlaywrap>
        </>
    );
};
export default Overlay;


const OverlayTop = styled.div`
  height: 50vh;
  position: absolute;
  width: 100%;
  z-index: 8;
  
`
const Top = styled.div`
  position: absolute;
  height: 100%;
  width: 33.333vw;
  background: black;
  bottom: 0;
  left: 0;
  right: 0;
  @media (max-width: 768px) {
    width: 100vw;
  }
  &:nth-child(2) {
    left: 33.333vw;
    @media (max-width: 768px) {
      display: none;
    }
  }
  &:nth-child(3) {
    left: 66.666vw;
    @media (max-width: 768px) {
      display: none;
    }
  }
`
const OverlayBottom = styled.div`
height: 50vh;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 8;
`
const Bottom = styled.div`
  position: absolute;
  height: 100%;
  width: 33.333vw;
  background: black;
  bottom: 0;
  right: 66.666vw;
  @media (max-width: 768px) {
    width: 100vw;
    right: 0;
  }
  &:nth-child(2) {
    right: 33.333vw;
    @media (max-width: 768px) {
      top: 100%;
      right: 0;
      width: 100vw;
    }
  }

  &:nth-child(3) {
    right: 0;
    @media (max-width: 768px) {
      top: 200%;
      width: 100vw;
    }
  }
`
