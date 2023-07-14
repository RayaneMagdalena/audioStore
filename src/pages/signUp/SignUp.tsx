// Styles
import styles from "./SignUp.module.css";
// Icon
import iconEmail from '../../../public/images/icon-email.svg';
import iconLock from '../../../public/images/icon-lock.svg';
// React e Router
import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
// firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../services/firebase';


const SignUp = () => {
    const navigate = useNavigate ();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/home")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }

  
  return (
    <div className={styles.signInContainer}>
      <h1>Tela de signUp</h1>

      <p className={styles.subtitle}>CADASTRE-SE</p>

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
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className={styles.formInput} />

        <img
        src={ iconLock }
        alt=""
        className={styles.iconLock} />

        <p>Forgot Password</p>

        <button 
       type="submit"
       onClick={onSubmit}
        className={styles.button}>
          Sign Up
        </button>

        <p className={styles.signUp}>
        Didn’t have any account? <Link to="/">Sign In here</Link>
      </p>
      </form>

      

    </div>
  );
};

export default SignUp;

