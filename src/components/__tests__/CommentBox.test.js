import React from 'react';
import { mount } from 'enzyme'; // Enzyme's FullDOM Rendering Module
import CommentBox from 'components/CommentBox';


// connect Redux to our test component
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'reducers';

// Create a file wide reference to CommentBox component
let wrapped;
beforeEach(() => {
	wrapped = mount(
		<Provider store={createStore(reducers, {})}>
			<CommentBox />
		</Provider>
	);
});

afterEach(() => {
	wrapped.unmount();	
});

it('has a text area and a button', () => {
	// find a textarea element
	expect(wrapped.find('textarea').length).toEqual(1); 
	// find a button element
	expect(wrapped.find('button').length).toEqual(1); 
});

// describe allows us to group tests together
// allows us to use code reuse features such as beforeEach() and afterEach()
describe('the text area', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: {value: 'new comment'}
		});
		wrapped.update();
	});

	it('has a text area that users can type in', () => {
		// Ensure that the fake event's value is correct
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('when form is submitted, text area gets emptied', () => {
				// Ensure that the fake event's value is correct
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
		
		// simulate the submit event on the form
		wrapped.find('form').simulate('submit');
		wrapped.update();

		// check the value of the textarea and assert that it is empty
		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});