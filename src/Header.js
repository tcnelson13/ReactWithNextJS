import React, { Component } from 'react';
import PropTypes from 'prop-types';
import svccImg from '../static/SVCClogo.png';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="row">
                        <div className="col-12 col-sm-4 text-center">
                            <h6 className="text-uppercase">March 17-20&nbsp;&nbsp;2020</h6>
                            <h6 className="text-uppercase">San Jose, California</h6>
                        </div>
                        <div className="col-12 col-sm-8 text-lg-right">
                            <div><img src={svccImg} /></div>
                            <h2>Silicon Valley Code Camp 2020</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;