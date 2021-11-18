import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ReviewCard from './ReviewCard';

const GiveReview = () => {
	return (
		<section className="py-5 border-5">
			<Container>
				<div className="text-center">
					<h1 className="fw-bold generic-text-color">
						<i>Happy customers</i>
						<hr className="mx-auto w-25 text-primary p-1" />
					</h1>
				</div>
				<Row lg={3} md={2} xs={1} className="g-4 py-5">
					<ReviewCard></ReviewCard>
					<ReviewCard></ReviewCard>
					<ReviewCard></ReviewCard>
				</Row>
			</Container>
		</section>
	);
};

export default GiveReview;
