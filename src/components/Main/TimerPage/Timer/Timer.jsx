import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import Buttons from "../../../Buttons/Buttons";
import './Timer.scss';
import { useEffect, useContext, useState, useRef } from 'react';
import SettingsContext from "../Settings/SettingsContext";

function Timer() {
	const firstColor = '#a35cd6';
	const secondColor = '#d1adeb';

	const settingsInfo = useContext(SettingsContext);

	const [isPaused, setIsPaused] = useState(true); //show play-pause button
	const [secondsLeft, setSecondsLeft] = useState(0);
	const [mode, setMode] = useState('focus');

	const secondsLeftRef = useRef(secondsLeft);
	const isPausedRef = useRef(isPaused);
	const modeRef = useRef(mode);

	function tick() {
		secondsLeftRef.current--;
		setSecondsLeft(secondsLeftRef.current);
	}

	useEffect(() => {

		function switchMode() {
			const nextMode = modeRef.current === 'focus' ? 'break' : 'focus';
			const nextSeconds = (nextMode === 'focus' ? settingsInfo.focusMinutes : settingsInfo.breakMinutes) * 60;

			setMode(nextMode);
			modeRef.current = nextMode;

			setSecondsLeft(nextSeconds);
			secondsLeftRef.current = nextSeconds;
		}

		secondsLeftRef.current = settingsInfo.focusMinutes * 60;
		setSecondsLeft(secondsLeftRef.current);

		const interval = setInterval(() => {
			if (isPausedRef.current) {
				return;
			}
			if (secondsLeftRef.current === 0) {
				return switchMode();
			}

			tick();
		}, 1000);

		return () => clearInterval(interval);
	}, [settingsInfo]);

	const totalSeconds = mode === 'focus'
		? settingsInfo.focusMinutes * 60
		: settingsInfo.breakMinutes * 60;
	const percentage = Math.round(secondsLeft / totalSeconds * 100);

	const minutes = Math.floor(secondsLeft / 60);
	let seconds = secondsLeft % 60;
	if (seconds < 10) seconds = '0' + seconds;

	return (
		<div className="grid timer__section">
			<CircularProgressbar value={percentage} text={minutes + ':' + seconds} styles={buildStyles({ pathColor: mode === 'focus' ? firstColor : secondColor })} />
			<Buttons isPaused={isPaused} setIsPaused={setIsPaused} isPausedRef={isPausedRef} settingsInfo={settingsInfo} />
		</div>
	);
}

export default Timer;