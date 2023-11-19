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
import GithubUser from "./GithubUser"
import GithubUsers from "./GithubUsers"

function App() {
  const [language ,setLanguage] = useState('en');
  
  const changeLanguage = (newLanguage)=>{
    setLanguage(newLanguage)
  }
  return (
    <GithubUsers />
  )
}

export default App;