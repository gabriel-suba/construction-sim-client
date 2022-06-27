const Train = ({ input, output, handleNewOutput }) => {
	return (
		<div className="materials-content container">
			<h2>Train me!</h2>
			<span>Is the prediction wrong? You can help us train the model by clicking the right material below!</span>
			<div className="key-value">
				<span className="key">Your Input: {input}</span>
				<span className="value">Expected Output: {output.join(" ")}</span>
			</div>
			<div className="material">
				<div className="type">
					<h3>Concrete Products</h3>
					<div className="btn-group">
						<button onClick={handleNewOutput}>White-Sand</button>
						<button onClick={handleNewOutput}>Hollow-Block</button>
						<button onClick={handleNewOutput}>Cement</button>
						<button onClick={handleNewOutput}>Gravel</button>
					</div>
				</div>
				<div className="type">
					<h3>Wood Products</h3>
					<div className="btn-group">
					<button onClick={handleNewOutput}>Plywood</button>
					<button onClick={handleNewOutput}>Lumber</button>
					</div>
				</div>
				<div className="type">
					<h3>Steel or Metal Products</h3>
					<div className="btn-group">
						<button onClick={handleNewOutput}>GI-Sheet</button>
						<button onClick={handleNewOutput}>Lumber</button>
						<button onClick={handleNewOutput}>C-Purlins</button>
						<button onClick={handleNewOutput}>Flat-Bar</button>
						<button onClick={handleNewOutput}>Plain-Round-Bar</button>
						<button onClick={handleNewOutput}>Tubular-Bar</button>
						<button onClick={handleNewOutput}>Steel-Matting</button>
					</div>
				</div>
				<div className="type">
					<h3>Roofing and Insulation Products</h3>
					<div className="btn-group">
						<button onClick={handleNewOutput}>Longspan</button>
						<button onClick={handleNewOutput}>Corrugated-Sheet</button>
						<button onClick={handleNewOutput}>Insulation</button>
						<button onClick={handleNewOutput}>Vulcaseal</button>
					</div>
				</div>
			</div>
		</div>
	);
}
 
export default Train;