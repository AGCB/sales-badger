import React from 'react';
import './offices.css';

const OFFICE = {
  "IMAGE_URL": "https://cdn3.iconfinder.com/data/icons/innovation-in-technology/2126/17-512.png",
};

function Offices() {
  const [ offices, setOffices ] = React.useState([
    {
      "header":"Singapore",
      "addressOne":"12345 Other Street",
      "addressTwo":"AnOkCity, DE 383027",
    },
    {
      "header":"Washington DC",
      "addressOne":"456789 Same Street",
      "addressTwo":"GoodCity, RI 83387",
    }
  ]);
  return (
    <div className="offices">
      <h3 className="offices-header">Our Offices</h3>
      <div className="offices-list">
      {
        offices.map((office, i) => {
          return (
            <>
            <div className="office-blurred-border"></div>
            <div className="office">
              <img className="office-image" alt="" src={OFFICE.IMAGE_URL}/>
              <span className="office-header">{office.header}</span>
              <span className="office-address-one">{office.addressOne}</span>
              <span className="office-address-one">{office.addressTwo}</span>
            </div>
            </>
          )
        })
      }
      </div>
    </div>
  )
}

export default Offices;
