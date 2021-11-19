import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Card, Col } from 'react-bootstrap';

const ReviewCard = (props) => {
	console.log(props.review);
	return (
		<>
			<Col className="mb-5 mb-lg-0">
				<Card className="shadow border-0 rounded-3">
					<div className="text-center mt-5">
						<FontAwesomeIcon
							className="fa-1x text-warning me-3"
							icon={faStar}
						/>
						<FontAwesomeIcon
							className="fa-1x text-warning me-3"
							icon={faStar}
						/>
						<FontAwesomeIcon
							className="fa-1x text-warning me-3"
							icon={faStar}
						/>
						<FontAwesomeIcon
							className="fa-1x text-warning me-3"
							icon={faStar}
						/>
						<FontAwesomeIcon className="fa-1x text-warning" icon={faStar} />
					</div>
					<Card.Body className="p-5 position-relative">
						<Card.Text className="text-center text-alignment">
							I would totally recommend Dawson Travel to anyone who is thinking
							of booking their next holiday. I had the pleasure of booking with
							Stephanie who was amazing from the start on deciding the best
							suitable.
						</Card.Text>
						<div className="text-center">
							<h5 className="fw-bold generic-text-color">Rubel Sarker</h5>
							<h6 className="mb-5 generic-text-color2">Traveller</h6>
							<img
								style={{
									bottom: '-45px',
									left: '38%',
								}}
								className="rounded-circle shadow bg-light border-success border-5 border img-fluid w-25 position-absolute"
								src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
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
