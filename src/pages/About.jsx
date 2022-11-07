import React from 'react';
import MotionHoc  from './MotionHOC';

const AboutPage = () => {
	return (
			<h1>About Us</h1>
	)
}

const About = MotionHoc(AboutPage);

export default About;