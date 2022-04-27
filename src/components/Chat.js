import React from 'react'
import SignOut from './SignOut'
import { useState, useEffect, useRef } from 'react'
import { db, auth } from '../firebase'
import SendMessage from './SendMessage'

function Chat() {
  const scroll = useRef()
  const [msg, setmsg] = useState([])
  useEffect(() => {
    db.collection('chat-messages')
      .orderBy('createdAt')
      .limit(30)
      .onSnapshot((snapshot) => {
        setmsg(snapshot.docs.map((message) => message.data()))
      })
  }, [])

  return (
    <>
      <div className='asd'>
        <SignOut />
        {msg.map(({ uid, text, photoURL }) => {
          return (
            <div className='msgs'>
              <div
                key={uid}
                className={`msg ${
                  uid === auth.currentUser.uid ? 'sent' : 'received'
                }`}
              >
                <img src={photoURL} alt='USER' />
                <p>{text}</p>
              </div>
            </div>
          )
        })}
        <SendMessage scroll={scroll} />
        <div ref={scroll}></div>
      </div>
    </>
  )
}

export default Chat
