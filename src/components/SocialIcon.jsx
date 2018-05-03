import React, {Component} from 'react';
import { Row, Col } from 'reactstrap';
import FaceBookLogo from './Assets/Images/facebook.svg'
import InstagramLogo from './Assets/Images/instagram.png'
import TweeterLogo from './Assets/Images/tweeter.png'
import {Link} from 'react-router-dom'

class SocialIcon extends Component {
  render(){
    return(
      <div>
        <Link to="#" ><img className="socialSized marginLeftHead" Src={FaceBookLogo}/></Link>
        <Link to="#" ><img className="socialSized" Src={InstagramLogo}/></Link>
        <Link to="#" ><img className="socialSized" Src={TweeterLogo}/></Link>
      </div>

    )
  }
}
export default SocialIcon;
