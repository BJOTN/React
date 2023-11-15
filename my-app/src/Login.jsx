import { useState } from "react"
import Welcome from "./Welcome"

function Login({ onLogin }) {
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [remember, setRemember] = useState(false);

    const handleUserName = (e) => {
        setUserName(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleRemember = (e) => {
        setRemember(e.target.checked);
    };

    const handleLoginClick = () => {
        onLogin(userName, password, remember)
    };
    const handleReset = () => {
        setPassword('');
        setUserName('')
        setRemember(false);
    }
    const isButtonDisabled = !userName || !password;

    return (
        <form>
            <label htmlFor="userName">Username: </label>
            <input type="text" value={userName} id="userName" onChange={handleUserName} />

            <label htmlFor="password">Password: </label>
            <input type="password" value={password} id="password" onChange={handlePassword} />

            <label htmlFor="remember">
                Remember me
                <input type="checkbox" id="remember" checked={remember} onChange={handleRemember} />
            </label>

            <button type="button" onClick={handleLoginClick} disabled={isButtonDisabled}>
                Login
            </button>
            <button type="reset" onClick={handleReset} >Reset</button>
        </form>
    );
}
export default Login