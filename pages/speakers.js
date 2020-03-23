import React from 'react';
import axios from 'axios';
import SpeakerCard from '../src/SpeakerCard';

import getConfig from 'next/config';
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

class Speakers extends React.Component {
    static GetSpeakersUrl() {
        if (process.env.NODE_ENV === "production") {
            return process.env.RESTURL_SPEAKERS_PROD
                || publicRuntimeConfig.RESTURL_SPEAKERS_PROD;
        } else {
            return process.env.RESTURL_SPEAKERS_DEV;
        }
    }

    static async getInitialProps({ req }) {
        // REST calls using json-server
        const isServer = !!req;
        if (isServer) {
            var promise = axios.get(Speakers.GetSpeakersUrl()).then(response => {
                return {
                    isLoading: false,
                    hasErrored: false,
                    speakerData: response.data
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
        else {
            return {
                speakerData: [...Array(5)].map((_, i) => ({
                    firstName: "",
                    lastName: "",
                    id: i
                })),
                isLoading: true
            };
        }
    }

    constructor(props) {
        super(props);
        // Initializing state to axios call to db.json result data
        this.state = {
            isLoading: props.isLoading,
            hasErrored: props.hasErrored,
            message: props.message,
            speakerData: props.speakerData
        }
        // console.log(props.speakerData);
    }

    componentDidMount() {
        axios
            .get(Speakers.GetSpeakersUrl())
            .then((response => {
                this.setState({
                    hasErrored: false,
                    isLoading: false,
                    speakerData: response.data
                });
            }))
            .catch((error) => {
                this.setState({
                    hasErrored: true,
                    isLoading: false,
                    speakerData: []
                });
            });
    }

    render() {
        // console.log('isLoading: ', this.state.isLoading);
        // if (this.state.isLoading) {
        //     return <div>...is Loading</div>
        // }

        return (
            <div className="container">
                <div className="row">
                    <div className="card-deck">
                        {this.state.speakerData.map((speaker) =>
                            <div className="card col-4 cardmin margintopbotton20" key={speaker.id}>
                                <SpeakerCard isLoading={this.props.isLoading} speaker={speaker} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
};

export default Speakers;