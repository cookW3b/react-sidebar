import React from 'react';
import MotionHoc  from './MotionHoc';

const ServicePage = () => {
	return (
		<h1>Service</h1>
	)
}

const Service = MotionHoc(ServicePage);

export default Service