import React from 'react';
import '../style/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import linkedin from '../files/linkedin.png'
import gmail from '../files/gmail.png'


export default class About extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of genres,
    // and a list of movies for a specified genre.
    this.state = {
    }
  }

  // React function that is called when the page load.
  componentDidMount() {
  }
  
  
  render() {    
    return (
      <div className="About">
        <PageNavbar active="about" />
        <div className="title-img">
            <div className="myName-title"> ASHISH BHAT </div>
        </div>
        <div className="about-me-section">
          <div className="about-me-title"> About Me </div>
          <div className="about-me-text"> Hi, I'm Ashish Bhat. </div>
          <div className="about-me-text"> I'm currently a rising senior at the University of Pennsylvania studying Computer Science with interests in robotics and data science. My projects, resume and email are all available on the site. </div> 
        </div>
        <div className="resume-section">
          
        </div>
        <div className="contact-section">
          <div className="contact-title"> Contact: </div>
          <span> <a target="_blank" href = "mailto: abhat99@seas.upenn.edu"><img className="gmail-img" src={gmail} height="65"/></a> </span>
          <span> <a target="_blank" href = "https://www.linkedin.com/in/ashish-bhat-951537157/"> <img className="linkedin-img" src={linkedin} height="70"/> </a> </span>
        </div>
      </div>
    );
  }
}

