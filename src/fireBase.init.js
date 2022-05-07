// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDGTOwJ5BqadaXwcz7bNn4xTkCJagVFt4A',
  authDomain: 'big-store-6aa59.firebaseapp.com',
  projectId: 'big-store-6aa59',
  storageBucket: 'big-store-6aa59.appspot.com',
  messagingSenderId: '98189508923',
  appId: '1:98189508923:web:fd3b5d0940c9aa6e03f71e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
