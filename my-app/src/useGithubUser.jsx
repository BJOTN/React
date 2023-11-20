import { useState,useEffect } from "react";

function useGithhubUser(userName){
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async function () {
            try {
                const response = await fetch(`https://api.github.com/users/${userName}`)
                if (response.ok) {
                    const data = await response.json();
                    setUserData(data)
                } else {
                    console.log('error response', response.status)
                }
            } catch (error) {
                console.error('error fetching')
            }
        }
        fetchUserData()
    }
        , []
    );
    return{
        userData,setUserData
    }
}
export default useGithhubUser