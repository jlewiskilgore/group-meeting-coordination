import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AddEvent from './components/AddEvent';
import ViewEvent from './components/ViewEvent';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path='/' component={App} />
			<Route exact path='/add-event' component={AddEvent} />
			<Route exact path='/view-event' component={ViewEvent} />
		</div>
	</Router>, 
	document.getElementById('root')
);

registerServiceWorker();
