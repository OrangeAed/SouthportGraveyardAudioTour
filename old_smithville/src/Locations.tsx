import React, { AudioHTMLAttributes, ImgHTMLAttributes } from "react";
import PlaySound from "./PlaySound";

function TourLocation(locationName: string, audio: string, image: string, description: string, props) {
    return (
        <li>
            <h3>{locationName}</h3>
            <PlaySound></PlaySound>
            <img src={image}></img>
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