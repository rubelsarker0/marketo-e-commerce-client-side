import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
	return (
		<Container>
			<Banner></Banner>
			<Products></Products>
			<Reviews></Reviews>
		</Container>
	);
};

export default Home;
