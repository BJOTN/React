import useGithubUser from "./useGithubUser"


export default function GithubUser({ userName }) {
    const { user, isLoading ,error,handleRefetch} = useGithubUser(userName);

    return (
      <div>
        <button onClick={handleRefetch}>Refresh data</button>
        {isLoading ? (
          <p>Loading user data...</p>
        ) : user ? (
          <div>
            <h2>User Details</h2>
            <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
            <p>Name: {user.name}</p>
            <p>Login: {user.login}</p>
          </div>
        ) : error(
          <p>User not found</p>
        )}
        
      </div>
    );
  }