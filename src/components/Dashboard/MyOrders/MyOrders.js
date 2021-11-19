import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
	const [customerOrders, setCustomerOrders] = useState([]);
	const { user } = useAuth();
	const [isUpdate, setIsUpdate] = useState(false);

	const loadCustomerOrder = () => {
		axios
			.get(`https://warm-everglades-86259.herokuapp.com/api/orders/${user.uid}`)
			.then((res) => {
				setCustomerOrders(res.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		loadCustomerOrder();
	}, [isUpdate]);

	const handleCancel = (id) => {
		const confirm = window.confirm('Are you sure want to cancel order');
		if (confirm) {
			const url = `https://warm-everglades-86259.herokuapp.com/api/order/update/Cancel/${id}`;
			axios
				.put(url)
				.then((res) => {
					setIsUpdate(!isUpdate);
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<section style={{ minHeight: '600px' }}>
			<Container className="my-5">
				<h1 className=" text-center generic-text-color py-3 fw-bolder">
					YOUR ORDERS
				</h1>
				<Table
					responsive
					className="rounded-3"
					striped
					bordered
					hover
					variant="light"
				>
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
										<button
											onClick={() => handleCancel(order._id)}
											className="btn btn-danger w-75"
											disabled={order.status === 'Cancel'}
										>
											Cancel
										</button>
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
