import React, {useState} from 'react'
import {useHMSStore, selectBroadcastMessages, useHMSActions} from '@100mslive/react-sdk'
import { MdSend } from "react-icons/md";
export default function Message() {

  const [chatContent, setChatContent] = useState("")
  const hmsActions = useHMSActions()

    const handleChat = (e) =>{
        setChatContent(e.target.value)
    }
    const handleChatSubmit = () =>{
        hmsActions.sendBroadcastMessage(chatContent)

        setChatContent("")
    }

    const broadcastMessages = useHMSStore(selectBroadcastMessages)

    return (
      <div className="message-container">
        <h2 style={{textAlign: 'left', color: 'black', marginTop: '-1rem'}}>Live chat</h2>
        <div className="chat-area">

        {broadcastMessages.map(msg =>{
          const {message, senderName} = msg
              
              return(

                <div key={msg.id}>
                    <p style={{color: 'white'}}> <span style={{fontStyle: 'italic'}}>{senderName }:</span> {message}</p>
                </div>
              )
              
          })}
        </div>

      
      <div className="chat mt-10" >
        <input 
        placeholder='write chat here' 
        value={chatContent}
        onChange={handleChat}
        >

        </input>
        <button type='submit' onClick={handleChatSubmit}><MdSend/></button>
      </div>
    </div>
  )
}