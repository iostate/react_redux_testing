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