import React, { Component } from 'react';

export default class Searchbar extends Component {
	constructor(props) {

		super(props);
		this.state = {term: ' '};
	}

	render() {
		return (
			<div className="searchbar-wrapper">
				<input />
			</div>
		);
	}
}