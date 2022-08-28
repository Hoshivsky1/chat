import React from "react";
import img1 from "../../assets/img/1.jpg";
import img2 from "../../assets/img/2.jpg";
import img3 from "../../assets/img/3.jpg";
import img4 from "../../assets/img/4.jpg";
import img5 from "../../assets/img/5.jpg";

function Chats({searchValue, setChat}) {
    let now = new Date();
    let date = now.toDateString();
    const chats = [
        {id: 0, name: "Alice Freeman", lastMessage:'You are thw worst!', date: date, img: img1 },
        {id: 1, name: "Josefina", lastMessage:'We are losing money Quick!', date: date, img: img3 },
        {id: 2, name: "Velazquez", lastMessage:'Quickly come to the meeti...', date: date, img: img2 },
        {id: 3, name: "Barrera", lastMessage:'Nice to meet you', date: date, img: img4 },
        {id: 4, name: "Natalia", lastMessage:'Hahahah cool', date: date, img: img5 },
    ]

    return (
        <div className="chats">
            <div className="chats__title">
                <h1>Chats</h1>
            </div>
            <div className="chats__items">
                {chats.filter((item, _, arr) => item.name.indexOf(searchValue) ? null: arr  )
                    .map((item) => {
                        return (
                            <div 
                                className="chats__item" 
                                key={item.id}
                                onClick={() => setChat(item)}>
                                <div className="persone">
                                    <img className="logo" src={item.img} alt="logo" />
                                    <div className="persone__text">
                                        <div className="persone__name">
                                            <h2>{item.name}</h2>
                                        </div>
                                        <div className="persone__subtitle">
                                            {item.lastMessage}
                                        </div>
                                    </div>
                                    <div className="persone__date">{item.date}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Chats;
