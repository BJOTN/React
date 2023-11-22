import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function GithubUserList(){
    const [users, setUsers]=useState([])
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const result = await fetch("https://api.github.com/users");
                if (!result.ok) {
                  throw new Error("Failed to fetch users");
                }
                const data = await result.json();
                setUsers(data);
              } catch (error) {
                console.error("Error fetching data:", error);
              } 
        }
        fetchUsers();
  }, []);
    
    return(
    <div>
        <h2>Github Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.login}`}>{user.login}</Link>
          </li>
        ))}
      </ul>
    </div>)
}