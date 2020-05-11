import React from 'react';
import '../style/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';


export default class Home extends React.Component {
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
      <div className="Home">
        <PageNavbar active="home" />
        <div className="title-img">
            <div className="myName-title"> ASHISH BHAT </div>
        </div>
        <div className="about-me-section">
          <div className="about-me-title"> About Me </div>
          <div className="about-me-text"> Hi, I'm Ashish Bhat, a junior studying Computer Science with minors in Math and Data Science at the University of Pennsylvania. I am originally from New Jersey  </div>
        </div>
      </div>
    );
  }
}

