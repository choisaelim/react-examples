import React from 'react';
import '../ButtonPanel.css';
import Button from './Button';

const ButtonPanel = ({ handleClick }) => {
	return (
		<div className="component-button-panel">
			<div>
				<Button name="AC" handleClick={handleClick} />
				<Button name="+/-" handleClick={handleClick} />
				<Button name="%" handleClick={handleClick} />
				<Button name="÷" type="orange" handleClick={handleClick} />
			</div>
			<div>
				<Button name="7" handleClick={handleClick} />
				<Button name="8" handleClick={handleClick} />
				<Button name="9" handleClick={handleClick} />
				<Button name="x" type="orange" handleClick={handleClick} />
			</div>
			<div>
				<Button name="4" handleClick={handleClick} />
				<Button name="5" handleClick={handleClick} />
				<Button name="6" handleClick={handleClick} />
				<Button name="-" type="orange" handleClick={handleClick} />
			</div>
			<div>
				<Button name="1" handleClick={handleClick} />
				<Button name="2" handleClick={handleClick} />
				<Button name="3" handleClick={handleClick} />
				<Button name="+" type="orange" handleClick={handleClick} />
			</div>
			<div>
				<Button name="0" type="wide" handleClick={handleClick} />
				<Button name="." handleClick={handleClick} />
				<Button name="=" type="orange" handleClick={handleClick} />
			</div>
		</div>
	);
};

export default ButtonPanel;
