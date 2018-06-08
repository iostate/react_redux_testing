import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { shallow } from 'enzyme';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

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

	// Expectation: CommentBox instance found

	// Wrapped version of our App component
	const wrapped = shallow(<App />);

	// found a CommentBox instance
	// find returns an array
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

// Ensure that an instance of CommentList is within the App component
it('shows a comment list', () => {
	const wrapped = shallow(<App />);

	expect(wrapped.find(CommentList).length).toEqual(1);
});