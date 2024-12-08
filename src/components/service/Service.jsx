import React from 'react';
import './Service.css';
import AppBar from "../atoms/AppBar";
import data from '../../Data/jsons/service.json';
import { Container, Typography, Grid, Box } from '@mui/material';
import {FaExternalLinkAlt} from "react-icons/fa";


const Service = () => {
	const { talks, committeeData } = data;
	
	return (
		<div className='home-container'>


			<AppBar/>

			<h1>Coming Soon</h1>

		</div>
	);
}

export default Service;
