import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// Before every expectation block within this file, run this code
// Increases code reuse
let wrapped; // initialize the variable outside of the fn in order to allow for global scoping
beforeEach(() => {
	wrapped = shallow(<App />);
});

// Ensure that an instance of CommentBox is within the App component
it('shows a comment box', () => {

	/*
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
	*/

	// found a CommentBox instance
	// find returns an array
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

// Ensure that an instance of CommentList is within the App component
it('shows a comment list', () => {
	expect(wrapped.find(CommentList).length).toEqual(1);
});