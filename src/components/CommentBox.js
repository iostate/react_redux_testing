import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';



class CommentBox extends Component {
	state = { comment: ''};
	
	/**
	 * Updates the state of this component. 
	 * The folowing syntax is called a bound arrow function
	 * 
	 * Parameter is implicitly always the event object. 
	 */
	handleChange = (event) => {
		this.setState({comment: event.target.value});
	};

	handleSubmit = event => {
		event.preventDefault();

		// TODO - Call an action creator
		// And save the comment

		// Reset the input
		this.setState({comment: ''});

	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a Comment</h4>
				<textarea 
					onChange={this.handleChange}
					value={this.state.comment} 
				/>
				<div>
					<button>Submit Comment</button>
				</div>
			</form>
		);
	}
}

export default CommentBox;