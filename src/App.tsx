import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route exact path="/login" component={LoginPage}/>
            </Switch>
        </Router>
    )
}

export default App;
