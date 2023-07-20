
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";


// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyBSf4sXN5Ga11RbJa7gPJ-zUwWzqDszU8M",
//   authDomain: "audio-6294d.firebaseapp.com",
//   projectId: "audio-6294d",
//   storageBucket: "audio-6294d.appspot.com",
//   messagingSenderId: "856451492707",
//   appId: "1:856451492707:web:2454dda39837d6942b0156"
// })

// export const auth = getAuth(firebaseApp)
// export default firebaseApp


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseApp = initializeApp({
  apiKey: "AIzaSyBSf4sXN5Ga11RbJa7gPJ-zUwWzqDszU8M",
  authDomain: "audio-6294d.firebaseapp.com",
  projectId: "audio-6294d",
  storageBucket: "audio-6294d.appspot.com",
  messagingSenderId: "856451492707",
  appId: "1:856451492707:web:2454dda39837d6942b0156"
})

export const auth = getAuth(firebaseApp)
export const provider = new GoogleAuthProvider()
export default firebaseApp