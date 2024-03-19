import React from "react";
import "./index.scss"
import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Login = () =>{
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
      };
    
    return (
        <div className="container mt-5 loginForm d-flex align-items-center justify-content-center">
          <div className="row justify-content-center formSize">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title text-center mb-5">Log In</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      
                      <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email or Phone Number" required />
                    </div>
                    <div >
                      
                      <input type="password" className="form-control" id="password" placeholder="Password" required />
                    </div>
                    <div className="mb-3">
                    <a className="forgetPassword" href="/forgot-password">Forgot your password?</a>
                  </div>
                    <div className="d-grid gap-2">
                     <Link to="/dashboard"> <button type="submit" className="btn btn-primary primary-button w-100">Sign In</button></Link>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Login;