import React from 'react';

class SetUsername extends React.Component {
	onSubmit(event){
		event.preventDefault();

		let newUser = this.refs.newUsername.value;
		console.log("Registering as: ", newUser);

		this.props.onChange(newUser);
	}

	renderUserForm() {
		return (
			<form onSubmit={ this.onSubmit.bind(this) } >
				<input ref="newUsername" type="text" placeholder="what's your name?" />
				<input type="submit" value="Register" />
			</form>
		);
	}

	renderGreeting() {
		return (
			<div>
				<p>{ this.props.username}</p>
			</div>
		);
	}

  render() {
			if (this.props.username == "guest") {
				return this.renderUserForm();
			} else {
				return this.renderGreeting();
			};
  }
}

export default SetUsername;
