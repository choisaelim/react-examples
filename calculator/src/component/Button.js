import React from 'react';
import '../Button.css';

const Button = ({ name, type, handleClick }) => {
	const className = ['component-button', type];
	return (
		<div className={className.join(' ').trim()}>
			<button onClick={() => handleClick(name)}>{name}</button>
		</div>
	);
};

export default Button;
