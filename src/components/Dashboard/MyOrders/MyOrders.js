import React from 'react';
import { Container, Table } from 'react-bootstrap';

const MyOrders = () => {
	return (
		<section style={{ minHeight: '600px' }}>
			<Container className="my-5">
				<h1 className=" text-center generic-text-color2 py-3">Your Orders</h1>
				<Table className="rounded-3" striped bordered hover variant="light">
					<thead>
						<tr>
							<th>Customer Name</th>
							<th>Phone Number</th>
							<th>Location</th>
							<th>Order Status</th>
							<th>Price</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>aa</td>
							<td>a</td>
							<td>b</td>
							<td>c</td>
							<td>d</td>
							<td>
								<button className="btn btn-danger w-75">Cancel</button>
							</td>
						</tr>
					</tbody>
				</Table>
			</Container>
		</section>
	);
};

export default MyOrders;
