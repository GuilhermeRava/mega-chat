function messagesReducer(state, action) {
    switch(action.type) {
        case "ADD_MSG": {
            const newMessage = action.payload.message
            return {
                messages: [...state.messages, newMessage]
                
            }
        }
        case "ADD_MSGS": {
            const newMessages = action.payload.messages
            return {
                messages: [...state.messages, ...newMessages]
            }
        }
        default:
            return state;
    }
}

export default messagesReducer