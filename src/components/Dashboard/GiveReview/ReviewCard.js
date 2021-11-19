import React from 'react';
import { Card, Col } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';

const ReviewCard = ({ review }) => {
	const { rating, feedbackMessage, profile } = review;
	return (
		<>
			<Col className="mb-5 mb-lg-0">
				<Card className="shadow h-100 border-0 rounded-3">
					<div className="text-center mt-5">
						<div className="text-center d-flex justify-content-center">
							<ReactStars
								count={5}
								edit={false}
								value={rating}
								size={30}
								activeColor="#ffd700"
								className="fs-2 mx-auto"
							/>
						</div>
					</div>
					<Card.Body className="p-5 position-relative">
						<Card.Text className="text-center text-alignment">
							{feedbackMessage.slice(0, 155)}
						</Card.Text>
						<div className="text-center">
							<h5 className="fw-bold generic-text-color">{profile?.name}</h5>
							<img
								style={{
									bottom: '-45px',
									left: '38%',
								}}
								className="rounded-circle shadow bg-light border-success border-5 border img-fluid w-25 position-absolute"
								src={
									profile?.photoUrl
										? profile.photoUrl
										: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'
								}
								alt=""
							/>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</>
	);
};

export default ReviewCard;
