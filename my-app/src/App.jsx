
import GithubUser from "./GithubUser";
import GithubUsers from "./GithubUsers";
import { SWRConfig } from "swr"; 

const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    console.log('error on fetching')
  }
  return response.json()
}
function App() {
  

  return (
    <SWRConfig value={{ fetcher }}>
      <GithubUsers />
    </SWRConfig>
  )
}

export default App;