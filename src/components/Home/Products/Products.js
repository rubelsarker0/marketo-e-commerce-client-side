import React from 'react';
import Product from '../../Shared/Product/Product';
import { Row } from 'react-bootstrap';
const Products = () => {
	return (
		<div>
			<div className="text-center text-success">
				<h1>Our featured Products</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum magnam
					maxime totam, quis itaque voluptate accusantium odit, architecto
					consequatur
				</p>
			</div>
			<Row lg={4} md={3} xs={1} sm={2}>
				<Product></Product>
				<Product></Product>
				<Product></Product>
				<Product></Product>
			</Row>
		</div>
	);
};

export default Products;