import React from 'react';
import Header from './containers/header';
import Channel from './containers/channel';
import MessageInput from './containers/message-input';

class App extends React.Component {
  constructor () {
    super();

    this.state= {
      messages: [],
      currentUser: "guest"
    };
  }

render() {
    return (
      <div>
        <Header appName="SLAKO"/>
        <Channel messages={ this.state.messages }/>
        <MessageInput username={ this.state.currentUser } />
      </div>
    );
  }
}

export default App;
