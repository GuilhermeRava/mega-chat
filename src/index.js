import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MegaChat from './MegaChat';

import DataMock from "./data/mock.json";

const MegaChatOptions = {
  userId: 'UserB',
  fetchMessages() {
    console.log('fetching messsages....')

    // mock setup
    DataMock.messages.forEach( msg => msg.author = MegaChatOptions.userId);

    // send mock data to components...
    return DataMock.messages;
  },
  onNewMessage(message) {
    console.log('new messsage received....')

    // TODO: integrate with BE...
    return message;
  },
  sendMessage(message) {
    console.log('sending messsage....')

    // TODO: integrate with BE...
    return message;
  },
}

ReactDOM.render(
  <React.StrictMode>
    <MegaChat MegaChatOptions={MegaChatOptions} />
  </React.StrictMode>,
  document.getElementById('root')
);
