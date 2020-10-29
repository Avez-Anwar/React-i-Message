import React from 'react'
import { useState } from 'react';
import "./Chat.css"
import MicNoneIcon from '@material-ui/icons/MicNone';
import { IconButton } from '@material-ui/core';

function Chat() {

  const [input,setInput] = useState(" ")

   const handler = (e) =>{
    e.preventDefault();
    setInput(" ")
  }
    return (
        <div className="chat">
          <div className="chat__header">
            <h4>  
             To:<span className="chat__name">Chat Channel</span>
            </h4>  
           <strong> Details</strong>
          </div>

          <div className="chat__messages">
          <h3>This is a Message</h3>
          <h3>This is a Message</h3>
          <h3>This is a Message</h3>
          </div>

          <div className="chat__input">
          <form>
          <input 
           onChange = {e => setInput(e.target.value)}
           type="text" 
           value={input}
           placeholder="iMessage"/>
          <button onClick={handler}>Send Message</button>
          </form>
          <IconButton>
          <MicNoneIcon className="chat__mic"/>
          </IconButton>
          </div>

        </div>
    )
}

export default Chat
