import React from 'react';
import './investors.css';

function Investors() {
  const INVESTORS = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBpVWDwlQ4EjnVqTja3nm65I0tf3l__qP6RNXY7ny4AxBhv7UO&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT47GkJX9tFvEJJ2ZpS8x7-SGiXdYc_DzZ3CHaJU_zn7zwBooRV&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8oYrZ89BU-uac4jTChAyIeWVSdC4MhaK9kSG4eCb9eXTht8TO&usqp=CAU",
    "https://i.pinimg.com/474x/23/5c/78/235c780e2cb952eea341aa8ecef812d9--corporate-logos-shadowrun.jpg"
  ]
  return (
    <div className="investors">
      <h3 className="investors-heading">Investors</h3>
      <div className="investors-list">
        <div className="investor-top-row">
          <div className="investor">
            <img alt="" className="investor-image" src={INVESTORS[0]}/>
          </div>
          <div className="investor">
            <img alt="" className="investor-image" src={INVESTORS[1]}/>
          </div>
        </div>
        <div className="investor-bottom-row">
          <div className="investor">
            <img alt="" className="investor-image" src={INVESTORS[2]}/>
          </div>
          <div className="investor">
            <img alt="" className="investor-image" src={INVESTORS[3]}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investors;
