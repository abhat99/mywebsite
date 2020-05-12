import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/PageNavbar.css'

export default class PageNavbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navDivs: []
		}
	}

	componentDidMount() {
		//change the navbar page names
		const pageList = ['about', 'projects', 'resume'];

		let navbarDivs = pageList.map((page, i) => {
			if (this.props.active === page) {
				return <a className="nav-item nav-link active mx-2" key={i} href={"/" + page}>{page.toUpperCase()}</a>
			}
			else {
				if (page == 'resume') {
					return <a className="nav-item nav-link mx-2" href="https://drive.google.com/file/d/1Hhg06q0HSDu1Frzr_fVZih1sbwYeENou/view?usp=sharing" target="_blank">{page.toUpperCase()}</a>
				}
				return <a className="nav-item nav-link mx-2" key={i} href={"/" + page}>{page.toUpperCase()}</a>
			}
		})

		this.setState({
			navDivs: navbarDivs
		});
	}

	render() {
		return (
			<div className="PageNavbar">
				<nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark navbar-custom-bgcolor">
			      <span className="navbar-brand"> Ashish Bhat</span>
			      <div className="navbar-collapse collapse">
			        <ul className="nav navbar-nav navbar-center">
			        	{this.state.navDivs}
			        </ul>
			      </div>
			    </nav>
			</div>
        );
	}
}
