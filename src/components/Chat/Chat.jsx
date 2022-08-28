import React from "react";
import Send from "../Send/Send";
import { useState, } from 'react'

function Chat({chat}) {
    const [value, setValue] = useState('');
    const [chuck, setChuck] = useState({});
    
    const chats = [
        {id: 0, message: 'You are thw worst!',messageIm:false, time: '4/22/17, 4:10 AM'},
        {id: 1, message: 'We are losing money Quick!', messageIm: 'Oh no', time: '4/22/17, 4:10 AM'},
        {id: 2, message: 'Quickly come to the meeting rom 1B, we have a big server issue', messageIm: 'Okey im run', time: '4/22/17, 4:10 AM'},
        {id: 3, message: 'Hi bro!', messageIm: 'hi sis!', time: '4/22/17, 4:10 AM'},
        {id: 4, message: 'What is your name', messageIm: 'Maxim, and you ?',  time: '4/22/17, 4:10 AM'},
    ]

    return (
        <div className="chat">
            <div className="chat__account">
                <img
                    className="logo"
                    src={chat.img}
                    alt="logo"
                />
                <div className="chat__name">{chat.name}</div>
            </div>
            { chats[chat.id].id === chat.id ?
                    <div className="chat__messager">
                        <div className="chat__messager-your">
                            <img
                                className="logo"
                                src={chat.img}
                                alt="logo"
                            />
                            <div className="message__your">{chats[chat.id].id === chat.id ? chats[chat.id].message: null}</div>
                            <div className="message__date-you">4/22/17, 4:10 AM</div>
                        </div> 
                        {typeof chats[chat.id].messageIm === 'string' ?
                                 <div  className="chat__messager-my">
                                 <div className="message__my">{chats[chat.id].messageIm}</div>
                                 <div className="message__date-my">4/22/17, 4:10 AM</div>
                             </div> 
                             
                            : 
                            null
                            
                        }
                        {
                            chuck.status === 200 ? 
                                <div className="chat__messager-your">
                                    <img
                                        className="logo"
                                        src={chat.img}
                                        alt="logo"
                                    />
                                    <div className="message__your">{chats[chat.id].id === chat.id ? chuck.data.value : null}</div>
                                    <div className="message__date-you">4/22/17, 4:10 AM</div>
                                </div> 
                                : null
                        } 
                        
                     </div>
                     :null
            }       
            <Send value={value} setValue={setValue} setChuck={setChuck} />
        </div>
    );
}

export default Chat;

