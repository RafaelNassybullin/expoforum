import React from 'react';
import GlobalStyless from "./components/assets/GlobalStyles";
import Header from "./components/Header";
import Titles from "./components/Titles";
import Images from "./components/Uppers";
import Overlay from "./components/Overlays";
import {gsap} from "gsap";
// import styled from 'styled-components';
// import { gsap } from "gsap";


function App() {


    return (
        <>
            <GlobalStyless/>
            <Overlay/>
            <Header/>
            <Titles/>
            <Images/>
        </>
    );
}

export default App;
