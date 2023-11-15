import { useState } from "react"
import Welcome from "./Welcome"

function Login() {
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');
    const [remember, setRemember] = useState(false);

    const handleUserName = (e) => {
        setUserName(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRemember = (e) => {
        setRemember(e.target.checked)
    }
    const handleSubmit = (e) => {
        console.log(password);
        console.log(userName);
        console.log(remember);
    }
    return (
        <div>
            <label htmlFor="userName">Username: </label>
            <input type="text" value={userName} id="userName" onChange={handleUserName}/>

            <label htmlFor="password">Password: </label>
            <input type="password" value={password} id="password" onChange={handlePassword}/>

            <label htmlFor="">
                <input type="checkbox" checked={remember} onChange={handleRemember}/>
            </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login