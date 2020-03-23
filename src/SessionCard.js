import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SessionCard extends Component {
    render() {
        return (
            <div className="card-body">
                <h4 className="card-title"></h4>
                <h6 className="card-title">{this.props.session.speakersNamesCsv}</h6>
                <p className="card-text">{this.props.session.descriptionShort}</p>
            </div>
        );
    }
}

SessionCard.propTypes = {};
SessionCard.defaultProps = {};

export default SessionCard;