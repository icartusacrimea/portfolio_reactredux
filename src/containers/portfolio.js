import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSvg } from '../actions/index';

class Portfolio extends Component {
	constructor(props) {
    super(props);

    this.state= {
    	show: "default",
      loaded: ""
    }
   this.renderSvg = this.renderSvg.bind(this);
   this.changeView = this.changeView.bind(this);
   this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }
  handleImageLoaded() {
    console.log('loaded');
    this.setState({ loaded: '' });
  }
  renderSvg(svgtype) {
  let testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile', 'i');
   if (svgtype.type == this.state.show) {
  	return (
        <div className="portfolio-item">
          <div className="work row">
            {!testExp.test(navigator.userAgent) && <img className="iphonePort" src={svgtype.iphoneImg} alt={svgtype.title} />}
            <a href={svgtype.site}><img className="fullPort" onLoad={this.handleImageLoaded} src={svgtype.fullImg} alt={svgtype.title} /></a>
            {!testExp.test(navigator.userAgent) && <img className="ipadPort" src={svgtype.ipadImg} alt={svgtype.title} />}
          </div>
            <h4 id="work">{svgtype.title}</h4>
            <p id="work">{svgtype.descrip}</p>
            <div><a id="work" href={svgtype.code}>Code</a></div>
            <div><a id="work" href={svgtype.site}>Site</a></div>
        </div>
      );
    }
  }
  changeView(e) {
    e.preventDefault();

    this.props.fetchSvg();

    this.setState({ show: e.target.value, loaded: 'Loading...' });
  }
	render() {
    let allProjects = this.props.svg;
		return (
			<div>
			<div className="projects-list-dropdown">
      <h3 className="select-projects">Select Projects</h3>
        <button onClick={this.changeView} type="button" value="react" className="btn">React</button>
        <button onClick={this.changeView} type="button" value="bot" className="btn">Bots</button>
        <button onClick={this.changeView} type="button" value="frontend" className="btn">fCC Front End</button>
      </div>
      <div className="projects-list">
      <div className="loading loading-animate">{this.state.loaded}</div>
 				{allProjects.length > 0 && allProjects[0].map(this.renderSvg)}
      </div>
      </div>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSvg }, dispatch);
}

function mapStateToProps({ svg }) {
  return { svg };
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);