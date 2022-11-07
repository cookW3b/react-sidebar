import React from 'react'
import './App.scss';
import Sidebar from './components/Sidebar';

import {Home, About, Service, Saved} from './pages/index';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

const App = () => {
	return (
		<BrowserRouter>
		<div className='container'>
				<Sidebar />
			<div className="content_page"> 
				<AnimatePresence>
					<Routes>
							<Route path='/' element={<Home />}/>
							<Route path='/about' element={<About />}/>
							<Route path='/service' element={<Service />}/>
							<Route path='/saved' element={<Saved />} />
						</Routes>
				</AnimatePresence>
			</div>
		</div>
		</BrowserRouter>
	)
}

export default App