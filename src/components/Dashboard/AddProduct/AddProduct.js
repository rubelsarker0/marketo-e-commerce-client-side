import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const AddProduct = () => {
	return (
		<section className="my-5 h-100">
			<Card className=" mx-auto p-3 w-50 border-0 shadow-lg rounded ">
				<h3 className="generic-text-color text-center mb-4 pt-4">
					ADD NEW PRODUCT
				</h3>
				<Form onSubmit="#">
					<Form.Group className="mb-3" controlId="email">
						<Form.Label>Title</Form.Label>
						<Form.Control
							type="text"
							// value=""
							placeholder="Email"
							required
							// disabled=""
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="name">
						<Form.Label>Brand Name</Form.Label>
						<Form.Control type="text" placeholder="Name" required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Description</Form.Label>
						<Form.Control
							as="textarea"
							rows={3}
							placeholder="Product Description"
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="img-url">
						<Form.Label>Product Image url</Form.Label>
						<Form.Control
							type="text"
							placeholder="Product Image url"
							required
						/>
					</Form.Group>
					<Form.Group className="mb-3" controlId="method">
						<Form.Label>Price</Form.Label>
						<Form.Control type="number" placeholder="Price" required />
					</Form.Group>
					<Form.Group className="mb-3" controlId="method">
						<Form.Label>Discount Price</Form.Label>
						<Form.Control type="number" placeholder="Discount price" required />
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
		</section>
	);
};
export default AddProduct;
