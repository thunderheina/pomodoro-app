import React from "react";
import './Buttons.scss'
import ControlButtons from "./ControlButtons/ControlButtons";
import SettingsButton from "./SettingsButton/SettingsButton";

function Buttons(props) {
	return (
		<div className="buttons">
			<ControlButtons isPaused={props.isPaused} isPausedRef={props.isPausedRef} setIsPaused={props.setIsPaused} />
			<SettingsButton onClick={() => props.settingsInfo.setShowSettings(true)} />
		</div>
	);
}

export default Buttons;