import React from 'react'

export default function MoreLikeThisContainerSuggetion({imgSrc,title}) {
  return (
    <div className='MoreLikeThisSuggetion' style={{backgroundImage:`url(${imgSrc})`}}>
      <h4>{title}</h4>
    </div>
  )
}
