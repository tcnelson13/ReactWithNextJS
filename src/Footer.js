import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {
    render() {
        return (
            <div className="jumbotron text-center">
                <h7><b>Silicon Valley Code Camp 2018</b> is Hosted by PayPal in San Jose
                        at their Town Hall location. 2121 North First Street. <b>March 17-20 2020</b></h7>
            </div>
        );
    }
}

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;