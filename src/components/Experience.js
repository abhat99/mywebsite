import React from 'react';
import '../style/Experience.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of genres,
    // and a list of movies for a specified genre.
    this.state = {
      companies: []
    }
  }

  // React function that is called when the page load.
  componentDidMount() {
    let info = [];
    var company1 = {name: 'BAE Systems', role: 'Software Engineer Intern'}
    info.push(company1);
    this.setState({
      companies: info
    });
  }

  render() {    
    return (
      <div className="Experience">
        <PageNavbar active="experience" />
        <div class="row">
          <div className="title"> EXPERIENCE: </div>
        </div>
        
        <div class="section">
          <div class="row">
            <div class="companyName"> {this.state.companies.name} </div>
          </div>
          <ul class="row descripList">
            <li class="descrip"> </li>
            <li class="descrip"> </li>
          </ul>
        </div>
        <br></br>
      </div>
    );
  }

}