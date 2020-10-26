import React from 'react'
import "./Sidebar.css"
import {Avatar,IconButton} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import RateReviewOurlinedIcon from "@material-ui/icons/RateReviewOutlined"

function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
              <Avatar />
           <div className="sidebar__input">
              <SearchIcon/>
            <input type="text" placeholder="Search"/>
            </div>
              <IconButton variant="outlined" className="sidebar__inputButton">
              <RateReviewOurlinedIcon/>
              </IconButton>
            </div>
            <div className="sidebar__chats"></div>
        </div>
    )
}

export default Sidebar
