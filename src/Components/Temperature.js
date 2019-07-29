import React, { Component } from 'react';

export default class Temperature extends Component {
	state = {
		temperature: null,
        text: '',
        color: null
	};

	handleInput = (evt) => {
		this.setState({ temperature: evt.target.value });
		console.log(this.state.temperature);
		console.log(this.state.text);
	};

	updateText = () => {
		if (this.state.temperature <= 10) this.setState({ text: "It's cold ❄️", color: "blue" });
		else if (this.state.temperature > 10 && this.state.temperature <= 30) this.setState({ text: "It's nice 🌼",color: "black" });
		else if (this.state.temperature > 30) this.setState({ text: "It's warm ☀️",color: "red" });
    };
    
	render() {
        var colorStyle = {
			color: `${this.state.color}`,
		};
		return (
			<div className="temp-input">
				<h1>Temperature</h1>
				<input type="number" placeholder="Temperature in °C" onInput={this.handleInput} onChange={this.updateText} />
				<p style={colorStyle}>{this.state.text}</p>
			</div>
		);
	}
}
