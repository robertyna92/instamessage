import React from 'react'
import "./Chat.css"
import {IconButton} from "@material-ui/core"
import SearchOutlined from "@material-ui/icons/SearchOutlined"
import AttachFile from "@material-ui/icons/AttachFile"
import MoreVert from "@material-ui/icons/MoreVert"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    return (
        <div className="chat">
            <div className="chat_header">

                <div className="chat_header_info">
                <h3>Chat Name </h3>
                <p> Visto l'ultima volta...</p>
                </div>

            <div className="chat_header_right">
            <IconButton>
                <SearchOutlined/>
            </IconButton>
            <IconButton>
                <AttachFile/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
            </div>
            </div>
            <div className="chat_body">

                <p className="chat_message">
                <span className="chat_name"> Jack </span>
                message
                <span className="chat_timestamp"> {new Date().toUTCString() } </span>
                </p>

                <p className="chat_message chat_receiver">
                <span className="chat_name"> Jack </span>
                message
                <span className="chat_timestamp"> {new Date().toUTCString() } </span>
                </p>
                <p className="chat_message">
                <span className="chat_name"> Jack </span>
                message
                <span className="chat_timestamp"> {new Date().toUTCString() } </span>
                </p>

                <p className="chat_message chat_receiver">
                <span className="chat_name"> Jack </span>
                message
                <span className="chat_timestamp"> {new Date().toUTCString() } </span>
                </p>


            </div>
            <div className="chat_footer">
                <IconButton>
                    <InsertEmoticonIcon/>
                </IconButton>

                <form>
                    <input
                     placeholder="Scrivi un messaggio..."
                     type="text"/>
                </form>
                <IconButton>
                <MicIcon/>
                </IconButton>
            </div>

        </div>

    )

}
export default Chat;