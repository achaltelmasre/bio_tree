import react from 'react'
import './LinkCard.css'

import ImgLinkedin from './../img/img-linkedin.png'
import ImgFacebook from './../img/img-facebook.png'
import ImgInstagram from './../img/img-instagram.png'
import ImgGithub from './../img/img-github.png'
import ImgAchal from './../img/achal.jpeg'

const ImgMap  = {
       
    "linkedin": ImgLinkedin,
    "facebook": ImgFacebook,
    "instagram": ImgInstagram,
    "github": ImgGithub
}

function LinkCard(props) {
    return (
        <div className={'link-card bg-${props.name}'}>
           <a href={props.link} className="hyperlink">
         <div className="container-link-handle">
          <div>
           <img src={ImgMap[props.title]} className="card-img"/>
        </div>
          <div className="handle-name">
        <h3 className="username">{props.username}</h3>
        </div>
    </div>

  
   </a>
 </div>
)
    
}

export default LinkCard