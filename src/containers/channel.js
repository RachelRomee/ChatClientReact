import React from 'react';
import Message from './message';

class Channel extends React.Component {

  render() {
    return (
      <div>
				{this.props.messages.map((message) => {
					// take all the properties from message (api) and put them in like that - so username, text etc
					// so message.js can use text, username etc because of ...message
					<Message { ...message } />;
				})}
      </div>
    );
  }
}

export default Channel;
