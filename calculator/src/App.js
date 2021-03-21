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
	const multiMinus = (item) => {
		//마지막 숫자까지 자름 11+3 이면 11+까지
		var temp = item.match(/\d+$/m)[0];
		var res;
		console.log(temp);
		if (temp.substr(temp.length - 1, 1) === '.') {
			//마지막 숫자 앞에 소숫점이 있으면 그 전 숫자까지 자름
			// res = temp.match(/\d+$/m)[0];
		} else {
			//3+3이면 3-3으로, 3-3이면 3+3으로, 3*3이면 3*-3으로
			switch (temp.substr(temp.length - 1, 1)) {
				case '+':
					res = temp.substr(temp.length - 2, 1) + '-' + item.match(/\d+$/m)[1];
					break;

				default:
					break;
			}
		}
		return res;
	};

	const handleClick = useCallback((name) => {
		//button Name을 받아 계산기 기능 수행
		if (isNumber(name) || name === '.') {
			setNumber((num) => (isNaN((num + name) * 1) ? num + name : ((num + name) * 1).toString()));
		} else {
			switch (name) {
				case '+/-':
					setNumber((num) => {
						var temp = num.match(/\d+$/);
						var res = '0';
						console.log(temp[1]);
						if (temp[0].substr(temp[0].length - 1, 1) === '+') {
						}
						// switch (temp[0].substr(temp[0].length - 1, 1)) {
						// 	case '+':
						// 		console.log(temp[0].substr(0, temp[0].length - 1));
						// 		res = temp[0].substr(0, temp[0].length - 1) + '-' + temp[1];
						// 		break;
						// 	default:
						// 		break;
						// }
						return res;
					});
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
