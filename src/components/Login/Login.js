import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Col, Button, Container, Form, Row } from 'react-bootstrap';
import logo from '../../assets/images/logo-marketo.png';
import loginBgImg from '../../assets/images/login-bg-img.jpg';
import './Login.css';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { handleGoogleSignIn, handleEmailPasswordLogin, setLoading } =
		useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleEmailLogin = (e) => {
		setLoading(true);
		e.preventDefault();
		handleEmailPasswordLogin(email, password)
			.then((result) => {
				history.push(location.state?.from || '/home');
			})
			.catch((e) => setError('Email or password wrong!'))
			.finally(() => setLoading(false));
	};

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

	return (
		<section
			// style={{ minHeight: '650px' }}
			// className="bg-transparent my-5 d-flex align-items-center"
			style={{
				minHeight: '850px',
				width: '100%',
				background: `url(${loginBgImg}) no-repeat`,
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
									className="img-fluid mb-3"
									src={logo}
									alt=""
									style={{ height: '50px' }}
								/>
							</div>
							{error && <h3 className="text-danger text-center">{error}</h3>}
							<Form onSubmit={handleEmailLogin}>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										onChange={(e) => setEmail(e.target.value)}
										type="email"
										placeholder="Enter email"
									/>
								</Form.Group>

								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										onChange={(e) => setPassword(e.target.value)}
										type="password"
										placeholder="Password"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Remember me" />
								</Form.Group>
								<Button
									className=" generic-btn-color border-0 w-100"
									type="submit"
								>
									LOG IN
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
								Don't have an account?
								<Link to="/account/register"> Register</Link>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	);
};

export default Login;
