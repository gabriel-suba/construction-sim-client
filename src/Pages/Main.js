import { useState, useEffect, useMemo } from 'react';
import Train from '../components/Train';
import * as brain from 'brain.js';

const Main = () => {
	const URL = 'http://localhost:8080/data';
	const [init, setInit] = useState(false);
	const [isFetched, setIsFetched] = useState(false);
	const [result, setResult] = useState(null);
	const [output, setOutput]= useState([]);
	const [text, setText] = useState('');
	const [trainingData, setTrainingData] = useState([]);

	const net = useMemo(() => new brain.recurrent.LSTM(), []);
	
	useEffect(() => {
		loadData();

		if (isFetched && trainingData) {
			net.train(trainingData, { iterations: 100, log: stats => console.log(stats), logPeriod: 100 });
			setInit(true);
		}
	}, [net, isFetched])

	const loadData = () => {
		setTrainingData([]);
		fetch(URL)
		.then(res => res.json())
		.then(data => {
			data.forEach(
				item => setTrainingData(prev => [...prev, { input: item.input, output: item.output }])
			);
			setIsFetched(true);
		})
		.catch(err => console.log(err));
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		const output = net.run(text)
		setResult(output.split(' '));
	}

	const handleNewOutput = (e) => {
		if (output.includes(e.target.innerText)) return;

		setOutput(prev => [...prev, e.target.innerText])
	}

	const handleChange = (e) => setText(e.target.value);

	return (
		<main>
			{!init && (<h2 className="loading">Loading...</h2>)}
			<form className="form-content container" onSubmit={handleSubmit}>
				<input type="text" placeholder="What's on your mind?" onChange={handleChange} />
				<button type="submit">SUBMIT</button>
			</form>
			<div className="result-content container">
				<h2>Suggested Materials</h2>
				<ul>
					{ result && result.map((item, index) => (
						<li key={index}>{item}</li>
					)) }
				</ul>
				<button onClick={() => setResult(null)}>Clear</button>
			</div>
			
			{ (result !== null) && <Train input={text} result={result} output={output} handleNewOutput={handleNewOutput} /> }
		</main>
	);
}

// fetch(URL, {
// 	method: 'POST',
// 	headers: { 'Content-Type': 'application/json' },
// 	body: JSON.stringify({ input: curr.input, output: curr.output })
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))
 
export default Main;