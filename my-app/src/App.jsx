import Clock from "./Clock"
import InteractiveWelcome from "./InteractiveWelcome"
import Login from "./Login"


function App(){
    function onLogin(name, password, remember) {
        console.log('Login data:', name,password,remember)
      }
    
    return <Login onLogin={onLogin}/>
}
export default App