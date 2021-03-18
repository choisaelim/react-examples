import React, { useCallback, useState } from 'react';
import './App.css';
import ButtonPanel from './component/ButtonPanel';
import Display from './component/Display';

const App = () => {
	const [number, setNumber] = useState(0);
	const isNumber = (item) => {
		return /[0-9]+/.test(item);
	};

	const handleClick = useCallback((name) => {
		//button Name을 받아 계산기 기능 수행
		
	}, []);

	return (
		<div className="component-app">
			<Display value = {number}/>
			<ButtonPanel handleClick={handleClick} />
		</div>
	);
};

export default App;
