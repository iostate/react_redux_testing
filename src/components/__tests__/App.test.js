import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
	const div = document.createElement('div');

	ReactDOM.render(<App />, div);

	// Expectation: The inner html of the div contains the string
	// 'The comment box component'
	// WRONG. accessing a component's properties from the parent component, App
	// expect(div.innerHTML).toContain('The comment box component');
	
	
	// RIGHT somethign like this, where we can verify that the parent
	// component contains an instance of CommentBox as a child
	// expect(div).toHaveAnInstanceOf(CommentBox);

	 

	ReactDOM.unmountComponentAtNode(div);
});