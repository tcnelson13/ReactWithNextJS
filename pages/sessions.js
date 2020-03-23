import React, { Component } from 'react';
import axios from 'axios';
import SessionCard from '../src/SessionCard';

import getConfig from 'next/config';
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

// M4.6
class Session extends Component {
    static GetSessionsUrl() {
        if (process.env.NODE_ENV === "production") {
            return process.env.RESTURL_SESSIONS_PROD
                || publicRuntimeConfig.RESTURL_SESSIONS_PROD;
        } else {
            return process.env.RESTURL_SESSIONS_DEV;
        }
    }

    static async getInitialProps() {
        // REST calls using json-server
        var promise = axios.get(Session.GetSessionsUrl()).then(response => {
            return {
                hasErrored: false,
                sessionData: response.data
            };
        })
            .catch(error => {
                return {
                    hasErrored: true,
                    messaage: error.message
                }
            });
        return promise;
    }

    constructor(props) {
        super(props);
        // Initializing state to axios call to db.json result data
        this.state = {
            hasErrored: props.hasErrored,
            message: props.message,
            sessionData: props.sessionData
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                        {this.state.sessionData.map((session) =>
                            <div className="card col-4 cardmin margintopbottom" key={session.id}>
                                <SessionCard session={session} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
};

export default Session;