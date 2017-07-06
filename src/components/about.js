import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<section id="about">
				  <div className="container">
				    <div className="row center">
				      <img src="assets/bannur.jpg" alt="portrait" id="portrait" />
				    </div>
					    <div className="row">
					      <div className="col-md-6">
					        <p>
					          I moved to New England from Appalachia for training in representational, figurative oil painting. After I graduated with honors and won several scholarships in fine arts, the sky turned into a big, blue pancake and fell on my head. My thoughts were buzzing with images of motherboards I painted in my youth. With nostalgia, I recalled the Geocities and Angelfire sites and Live and DeadJournal themes I made.
					        </p>
					      </div>
					      <div className="col-md-6">
					      <p>So I ushered in a digital life to be spent mostly alone and in front of screens. Not so different from painting.
					        I'm an aspiring full stack web developer with interests in technology, music, literature, and film. I hope my lifestyle choices will lead to the synchronization of my two brain hemispheres or something comparably boast-worthy.</p>
					      </div>
					    </div>
					 	</div>
					 	<div className="bottom">
					     <a className="email" href="mailto:icartusacrimea@gmail.com?Subject=Hello%2C%20Traci" target="_top"><i className="fa fa-envelope fa-2x"></i></a>
					  </div>
			</section>
		);
	}
}

export default About;