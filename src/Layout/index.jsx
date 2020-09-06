import React from 'react';
import {Route} from 'react-router-dom';

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Authorization from '../Authorization';
import Registration from '../Registration';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Layout = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/authorization" component={Authorization} />
            <Route exact path="/registration" component={Registration} />
        </div>
    )
}

export default Layout;