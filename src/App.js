import React from 'react';
import Header from './containers/header';
import Channel from './containers/channel';
import MessageInput from './containers/message-input';
import SetUsername from './containers/set-username.js';
import Utils from './lib/Utils';

class App extends React.Component {
  constructor () {
    super();

    // get username from local storage so browser will remember. chat.currentuser because it has to be unique so it won't confuse with other apps
    this.utils = new Utils();
    let currentUser = this.utils.store("chat.currentUser");

    if (currentUser.length === 0) {currentUser = "guest"};
    console.log(currentUser);

    this.state= {
      messages: [],
      currentUser: currentUser
    };
  }

  setUsername(newUsername) {
    // set username in local storage so browser will remember
    this.utils.store("chat.currentUser", newUsername);
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
