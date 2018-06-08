import React from 'react';
import { mount } from 'enzyme'; // Enzyme's FullDOM Rendering Module
import CommentBox from 'components/CommentBox';

// Create a file wide reference to CommentBox component
let wrapped;
beforeEach(() => {
	wrapped = mount(<CommentBox />);
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

it('has a text area that users can type in', () => {
	wrapped.find('textarea').simulate('change', {
		target: {value: 'new comment'}
	});
	wrapped.update();

	// Ensure that the fake event's value is correct
	expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('when form is submitted, text area gets emptied', () => {
	wrapped.find('textarea').simulate('change', {
		target: {value: 'new comment'}
	});
	wrapped.update();

	// Ensure that the fake event's value is correct
	expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	
	// simulate the submit event on the form
	wrapped.find('form').simulate('submit');
	wrapped.update();

	// check the value of the textarea and assert that it is empty
	expect(wrapped.find('textarea').prop('value')).toEqual('');
});