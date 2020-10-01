import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { ContextConsumer } from "../Context";

export default class About extends Component {
 
    render() {
        return (
            <div>
                <Header />
                Token: {localStorage.getItem('cacheToken')}
                    <ContextConsumer>
                        {context => (
                            <div >
                                {context.token}
                            </div>
                        )}
                    </ContextConsumer>
                <Footer />
            </div>
        )
    }
}
