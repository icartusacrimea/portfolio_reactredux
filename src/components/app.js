import React, { Component } from 'react';
import Navbar from './navbar';
import Heading from './heading';
import Portfolio from '../containers/portfolio';
import About from './about';


class App extends Component {
	constructor(props) {
		super(props);

		this.state = {clicked: false, projects: false, about: false}

		this.showSection = this.showSection.bind(this);
	}
  
	showSection(type) {
		if (type == "user") {
			this.setState({about: true, projects: false, clicked: true});
		}
		if (type == "projects") {
			this.setState({projects: true, about: false, clicked: true});
		}
		if (type === "top") {
			this.setState({ projects: false, about: false, clicked: false});
		}
	}
  render() {
    return (
      <div>

      	{this.state.clicked && <Navbar showSection={this.showSection}/>}
      	{!this.state.projects && !this.state.about && <Heading showSection={this.showSection}/>}
      	{this.state.projects && !this.state.about && <Portfolio showSection={this.showSection}/>}
      	{this.state.about && <About showSection={this.showSection}/>}

      </div>
    );
  }
}

export default App;