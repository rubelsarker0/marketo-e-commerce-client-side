import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageOrders = () => {
	const [manageOrders, setManageOrders] = useState([]);
	const [isUpdate, setIsUpdate] = useState(false);
	const loadManageOrders = () => {
		axios
			.get(`https://warm-everglades-86259.herokuapp.com/api/orders/all`)
			.then((response) => {
				setManageOrders(response.data);
			})
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		loadManageOrders();
	}, [isUpdate]);

	const handleStatusUpdate = (id, method) => {
		const confirm = window.confirm(`Are you sure want to ${method} order`);
		if (confirm) {
			const url = `https://warm-everglades-86259.herokuapp.com/api/order/update/${method}/${id}`;
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
					MANAGE ORDERS
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
						{manageOrders.map((ManageOrder) => (
							<>
								<tr key={ManageOrder._id}>
									<td>{ManageOrder.name}</td>
									<td>{ManageOrder.address}</td>
									<td>{ManageOrder.phone}</td>
									<td>{ManageOrder.product.price}</td>
									<td>{ManageOrder.status}</td>
									<td>
										<button
											onClick={() =>
												handleStatusUpdate(ManageOrder._id, 'Delivered')
											}
											className="btn btn-success"
											disabled={
												ManageOrder.status === 'Delivered' ||
												ManageOrder.status === 'Cancel'
											}
										>
											DELIVERED
										</button>
										<button
											onClick={() =>
												handleStatusUpdate(ManageOrder._id, 'Cancel')
											}
											disabled={
												ManageOrder.status === 'Delivered' ||
												ManageOrder.status === 'Cancel'
											}
											className="btn btn-danger"
										>
											CANCEL
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

export default ManageOrders;
