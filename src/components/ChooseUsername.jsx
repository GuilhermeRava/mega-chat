import React from "react";

import en from "../i18n/en/en.json";

const ChooseUsername = ({ setCurrentUser, setShowChooseUsername }) => {
    const [error, setError] = React.useState(false);

    const inputRef = React.createRef();

    const handleUsername = () => {
        const username = inputRef.current.value;

        if(username.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        setCurrentUser(username);
        setShowChooseUsername(false);
    }

    return (
        <div className="choose-username-modal-wrapper">
           <div className="choose-username-modal-body">
                <p className="choose-username-modal-body-header">{en.chooseUsername}</p>
                <label htmlFor="username">{en.chooseUsernameUser.toUpperCase()}</label>
                <input id="username" ref={inputRef} placeholder={en.chooseUsernamePlaceholder} type="text"/>
                {error && <p className="error">{en.chooseUsernameError}</p>}
                <button onClick={handleUsername} className="cta-btn">{en.chooseUsernameBtnText.toUpperCase()}</button>
           </div>
        </div>
    )
}

export default ChooseUsername;