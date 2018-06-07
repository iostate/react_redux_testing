import React from 'react'
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => {
	const string = 'The comment box component';
	return (
		<div>
			<CommentBox />
			<CommentList />
			{string}
		</div>
	);
};