import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Alert, FloatingLabel } from 'react-bootstrap';

const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [isSuccess, setIsSuccess] = useState(false);
	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(false);
		}, 4000);
	}, [isSuccess]);

	const handleAdminSubmit = (e) => {
		e.preventDefault();
		const url = `http://localhost:5000/api/admin/create/${email}`;
		axios
			.put(url)
			.then((res) => {
				setIsSuccess(true);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div className=" my-5">
			<Col lg={7} xs={11} md={8} className="mx-auto">
				<div className="card shadow-lg rounded py-3 px-3">
					<h3 className=" text-center generic-text-color py-3">
						MAKE A NEW ADMIN
					</h3>
					{isSuccess && (
						<Alert variant="success">An Admin Make Successfully!</Alert>
					)}
					<Form onSubmit={handleAdminSubmit}>
						<Row className="mb-3">
							<Form.Label>User Email</Form.Label>
							<FloatingLabel
								controlId="floatingInput"
								label="Email address"
								className="mb-3 "
							>
								<Form.Control
									name="email"
									type="email"
									onChange={handleChange}
									placeholder="Email Address"
									required
								/>
							</FloatingLabel>
						</Row>

						<button
							className="generic-btn-color w-100 mx-auto border-0 text-white fw-bold p-2 rounded"
							type="submit"
						>
							Make Admin
						</button>
					</Form>
				</div>
			</Col>
		</div>
	);
};

export default MakeAdmin;
