import React from 'react';
import './Settings.scss'
import ReactSlider from 'react-slider';
import { useContext } from 'react';
import SettingsContext from './SettingsContext';
import BackButton from './BackButton';

const Settings = () => {
	const settingsInfo = useContext(SettingsContext);
	return (
		<div className='section settings'>
			<div className="settings__slider grid">
				<label className='settings__label'>focus: {settingsInfo.focusMinutes}:00min</label>
				<ReactSlider
					className={'slider'}
					thumbClassName={'thumb'}
					trackClassName={'track'}
					value={settingsInfo.focusMinutes}
					onChange={newValue => settingsInfo.setFocusMinutes(newValue)}
					min={1}
					max={120}
				/>
			</div>

			<div className="settings__slider grid">
				<label>break: {settingsInfo.breakMinutes}:00min</label>
				<ReactSlider
					className={'slider'}
					thumbClassName={'thumb'}
					trackClassName={'track'}
					value={settingsInfo.breakMinutes}
					onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
					min={1}
					max={120}
				/>
			</div>

			<BackButton onClick={() => settingsInfo.setShowSettings(false)} />
		</div>
	);
}

export default Settings;
