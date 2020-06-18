import React from "react"

import en from "../i18n/en/en.json";

import { MsgsContext } from "../MegaChat.js";

const SendMessage = (props) => {
    const [messageBody, setMessageBody ] = React.useState("");

    const { dispatchMsgReducer, sendMessage, currentUser, scrollToBottomChat, stateMsgs } = React.useContext(MsgsContext);

    const sendMessageWrapper = () => {

        if(messageBody.trim() === '') return;

        const message = {
            author: currentUser, 
            timestamp: new Date().toLocaleString(),
            body: messageBody
        }
        const reducer = {
            type: 'ADD_MSG',
            payload: {
                message,
            },
        };

        setMessageBody('');
        
        dispatchMsgReducer(reducer);
        sendMessage(message);
    }

    // used to scroll to bottom when we receive/send a message
    React.useEffect( () => {
        scrollToBottomChat();
        // eslint-disable-next-line
    }, [stateMsgs.messages])

    return (
        <div className="send-message">
           <textarea
                className="msg-input"
                placeholder={en.sendMessagePlaceholder}
                value={messageBody} 
                onChange={(event) => setMessageBody(event.target.value)}
           />
           <button
                className="cta-btn"
                onClick={sendMessageWrapper}
           >
               {en.sendMessageBtn.toUpperCase()}
           </button>
        </div>
    );
}

export default SendMessage
