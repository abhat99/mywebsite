import React from 'react';
import '../style/Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageNavbar from './PageNavbar';


export default class Home extends React.Component {
  constructor(props) {
    super(props);

    // The state maintained by this React Component. This component maintains the list of genres,
    // and a list of movies for a specified genre.
    this.state = {
      projects: []
    }
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
    var titles = ['ConcertDB', 'BasicOS', 'Mini-Minecraft', 'Music Streaming Protocol', 'J-Compiler', 'Wiki-Parse/Search', 'Pong'];
    var descriptions = [[concertDB1, concertDB2], [basicOS1, basicOS2], [mm1, mm2], [nsa1, nsa2], [jc1, jc2], [wiki1, wiki2], [pong1, pong2]];
    var total = [];
    for (var i = 0; i < titles.length; i++) {
      var obj = {title: titles[i], des: descriptions[i]};
      total.push(obj);
    }
    let divs = total.map((projObj, i) =>
      <div>
        <div class="section">
          <div class="row">
            <div class="projTitle"> {projObj.title} </div>
            <div className="img-setup" >
              <a href="https://www.youtube.com/watch?v=ch1txjQJHlw" target="_blank">
              <img src="data:image/png;base64,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" height="20" width="25"/>
              </a>
            </div>
          </div>
          <ul class="row descripList">
            <li class="descrip"> {projObj.des[0]} </li>
            <li class="descrip"> {projObj.des[1]} </li>
          </ul>
        </div>
        <br></br>
      </div>

    );
    console.log(divs);
    this.setState({
      projects: divs
    });

  }
  
  
  render() {    
    return (
      <div className="Projects">
        <PageNavbar active="projects" />
        <div class="row">
            <div className="title"> PROJECTS: </div>
        </div>
        {this.state.projects}
      </div>
    );
  }
}