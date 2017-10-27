import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import Header from './Header';
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
		this.eventService.sendData(this.state.eventName);
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				<Header />
				<Jumbotron className="App-jumbotron">
					<div className="container">
						<form class="form-horizontal" onSubmit={this.handleSubmit}>
							<label class="label label-default">Add Event</label>
							<br/><br/>
							<div class="form-group">
								<label class="col-xs-4">Event Name: </label>
								<div class="col-xs-8">
									<input type="text" class="form-control" value={this.state.eventName}
										onChange={this.handleChange} className="form-control"/>
								</div>
							</div>
							<div class="form-group">
								<label class="col-xs-4">Location: </label>
								<div class="col-xs-8">
									<input type="text" class="form-control" value={this.state.location}
										className="form-control"/>
								</div>
							</div>
							<div class="form-group">
								<label class="col-xs-4">Start Date: </label>
								<div class="col-xs-8">
									<input type="text" class="form-control" value={this.state.startDate}
										className="form-control"/>
								</div>
							</div>
							<div class="form-group">
								<label class="col-xs-4">How long?</label>
								<div class="col-xs-6">
									<input type="text" class="form-control" value={this.state.duration} />
								</div>
								<div class="col-xs-2">
									<select class="form-control" value={this.state.durationUnit}>
										<option>Minutes</option>
										<option>Hours</option>
										<option>Days</option>
									</select>
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
			</div>
		);
	}
}

export default AddEvent;