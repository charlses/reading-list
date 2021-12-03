import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCCPT9ifLMwmH87k4uZjJIFAJDQeoUoXZQ',
  authDomain: 'todos-work.firebaseapp.com',
  projectId: 'todos-work',
  storageBucket: 'todos-work.appspot.com',
  messagingSenderId: '666844278182',
  appId: '1:666844278182:web:4d9960a11360653a837367'
}

// ! Init Firebase
initializeApp(firebaseConfig)

// ! Init Firestore
const db = getFirestore()

// ! Init Firebase Authentication

const auth = getAuth()

export { db, auth }
