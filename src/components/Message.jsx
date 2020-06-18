import React from "react";

import { MsgsContext } from "../MegaChat.js";

const Message = ({ author, body, timestamp }) => {
    const { currentUser } = React.useContext(MsgsContext);

    const isCurrentUser = author === currentUser;

    return (
        <div className={`message-balloon-wrapper ${isCurrentUser ? 'right-balloon' : ''}`}>
            <div className="message-author">
                <img src="https://via.placeholder.com/150" alt="message author"/>
                <p className="message-author-name"> 
                    {author}
                </p>
            </div>
            <div className="message-balloon">
                <p className="message-body" dangerouslySetInnerHTML={{__html: body}} />
                <p className="message-timestamp">
                    {timestamp}
                </p>
            </div>
        </div>
    )
}

export default Message;