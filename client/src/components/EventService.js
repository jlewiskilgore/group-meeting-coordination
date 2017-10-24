import axios from 'axios';

class EventService {
	sendData(data) {
		console.log(data);

		axios.post('http://localhost:8080/events/add', {
			event: data
		})
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});
	}
}

export default EventService;