import React, { useCallback, useState } from 'react';
import './App.css';
import ButtonPanel from './component/ButtonPanel';
import Display from './component/Display';

const App = () => {
	const [number, setNumber] = useState('0');
	const isNumber = (item) => {
		return /[0-9]+/.test(item);
	};

	const handleClick = useCallback((name) => {
		//button Name을 받아 계산기 기능 수행
		if (isNumber(name) || name === '.') {
			setNumber((num) => (isNaN((num + name) * 1) ? num + name : ((num + name) * 1).toString()));
		} else {
			switch (name) {
				case '+/-':
					setNumber((num) => num * -1);
					break;
				case 'AC':
					setNumber(0);
					break;
				case '÷':
					setNumber((num) => num + '/');
					break;
				case 'x':
					setNumber((num) => num + '*');
					break;
				case '=':
					setNumber((num) => eval(num));
					break;
				default:
					// + - % 경우 기호와 표시가 같음
					setNumber((num) => num + name);
					break;
			}
		}
	}, []);

	return (
		<div className="component-app">
			<Display value={number} />
			<ButtonPanel handleClick={handleClick} />
		</div>
	);
};

export default App;
