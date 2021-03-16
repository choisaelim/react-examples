import React from "react";
import "../Button.css";

const Button = ({ name, type }) => {
	// const classNames = ["component-button", type ? "orange" : "", type ? "wide" : ""];
	const className = ["component-button", type ? "orange" : "", type ? "wide" : ""];
	return (
		<div className={className.join(" ").trim()}>
			<button>{name}</button>
		</div>
	);
};

export default Button;
