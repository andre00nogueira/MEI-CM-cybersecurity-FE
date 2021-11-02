import React from 'react';
import { CssBaseline } from '@material-ui/core';
import Header from '../Header';
import '../../assets/styles/pages/landingPage.css'

export default function LandingPage(){
    return (
        <div className="root">
            <CssBaseline/>
            <Header/>
            <div className="container">
                <h1 className="title">
                <span className="textColorCybersecurity">WORK MANAGEMENT</span><br/><span className="textColorProject">MADE EASY</span>
                </h1>
            </div>
        </div>
    );
};