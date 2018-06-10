import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';
/*

	Following import lines have been replaced with function from
	Root.js

	// import { Provider } from 'react-redux';
	// import { createStore, applyMiddleware } from 'redux';
	// import reducers from 'reducers';
*/

import App from 'components/App';



ReactDOM.render(
	<Root>
		<App />
	</Root>
	, document.querySelector('#root')
); 