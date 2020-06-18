import React from "react"

import { MsgsContext } from "../MegaChat.js";

import Message from "./Message";

const MessagesList = ({ chatRef }) => {
    const { fetchMessages, dispatchMsgReducer, stateMsgs } = React.useContext(MsgsContext);

    React.useEffect(() => {
        const fetchMessagesWrapper = async () => {
            const data = await fetchMessages();
            const reducer = {
                type: 'ADD_MSGS',
                payload: {
                    messages: data
                }
            }
            dispatchMsgReducer(reducer);
        }
        fetchMessagesWrapper();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="messages-list" ref={chatRef} >
            {
                stateMsgs.messages.map( (msg, index) => (
                    <Message key={index} {...msg} />
                ))
            }
        </div>
    );
}

export default MessagesList
