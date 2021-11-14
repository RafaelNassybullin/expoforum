import React from 'react';
import GlobalStyless from "./components/assets/GlobalStyles";
import {Route, Switch, Link, useHistory} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import New from "./components/New";
import About from "./components/About";
import Roar from "./components/Roar";


const routes = [
    {path: '/', name: 'Home', Component: Home},
    {path: '/services', name: 'Services', Component: Services},
    {path: '/new', name: 'New', Component: New},
    {path: '/about', name: 'About', Component: About},
    {path: '/roar', name: 'Roar', Component: Roar},
]

function App() {
    return (
        <>
            <GlobalStyless/>
            <Header/>
            {routes.map(({path, Component})=>(
                <Route key={path} exact path={path} >
                    <Component/>
                </Route>
            ))}
            {/*<Navigation/>*/}
        </>
    );
}
export default App;
