import React, {useEffect, useState} from 'react';
// import styled from 'styled-components';
import {gsap} from "gsap";
import Overlay from "./Overlays";
import Titles from "./Titles";
import Images from "./Uppers";

const Animation = (completeAnim) => {

    gsap.to('body', 0, {css: {visibility: 'visible', background: 'white'}});

    const anim = gsap.timeline()

    anim.from('.spano', 1.8, {
        y: 100,
        delay: 1,
        ease: 'power4.out',
        skewY: 7,
        stagger: {
            amount: 0.3
        }
    }).to('.top', 1.6, {
        height: 0,
        ease: 'inOut',
        stagger: 0.4
    }).to('.bottom', 1.6, {
        width: 0,
        ease: 'inOut',
        delay: -0.8,
        stagger: {
            amount: 0.4
        }
    }).to('.wrap', 0, {css: {display: 'none'}}).from('.image img', 1.6, {
        scale: 1.4,
        ease: 'inOut',
        delay: -2,
        stagger: {
            amount: 0.4
        },
        onComplete: completeAnim

    })
}


export default function Home() {

    const [animationComp, setAnimationComp] = useState(false);

    const completeAnim = () => {
        setAnimationComp(true);
    }

    useEffect(() => {
        Animation(completeAnim)
    }, [])


    return (
        <>
            {animationComp === false ? <Overlay/> : ''}
            <Titles/>
            <Images/>
        </>
    );
};



