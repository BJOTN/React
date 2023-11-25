import useSWR from "swr";

function useGithhubUser(userName) {
    const fetcher = async (url)=>{
      const response = await fetch(url);
      if(!response.ok){
        console.log('error on fetching')
      }
      return response.json()
    }


    const{data,error}= useSWR(`https://api.github.com/users/${userName}`,fetcher)

    return {
      user : data,
      error,
      isLoading:!data && !error,

    }
  }
  
  export default useGithhubUser;