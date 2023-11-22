import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowGithubUser() {
    const [user, setUser] = useState(null);
    const { username } = useParams();
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
        fetchUser();
    }, [username]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>
                {user.login}
            </h2>
            <img src={user.avatar_url} alt={user.login} />
        </div>
    )
}