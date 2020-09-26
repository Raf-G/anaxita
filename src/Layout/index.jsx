import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Authorization from '../Authorization';
import Registration from '../Registration';
import Сalculator from '../Сalculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Layout = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/authorization" component={Authorization} />
                <Route path="/registration" component={Registration} />
                <Route path="/calculator" component={Сalculator} />
                <Route component={Home} />
            </Switch>
        </div>
    )
}

export default Layout;