import React from "react";
import "../ButtonPanel.css";
import Button from "./Button";

const ButtonPanel = () => {
	// const handleClick = (buttonName) => {};

	return (
		<div className="component-button-panel">
			<div>
				<Button name="AC" />
				<Button name="+/-" />
				<Button name="%" />
				<Button name="÷" type="orange" />
			</div>
			<div>
				<Button name="7" />
				<Button name="8" />
				<Button name="9" />
				<Button name="x" type="orange" />
			</div>
			<div>
				<Button name="4" />
				<Button name="5" />
				<Button name="6" />
				<Button name="-" type="orange" />
			</div>
			<div>
				<Button name="1" />
				<Button name="2" />
				<Button name="3" />
				<Button name="+" type="orange" />
			</div>
			<div>
				<Button name="0" type="wide" />
				<Button name="." />
				<Button name="=" type="orange" />
			</div>
		</div>
	);
};

export default ButtonPanel;
