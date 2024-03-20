import React, { useState } from 'react';
import "./MoreLikeThis.scss";
import MoreLikeThisContainerSuggetion from './MoreLikeThisContainerSuggetion'
import morelikethisData from '../../../moreLikeThis';


const MoreLikeThis = ({ show, onHide }) => {

  const [showScroll, setShowScroll] = useState(false);
  const handleMouseEnter = () => {
    setShowScroll(true);
  };

  const handleMouseLeave = () => {
    setShowScroll(false);
  };


  return (
   <div className='MoreLikeThisContainer'>
        <h3>More Like this</h3>
        <body className="homePageLayout ">
        <div className="thumbnail-wraper">
          <div className={`thumbnails-container ${showScroll ? 'show-scroll' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {morelikethisData.map((item, index) => (
              <div key={index} className="thumbnail suggetion" >
                <MoreLikeThisContainerSuggetion imgSrc={item.imageSrc} title={item.title} />
              </div>

            ))}
          </div>

        </div>

      </body>
       

   </div>
  );
};

export default MoreLikeThis;