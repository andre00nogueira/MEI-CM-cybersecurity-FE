import React from 'react';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import LoginIcon from '@mui/icons-material/Login';
import '../assets/styles/pages/landingPage.css'

export default function Header(){
    return(
    <div className="root">
        <AppBar className="appbar" style={{backgroundColor: "#fafafa"}} elevation={0}>
            <Toolbar className="appbarWrapper">
                <h1 className="appbarTitle"><span className="textColorCybersecurity">Cybersecurity </span> <span className="textColorProject">Project</span></h1>
                <IconButton>
                    <LoginIcon className="loginIcon"/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <div className="container">
            <h1 className="title">
               <span className="textColorCybersecurity">WORK MANAGEMENT</span><br/><span className="textColorProject">MADE EASY</span>
            </h1>
        </div>
    </div>
    );
}