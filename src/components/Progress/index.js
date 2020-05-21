import React from 'react';
import './progress.css';

function createInitialProgress() {
  const progress = [
    {"year":"2015", "text":"Founded in Thailand by Sam Fran, Tom Opal, and others"},
    {"year":"2016", "text":"Accepted into Sesame Street and Backstreet Boys"},
    {"year":"2017", "text":"Raised GDP by 6%"},
    {"year":"2019", "text":"Raised a child"},
    {"year":"2020", "text":"Moved to Missouri"}
  ]
  return progress;
}

function Progress() {
  const [ progress, setProgress ] = React.useState(createInitialProgress());
  const IMAGE_URL = "https://www.shareicon.net/data/256x256/2015/12/22/691431_email_512x512.png";

  return (
    <div className="progress">
      <h3 className="progress-header">Our Progress</h3>
  
      <div className="progress-backdrop">
        <div className="progress-backdrop-left"></div>
        <div className="progress-backdrop-middle"></div>
        <div className="progress-backdrop-right"></div>
      </div>
      <ul className="progress-list">
      {
        progress.map((step,i) => {
          return (
            <div className="progress-items">
              <span className="year">{step.year}</span>
              <div className="progress-image-backdrop">{""}</div>
              <img
                className="progress-image"
                alt=""
                src={IMAGE_URL} />
              <span className="progress-text">{step.text}</span>
            </div>
          )
        })
      }
      </ul>
    </div>
  )
}

export default Progress;
