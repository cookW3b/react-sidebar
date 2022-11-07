import React from 'react';
import MotionHoc  from './MotionHoc';


const SavedPage = () => {
	return (
		<h1>Saved</h1>
	)
}

const Saved = MotionHoc(SavedPage);

export default Saved