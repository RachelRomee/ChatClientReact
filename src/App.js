import React from 'react';
import Header from './containers/header';
import Channel from './containers/channel';
import MessageInput from './containers/message-input';
import SetUsername from './containers/set-username.js';

class App extends React.Component {
  constructor () {
    super();

    this.state= {
      messages: [],
      currentUser: "guest"
    };
  }

  setUsername(newUsername) {
    this.setState({
      currentUser: newUsername
    });
  }

  render() {
      return (
        <div>
          <Header appName="SLAKO"/>
          <SetUsername
            username={ this.state.currentUser }
            onChange={this.setUsername.bind(this)} />
          <Channel messages={ this.state.messages } />
          <MessageInput username={ this.state.currentUser } />
        </div>
      );
    }
  }

export default App;
