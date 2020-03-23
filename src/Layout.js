import React, { Component, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/site.css';

import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

export class Layout extends Component {
    render() {
        const { children } = this.props;

        return (
            <Fragment>
                <Header />
                <Menu />
                {children}
                <Footer />
            </Fragment>
        )
    }
}