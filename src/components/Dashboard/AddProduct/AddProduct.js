import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Card, Col } from 'react-bootstrap';

const AddProduct = () => {
	const [productData, setProductData] = useState({});

	const handleChange = (e) => {
		const newProduct = { ...productData };
		newProduct[e.target.name] = e.target.value;
		setProductData(newProduct);
	};
	const handleProductSubmit = (e) => {
		e.preventDefault();
		axios
			.post(
				'https://warm-everglades-86259.herokuapp.com/api/products/create',
				productData
			)
			.then((res) => {
				console.log(res.data);
				e.target.reset();
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<section className="my-5 h-100">
			<Col xs={11} md={8} lg={7} className="mx-auto">
				<Card className=" mx-auto p-3 border-0 shadow-lg rounded ">
					<h3 className="generic-text-color text-center mb-4 pt-4">
						ADD NEW PRODUCT
					</h3>
					<Form onSubmit={handleProductSubmit}>
						<Form.Group className="mb-3" controlId="email">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								name="title"
								placeholder="Title"
								onChange={handleChange}
							/>
						</Form.Group>

						<Form.Group className="mb-3" controlId="name">
							<Form.Label>Brand Name</Form.Label>
							<Form.Control
								name="brand"
								onChange={handleChange}
								type="text"
								placeholder="Name"
								required
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								name="description"
								onChange={handleChange}
								rows={3}
								placeholder="Product Description"
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="img-url">
							<Form.Label>Product Image url</Form.Label>
							<Form.Control
								type="text"
								name="productImg"
								onChange={handleChange}
								placeholder="Product Image url"
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="method">
							<Form.Label>Price</Form.Label>
							<Form.Control
								name="price"
								onChange={handleChange}
								type="number"
								placeholder="Price"
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="method">
							<Form.Label>Discount Price</Form.Label>
							<Form.Control
								name="discountPrice"
								onChange={handleChange}
								type="number"
								placeholder="Discount price"
								required
							/>
						</Form.Group>
						<div className="text-center">
							<Button
								className=" generic-btn-color w-100 mx-auto border-0"
								type="submit"
							>
								ADD PRODUCT
							</Button>
						</div>
					</Form>
				</Card>
			</Col>
		</section>
	);
};
export default AddProduct;
