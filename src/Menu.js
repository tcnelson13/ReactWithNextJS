import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="navbar" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/speakers">Speakers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sessions">Sessions</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;