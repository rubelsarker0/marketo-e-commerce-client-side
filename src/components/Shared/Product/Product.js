import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = () => {
	return (
		<Col>
			<h1>Product</h1>
			{/* <Card>
				<img src="" alt="Slip-On Formal Shoe" />
				<Card.body>
					<h3>Slip-On Formal Shoe</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, modi.
					</p>
				</Card.body>
				<Card.Footer class="buying-info">
					<div class="price">$234</div>
					<Link to={`/product/details/`}>
						<FontAwesomeIcon className=" me-2" icon={faLuggageCart} /> BUY NOW
					</Link> 
				</Card.Footer>
			</Card> */}
		</Col>
	);
};

export default Product;
