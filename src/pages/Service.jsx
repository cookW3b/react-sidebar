import React from 'react';
import MotionHoc  from './MotionHOC';

const ServicePage = () => {
	return (
		<h1>Service</h1>
	)
}

const Service = MotionHoc(ServicePage);

export default Service