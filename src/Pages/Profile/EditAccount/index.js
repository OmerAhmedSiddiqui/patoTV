
import React, { useState } from 'react';
import { ReactComponent as EditUpload } from '../../../Assets/Images/editupload.svg';
import "./index.scss";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
 

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const selectedFile = event.target.files[0];
    setProfilePicture(selectedFile);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with the updated profile information
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Profile Picture:', profilePicture);
    // Add your form submission logic here
  };

  return (
    <div>
        <div  className="profileHeading mb-5">
           <h2>Edit Profile</h2>
           </div>
          <div className="row ">
            <div className="col-md-10">
              <div className="card">
                <div></div>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="profilePicture" className="d-block">
          {previewImage ? (
            <img
              src={previewImage}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ width: '150px', height: '150px' }}
            />
          ) : (
            <div className='profilePictureDefault'>
              
              <EditUpload/>
            </div>
          )}
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleProfilePictureChange}
            className="visually-hidden"
          />
        </label>
      </div>

      <div className="mb-3">
        <label htmlFor="name" >Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Paola Rhon" 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="username" >Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          placeholder="paolarhon" 
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" >Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="paola@bttrprojects.com" 
        />
      </div>

      <div className="d-grid gap-2 Editprofile-btn">
                <Link>  <button type="submit" className="btn btn-primary primary-button">Save Changes</button></Link>
                    </div>
    </form>
    </div>
              </div>
            </div>
          </div>
  );
};

export default EditProfile;

