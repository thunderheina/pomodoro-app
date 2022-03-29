import React from 'react';
import Settings from './Settings/Settings';
import Timer from './Timer/Timer';
import { useState } from 'react';
import SettingsContext from './Settings/SettingsContext';

const Pomodoro = () => {
	const [showSettings, setShowSettings] = useState(false);
	const [focusMinutes, setFocusMinutes] = useState(25);
	const [breakMinutes, setBreakMinutes] = useState(10);

	return (
		<div className='section'>
			<SettingsContext.Provider value={{
				showSettings,
				setShowSettings,
				focusMinutes,
				breakMinutes,
				setFocusMinutes,
				setBreakMinutes
			}}>
				{showSettings ? <Settings /> : <Timer />}
			</SettingsContext.Provider>
		</div>
	);
}

export default Pomodoro;
