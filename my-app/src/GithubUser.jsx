import { useEffect, useState } from "react";

export default function GithubUser({ userName }) {
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

    return (
        <div>
            {userData ? (
                <div>
                    <h2>User Details</h2>
                    <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
                    <p>Name: {userData.name}</p>
                    <p>Login: {userData.login}</p>
                </div>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    )
}