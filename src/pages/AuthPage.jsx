// import { useEffect, useState } from "react";
// import jwt_decode from 'jwt-decode';
// // import "../scss/authpage.scss";



// function AuthPage() {
//     const [ user, setUser ] = useState({m:'a'})

//     function handleCallbackResponse(response) {
//         console.log('Encoded JWT ID token: ' + response.credential);
//         var userObject = jwt_decode(response.credential);
//         // console.log(userObject)
//         setUser(userObject);
//         document.getElementById('signInDiv').hidden = true;
//     }

//     function handleSignOut() {
//         setUser({});
//         document.getElementById('signInDiv').hidden = false;
//     }

//     useEffect(() => {
//         /* global google */ 
//         google.accounts.id.initialize({
//             client_id: '166955284676-svat31n2on5cihhc62q72e7l8lpjsis7.apps.googleusercontent.com',
//             callback: handleCallbackResponse
//         });

//         google.accounts.id.renderButton(
//             document.getElementById('signInDiv'),
//             {theme: 'outline', size: 'large'}
//         );

//         // google.accounts.id.prompt();
//     }, []);
//     console.log(user)
//     console.log(user === 1 )
//     return (
//         <div className={`auth ${user === 0 ? "hidden" : ''}`}>
//             <div className="auth__block">
//                 <div>
//                     <h1 className="auth__title">Sign in with Google</h1>
//                 </div>
//                 <div id="signInDiv"></div>
//                 { Object.keys(user).length != 0 &&
//                     <button onClick={(e) => handleSignOut(e)}>Sign out</button>
//                 }
                
//                 { user && 
//                         <div>
//                             {user.picture === undefined ? null : <img src={user.picture} alt='img'/>}
//                             <h3>{user.name}</h3>
//                         </div>
//                     }
//             </div>  
//         </div>
//     );
// }

// export default AuthPage;
