import React from 'react'
import { Avatar } from '@material-ui/core';
import "./Login.css";
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';

function Login() {
    return (
        <div className="login_container">
            <div className="login_container_text">
                <h1> Sign In to</h1>
                <h1> MessageInst</h1>
                <div className="login_container_header">
                    <Avatar src="https://www3.varesenews.it/immagini_articoli/201301/messenger.jpg"></Avatar>
                    <div className="login_container_header_login ">
                        <input type="text"
                            placeholder="enter yor email">
                        </input>
                    </div>
                    <div className="login_container_header_password ">
                        <input type="text"
                            placeholder="enter yor password">
                        </input>
                    </div>
                    <a href="#"> Password dimenticata? </a>
                    <p> Accedi come <select>
                        <option>Disponibile</option>
                        <option>Occupato</option>
                        <option>Invisibile</option>
                    </select></p>
                </div>
            </div>
        </div>
    )
}

export default Login;