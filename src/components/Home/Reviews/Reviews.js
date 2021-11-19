import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ReviewCard from '../../Dashboard/GiveReview/ReviewCard';
const Reviews = () => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		const url = `http://localhost:5000/api/reviews/all`;
		axios
			.get(url)
			.then((response) => {
				setReviews(response.data);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<section className="py-3">
			<h4 className="text-center generic-text-color fw-bolder py-4">
				WHAT OUR CUSTOMER SAYS ABOUT US!
			</h4>
			<Row lg={4} md={3} xs={1} sm={2} className="pb-5">
				{reviews.map((review) => (
					<ReviewCard key={review._id} review={review}></ReviewCard>
				))}
			</Row>
		</section>
	);
};

export default Reviews;
