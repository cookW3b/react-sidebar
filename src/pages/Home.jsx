import React from 'react'
import MotionHoc  from './MotionHOC';


const HomePage = () => {
	return (
		<h1>Home</h1>
	)
}

const Home = MotionHoc(HomePage);

export default Home