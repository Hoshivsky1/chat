import React from "react";
import { useState, useRef } from "react";

const axios = require('axios');

function Send({value, setValue, setChuck}) {
    const inputRef = useRef();
    const onClickSend = () => {
        setValue('');
        inputRef.current.focus();

        axios
            .get('https://api.chucknorris.io/jokes/random')
            .then(response => {
                setTimeout(() => {
                    setChuck(response);
                  }, 4000)
            });
    }

    return (
        <div className="send">
            <div className="chat__send">
                <input
                    ref={inputRef}
                    onChange={(event) => setValue(event.target.value)}
                    value={value}
                    className="chat__send-input"
                    placeholder="Type your message"
                    type="text"
                />
                <button className="btn__send" onClick={onClickSend}>
                    <img
                        className="send-icon"
                        src="https://cdn-icons-png.flaticon.com/128/3106/3106794.png"
                        alt="send"
                    />
                </button>
            </div>
        </div>
    );
}

export default Send;
