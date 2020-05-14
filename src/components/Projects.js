import React from 'react';
import '../style/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';
import git from '../files/github.jpg'
import yt from '../files/youtube.png'
import box from '../files/box.png'


export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      descriptions: [[], [], [], [], [], [], []],
      titles: [],
      github: git,
      youtube: yt,
      box: box
    }
    // The state maintained by this React Component. This component maintains the list of genres,
    // and a list of movies for a specified genre.

  }

  // React function that is called when the page load.
  componentDidMount() {
    var concertDB1 = 'Worked on a team of three to develop a website that merges Ticketmaster and Spotify data to provide the user and integrated concert finder';
    var concertDB2 = 'Pulled and cleaned data from the Spotify API, loaded it into an AWS Oracle Database and designed queries to pull insights from the data';
    var basicOS1 = 'Developed a basic OS in C with scheduling features and file system that runs on a VM';
    var basicOS2 = 'Ran basic linux commands through a shell, allowing for priority changes, scheduling and file operations';
    var mm1 = 'Worked on a team of three to develop a customized version of Minecraft using C++ and openGL';
    var mm2 = 'Designed terrain generation, optimized terrain chunking, randomized river and cave paths, handled user block placement and removal';
    var nsa1 = 'Designed and implemented a music streaming protocol built over TCP that packages and sends client requested data from a server with the ability to handle multiple clients';
    var nsa2 = 'Developed in Python with user features, including playing songs, receiving song lists, tracking favorite songs';
    var jc1 =  'Compiler of the J programming language into LC4 Assembly code';
    var jc2 = 'Developed in C';
    var wiki1 = 'Parsed an XML dump of Simple Wiki Pages to build a graph representation in Java';
    var wiki2 = 'Ran search algorithms such as DFS, BFS and Dijkstra`s to build a simple search engine on the page and pull insights from the graph';
    var pong1 = 'A version of the classic Pong game with 1-player, 2-player, power-ups and score tracking';
    var pong2 = 'Developed in Java';
    let t = ['ConcertDB', 'BasicOS', 'Mini-Minecraft', 'Music Streaming Protocol', 'J-Compiler', 'Wiki-Parse/Search', 'Pong'];
    let d = [[concertDB1, concertDB2], [basicOS1, basicOS2], [mm1, mm2], [nsa1, nsa2], [jc1, jc2], [wiki1, wiki2], [pong1, pong2]];
    this.setState({
      titles: t,
      descriptions: d
    });
  }
  
  
  render() { 
    return (
      <div className="Projects">
        <PageNavbar active="projects" />
        <div class="row">
            <div className="title"> PROJECTS: </div>
        </div>
        
        <div class="section">
          <div class="row">
            <div class="projTitle"> {this.state.titles[0]} </div>
              <div className="img-setup" >
                <a href="https://www.youtube.com/watch?v=ch1txjQJHlw" target="_blank">
                  <img src={this.state.youtube} height="20" width="25"/>                
                </a>
              </div>
          </div>
          <ul class="row descripList">
            <li class="descrip"> {this.state.descriptions[0][0]} </li>
            <li class="descrip"> {this.state.descriptions[0][1]} </li>
          </ul>
        </div>
        <br></br>
        <div class="section">
          <div class="row">
            <div class="projTitle"> {this.state.titles[1]} </div>
              <div className="img-setup" >
              </div>
          </div>
          <ul class="row descripList">
            <li class="descrip"> {this.state.descriptions[1][0]} </li>
            <li class="descrip"> {this.state.descriptions[1][1]} </li>
          </ul>
        </div>
        <br></br>
        <div class="section">
          <div class="row">
            <div class="projTitle"> {this.state.titles[2]} </div>
              <div className="img-setup" >
                <a href="https://upenn.box.com/s/uamkx6aj0gqdrsqepk9sle7eziyhlg53" target="_blank">
                  <img src={this.state.box} height="15" width="30"/>
                </a>
              </div>
            </div>
            <ul class="row descripList">
              <li class="descrip"> {this.state.descriptions[2][0]} </li>
              <li class="descrip"> {this.state.descriptions[2][1]} </li>
            </ul>
          </div>
          <br></br>
        <div class="section">
          <div class="row">
            <div class="projTitle"> {this.state.titles[3]} </div>
              <div className="img-setup" >
              </div>
          </div>
          <ul class="row descripList">
            <li class="descrip"> {this.state.descriptions[3][0]} </li>
            <li class="descrip"> {this.state.descriptions[3][1]} </li>
          </ul>
        </div>
          <br></br>
        <div class="section">
          <div class="row">
            <div class="projTitle"> {this.state.titles[4]} </div>
              <div className="img-setup" >
              </div>
            </div>
            <ul class="row descripList">
              <li class="descrip"> {this.state.descriptions[4][0]} </li>
              <li class="descrip"> {this.state.descriptions[4][1]} </li>
            </ul>
          </div>
          <br></br>
        <div class="section">
          <div class="row">
            <div class="projTitle"> {this.state.titles[5]} </div>
              <div className="img-setup" >
              </div>
            </div>
            <ul class="row descripList">
              <li class="descrip"> {this.state.descriptions[5][0]} </li>
              <li class="descrip"> {this.state.descriptions[5][1]} </li>
            </ul>
          </div>
          <br></br>
        <div class="section">
          <div class="row">
            <div class="projTitle"> {this.state.titles[6]} </div>
              <div className="img-setup" >
              <a href="https://github.com/abhat99/cis120-finalproj" target="_blank">
                <img src={this.state.github} height="25" width="25"/>
              </a>
              </div>
            </div>
            <ul class="row descripList">
              <li class="descrip"> {this.state.descriptions[6][0]} </li>
              <li class="descrip"> {this.state.descriptions[6][1]} </li>
            </ul>
          </div>
          <br></br>
        <div className="disclaimer"> All project code available on request </div>

      </div>
    );
  }
}