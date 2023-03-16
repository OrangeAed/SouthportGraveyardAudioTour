import React from 'react';
import '../audio_files/Recording.m4a';
import TourLocation from './Locations'

function MainPage() {
    return (
        TourLocation(
            "site 1",
            "../audio_files/Site1.m4a",
            "site1.jpg",
            "Description for site 1",
            ""
        )
    )
}
export default MainPage