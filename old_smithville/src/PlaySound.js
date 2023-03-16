import React, {useState} from "react";
import Sound from 'react-sound';
import Site1 from './audio_files/Site1.m4a'

const PlaySound = (
    handleAudioLoading,
    handleAudioPlaying,
    handleAudioFinishedPlaying
) => {
    const[isPlaying, setIsPlaying] = useState(false);

    return (
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {!isPlaying ? 'Play' : 'Stop'}
            </button>
            <Sound 
                url = {Site1}
                playStatus = {
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition = {300}
                onLoading={handleAudioLoading}
                onPlaying={handleAudioPlaying}
                onFinishedPlaying={handleAudioFinishedPlaying}
            />
        </div>
    );
}

export default PlaySound;