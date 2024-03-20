import React from 'react'
import smiley from '../../../Assets/Images/smiley-sad.png';

export default function NoLiveEvent() {
  return (
    <div className='noLiveEventBox'>
      <img src={smiley} alt=''/>
      <h3>There is currently no Live Event</h3>
      <p>Next live event <br></br> october 10 11:30 cDT.</p>
      <a href='#' className='btn redBtn'>Watch Videos On Demand</a>
    </div>
  )
}
