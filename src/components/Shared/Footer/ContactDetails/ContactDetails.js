import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLocationArrow,
	faEnvelopeOpen,
	faClock,
	faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

const ContactDetails = () => {
	return (
		<div className="ps-5">
			<h5>Contact Details</h5>
			<hr className="text-info w-50 p-1" />
			<p>
				<FontAwesomeIcon
					className="fa-1x footer-icon-color me-3"
					icon={faLocationArrow}
				/>
				15 Princess Road, Dublin, Republic of ireland
			</p>
			<p>
				<FontAwesomeIcon
					className="fa-1x footer-icon-color me-3"
					icon={faEnvelopeOpen}
				/>
				support@marketo.com
			</p>
			<p>
				<FontAwesomeIcon
					className="fa-1x footer-icon-color me-3"
					icon={faClock}
				/>
				8 AM - 5 PM , Monday - sunday
			</p>
			<p>
				<FontAwesomeIcon
					className="fa-1x footer-icon-color me-3"
					icon={faPhoneAlt}
				/>
				(+051) 961 468
			</p>
		</div>
	);
};

export default ContactDetails;
