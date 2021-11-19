import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import bannerImg from '../../../assets/images/banner-img.jpg';
import Product from '../../Shared/Product/Product';

const DashboardHome = () => {
	const [dashBoardProducts, setDashBoardProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const history = useHistory();
	const handleContact = () => {
		history.push('/browse-products');
	};

	useEffect(() => {
		axios
			.get('https://warm-everglades-86259.herokuapp.com/api/products/all')
			.then((res) => {
				setDashBoardProducts(res.data);
				setLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	if (isLoading) {
		return (
			<div className="text-center mx-auto py-5">
				<Spinner animation="border" variant="primary" />
			</div>
		);
	}

	return (
		<section className="top-banner py-5">
			<Container>
				<Row lg={2} xs={1} className="g-5">
					<Col>
						<img className="w-100 h-100" src={bannerImg} alt="" />
					</Col>
					<Col>
						<div className="bg-light rounded p-5 h-auto">
							<h2 className="generic-text-color mb-5">
								Walk, Run and Explore With our lovey high stands shoes
							</h2>
							<p className="text-secondary mb-5">
								Don't just buy cheap low quality 'shoes'. Here's the Marketo
								will provide you list of high qualities shoes
							</p>
							<Button
								onClick={handleContact}
								className="generic-btn-color rounded border-0 px-5"
								size="lg"
							>
								EXPLORE SHOES
							</Button>
						</div>
					</Col>
				</Row>
				<Row lg={4} md={3} xs={1} sm={2} className="py-5">
					{dashBoardProducts.slice(0, 4).map((product) => (
						<Product key={product._id} product={product}></Product>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default DashboardHome;
