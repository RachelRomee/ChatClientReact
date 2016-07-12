import React from 'react';

class MessageInput extends React.Component {

	sendMessage() {
		console.log("send all the messages!");
	}

  render() {
    return (
      <div>
				<form onSubmit={ this.sendMessage.bind(this) }>
					<textarea ref="newMessage" placeholder="type here..."></textarea>
					<input type="submit" value="Send" />
				</form>
      </div>
    );
  }
}

export default MessageInput;
