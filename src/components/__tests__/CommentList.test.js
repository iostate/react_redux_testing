import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped; 
beforeEach(() => {

	
		// Used to pass data into the Root component,
		// which in turn gets access by CommentList
	
	const initialState = {
		comments: ['Comment 1', 'Comment 2']
	};
	wrapped = mount(
		<Root initialState={initialState}>
		{
			// How do I pass data to the CommentList component?
			// Data is passed into the CommentList component using 
			// initialState.
		}
			<CommentList />
		</Root>
	);
});

it('creates one LI per comment', () => {
	expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
	console.log(wrapped.render().text());
	expect(wrapped.render().text()).toContain('Comment 1');
	expect(wrapped.render().text()).toContain('Comment 2');
});