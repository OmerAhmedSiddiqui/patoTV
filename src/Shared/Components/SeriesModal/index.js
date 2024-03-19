import React from 'react';
import EpisodeConteiner from '../EpisodeConteiner/EpisodeConteiner';
import MoreLikeThis from '../MoreLikeThis/MoreLikeThis';
import episodeBanner from "../../../Assets/Images/episodeImg.png"

const Modal = ({ isOpen, onClose,selectedThumbnail, children  }) => {
  if (!isOpen) return null;
  console.log(selectedThumbnail)
  return (
    <div className="modal-overlay1" onClick={onClose}>
      <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
        {children}
        {selectedThumbnail !== undefined && (
          <div className='model-body'>
          <div className='mode-description'>
            <h3>S1 E1 “Pilot”</h3>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.</p>
          </div>  
          <div className='episodes-container'>
            <div className='episode-header'>
              <h3>Episodes</h3>

              <select name="season" id="season">
                <option value="season1">season 1</option>
                <option value="season2">season 2</option>
                <option value="season3">season 3</option>
                <option value="season4">season 4</option>
              </select>
            </div>
            <EpisodeConteiner title={'1. Pilot'} duration={'48m'} 
            description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
            imgSrc={episodeBanner}
            />
            <EpisodeConteiner title={'2. The Last guy'} duration={'48m'} 
            description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
            imgSrc={episodeBanner}
            />
            <EpisodeConteiner title={'3. Episode 3'} duration={'48m'} 
            description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
            imgSrc={episodeBanner}
            />
            <EpisodeConteiner title={'4. Episode 4'} duration={'48m'} 
            description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
            imgSrc={episodeBanner}
            />
            <EpisodeConteiner title={'5. Episode 5'} duration={'48m'} 
            description={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document.'}
            imgSrc={episodeBanner}
            />
            
           <MoreLikeThis/>
          </div>

        </div>
        )}
        
      </div>
    </div>
  );
};

export default Modal;