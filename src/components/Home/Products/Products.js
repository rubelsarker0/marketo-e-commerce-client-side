import React, { useEffect, useState } from 'react';
import Product from '../../Shared/Product/Product';
import { Row, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get('https://warm-everglades-86259.herokuapp.com/api/products/all')
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
		<div className="pt-5">
			<div className="text-center text-success">
				<h1 className="generic-text-color fw-bold">OUR FEATURE PRODUCT</h1>
				<p className="text-muted">
					We Provide world class shoes with high qualities and best price!!
				</p>
			</div>
			<Row lg={3} md={3} xs={1} sm={2} className="py-5">
				{products.slice(0, 6).map((product) => (
					<Product key={product._id} product={product}></Product>
				))}
			</Row>
		</div>
	);
};

export default Products;
