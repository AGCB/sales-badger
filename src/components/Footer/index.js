import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img
            src="https://cdn2.iconfinder.com/data/icons/movies/32/r2-d2-robot-starwars-movie-r2d2-science-space-128.png"
            alt=""
            className="footer-icon"/>
          <h3>SalesBadger</h3>
        </div>
          <div className="footer-top-right">
            <ul className="columns">
              <li>
                <h4 className="column-heading">Why SpaceBadger</h4>
                  <ul className="column-list">
                    <li><span>Collaborative Intel</span></li>
                    <li><span>AI assisntant</span></li>
                    <li><span>loremiupsoiu</span></li>
                    <li><span>fasdfasdfwef</span></li>
                    <li><span>cxzczxczxczxc</span></li>
                    <li><span>asdfasdfewthtg</span></li>
                  </ul>
              </li>
              <li>
                <h4 className="column-heading">Product</h4>
                  <ul className="column-list">
                    <li><span>Collaborative Intel</span></li>
                    <li><span>AI assisntant</span></li>
                    <li><span>loremiupsoiu</span></li>
                    <li><span>fasdfasdfwef</span></li>
                    <li><span>cxzczxczxczxc</span></li>
                    <li><span>asdfasdfewthtg</span></li>
                  </ul>
              </li>
              <li>
                <h4 className="column-heading">Company</h4>
                  <ul className="column-list">
                    <li><span>Collaborative Intel</span></li>
                    <li><span>AI assisntant</span></li>
                    <li><span>loremiupsoiu</span></li>
                    <li><span>fasdfasdfwef</span></li>
                    <li><span>cxzczxczxczxc</span></li>
                    <li><span>asdfasdfewthtg</span></li>
                  </ul>
              </li>
              <li>
                <h4 className="column-heading">Contact</h4>
                <ul className="column-list">
                  <li><span>Collaborative Intel</span></li>
                  <li><span>AI assisntant</span></li>
                  <li><span>loremiupsoiu</span></li>
                </ul>
              </li>
              <li>
                <h4 className="columns-heading">US Office</h4>
                  <ul className="column-list">
                    <li><span>AI assisntant</span></li>
                    <li><span>loremiupsoiu</span></li>
                  </ul>
              </li>
              <li>
                <h4 className="columns-heading">Singapore Office</h4>
                  <ul className="column-list">
                    <li><span>Collaborative Intel</span></li>
                    <li><span>asdfasdfewthtg</span></li>
                  </ul>
              </li>
            </ul>
          </div>

      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-top">
          <div className="social-links">
            <img alt="" src="https://icons.iconarchive.com/icons/sicons/basic-round-social/256/myspace-icon.png"/>
            <img alt="" src="https://lh3.googleusercontent.com/proxy/AXcBU7Wp1Ba0e-kY50FoOzD9gX5pBie3oSHyb3qR8WMlbLVsEodyEXAQK1szT62QIe70IiXI-9pTGnAkpwtqXQ4e_OWIdmGMBQ"/>
            <img alt="" src="https://cdn.logojoy.com/wp-content/uploads/2018/07/05125808/mtv-logo-1024x814.png"/>
          </div>
          <div className="footer-bottom-privacy-terms">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
        <div className="copywrite">
          <span>@2020 SalesBadger All Rights Ress</span>
        </div>
      </div>

    </div>
  )
}

export default Footer;
