import React, { useState } from "react";
import "./index.scss";
import Thumbnail from "../../Shared/UIElements/Thumbnail/index";
import ThumbnailData from "../../data";
import Modal from '../../Shared/Components/SeriesModal/index';
import Banner from "../../Shared/Components/Banner";
import Vodimage from "../../Assets/Images/vod.png";
import { ReactComponent as PlayIcon } from '../../Assets/Images/play-cricle.svg';
import NowLiveComponet from "../../Shared/Components/NowLive/NowLiveComponet";
import bgImage from '../../Assets/Images/live-bg.png';

import FavouritIcon from '../../Assets/Images/tick-circle.png';
import ModelBtns from "../../Shared/Components/ModelButtons/ModelBtns";
import Footer from "../../Shared/Navigation/Footer";
import ContinueWatchingData from "../../continueData";
import EpisodeImage from "../../Shared/Components/EpisodeConteiner/EpisodeImage";

const Dashboard = () => {



  const [showScroll, setShowScroll] = useState(false);
  const [showScrolls, setShowScrolls] = useState(false);
  const [showScroll1, setShowScroll1] = useState(false);
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

  const handleMouseEnter1 = () => {
    setShowScrolls(true);
  };

  const handleMouseLeave1 = () => {
    setShowScrolls(false);
  };
  const handleMouseEnter2 = () => {
    setShowScroll1(true);
  };

  const handleMouseLeave2 = () => {
    setShowScroll1(false);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>

      <div className="heroBannerWrap">
        <div onClick={() => handleThumbnailClick(0)}>
          <Banner imageUrl={Vodimage} svg={<PlayIcon />} FavouritIcon={FavouritIcon} />
        </div>
        <body className="homePageLayout heroBannerlayout">
          <h2 className="mb-4 mt-5 fav-heading">Video On Demand</h2>
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
              </div> :
              <div className="model-card-container">
                <div style={{ backgroundImage: `url(${ThumbnailData[selectedThumbnail].imageSrc})` }} className="model-img">
                  <div className='blur-overlay'></div>

                </div>
                <div className="model-content">
                  <h2 className="model-title">{ThumbnailData[selectedThumbnail].title}</h2>
                  <p className="model-para">2023 . {ThumbnailData[selectedThumbnail].paragraph}</p>
                  <ModelBtns />

                </div>

              </div>

            }
          </Modal>

        </body>
      </div>

      <body className="homePageLayout">
        <h2 className="mb-4 mt-5 fav-heading">Live Events</h2>
        <div className="thumbnail-wraper">
          <div onClick={() => handleThumbnailClick()} style={{ width: '96%' }}>
            <NowLiveComponet />
          </div>

        </div>
      </body>

      <body className="homePageLayout">
        <h2 className="mb-4 mt-5 fav-heading">Continue Watching</h2>
        <div className="thumbnail-wraper">
          <div
            className={`thumbnails-container1 ${showScrolls ? 'show-scroll' : ''}`}
            onMouseEnter={handleMouseEnter1}
            onMouseLeave={handleMouseLeave1}
          >
            {ContinueWatchingData.map((item, index) => (
              <div key={index} className="thumbnail" onClick={() => handleThumbnailClick(index)}>
              <EpisodeImage  
               key={index}
               imgSrc={item.imageSrc}
               barWidth={item.barWidth}
               />
              </div>

            ))}
          </div>

        </div>
      </body>

      <body className="homePageLayout">
        <h2 className="mb-4 mt-5 fav-heading">My Favorites</h2>
        <div className="thumbnail-wraper">
          <div
            className={`thumbnails-container2 ${showScroll1 ? 'show-scroll  ' : ''}`}
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
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
      </body>

      <Footer />
    </React.Fragment>
  );
}

export default Dashboard;

