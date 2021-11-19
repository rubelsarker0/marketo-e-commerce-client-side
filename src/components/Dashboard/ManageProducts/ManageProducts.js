import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const ManageProducts = () => {
	const [manageProducts, setManageProducts] = useState([]);

	const loadManageProducts = () => {
		axios
			.get(`https://warm-everglades-86259.herokuapp.com/api/products/all`)
			.then((res) => {
				setManageProducts(res.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		loadManageProducts();
	}, []);

	const handleDeleteProduct = (id) => {
		const url = `https://warm-everglades-86259.herokuapp.com/api/products/delete/${id}`;
		const confirm = window.confirm('Are you sure want to delete this product');
		if (confirm) {
			axios
				.delete(url)
				.then((res) => {
					if (res.data.deletedCount > 0) {
						const newProducts = manageProducts.filter(
							(manageProduct) => manageProduct._id !== id
						);
						setManageProducts(newProducts);
					}
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<div>
			<h3 className="generic-text-color fw-bolder m-3">Manage all products</h3>
			{manageProducts && (
				<Row xs={2} lg={3} md={3} xl={4} className="g-3">
					{manageProducts.map((manageProduct) => (
						<Col key={manageProduct._id}>
							<Card className="h-100 border-0 product-card">
								<Card.Img
									src={manageProduct.productImg}
									variant="top"
									className="img-fluid w-100 h-100 product-img position-relative "
								/>
								<span className="bg-cyan px-2 discount text-white py-1 fw-bold">
									-{manageProduct.discountPercent}%
								</span>
								<Card.Body className="p-1 py-2 p-md-2">
									<Card.Text className="product-desc mb-1 ">
										{manageProduct.title}
									</Card.Text>
									<div className="d-block d-flex align-items-center mb-1">
										<span className="text-cyan me-2 fs-4 product-current-price">
											{`$${manageProduct.discountPrice}`}
										</span>
										<span className="text-secondary product-discount-price  text-decoration-line-through">
											{`$${manageProduct.price}`}
										</span>
									</div>
									<button
										onClick={() => handleDeleteProduct(manageProduct._id)}
										className="btn w-100 mt-2 btn-danger "
									>
										Delete
									</button>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			)}
		</div>
	);
};

export default ManageProducts;
