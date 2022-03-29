import React from 'react';
import './SettingsButton.scss';
import { MdSettings } from 'react-icons/md';

function SettingsButton(props) {
	return (
		<button {...props} className="settings__btn button button-flex">
			<MdSettings className='button__icon' />
			Settings
		</button>
	);
}

export default SettingsButton;