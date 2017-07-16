import React, { Component } from 'react';
import nl2br from 'react-newline-to-break';

class Heading extends Component {
	constructor(props) {
		super(props);

		this.showSection = this.showSection.bind(this);
	}
	showSection(e) {
		let type = e.target.id;
		this.props.showSection(type);
	}
		render() {
			let newline = "\n";
		return (
			<section id="heading">
				<div className="container">
			    <div id="icart">Traci Cremeans</div>
			    <div id="label">JavaScript Developer</div>
			    <div className="row">
			      <div className="col-sm-6">
			      	<i className="mainIcon fa fa-user-circle-o" onClick={this.showSection} id="user">{nl2br(newline)}</i>
			      </div>
			      <div className="col-sm-6">
			      	<i className="mainIcon fa fa-code" onClick={this.showSection} id="projects">{nl2br(newline)}</i>
			      </div>
			    </div>
			    <div className="row">
			      <ul className="social text-center">
			        <li>
			          <a id="codepen" href="http://codepen.io/LaerTrech/" target="_blank"><i className="fa fa-codepen fa-2x"></i></a>
			        </li>
			        <li>
			          <a id="linked-in" href='https://www.linkedin.com/in/icartusacrimea' target="_blank"><i className="fa fa-linkedin"></i></a>
			        </li>
			        <li>
			          <a id="github" href="https://github.com/icartusacrimea" target="_blank"><i className="fa fa-github"></i></a>
			        </li>
			        <li>
			          <a href="http://www.freecodecamp.com/icartusacrimea" target="_blank" id="free-code-camp"><i className="fa fa-free-code-camp"></i></a>
			        </li>
			      </ul>
			    </div>
			  </div>
			 </section>
		);
	}
}

export default Heading;