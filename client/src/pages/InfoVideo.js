import React from 'react';
import "./styles.css";
import YoutubeEmbed from "./YoutubeEmbed";

const InfoVideo = () => {

        return (
            <div className="App">
                <h1>Аудиокнига</h1>
                <YoutubeEmbed embedId="rokGy0huYEA"/>
            </div>
        );
};


export default InfoVideo;