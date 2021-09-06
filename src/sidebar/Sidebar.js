import React from 'react'
import "./Sidebar.css";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DonutLargeIcon from '@material-ui/icons/DonutLarge'
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';


function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <div className="sidebar_header_left">
                    <IconButton>
                        <Avatar ></Avatar>
                    </IconButton>
                </div>
                <div className="sidebar_header_right">
                    <IconButton>
                        <DonutLargeIcon></DonutLargeIcon>
                    </IconButton>
                    <IconButton>
                        <ChatIcon></ChatIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar_search">
                <div className="sidebar_search_container">
                    <SearchOutlined></SearchOutlined>
                    <input type="text"
                        placeholder="Cerca o inizia una nuova chat">
                    </input>
                </div>
            </div>
            <div>
            </div>
            <div className="sidebar_chat">
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>
                <SidebarChat></SidebarChat>              
            </div>
        </div>
    )

}
export default Sidebar;