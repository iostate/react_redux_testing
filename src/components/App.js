import React from 'react'
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

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