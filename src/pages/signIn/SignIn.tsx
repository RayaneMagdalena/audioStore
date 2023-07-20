// Styles
import styles from "./SignIn.module.css";
// Icon
import iconEmail from '../../../public/images/icon-email.svg';
import iconLock from '../../../public/images/icon-lock.svg';
// Icon Social Midia
import google from '../../../public/images/google.svg';
import facebook from '../../../public/images/facebook-auth.svg';
import apple from '../../../public/images/apple.svg';
// React e Router
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

// firebase
import {auth, provider} from '../../services/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

const SignIn = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
       
    // Login with Email and Password
    const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          const user = userCredential.user;
          navigate("/home")
          console.log(user);
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
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
 

  return (
    <div className={styles.signInContainer}>
      <h1>Audio</h1>

      <p className={styles.subtitle}>It's modular and designed to last</p>

      <form className={styles.signInform}>

        <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.formInput} />

        <img
        src={ iconEmail }
        alt=""
        className={styles.iconEmail} />

        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.formInput} />

        <img
        src={ iconLock }
        alt=""
        className={styles.iconLock} />

        <p>Forgot Password</p>

        <button 
       onClick={onLogin}
        className={styles.button}>
          Sign In
        </button>

              <div className={styles.buttonContainer}>
        <button>
          <img 
          src={apple} 
          alt=""
          className={styles.buttonIcon}
          />
        </button>

        <button>
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
        Didn’t have any account? <Link to="/signup">Sign Up here</Link>
      </p>
      </form>

    </div>
  );
};

export default SignIn;

