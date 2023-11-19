import Clock from "./Clock"
import FocusableInput from "./MountMessage"
import InteractiveWelcome from "./InteractiveWelcome"
import Login from "./Login"
import UncontrolledLogin from "./UncontrolledLogin"
import { Counter } from "./Counter"
import Colors from './Colors';
import { TodoList } from "./TodoList"
import Welcome from "./Welcome"
import Container from "./Container"
import { LanguageContext } from "./LanguageContext"
import { useState } from "react"

function App() {
  const [language ,setLanguage] = useState('en');
  
  const changeLanguage = (newLanguage)=>{
    setLanguage(newLanguage)
  }
  return (
    <LanguageContext.Provider value={{language ,changeLanguage}}>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="en">English</option>
        <option value="it">Italiano</option>
      </select>
      <Clock />
    </LanguageContext.Provider>
  )
}

export default App;