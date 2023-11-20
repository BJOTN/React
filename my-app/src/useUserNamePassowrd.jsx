import { useState } from "react"


function useUserNamePassword() {
    const [userData, setUserData] = useState({
        userName: '',
        password: '',
    })

    const handleUsernameInput = (e) => {
        setUserData({ ...userData, userName: e.target.value });
    };

    const handlePasswordInput = (e) => {
        setUserData({ ...userData, password: e.target.value });
    };

    return {
        userData, setUserData, handleUsernameInput,
        handlePasswordInput
    }
}
export default useUserNamePassword