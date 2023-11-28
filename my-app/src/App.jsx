
import GithubUsers from "./GithubUsers";
import useCurrentLocation from "./useCurrentLocation";


function App() {
  const{location,error,loading,getCurrentPosition}=useCurrentLocation();
  return (
    <div>
      {loading && <p>Loading</p>}
      {error && <p>Error scemo</p>}
      {location && <p>{location.latitude}, {location.longitude}</p>}
      <button onClick={getCurrentPosition}>Position</button>
    </div>
  )
}

export default App;