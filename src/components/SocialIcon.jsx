import React, { Component } from "react";
import { Link } from "react-router-dom";

import FacebookLogo from "../assets/images//facebook.svg";
import InstagramLogo from "../assets/images//instagram.png";
import TwitterLogo from "../assets/images//tweeter.png";

class SocialIcon extends Component {
  render() {
    return (
      <div>
        <Link to="#">
          <img
            alt="Facebook"
            className="socialSized marginLeftHead"
            src={FacebookLogo}
          />
        </Link>
        <Link to="#">
          <img alt="Instagram" className="socialSized" src={InstagramLogo} />
        </Link>
        <Link to="#">
          <img alt="Twitter " className="socialSized" src={TwitterLogo} />
        </Link>
      </div>
    );
  }
}
export default SocialIcon;
