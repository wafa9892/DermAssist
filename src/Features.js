import React from 'react';
import './Feature.css';
import { Border } from 'react-bootstrap-icons';
import DAfeature from './DAfeature.png';
import humanimage from './humanimage.png';


export default function Features() {
  return (
    <div>
      <div className="d-grid gap-6 col-9 mx-auto">
        <button
          type="button"

          className="btn btn-danger featurebutton"
          style={{
            fontFamily: 'math',
            fontSize: '25px',
            height: '50px',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          Check Your Skin Now
        </button>
      </div>
      <div className="featureinfo" style={{ marginLeft: '2rem' }}>
        <h1>What do you know in 1 minute?</h1>
      </div>
      <div className="featuredetail" style={{ marginLeft: '2.4rem' }}>
        <h4>Risks Detection and Assessment of 10 diseases:</h4>
      </div>
      <div class="banner">
        <div class="right-banner">
          <div className="list" >
            <div className="col1" style={{ marginLeft: '2rem' }}>
              <div className="item" style={{ marginLeft: '2rem' }}>
                <h5><b>Skin Disease</b></h5>
                melanoma, BKK, BCC, etc.
              </div>
              <div className="item" style={{ marginLeft: '2rem' }}>
                <h5><b>Precancerous lesions</b></h5>
                melanoma, BKK, BCC, etc.
              </div>
              <div className="item" style={{ marginLeft: '2rem' }}>
                <h5><b>6 types of acne</b></h5>

              </div>
            </div>
            <div className="col1" style={{ marginLeft: '2rem' }}>
              <div className="item" style={{ marginLeft: '2rem', position: 'relative' }}>
                <h5><b>Skin Disease</b></h5>
                melanoma, BKK, BCC, etc.
              </div>
              <div className="item" style={{ marginLeft: '2rem' }}>
                <h5><b>Precancerous lesions</b></h5>
                melanoma, BKK, BCC, etc.
              </div>
              <div className="item" style={{ marginLeft: '2rem' }}>
                <h5><b>6 types of acne</b></h5>

              </div>
            </div>

          </div>
          <div className="d-grid gap-2 col-5 mx-auto">
            <button

              type="button"
              className="btn btn-danger rounded-button"
              style={{ fontFamily: 'math', marginTop: '2rem' }}
            >
              Check Skin Now
            </button>
          </div>
        </div>
        <div class="left-banner">
          <div class='block'>
            <div class='right-block'>
              <b>DermAssist is based on Machine Learning technologies</b>


            </div>
            <div class='left-block'>
              <img src={DAfeature}></img>
            </div>
            <div block-shadow></div>

          </div>
        </div>
      </div>
      {/* image ml information */}
      <div class='context'>
        <div class='left-context'>
          <img src={humanimage} >

          </img>
        </div>

        <div class='right-context'>
          <h1><b>DermAssist can save your life</b>
          </h1>
          <p>One of the most dangerous diseases that DermAssist can help identify is skin Disease.

          </p>
          <p class='mt'><b>
            Skin Disease is the most common Disease in the India and worldwide.
          </b>
            <div class='featurelist'>
              <li>More than 2 people die of skin cancer every hour all over the world.</li>
              <li> Melanoma is a skin cancer that can spread earlier and more quickly than other skin cancers.
              </li>
              <li> Melanoma is the second most common of all cancers in men and women ages 15-29.
              </li>
              <li> 1 in 50 people will develop skin cancer in their lifetime.
              </li>
              <li> When detected early, the 5-year survival rate for melanoma is 99 percent.
              </li>
            </div>

          </p>
        </div>

      </div>

    </div>
  );
}
