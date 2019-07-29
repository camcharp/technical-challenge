import React, { Component } from 'react';
import axios from 'axios';

export default class Celebs extends Component {
	state = {
		celebrities: []
	};

	componentDidMount = () => {
		axios
			.get(`https://api.themoviedb.org/3/person/popular?page=2&api_key=ed1e1b1b0894efa454d151c4afb39efa`)
			.then((res) => {
				this.setState({ celebrities: res.data.results });
				console.log(this.state.celebrities);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		const celebrity = this.state.celebrities.map((celebrity) => {
			return (
				<React.Fragment>
					<td>
						{/* <img src="https://image.tmdb.org/t/p/w185{this.state.color}" alt="pict" /> */}
						<img src={`https://image.tmdb.org/t/p/w185${celebrity.profile_path}`} alt="pict" />
					</td>
					<td>{celebrity.name}</td>
				</React.Fragment>
			);
        });
		return (
			<div>
				<h1>Celebrities</h1>
				<table>
					<thead>
						<tr>
							<th>Image</th>
							<th>Name</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{celebrity}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}
