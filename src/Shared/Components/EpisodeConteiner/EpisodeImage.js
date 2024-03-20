import React from 'react'
import "./EpisodeConteiner.scss";
import playBtn from '../../../Assets/Images/play-btn.png';

export default function EpisodeImage({ imgSrc,barWidth }) {
    return (
        <div className='episodeImg' style={{ backgroundImage: `url(${imgSrc})` }}>
            <img src={playBtn} alt='' />
            <div id="bar" style={{background:`linear-gradient(90deg,#fff ${barWidth}%,#757575 ${100-barWidth}%)`}}></div>
        </div>
    )
}