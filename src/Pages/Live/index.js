import React, { useState } from "react";
import "./index.scss";
import Thumbnail from "../../Shared/UIElements/Thumbnail/index";
import ThumbnailData from "../../data";
import Modal from '../../Shared/Components/SeriesModal/index';
import NowLiveComponet from "../../Shared/Components/NowLive/NowLiveComponet";
import ModelBtns from "../../Shared/Components/ModelButtons/ModelBtns";

const LiveVideos = () =>{
    

  const [showScroll, setShowScroll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(index);
    console.log(index)
    setShowModal(true);
  };

  const handleMouseEnter = () => {
    setShowScroll(true);
  };

  const handleMouseLeave = () => {
    setShowScroll(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
    return (
        <React.Fragment>
            <NowLiveComponet onclick={() => handleThumbnailClick()} page={true} para={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}/>
            <body className="homePageLayout now-live-page">
            <h2 className="mb-4 mt-5 fav-heading">Past Live Events</h2>
            <div className="thumbnail-wraper">
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
        </React.Fragment>
    );
}

export default LiveVideos;