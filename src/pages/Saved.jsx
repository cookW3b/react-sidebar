import React from 'react';
import MotionHoc  from './MotionHOC';


const SavedPage = () => {
	return (
		<h1>Saved</h1>
	)
}

const Saved = MotionHoc(SavedPage);

export default Saved