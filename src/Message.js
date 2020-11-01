import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Message.css"

const Message = forwardRef(
({ id,contents:{ timestamp,displayName,email,message,photo,uid }
}, ref
  ) =>  {

    const user = useSelector(selectUser)
    return (
        <div className={`message ${user.email === email && "message__sender"}`}>
        <Avatar className="margin__photo" src={photo}/>
        <p>{message}</p>
        <small>{new Date(timestamp?.toDate()).toLocalString()}</small>
            
        </div>
    );
})

export default Message
