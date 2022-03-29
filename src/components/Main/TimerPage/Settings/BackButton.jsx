import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const BackButton = (props) => {
	return (
		<button {...props} className='button button-flex settings__button'>
			<BsFillArrowLeftSquareFill className='button__icon' />
			Back
		</button>
	);
}

export default BackButton;
