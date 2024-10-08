import React from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import "../Styling/home.css"
import { GoogleLogin } from '@react-oauth/google';
// import { useGoogleOAuth } from '@react-oauth/google'; 
// import { GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch,useSelector } from 'react-redux';
import { selectSignedIn,setSignedIn, setUserData } from '../Feature/userSlice';

const Homepage = () => {

    const isSignedIn = useSelector(selectSignedIn);
    const dispatch = useDispatch();
    const login =(response)=>{
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj))
    }
  return (
    <div className='home__page' style={{display:isSignedIn ? "none" : ""}}>
       {!isSignedIn ? (
        <div className='login__message'>
            <h2>📗</h2>
            <h1>A Readers favourite place!</h1>
            <p>
              we provide high quality online resource for reading blogs.Just sign up and start reading some quality blogs.
            </p>
            <GoogleOAuthProvider clientId="669215851650-rgm45n90u355orb38b9osmsqpev1sooo.apps.googleusercontent.com">
              <GoogleLogin 
                  clientId="669215851650-rgm45n90u355orb38b9osmsqpev1sooo.apps.googleusercontent.com"
                  render={(renderProps)=>(
                      <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className='login__button'
                      >
                          Login with Google
                      </button>
                      
                  )}
                  onSuccess={login}
                  onFailure={login}
                  isSignedIn={true}
                  cookiePolicy={"single_host_origin"}
              />  
           </GoogleOAuthProvider>
            
        </div>
       ):
       ("")
       
       }
    </div>
  )
}


// const Homepage = () => {
//     const isSignedIn = useSelector(selectSignedIn);
//     const dispatch = useDispatch();

//     // Use the useGoogleOAuth hook to handle Google OAuth
//     const { signIn, signOut, isFetching, error, user } = useGoogleOAuth({
//         clientId : "669215851650-rgm45n90u355orb38b9osmsqpev1sooo.apps.googleusercontent.com", // Replace with your actual client ID
//         onSuccess: (response) => {
//             console.log(response);
//             dispatch(setSignedIn(true));
//             dispatch(setUserData(response.profileObj));
//         },
//         onFailure: (error) => {
//             console.error("Google sign-in failed:", error);
//         },
//     });

//     return (
//         <div className='home__page' style={{ display: isSignedIn ? "none" : "" }}>
//             {!isSignedIn ? (
//                 <div className='login__message'>
//                     <h2>📗</h2>
//                     <h1>A Readers favourite place!</h1>
//                     <p>
//                         We provide high quality online resources for reading blogs. Just sign up and start reading some quality blogs.
//                     </p>
//                     {/* Render the Google sign-in button */}
//                     <button
//                         onClick={signIn}
//                         disabled={isFetching}
//                         className='login__button'
//                     >
//                         {isFetching ? "Signing In..." : "Login with Google"}
//                     </button>
//                 </div>
//             ) : null}
//         </div>
//     );
// };

export default Homepage