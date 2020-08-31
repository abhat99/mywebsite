import React from 'react';
import '../style/Experience.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import wth from '../files/wth.png'
import bp from '../files/bashpole.png'
import bae from '../files/bae_systems.png'
import aiq from '../files/actioniq.jpeg'


export default class Experience extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of genres,
    // and a list of movies for a specified genre.
    this.state = {
      companies: [{}, {}, {}, {}]
    }
  }

  // React function that is called when the page load.
  componentDidMount() {
    let info = [];

    // BAE
    var company0_bul1 = 'Oversee the function of the Weiss Tech House, which involves keeping the study space open and providing entrepreneurial resources to early stage ideas and startups';
    var company0_bul2 = 'Manage and schedule a team of students to run the Weiss Tech House';
    var company0 = {name: 'Weiss Tech House', dates:'Sep 2017 - Present', img: wth, url: 'https://weisstech.upenn.edu/', role: 'Student Manager', bul1: company0_bul1, bul2: company0_bul2};

    // BAE
    var company1_bul1 = 'Developed software for flight modules, specifically a power supply control panel with limit and safety controls along with path controls; developed in C';
    var company1_bul2 = 'Designed and implemented an automated file generation tool for company-wide use - created UI to bring together data across legacy and current systems to support greater ad hoc testing; developed in Python'
    var company1_bul3 = 'Gained interim secret security clearance for project work'
    var company1 = {name: 'BAE Systems', dates:'May 2019 - Aug 2019', img: bae, url: 'https://www.baesystems.com/en-us/our-company', role: 'Software Engineer Intern', bul1: company1_bul1, bul2: company1_bul2, bul3: company1_bul3};

    //ACTIONIQ
    var company2_bul1 = 'Designated to work on the full-stack team. Internship rescinded due to COVID-19';
    var company2 = {name: 'ActionIQ', dates:'Cancelled', img: aiq, url: 'https://www.actioniq.com/', role: 'Software Engineer Intern', bul1: company2_bul1};
    
    //Bashpole
    var company3_bul1 = 'Led a rebuild of a detection codebase including a website, tipline and API implementing facial recognition technology, with the ability to compare and identify faces, intended to support anti-trafficking operations';
    var company3_bul2 = 'Utilized Javascript with Angular and Node for the website, and Java and Python for the API'
    var company3_bul3 = 'Data stored in MongoDB and AWS S3, phone line created with Twilio, while facial recognition is built with AWS Rekognition and OpenFace'
    var company3 = {name: 'Bashpole Software', dates:'May 2020 - Aug 2020', img: bp, url: 'https://bashpolesoftware.com/', role: 'Software Engineer Intern', bul1: company3_bul1, bul2: company3_bul2, bul3: company3_bul3};
    


    info.push(company3);
    info.push(company2);
    info.push(company1);
    info.push(company0);


    this.setState({
      companies: info
    });
  }

  render() {    
    return (
      <div className="Experience">
        <PageNavbar active="experience" />
        <div class="row">
          <div className="exp-title"> EXPERIENCE: </div>
        </div>
        <div class="section">
          <div class="row">
            <div class="col-2">
              <a href={this.state.companies[0].url} target="_blank"> <img className="companyImg" src={this.state.companies[0].img} height="200px"/> </a>
            </div>
            <div class="col">
              <div class="row">
                 <a className="companyName" href={this.state.companies[0].url} target="_blank"> {this.state.companies[0].name} </a> 
              </div>
              <div class ="row">
                <div class="col">
                  <div class="role"> {this.state.companies[0].role} </div>
                </div>
                <div class="col">
                  <div class="dates"> {this.state.companies[0].dates} </div>
                </div>
              </div>
              <ul class="row descripList-exp">
                <li class="descrip-exp"> {this.state.companies[0].bul1} </li>
                <li class="descrip-exp"> {this.state.companies[0].bul2} </li>
                <li class="descrip-exp"> {this.state.companies[0].bul3} </li>
              </ul>
            </div>  
          </div>  
        </div>
        <br></br>
        <div class="section">
          <div class="row">
            <div class="col-2">
              <a href={this.state.companies[1].url} target="_blank"> <img className="companyImg" src={this.state.companies[1].img} height="200px"/> </a>
            </div>
            <div class="col">
              <div class="row">
                 <a className="companyName" href={this.state.companies[1].url} target="_blank"> {this.state.companies[1].name} </a> 
              </div>
              <div class ="row">
                <div class="col">
                  <div class="role"> {this.state.companies[1].role} </div>
                </div>
                <div class="col">
                  <div class="dates"> {this.state.companies[1].dates} </div>
                </div>
              </div>
              <ul class="row descripList-exp">
                <li class="descrip-exp"> {this.state.companies[1].bul1} </li>
              </ul>
            </div>  
          </div>  
        </div>
        <br></br>
        <div class="section">
          <div class="row">
            <div class="col-2">
              <a href={this.state.companies[2].url} target="_blank"> <img class="companyImg" src={this.state.companies[2].img} height="200px"/> </a>
            </div>
            <div class="col">
              <div class="row">
                 <a className="companyName" href={this.state.companies[2].url} target="_blank"> {this.state.companies[2].name} </a> 
              </div>
              <div class ="row">
                <div class="col">
                  <div class="role"> {this.state.companies[2].role} </div>
                </div>
                <div class="col">
                  <div class="dates"> {this.state.companies[2].dates} </div>
                </div>
              </div>
              <ul class="row descripList-exp">
                <li class="descrip-exp"> {this.state.companies[2].bul1} </li>
                <li class="descrip-exp"> {this.state.companies[2].bul2} </li>
                <li class="descrip-exp"> {this.state.companies[2].bul3} </li>
              </ul>
            </div>  
          </div>  
        </div>
        <br></br>
        <div class="section">
          <div class="row">
            <div class="col-2">
              <a href={this.state.companies[3].url} target="_blank"> <img className="companyImg" src={this.state.companies[3].img} height="200px"/> </a>
            </div>
            <div class="col">
              <div class="row">
                 <a className="companyName" href={this.state.companies[3].url} target="_blank"> {this.state.companies[3].name} </a> 
              </div>
              <div class ="row">
                <div class="col">
                  <div class="role"> {this.state.companies[3].role} </div>
                </div>
                <div class="col">
                  <div class="dates"> {this.state.companies[3].dates} </div>
                </div>
              </div>
              <ul class="row descripList-exp">
                <li class="descrip-exp"> {this.state.companies[3].bul1} </li>
                <li class="descrip-exp"> {this.state.companies[3].bul2} </li>
              </ul>
            </div>  
          </div>  
        </div>
        <br></br>
      </div>
    );
  }

}