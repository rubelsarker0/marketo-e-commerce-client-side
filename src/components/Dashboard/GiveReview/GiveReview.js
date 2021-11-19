import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Col, Form } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import useAuth from '../../../hooks/useAuth';

const GiveReview = () => {
	const [rating, setRating] = useState(3);
	const [reviewMessage, setReviewMessage] = useState('');
	const [isSuccess, setIsSuccess] = useState(false);
	const ratingChanged = (newRating) => {
		setRating(newRating);
	};

	const { user } = useAuth();

	const handleReviewSubmit = (e) => {
		e.preventDefault();
		const reviewsData = {
			rating,
			feedbackMessage: reviewMessage,
			profile: {
				photoUrl: user.photoURL,
				email: user.email,
				name: user.displayName,
			},
			uid: user.uid,
		};
		const url = `https://warm-everglades-86259.herokuapp.com/api/reviews/create`;
		axios
			.post(url, reviewsData)
			.then((res) => {
				e.target.reset();
				setIsSuccess(true);
			})
			.catch((err) => console.log(err));
	};
	useEffect(() => {
		setTimeout(() => {
			setIsSuccess(false);
		}, 4000);
	}, [isSuccess]);

	return (
		<div>
			<h4 className="text-center fw-bolder generic-text-color py-3">
				LET US KNOW HOW WE DID
			</h4>
			<Col lg={7} xs={11} md={8} className="mx-auto">
				{isSuccess && (
					<Alert variant="success">Thanks a million for your review!!</Alert>
				)}
				<Form onSubmit={handleReviewSubmit}>
					<ReactStars
						count={5}
						onChange={ratingChanged}
						value={rating}
						size={60}
						activeColor="#ffd700"
						className="fs-2 mx-auto"
					/>
					<Form.Group className="mb-3" controlId="ProductDes">
						<Form.Label>Let us know your experience</Form.Label>
						<Form.Control
							name="description"
							onChange={(e) => setReviewMessage(e.target.value)}
							style={{ height: '100px' }}
							as="textarea"
							placeholder="Tell us more!"
							required
						/>
					</Form.Group>
					<button
						className="btn border-0 generic-btn-color text-white w-100"
						type="submit"
					>
						SUBMIT REVIEW
					</button>
				</Form>
			</Col>
		</div>
	);
};

export default GiveReview;
