import React from 'react';
import { Container } from 'react-bootstrap';
import GiveReview from '../Dashboard/GiveReview/GiveReview';
import Banner from './Banner/Banner';
import Products from './Products/Products';

const Home = () => {
	return (
		<Container>
			<Banner></Banner>
			<Products></Products>
			<GiveReview></GiveReview>
		</Container>
	);
};

export default Home;
