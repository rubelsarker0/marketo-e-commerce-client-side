import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
const PlaceOrder = () => {
	const [product, setProduct] = useState([]);
	const [orderQuantity, setOrderQuantity] = useState(1);
	const [address, setAddress] = useState({});
	const { id } = useParams();
	const { user } = useAuth();
	const history = useHistory();
	useEffect(() => {
		const url = `http://localhost:5000/api/products/${id}`;
		axios
			.get(url)
			.then((res) => setProduct(res.data))
			.catch((err) => console.log(err));
	}, [id]);
	console.log(product);

	const handlePlaceOrder = (e) => {
		e.preventDefault();
		const url = `http://localhost:5000/api/orders/create`;
		const ordersData = {
			...address,
			quantity: orderQuantity,
			product,
			uid: user.uid,
			name: user.displayName,
			email: user.email,
			status: 'Pending',
		};
		axios
			.post(url, ordersData)
			.then((res) => {
				console.log(res.data);
				if (res.data.insertedId) {
					alert('order placed successfully');
					history.push('/dashboard/myOrders');
				}
			})
			.catch((err) => console.log(err));
	};

	// increase quantity
	const increaseQuantity = () => {
		if (orderQuantity < 5) {
			setOrderQuantity(orderQuantity + 1);
		}
	};

	// decrease  Quantity
	const decreaseQuantity = () => {
		if (orderQuantity > 1) {
			setOrderQuantity(orderQuantity - 1);
		}
	};

	// handle change

	const handleChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newAddress = { ...address };
		newAddress[field] = value;
		setAddress(newAddress);
	};
	return (
		<div>
			<Container>
				<Row>
					<Col xs={12} md={5}>
						<img className="w-100 img-fluid" src={product?.productImg} alt="" />
					</Col>
					<Col xs={12} md={7}>
						<div className="m-1">
							<h5 className="generic-text-color">{product?.title}</h5>
							<p className="text-secondary">
								{product?.description?.slice(0, 200)}
							</p>

							<div className="d-flex justify-content-between ">
								<div>
									<h4 className="mt-3 text-danger">
										$ {product?.discountPrice}
									</h4>
									<span
										style={{ fontSize: '18px' }}
										className="text-decoration-line-through"
									>
										$ {product?.price}
									</span>
								</div>
								<div>
									<div className="pe-2 fs-4 d-block fw-bold">
										Stock available
									</div>
								</div>
							</div>
							<div
								className="btn-group mt-3 text-center w-100"
								role="group"
								aria-label="Basic example"
							>
								<button
									style={{ width: '50px' }}
									className="fw-bold fs-5"
									onClick={decreaseQuantity}
									disabled={orderQuantity === 1}
								>
									-
								</button>
								<button
									style={{ width: '50px' }}
									type="button"
									disabled
									className="btn btn-white fs-3 fw-bold"
								>
									{orderQuantity}
								</button>
								<button
									onClick={increaseQuantity}
									style={{ width: '50px' }}
									className="fw-bold fs-5"
									disabled={orderQuantity === 5}
								>
									+
								</button>
							</div>

							<Form onSubmit={handlePlaceOrder}>
								<h4 className="py-2 generic-text-color">Delivery address</h4>
								<Form.Group className="mb-3" controlId="email">
									<Form.Label>Country</Form.Label>
									<Form.Control
										type="text"
										name="country"
										placeholder="Enter your country"
										onChange={handleChange}
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="name">
									<Form.Label>Address</Form.Label>
									<Form.Control
										name="address"
										onChange={handleChange}
										type="text"
										placeholder="Enter your address"
										required
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="img-url">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										type="text"
										name="phone"
										onChange={handleChange}
										placeholder="Enter your phone number"
										required
									/>
								</Form.Group>

								<div className="text-center">
									<Button
										className="w-100 generic-btn-color border-0 text-white fw-bold py-2 mt-3"
										type="submit"
									>
										Place Order
									</Button>
								</div>
							</Form>
						</div>
					</Col>
				</Row>
				<p className="my-4">{product?.description}</p>
			</Container>
		</div>
	);
};

export default PlaceOrder;
