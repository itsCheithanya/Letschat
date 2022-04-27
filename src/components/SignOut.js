//import { IconButton } from 'material-ui'
import React from 'react'
import { auth } from '../firebase'

function SignOut() {
  return <button onClick={() => auth.signOut()}>SignOut</button>
}

export default SignOut
