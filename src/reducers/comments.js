import { SAVE_COMMENT } from 'actions/types';

/**
 * 
 * @param {*} state Array of Strings (since the comments are Strings)
 * @param {*} action 
 */
export default function(state = [], action) {
	switch (action.type) {
		case SAVE_COMMENT:
			return [...state, action.payload];
		default:
			return state;
	}
}