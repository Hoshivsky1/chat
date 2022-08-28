import React from "react";
// import { useState, useRef } from "react";

function Header({searchValue, setSearchValue, userPicture, handleSignOut}) {

    const onChangeValue = (event) => {
        setSearchValue(event.target.value);
    }
    
    return (  
        <div className="header">
            <div className="header__block">
                <img
                    className="logo"
                    src={userPicture}
                    alt="logo"
                />
                <button className="header__signout" onClick={handleSignOut}>sign out</button>
            </div>
            <div className="search">
                <input
                    className="input"
                    onChange={onChangeValue}
                    type="text"
                    value={searchValue}
                    placeholder="Search chats"
                />
                <svg
                    className="icon"
                    height="52px"
                    id="Layer_1"
                    version="1.1"
                    viewBox="0 0 512 512"
                    width="512px"
                    xmlSpace="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <path d="M448.3,424.7L335,311.3c20.8-26,33.3-59.1,33.3-95.1c0-84.1-68.1-152.2-152-152.2c-84,0-152,68.2-152,152.2  s68.1,152.2,152,152.2c36.2,0,69.4-12.7,95.5-33.8L425,448L448.3,424.7z M120.1,312.6c-25.7-25.7-39.8-59.9-39.8-96.3  s14.2-70.6,39.8-96.3S180,80,216.3,80c36.3,0,70.5,14.2,96.2,39.9s39.8,59.9,39.8,96.3s-14.2,70.6-39.8,96.3  c-25.7,25.7-59.9,39.9-96.2,39.9C180,352.5,145.8,338.3,120.1,312.6z" />
                </svg>
            </div>
        </div>
    );
}

export default Header;