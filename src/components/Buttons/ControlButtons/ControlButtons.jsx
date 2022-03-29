import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { AiFillPauseCircle } from 'react-icons/ai';

const ControlButtons = (props) => {
	return (
		<div>
			{props.isPaused
				? <AiFillPlayCircle className='btn' onClick={() => { props.setIsPaused(false); props.isPausedRef.current = false; }} />
				: <AiFillPauseCircle className='btn' onClick={() => { props.setIsPaused(true); props.isPausedRef.current = true; }} />}
		</div>
	);
}

export default ControlButtons;
