import React, { Component } from 'react';
import EventService from './EventService';
import axios from 'axios';


class ViewEvent extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '', events: '' };
		this.EventService = new EventService();
	}

	componentDidMount() {
		axios.get('http://localhost:8080/')
		.then(response => {
			console.log("view event mount");
		})
		.catch(function(error) {
			console.log(error);
		})
	}

	render() {
		return (
			<div className="container">
				<table className="table table-striped">
					<thead>
						<tr>
							<td>Event Name</td>
						</tr>
					</thead>
				</table>
			</div>
		);
	}
}

export default ViewEvent;