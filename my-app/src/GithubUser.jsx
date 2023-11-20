import useGithhubUser from "./useGithubUser"


export default function GithubUser({ userName }) {
    const { userData, isLoading } = useGithhubUser(userName);
  
    return (
      <div>
        {isLoading ? (
          <p>Loading user data...</p>
        ) : userData ? (
          <div>
            <h2>User Details</h2>
            <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
            <p>Name: {userData.name}</p>
            <p>Login: {userData.login}</p>
          </div>
        ) : (
          <p>User not found</p>
        )}
      </div>
    );
  }