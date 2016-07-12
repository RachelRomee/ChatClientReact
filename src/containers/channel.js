import React from 'react';
import Message from './message';
import MessageModel from '../models/MessageModel';

class Channel extends React.Component {
  constructor() {
    super();

    this.state = {
      messages: []
    };

    this.model = new MessageModel();
    this.model.subscribe(this.updateMessages.bind(this));
  }

  updateMessages() {
    this.setState({
      messages: this.model.resources
    });
  }

  // change props to state after creating updateMessages - where we set state
  render() {
    return (
      <div>
				{this.state.messages.map((message) => {
					// take all the properties from message (api) and put them in like that - so username, text etc
					// so message.js can use text, username etc because of ...message
					return <Message key={message._id} { ...message } />;
				})}
      </div>
    );
  }
}

export default Channel;
