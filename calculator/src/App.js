import React, { useCallback, useState } from 'react';
import './App.css';
import ButtonPanel from './component/ButtonPanel';
import Display from './component/Display';

const App = () => {
	const [num, setNum] = useState(0);
	const isNumber = (item) => {
		return /[0-9]+/.test(item);
	};

	const test = () => {
		// setNumber(1);
		// console.log(number);
	};

	const handleClick = useCallback((name) => {
		setNum(name);
		console.log(num);
		// if (isNumber(key)) {
		// 	// setNumber((prevNumber) => (prevNumber === 0 ? key : prevNumber + '' + key));
		// 	setNumber(key);
		// 	console.log(number);
		// } else {
		// switch (key) {
		// 	case 'AC':
		// 		setNumber(0);
		// 		break;
		// 	case '%':
		// 		setNumber((prevNumber) => prevNumber % key);
		// 		break;
		// 	case '+':
		// 		setNumber((prevNumber) => prevNumber + key);
		// 		console.log(number);
		// 		break;
		// 	case '+/-':
		// 		setNumber((prevNumber) => prevNumber * -1);
		// 		break;
		// 	case 'x':
		// 		setNumber((prevNumber) => prevNumber * key);
		// 		break;
		// 	case '=':
		// 		setNumber((prevNumber) => eval(prevNumber));
		// 		console.log(number);
		// 		break;
		// 	default:
		// 		break;
		// }
		// }
	}, []);

	return (
		<div className="component-app">
			<div className="component-display" onClick={() => test()}>
				{num}
			</div>
			<ButtonPanel handleClick={handleClick} />
		</div>
	);
};

export default App;
