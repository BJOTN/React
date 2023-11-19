import { useState } from "react";
import GithubUser from "./GithubUser";

export default function GithubUsers() {
  const [search, setSearch] = useState('');
  const [found, setFound] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${search}`)
      if (response.ok) {
        const data = await response.json();
        setFound(data.items);
      }
    } catch (error) {
      console.error('Error fetching users', error);
      setFound([]);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        {found.length > 0 ? (
          <ul>
            {found.map((user) => (
              <li key={user.id}>
                <GithubUser userName={user.login} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
}