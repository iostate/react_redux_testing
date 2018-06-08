import { combineReducers } from 'redux';
import CommentsReducer from 'reducers/reducer_comments';

/* 
	// One way to export the rootReducer
	const rootReducer = combineReducers({
		comments: CommentsReducer
	});

	export default rootReducer;
*/

export default combineReducers({ 
	comments: CommentsReducer 
});