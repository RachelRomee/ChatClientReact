import React from 'react';
import TimeAgo from 'react-timeago';

class Message extends React.Component {

  render() {
    return (
      <div>
        <p>{ this.props.username }</p>
				<p>{ this.props.text }</p>
        <p><TimeAgo date={ this.props.createdAt } /></p>
      </div>
    );
  }
}

export default Message;
