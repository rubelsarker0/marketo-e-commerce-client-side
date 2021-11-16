import React from 'react';
import { Col } from 'react-bootstrap';
import footerLogo from '../../../../assets/images/logo-marketo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faTwitter,
	faYoutube,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const Social = () => {
	return (
		<Col>
			<img className="img-fluid" src={footerLogo} alt="" />
			<p className="text-white my-3 text-format">
				Company guarante secured transaction by signing a debt guarantee
				guarantee contract with Bank for the amount of cash payment by the
				customer
			</p>
			<div>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x me-3 footer-icon-color"
						icon={faFacebook}
					/>
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x me-3 footer-icon-color"
						icon={faTwitter}
					/>
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x me-3 footer-icon-color"
						icon={faYoutube}
					/>
				</a>
				<a
					rel="noreferrer"
					target="_blank"
					href="https://www.facebook.com/rubelsarker8"
				>
					<FontAwesomeIcon
						className="fa-2x footer-icon-color"
						icon={faInstagram}
					/>
				</a>
			</div>
		</Col>
	);
};

export default Social;
