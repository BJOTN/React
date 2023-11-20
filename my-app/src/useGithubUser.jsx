import { useState, useEffect } from "react";

function useGithhubUser(userName) {
    const [userData, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    const fetchUserData = async function () {
        try {
            const response = await fetch(`https://api.github.com/users/${userName}`);
            if (response.ok) {
                const data = await response.json();
                setUserData(data);
                setError(null)
            } else {
                console.log('error response', response.status);
                setUserData(null)
                setError(`Error: ${response.status}`);
            }
        } catch (error) {
            console.error('error fetching', error);
            setUserData(null);
            setError("Error fetching user data");
        } finally {
            setIsLoading(false);
        }
    };


    return {
        fetchUserData,
        userData,
        isLoading,
        error,
        loading,
    };
}

export default useGithhubUser;