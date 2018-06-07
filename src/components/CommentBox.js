import React from 'react';

export default () => {
	const string = 'The comment box component';
	console.log(string.length);
	return (
		<div>{string}</div>
	);
}