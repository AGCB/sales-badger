import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="header">
      <div className="main-image">
        <img
          className="icon"
          alt=""
          src="https://cdn2.iconfinder.com/data/icons/movies/32/r2-d2-robot-starwars-movie-r2d2-science-space-128.png"/>
        <span className="sales-badger">salesBadger</span>
      </div>
      <div className="header-middle">
        <span>Why Us</span>
        <span>Product</span>
        <span>Company</span>
      </div>
      <div className="header-right">
        <span className="login">Login</span>
        <span className="get-a-demo">Get A Demo</span>
      </div>

    </div>
  )
}

export default Header;
