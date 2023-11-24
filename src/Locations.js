import React from "react";
import PlaySound from "src/PlaySound";
import Site1 from 'src/audio_files/Site2.m4a'

function TourLocation(locationName, audio, image, description, props) {
    return (
        <li>
            <h3>{locationName}</h3>
            <PlaySound url = {Site1}></PlaySound>
            <img src={image} alt="" width="500" height="400" style="vertical-align:middle"></img>
            <text>{description}</text>
        </li>
    );
}

function TourLocations() {
    return (
        <ul>

        </ul>
    )
}
export default TourLocation;