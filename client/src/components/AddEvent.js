import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
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
			<Jumbotron>
				<div className="container">
					<form class="form-horizontal" onSubmit={this.handleSubmit}>
						<label>Add Event</label>
						<br/><br/>
						<div class="form-group">
							<label class="col-xs-4">Event Name: </label>
							<div class="col-xs-8">
								<input type="text" class="form-control" value={this.state.event}
									onChange={this.handleChange} className="form-control"/>
							</div>
						</div>
						<div class="form-group">
							<div class="col-xs-12">
								<input type="submit" value="Submit" className="btn btn-primary"/>
							</div>
						</div>
					</form>
				</div>
			</Jumbotron>
		);
	}
}

export default AddEvent;