import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
	const [customerOrders, setCustomerOrders] = useState([]);
	const { user } = useAuth();

	const loadCustomerOrder = () => {
		axios
			.get(`http://localhost:5000/api/orders/${user.uid}`)
			.then((res) => {
				setCustomerOrders(res.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		loadCustomerOrder();
	}, []);

	console.log(customerOrders);

	return (
		<section style={{ minHeight: '600px' }}>
			<Container className="my-5">
				<h1 className=" text-center generic-text-color py-3 fw-bolder">
					YOUR ORDERS
				</h1>
				<Table className="rounded-3" striped bordered hover variant="light">
					<thead>
						<tr>
							<th>Customer Name</th>
							<th>Address</th>
							<th>Phone Number</th>
							<th>Price</th>
							<th>Order Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{customerOrders.map((order) => (
							<>
								<tr key={order._id}>
									<td>{order.name}</td>
									<td>{order.address}</td>
									<td>{order.phone}</td>
									<td>{order.product.price}</td>
									<td>{order.status}</td>
									<td>
										<button className="btn btn-danger w-75">Cancel</button>
									</td>
								</tr>
							</>
						))}
					</tbody>
				</Table>
			</Container>
		</section>
	);
};

export default MyOrders;
