import React, { Component } from 'react';

export default class CustomizeImage extends Component {
	state = {
		size: '',
		url: ''
	};

	handleUrl = (evt) => {
		this.setState({ url: evt.target.value });
	};

	handleInput = (evt) => {
		this.setState({ size: evt.target.value });
	};

	render() {
		var imageStyle = {
			width: `${this.state.size}px`,
			height: `${this.state.size}px`
		};
		return (
			<div className="customize">
				<h1>Customize Image</h1>
				<input type="text" placeholder="/favicon.ico" onInput={this.handleUrl} />
				<input type="range" min="O" max="200" onInput={this.handleInput} />
				<img src={!this.state.url ? "https://lh6.googleusercontent.com/0uAvDZOIKXehZ6mIaV8Aqt9dc0acfWsiU1s-WnMcQ9modjAA9Y45LqyykUrnPWvksfnI0YtjO7QuPI9bkb9cTgusG-VM4-LCy0ji6_Ky44EIKIdK3ILGA16NQrCuf-t2GHQoETgjCzQ" : `${this.state.url}`} alt="your upload here" style={imageStyle}/>
				<p>
					{this.state.size} x {this.state.size} px
				</p>
			</div>
		);
	}
}
