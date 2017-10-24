import React, { Component } from 'react';
import EventService from './EventService';

class AddEvent extends Component {
	constructor(props) {
		super(props);
		this.state = {event: ''};
		this.eventService = new EventService();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({event: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		this.eventService.sendData(this.state.event);
		this.props.history.push('/');
	}

	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<label>
						Event Name: 
						<input type="text" value={this.state.event}
							onChange={this.handleChange} className="form-control"/>
					</label>

					<input type="submit" value="Submit" className="btn btn-primary"/>
				</form>
			</div>
		);
	}
}

export default AddEvent;