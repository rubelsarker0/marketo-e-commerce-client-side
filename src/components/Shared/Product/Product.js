import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLuggageCart } from '@fortawesome/free-solid-svg-icons';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = (props) => {
	const { _id, title, description, price, discountPrice, productImg } =
		props.product;

	return (
		<Col className="py-2">
			<Card className="h-100">
				<img
					className="w-100 h-100"
					src={productImg}
					alt="Slip-On Formal Shoe"
					// style={{ height: '450px' }}
				/>
				<Card.Body>
					<span>{title}</span>
					<h6 className="product-desc">{description}</h6>
					<div className="price mb-1 d-flex">
						<h6 className="text-danger">{`$${discountPrice}`} </h6>
						<span className="text-decoration-line-through text-secondary ms-2">
							{`$${price}`}
						</span>
					</div>

					<Link to={`/product/details/`}>
						<Button className=" generic-btn-color w-100 border-0">
							<FontAwesomeIcon className=" me-2" icon={faLuggageCart} /> BUY NOW
						</Button>
					</Link>
				</Card.Body>
			</Card>
		</Col>
	);
};

export default Product;
