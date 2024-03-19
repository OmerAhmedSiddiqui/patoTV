import React from "react";
import "./index.scss"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const EditChangePassword = () =>{

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
      };
    
    return (
        <React.Fragment>
         
           <div  className="profileHeading">
           <h2>Change Password</h2>
           </div>
           <div className=" mt-5">
          <div className="row ">
            <div className="col-md-10">
              <div className="card">
                <div >
                 
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label>Current Password</label>
                      <input type="Password" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Paola Rhon"  />
                    </div>
                    <div className="mb-3">
                    <label>New Password</label>
                      <input type="Password" className="form-control" id="email" aria-describedby="emailHelp" placeholder="New Password"  />
                    </div>
                    <div className="mb-3">
                    <label>Confirm New Password</label>
                      <input type="Password" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Confirm New Password"  />
                    </div>
                  
                    <div className="d-grid gap-2 Editprofile-btn">
                     <Link to="/dashboard"> <button type="submit" className="btn btn-primary primary-button">Save Changes</button></Link>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </React.Fragment>
    );
}

export default EditChangePassword;