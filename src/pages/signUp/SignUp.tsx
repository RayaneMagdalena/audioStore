// Styles
import styles from "./SignUp.module.css";
// Icon
import iconEmail from '../../../public/images/icon-email.svg';
import iconLock from '../../../public/images/icon-lock.svg';
import google from "../../../public/images/google.svg";
import facebook from "../../../public/images/facebook-auth.svg";
import apple from "../../../public/images/apple.svg";
// React e Router
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
// firebase
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {auth, provider, providerFacebook} from '../../services/firebase';


const SignUp = () => {
    const navigate = useNavigate ();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [errorMessage, setErrorMessage] = useState<string>("");
    
     // SignUp with Email and Password
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            console.log(user);
            navigate("/home")
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);

            let systemErrorMessage

            if(error.message.includes("Error (auth/email-already-in-use)")) {
              systemErrorMessage = "User already registered";
            } else if (error.message.includes("Password should be at least 6 characters (auth/weak-password)")) {
              systemErrorMessage = "Password must be at least 6 characters long";
            } 
            else {
              systemErrorMessage = "An error occurred, please try again later"
            }
            
            setErrorMessage(systemErrorMessage);

        });
    }

 // Login with Google
 const handleClickGoogle = (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(user);
    navigate("/home")
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(errorCode, errorMessage, email, credential);
  });
}

// Login with Facebook
const handleClickFacebook = (e) => {
  e.preventDefault(); 
  signInWithPopup(auth, providerFacebook)
.then((result) => {
  const user = result.user;

  const credential = FacebookAuthProvider.credentialFromResult(result);
  const accessToken = credential.accessToken;
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.customData.email;
  const credential = FacebookAuthProvider.credentialFromError(error);
});
}
    

  return (
    <div className={styles.signInContainer}>
      <h1>Audio</h1>

      <p className={styles.subtitle}>It's modular and designed to last</p>

      <form
      className={styles.signInform}>

        <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value)
                    }}
        className={styles.formInput} />

        <img
        src={ iconEmail }
        alt=""
        className={styles.iconEmail} />

        <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className={styles.formInput} />

        <img
        src={ iconLock }
        alt=""
        className={styles.iconLock} />

        

        <button 
       type="submit"
       onClick={onSubmit}
        className={styles.button}>
          Sign Up
        </button>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <div className={styles.buttonContainer}>
        <button>
          <img 
          src={apple} 
          alt=""
          className={styles.buttonIcon}
          />
        </button>

        <button
        onClick={handleClickFacebook}
        >
          <img 
          src={facebook} 
          alt=""
          className={styles.buttonIcon}
          />
        </button>
 

        <button
        onClick={handleClickGoogle}
        >
          <img 
          src={google} 
          alt=""
          className={styles.buttonIcon}
          />
        </button>
        
    </div>


        <p className={styles.signUp}>
        If you have an account? <Link to="/">Sign In here</Link>
      </p>

      
      </form>

      

    </div>
  );
};

export default SignUp;

