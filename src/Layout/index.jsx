import React from 'react';
import {Route} from 'react-router-dom';

import Header from '../Header';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Authorization from '../Authorization';
import Footer from '../Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Layout = () => {
    return (
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/Authorization" component={Authorization} />
            <Footer />
        </div>
    )
}

export default Layout;