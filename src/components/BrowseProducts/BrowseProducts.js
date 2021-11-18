import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Product from '../Shared/Product/Product';

const BrowseProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('http://localhost:5000/api/products/all')
			.then((res) => {
				setProducts(res.data);
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
		<Container>
			<div className="text-center mt-5">
				<h1 className="generic-text-color fw-bolder">ALL THE COLLECTION</h1>
				<hr className="p-1 text-primary mx-auto w-50" />
			</div>
			<Row lg={4} md={3} xs={1} sm={2} className="py-5">
				{products.map((product) => (
					<Product key={product._id} product={product}></Product>
				))}
			</Row>
		</Container>
	);
};

export default BrowseProducts;
