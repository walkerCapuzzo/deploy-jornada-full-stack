import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCirclePlay,
    faCirclePause,
    faBackwardStep,
    faForwardStep
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);

    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

const timeInSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(':').map(str => str.padStart(2, '0'));
    return parseInt(minutes) * 60 + parseInt(seconds);
}

const Player = ({
    duration,
    randomIdFromArtist,
    randomIdFromArtist2,
    audio
}) => {

    const audioPlayer = useRef();
    const progressBar = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(formatTime(0));
    const durationInSeconds = timeInSeconds(duration);

    const playPause = () => {
        if (isPlaying) {
            audioPlayer.current.pause();
        } else {
            audioPlayer.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    useEffect(() => {
        const updateProgress = () => {
            setCurrentTime(formatTime(audioPlayer.current.currentTime));
            progressBar.current.style.setProperty(
                '--_progress',
                (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
            );
        };

        if (isPlaying) {
            const intervalId = setInterval(updateProgress, 1000);
            return () => clearInterval(intervalId);
        }
    }, [isPlaying, durationInSeconds]);

    return (
        <div className='player'>
            <div className='player__controllers'>
                <Link to={`/song/${randomIdFromArtist}`}>
                    <FontAwesomeIcon className='player__ico' icon={faBackwardStep} />
                </Link>

                <FontAwesomeIcon
                    className='player__icon player__icon--play'
                    icon={isPlaying ?
                        faCirclePause : faCirclePlay}
                    onClick={playPause}
                />

                <Link to={`/song/${randomIdFromArtist2}`}>
                    <FontAwesomeIcon className='player__ico' icon={faForwardStep} />
                </Link>

            </div>

            <div className='player__progress'>
                <p>{currentTime}</p>
                <div className='player__bar'>
                    <div ref={progressBar} className='player__bar--progress'></div>
                </div>
                <p>{formatTime(durationInSeconds)}</p>
            </div>
            <audio ref={audioPlayer} src={audio}></audio>
        </div>
    )
}

export default Player