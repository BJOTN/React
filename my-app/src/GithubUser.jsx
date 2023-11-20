import useGithhubUser from "./useGithubUser"


export default function GithubUser({ userName }) {
    const { fetchUserData, userData, error, loading  } = useGithhubUser(userName);
  
    useEffect(() => {
        if (userName) {
          fetchUserData(userName);
        }
      }, [userName, fetchUserData]);
    
      return (
        <div>
          {loading ? (
            <p>Loading user data...</p>
          ) : error ? (
            <p>{error}</p>
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