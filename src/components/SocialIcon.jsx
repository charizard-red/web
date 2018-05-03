import React, { Component } from "react";
import FacebookLogo from "./Assets/Images/facebook.svg";
import InstagramLogo from "./Assets/Images/instagram.png";
import TwitterLogo from "./Assets/Images/tweeter.png";
import { Link } from "react-router-dom";

class SocialIcon extends Component {
  render() {
    return (
      <div>
        <Link to="#">
          <img
            alt="Facebook"
            className="socialSized marginLeftHead"
            Src={FacebookLogo}
          />
        </Link>
        <Link to="#">
          <img alt="Instagram" className="socialSized" Src={InstagramLogo} />
        </Link>
        <Link to="#">
          <img alt="Twitter " className="socialSized" Src={TwitterLogo} />
        </Link>
      </div>
    );
  }
}
export default SocialIcon;
