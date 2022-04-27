import React from 'react'
import firebase from 'firebase'
import { auth } from '../firebase.js'
// import { Button } from '@material-ui/core'

function SignIn() {
  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }

  function signIn() {
    auth.signInAnonymously()
  }
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <button
        style={{
          padding: '30px',
          fontSize: '20px',
          borderRadius: '0',
          fontWeight: '600',
        }}
        onClick={signInWithGoogle}
      >
        Sign In With Google
      </button>

      <button
        style={{
          padding: '30px',
          fontSize: '20px',
          borderRadius: '0',
          fontWeight: '600',
        }}
        onClick={signIn}
      >
        Just Sign In
      </button>
    </div>
  )
}

export default SignIn
