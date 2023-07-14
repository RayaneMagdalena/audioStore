// Styles
import styles from "./SignIn.module.css";
// Icon
import iconEmail from '../../../public/images/icon-email.svg';
import iconLock from '../../../public/images/icon-lock.svg';
// React e Router
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
// firebase
import {auth} from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const onLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed in
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
        type="text"
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

        <p className={styles.signUp}>
        Didn’t have any account? <Link to="/signup">Sign Up here</Link>
      </p>
      </form>

    </div>
  );
};

export default SignIn;

