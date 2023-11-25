import useSWR from "swr";

function useGithubUser(userName) {
    const{data,error,mutate}= useSWR(`https://api.github.com/users/${userName}`)
    const handleRefetch = ()=> mutate()
    return {
      user : data,
      error,
      isLoading:!data && !error,
      handleRefetch,
    }
  }
  
  export default useGithubUser;