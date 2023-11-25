import useSWR from "swr";

function useGithhubUser(userName) {
    const fetcher = async (url)=>{
      const response = await fetch(url);
      if(!response.ok){
        console.log('error on fetching')
      }
      return response.json()
    }

    const handleRefetch = ()=> mutate()

    const{data,error,mutate}= useSWR(`https://api.github.com/users/${userName}`,fetcher)

    return {
      user : data,
      error,
      isLoading:!data && !error,
      handleRefetch,
    }
  }
  
  export default useGithhubUser;