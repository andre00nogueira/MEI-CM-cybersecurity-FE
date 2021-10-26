import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Header from '../Header';
import '../../assets/styles/pages/landingPage.css'

export default function LandingPage(){
    return (
        <div>
            <CssBaseline/>
            <Header/>
        </div>
    );
};

/*
const LandingPage: FunctionComponent = () => {
    return(
    <div className="asdasdasd">
        <span>TITULO</span>
        <span>MOTO</span>
    </div>
    )
}

export default LandingPage;
*/