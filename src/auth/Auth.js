import { getAuth } from "firebase/auth";
import React , {useState, useEffect} from "react"
import app from "../firebase";

const AuthApp = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const handleLogin = () =>{
        
        

    }


    return(
        <div>

        </div>
    )
    
}

export default AuthApp;