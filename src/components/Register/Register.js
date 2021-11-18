import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Col, Button, Container, Form, Row } from 'react-bootstrap';
import logo from '../../assets/images/logo-marketo.png';
import registerBgImg from '../../assets/images/register-bg-img.jpg';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Register = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState({});
	const {
		handleGoogleSignIn,
		handleEmailPasswordRegister,
		setUserName,
		setUser,
		setLoading,
	} = useAuth();

	const location = useLocation();
	const history = useHistory();

	const signInGoogle = () => {
		setLoading(true);
		handleGoogleSignIn()
			.then((result) => {
				const userData = {
					name: result.user.displayName,
					email: result.user.email,
					uid: result.user.uid,
				};
				const url = 'http://localhost:5000/api/users/createUser';
				axios
					.put(url, userData)
					.then((res) => {})
					.catch((err) => console.log(err));
				history.push(location.state?.from || '/home');
			})
			.catch((error) => console.log(error.message))
			.finally(() => setLoading(false));
	};

	const validationRegister = (name, password) => {
		const errorMessage = {};
		if (name.length < 5 || name.length > 15) {
			errorMessage.name = 'Name Must be between 5 to 15 characters';
		}
		if (password.length < 6 || password.length > 14) {
			errorMessage.password = 'Password Must be between 5 to 14 characters';
		}
		return errorMessage;
	};

	const handleEmailRegistration = (e) => {
		setLoading(true);
		e.preventDefault();

		const errorMessage = validationRegister(name, password);

		if (errorMessage.name || errorMessage.password) {
			setError(errorMessage);
			return;
		}
		handleEmailPasswordRegister(email, password, name)
			.then((result) => {
				const userData = {
					name: result.user.displayName,
					email: result.user.email,
					uid: result.user.uid,
				};
				const url = 'http://localhost:5000/api/users/create';
				axios
					.post(url, userData)
					.then((res) => {
						console.log(res.data);
					})
					.catch((err) => console.log(err));

				setUserName(name);
				const LoginUser = result.user;
				setUser(LoginUser);
				// emailVerification();
				history.push(location.state?.from || '/home');
				setError({});
			})
			.catch((e) => {
				setError({ email: 'User already exits this email' });
			})
			.finally(() => setLoading(false));
	};

	return (
		<section
			style={{
				minHeight: '850px',
				width: '100%',
				background: `url(${registerBgImg}) no-repeat`,
				backgroundSize: 'cover',
				paddingTop: '120px',
			}}
		>
			<Container>
				<Row lg={1} xs={1} className="g-3">
					<Col className="w-lg-50 mx-auto w-sm-100">
						<div className="rounded rounded-3 shadow-lg bg-light p-3 py-5 p-lg-4 py-xl-5">
							<div className="text-center">
								<img
									className="img-fluid"
									src={logo}
									alt=""
									style={{ height: '50px' }}
								/>
							</div>
							<Form onSubmit={handleEmailRegistration}>
								<Form.Group className="mb-3" controlId="formName">
									<Form.Label>Your Name</Form.Label>
									<Form.Control
										onChange={(e) => setName(e.target.value)}
										type="text"
										placeholder="Enter Your Name"
										required
									/>
									{error.name && (
										<Form.Text id="formName" className="text-danger">
											{error.name}
										</Form.Text>
									)}
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										onChange={(e) => setEmail(e.target.value)}
										type="email"
										placeholder="Enter email"
										required
									/>
									{error.email && (
										<Form.Text id="formName" className="text-danger">
											{error.email}
										</Form.Text>
									)}
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										onChange={(e) => setPassword(e.target.value)}
										type="password"
										placeholder="Password"
										required
									/>
									{error.password && (
										<Form.Text id="formName" className="text-danger">
											{error.password}
										</Form.Text>
									)}
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Remember me" />
								</Form.Group>
								<Button
									className=" generic-btn-color border-0 w-100"
									type="submit"
								>
									REGISTER
								</Button>
							</Form>
							<div className="divider text-center my-3 fs-5">
								<span className="divider-content">Or</span>
							</div>

							<Button
								onClick={signInGoogle}
								variant="secondary"
								className="w-100 text-white fw-bold"
							>
								<FontAwesomeIcon
									className="fa-1x text-white me-2"
									icon={faGoogle}
								/>
								Google Sign In
							</Button>

							<div className="text-center fst-italic mt-3">
								Already have an account? <Link to="/account/login">Log In</Link>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Register;
