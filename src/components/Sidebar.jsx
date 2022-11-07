import React, { useState } from 'react';

import home from '../imgs/home.svg';
import service from '../imgs/service.svg';
import saved from '../imgs/saved.svg';
import about from '../imgs/about.svg';

import { Li, Nav, List, Button, Stick } from './style';

import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navigate = useNavigate();
	const [active, setActive] = useState()

	const values = [
		{
			text: 'Home',
			img: home,
			value: 'home',
			path: '/'
		},
		{
			text: 'About Us',
			img: about,
			value: 'about',
			path: '/about'
		},
		{
			text: 'Service',
			img: service,
			value: 'service',
			path: '/service'
		},
		{
			text: 'Saved',
			img: saved,
			value: 'saved',
			path: '/saved'
		}
	]

	return (
		<Nav className="sidebar">
			<Button 
				className={isOpen ? 'open' : ''}
				onClick={() => setIsOpen(!isOpen)}>
					<Stick />
				</Button>
			<List className={isOpen ? 'list active' : 'list'}>
				{values.map(val => {
					return (
						<Li 
						className={val.value === active ? 'set' : ''}
						value={val.value}
						onClick={() => {
							setActive(val.value);
							navigate(`${val.path}`)
						}}
						>
							<img src={val.img} alt={val.value} />
							<span>{val.text}</span>
						</Li>
					)
				})}
			</List>
		</Nav>
	)
}

export default Sidebar