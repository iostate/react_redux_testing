import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';
import comments from '../comments';

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

// Author does not believe that writing tests for 
// unknown action types is useful. Believes it is 
// more useful to write tests that the reducer is 
// more likely to actually encounter.
it('handles action with unknown type', () => {
	const newState = commentsReducer([], {type: 'ASDASDDAS'});
	expect(newState).toEqual([]);
});