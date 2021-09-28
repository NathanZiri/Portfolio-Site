import React from 'react';
import github_logo from './../Images/GitHub_logo.png';
import facebook_logo from './../Images/facebook_logo.png';
import LI_logo from './../Images/LI_logo.png';


const Contact = (props) =>{
    return(
        <div className={`center-text ${props.visVal ? 'main-content-show' : 'main-content-hide'}`}>
            If you want to get in contact with me you can send me a message on FaceBook, LinkedIn or <a href = "mailto:nathanziri@hotmail.com" className="game-link">send me an Email</a> for a faster response. For my previous projects you can check my github.
            <div className="link-containers">
            <a href="https://www.facebook.com/nathan.ziri.3" target="_blank"><img src={LI_logo} className="site-image"></img></a>
            <a href="https://www.linkedin.com/in/nathan-ziri-417032156/?originalSubdomain=ca" target="_blank"><img src={facebook_logo} className="site-image"></img></a>
            <a href="https://github.com/NathanZiri" target="_blank"><img src={github_logo} className="site-image"></img></a>
            </div>
        </div>
    );
};

export default Contact;