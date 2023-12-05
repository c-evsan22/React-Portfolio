import React  from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";

import About from './components/about';
import './app.css';

function App() {

    return (
        <Router>
            <div className='topnav'>
                <div className='topnav-left'>
                    <Link to="/about">ABOUT</Link>
                </div>
                <div className='topnav-right'>
                    <Link to="/portfolio">PORTFOLIO</Link>
                    <Link to="/contact">CONTACT</Link>
                    <Link to="/resume">RESUME</Link>
                </div>
            </div>

            <hr />

            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;