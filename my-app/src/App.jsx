
import useUserNamePassword from "./useUserNamePassowrd"

function App() {
  const { handleUsernameInput, handlePasswordInput, userData } = useUserNamePassword()
  return (
    <div>
      <input type="text" value={userData.userName} onChange={handleUsernameInput} placeholder="Username" />
      <input type="password" value={userData.password} onChange={handlePasswordInput} placeholder="Password" />
    </div>
  )
}

export default App;