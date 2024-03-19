import React from 'react'
import ButtonBox from '../../UIElements/Button'
import { ReactComponent as PlayIcon}  from '../../../Assets/Images/play-cricle.svg';
import moreIcon from '../../../Assets/Images/dot-horizontal.png';
import shareIcon from '../../../Assets/Images/share.png';


export default function ModelBtns({onclick}) {
    return (
        <div className="btns">
            <ButtonBox text="Play" className="primary-button" svg={<PlayIcon />} onclick={onclick}/>
            <div className="iconBox">
                <img src={shareIcon} alt='share' />
                <p>
                    Share
                </p>
            </div>
            <div className="iconBox moreIconBox">
                <img src={moreIcon} alt='more' />   
                <p>
                    More
                </p>
            </div>

        </div>
    )
}
