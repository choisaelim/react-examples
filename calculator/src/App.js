import React, { useCallback, useState } from 'react';
import './App.css';
import ButtonPanel from './component/ButtonPanel';
import Display from './component/Display';

const App = () => {
	const [number, setNumber] = useState('0');
	const isNumber = (item) => {
		return /[0-9]+/.test(item);
	};

	//11+3 > 11-3
	//20*20 > 20*-20
	const PositiveNegative = (num) => {
		var res = '0';
		if (!isNaN(num * 1)) {
			res = (num * -1).toString();
		} else {
			var temp = num.match(/^.+[+\-*/%]/);
			var test = '';
			if (temp[0].length > 2 && !isNumber(temp[0].substr(temp[0].length - 2, 1))) {
				debugger;
				//20*3 에서 +/- 했다가 다시 +/- 하면 20*3이 되야 하는데 20*+3이 되는 부분 수정해야 함
			}
			switch (temp[0].substr(temp[0].length - 1, 1)) {
				case '+': //마지막 숫자 앞의 부호가 + 일 때 ex 123+456 > 123-456
					test = num.substr(temp[0].length, num.length - temp[0].length);
					res = temp[0].substr(0, temp[0].length - 1) + '-' + test;
					break;
				case '-': //마지막 숫자 앞의 부호가 - 일 때 ex 123-456 > 123+456
					test = num.substr(temp[0].length, num.length - temp[0].length);
					res = temp[0].substr(0, temp[0].length - 1) + '+' + test;
					break;
				default:
					// 123*456 > 123*-456
					test = num.substr(temp[0].length, num.length - temp[0].length);
					res = temp[0].substr(0, temp[0].length) + '-' + test;
					break;
			}
		}

		return res;
	};

	const isTwoOperator = (item) => {
		if (item.length > 1) {
			const operator = item.match(/[+\-*/%]?[+\-*/%]/);
			if (operator[0].length === 2) {
				//123*+46 > 123+46
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};

	const handleClick = useCallback((name) => {
		//button Name을 받아 계산기 기능 수행
		if (isNumber(name) || name === '.') {
			setNumber((num) => (isNaN((num + name) * 1) ? num + name : ((num + name) * 1).toString()));
		} else {
			name = name.replace('÷', '/');
			name = name.replace('x', '*');
			switch (name) {
				case '+/-':
					setNumber((num) => PositiveNegative(num));
					break;
				case 'AC':
					setNumber(0);
					break;
				case '=':
					setNumber((num) => eval(num));
					break;
				default:
					// + - % / 처리, Operator 뒤에 또 Operator 넣으면 제일 최근 Operator만 남김
					setNumber((num) => (isTwoOperator(num + name) ? num.substr(0, num.length - 1) + name : num + name));
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
