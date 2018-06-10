import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
	// Create a fake action to push 
	const action = {
		type: SAVE_COMMENT,
		payload: 'New Comment'
	};

	// store new state after running it through the reducer
	const newState = commentsReducer([], action);

	// test new state
	expect(newState).toEqual(['New Comment']);
});