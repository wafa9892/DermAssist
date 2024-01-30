import React from 'react';
import DermImage from './Derm.png'; // Adjust the filename accordingly
import main_img from './main_img.png'; // Adjust the filename accordingly
import './Navbar.css'; // Assuming you put the styles in a separate CSS file

export default function Navbar() {
  return (
    <>
      <div className="image-container">
        <div>
          <a className="navbar-brand" href="#">
            <div className="main-image-container">
              <img src={main_img} alt="" className="main-image" />
              <div className="text-overlay">
              <h1 style={{ color: 'white', fontFamily: 'math', marginTop: '10rem' }}>Reject Skin Ailments!</h1><br />
                {/* 
                   */}
                <h4 style={{ color: 'white', fontFamily: 'math' }}>Say Farewell to Skin Diseases!</h4>
                <p className='mb-1' style={{ color: 'white', fontFamily: 'math', position: 'absolute' }}>
                  Inspect your skin using a smartphone and receive rapid
                </p><br />
                <p className='' style={{ color: 'white', fontFamily: 'math', position: 'absolute' }}>
                  results within one minute.
                </p><br /><br/>
                <div className="d-grid gap-2 col-8 mx-auto">
                  <button
                    type="button"
                    className="btn btn-danger rounded-button"
                    style={{ fontFamily: 'math' }}
                  >
                    Check Skin Now
                  </button>
                  {/* The outcome of the scan is not equivalent to a diagnosis. For an accurate diagnosis and treatment recommendation, please consult with your doctor. */}



                </div>


              </div>
            </div>
          </a>
        </div>
        <div className="navbar">
          <img src={DermImage} alt="" className="logo" />
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                How It Works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Benefit
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="diseaseinfo">
                Disease Info
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Doctor Recommendation
              </a>
            </li>
          </ul>
        </div>
      </div>
      
    </>
  );
}