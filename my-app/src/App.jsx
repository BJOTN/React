import Clock from "./Clock"
import InteractiveWelcome from "./InteractiveWelcome"
import Login from "./Login"
import UncontrolledLogin from "./uncontrolledLogin"


function App(){
    function onLogin(name, password, remember) {
        console.log('Login data:', name,password,remember)
      }
    
    return <UncontrolledLogin onLogin={onLogin} />
}
export default App