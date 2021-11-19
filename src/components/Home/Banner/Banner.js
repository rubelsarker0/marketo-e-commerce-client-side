import React from 'react';
import { Carousel } from 'react-bootstrap';
import slideImg1 from '../../../assets/images/slide-img-1.png';
import slideImg2 from '../../../assets/images/slide-img-2.png';
import slideImg3 from '../../../assets/images/slide-img-3.png';

const Banner = () => {
	return (
		<section>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-50 mx-auto text-black"
						src={slideImg1}
						alt="First slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-50 mx-auto"
						src={slideImg2}
						alt="Second slide"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-50 mx-auto"
						src={slideImg3}
						alt="Third slide"
					/>
				</Carousel.Item>
			</Carousel>
		</section>
	);
};

export default Banner;
