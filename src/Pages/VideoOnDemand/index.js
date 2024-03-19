import React, { useState } from "react";
import "./index.scss"
import Thumbnail from "../../Shared/UIElements/Thumbnail/index"
import ThumbnailData from "../../data"
import Modal from '../../Shared/Components/SeriesModal/index';
import ModelBtns from "../../Shared/Components/ModelButtons/ModelBtns";
import Footer from "../../Shared/Navigation/Footer";

const VideoOnDemand = () =>{
 
  const [showModal, setShowModal] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  const [showScroll, setShowScroll] = useState(false);




  const handleMouseEnter = () => {
    setShowScroll(true);
  };

  const handleMouseLeave = () => {
    setShowScroll(false);
  };


  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(index);
    setShowModal(true);
  };

 
  const handleCloseModal = () => {
    setShowModal(false);
  };

    return (
      <div>
      <body className="homePageLayout ">
          <h2 className="mb-4 mt-5 fav-heading">Video On Demand</h2>
          <div className="thumbnail-wraper" style={{height:'32vh'}}>
            <div className={`thumbnails-container ${showScroll ? 'show-scroll' : ''}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {ThumbnailData.map((item, index) => (
                <div key={index} className="thumbnail" onClick={() => handleThumbnailClick(index)}>
                  <Thumbnail
                    key={index}
                    imageSrc={item.imageSrc}
                    title={item.title}
                    paragraph={item.paragraph}
                  />
                </div>

              ))}
            </div>

          </div>
          <Modal isOpen={showModal} selectedThumbnail={selectedThumbnail} onClose={handleCloseModal}>
            {selectedThumbnail == null ?
              <div>
              <iframe width="100%" height="464" src="https://www.youtube.com/embed/KLuTLF3x9sA?si=aOjOrxRxkA8SkGE1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>:
              <div className="model-card-container">
                <div style={{ backgroundImage: `url(${ThumbnailData[selectedThumbnail].imageSrc})` }} className="model-img">
                </div>
                <div className="model-content">
                  <h2 className="model-title">{ThumbnailData[selectedThumbnail].title}</h2>
                  <p className="model-para">2023 . {ThumbnailData[selectedThumbnail].paragraph}</p>
                 <ModelBtns/>

                </div>
              </div> 
            
            }
          </Modal>
          </body>
          <Footer/>
        </div>
    );
}

export default VideoOnDemand;