import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = () => {
	return (
		<Col>
			<Card>
				<img
					className="w-100"
					src="https://demo.xpeedstudio.com/marketov2/shoe/wp-content/uploads/sites/15/2018/10/1-min-300x300.jpg"
					alt="Slip-On Formal Shoe"
				/>
				<Card.Body>
					<span>casual shoe</span>
					<h6 className="product-desc">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Exercitationem, modi.
					</h6>
					<div className="price mb-1 d-flex">
						<h6>$234 </h6>
						<span className="text-decoration-line-through text-secondary ms-2">
							$520
						</span>
					</div>

					<Link to={`/product/details/`}>
						<Button variant="success" className="w-100">
							<FontAwesomeIcon className=" me-2" icon={faLuggageCart} /> BUY NOW
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Product;
