import React from 'react';

import MessagesList from "./components/MessagesList.jsx";
import SendMessage from "./components/SendMessage.jsx";
import ChooseUsername from "./components/ChooseUsername.jsx";

import messagesReducer from "./messagesReducer.js";

export const MsgsContext = React.createContext({
  messages: [],
});


function MegaChat({ MegaChatOptions }) {
  const { userId, fetchMessages, onNewMessage, sendMessage } = MegaChatOptions;

  const [showChooseUsername, setShowChooseUsername] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState('');

  const initialMsgsState = React.useContext(MsgsContext);
  const [stateMsgs, dispatchMsgReducer] = React.useReducer(messagesReducer, initialMsgsState);

  const chatRef = React.createRef();
  const scrollToBottomChat = () => {
    chatRef.current.scroll(0, chatRef.current.scrollHeight);
  }

  return (
    <div className="mega-chat">
      <MsgsContext.Provider value={{ userId, currentUser, fetchMessages, onNewMessage, sendMessage, stateMsgs, dispatchMsgReducer, scrollToBottomChat }}>
        {showChooseUsername && <ChooseUsername setCurrentUser={setCurrentUser} setShowChooseUsername={setShowChooseUsername} /> } 
        <MessagesList chatRef={chatRef} />
        <SendMessage />
      </MsgsContext.Provider>
    </div>
  );
}

export default MegaChat;
