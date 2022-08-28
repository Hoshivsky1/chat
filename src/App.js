import Header from './components/Header/Header';
import Chats from './components/Chats/Chats';
import Chat from './components/Chat/Chat';
import AuthPage from './pages/AuthPage';

import { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode';

import './scss/main.scss'

function App() {
    const [searchValue, setSearchValue] = useState('');
    const [chat, setChat] = useState({id: 0, name: 'Alice Freeman', lastMessage: 'You are thw worst!', date: 'Sun Aug 28 2022', img: '/static/media/1.03e2d308c0c95a4df6e3.jpg'})
    const [ user, setUser ] = useState({})

    function handleCallbackResponse(response) {
        console.log('Encoded JWT ID token: ' + response.credential);
        var userObject = jwt_decode(response.credential);
        setUser(userObject);
        document.getElementById('signInDiv').hidden = true;
    }

    function handleSignOut() {
        setUser({});
        document.getElementById('signInDiv').hidden = false;
    }

    useEffect(() => {
        /* global google */ 
        google.accounts.id.initialize({
            client_id: '166955284676-svat31n2on5cihhc62q72e7l8lpjsis7.apps.googleusercontent.com',
            callback: handleCallbackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme: 'outline', size: 'large'}
        );
        // google.accounts.id.prompt();
    }, []);
    
    return (
        <div className="wrapper">
                {/* auth button */}
                <div id="signInDiv" onClick={handleSignOut}></div>
                { Object.keys(user).length !== 0 &&
                    <div className="block">
                    <div className="block__left">
                        <Header 
                            searchValue={searchValue} 
                            setSearchValue={setSearchValue}
                            userPicture={user.picture}
                            handleSignOut={handleSignOut}/>
                        <Chats setChat={setChat} searchValue={searchValue}/>
                    </div>
                    <div className="block__right">
                        <Chat
                            chat={chat}/>
                    </div>
                </div>
                }
        </div>
    );
}

export default App;
