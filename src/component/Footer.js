import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="nav--right">
        <Link to="true">Tripo Games</Link>
      </div>
      <h3>An Immersive Gaming Experience</h3>
      <div className="footer__wrap clear">
        <div className="footer__wrap-items">
          <h4>Contact</h4>
          <p>
            <Link to="true">Info@mysite.com</Link>
          </p>
          <p>Tel: 123-456-7890</p>
          <p>500 Terry Francois St</p>
          <p>San Francisco, CA 94158</p>
        </div>
        <div className="footer__wrap-items">
          <h4>Navigation</h4>
          <p>
            <Link to="true">Games</Link>
          </p>
          <p>
            <Link to="true">Careers</Link>
          </p>
          <p>
            <Link to="true">About</Link>
          </p>
          <p>
            <Link to="true">Contact</Link>
          </p>
          <p>
            <Link to="true">Privacy Policy</Link>
          </p>
          <p>
            <Link to="true">Term &amp; Conditions</Link>
          </p>
        </div>
        <div className="footer__wrap-items">
          <h4>Social</h4>
          <p>
            <Link to="true">Discord</Link>
          </p>
          <p>
            <Link to="true">Twitch</Link>
          </p>
          <p>
            <Link to="true">Facebook</Link>
          </p>
          <p>
            <Link to="true">Youtube</Link>
          </p>
          <p>
            <Link to="true">Twitter</Link>
          </p>
          <p>
            <Link to="true">LinkedIn</Link>
          </p>
        </div>
        <div className="footer__wrap-items clear">
          <h4>Find Us On</h4>
          <div>
            <Link to="true">
              <img src="./img/app_store.webp" alt="" />
            </Link>
          </div>
          <div>
            <Link to="true">
              <img src="./img/ch_play.webp" alt="" />
            </Link>
          </div>
        </div>
      </div>
      <p>© 2023 by Tripo. Proudly created with Túu</p>
    </div>
  );
}

export default Footer;
