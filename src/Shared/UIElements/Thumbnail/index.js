import React from "react";
import "./index.scss"


const Thumbnail =  ({ imageSrc, title, paragraph }) =>{
    
    return (
        <React.Fragment>
        

        <div className="thumbnail">
            <img src={imageSrc} alt={title} />
                 <div className="thumbnail-content">
                    <h3>{title}</h3>
                     <p>{paragraph}</p>
                 </div>
        </div>
      
        </React.Fragment>
    );
}

export default Thumbnail;