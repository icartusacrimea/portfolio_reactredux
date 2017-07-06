import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class Navbar extends Component {
	constructor(props) {
		super(props);

		this.changeView2 = this.changeView2.bind(this);
	}
	changeView2(e) {
		e.preventDefault();
		console.log(e.target.value);
		this.props.showSection(e.target.value);
	}
	render() {
		return (
			<nav className="navbar navbar-inverse navbar-fixed-top">
			  <div className="container">
			    <div className="navbar-header">
			      <button onClick={this.changeView2} value="top" className="navbar-brand">top</button>
			      <button onClick={this.changeView2} value="user" className="navbar-right" href="#">about</button>
			      <button onClick={this.changeView2} value="projects" className="navbar-right" href="#">portfolio</button>
			    </div>
			  </div>
			</nav>
		);
	}
}

export default Navbar;