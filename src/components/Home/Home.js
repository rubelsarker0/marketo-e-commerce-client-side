import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Home = () => {
	return (
		<Container>
			<Banner></Banner>
			<Products></Products>
		</Container>
	);
};

export default Home;
