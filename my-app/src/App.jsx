
import { useState } from "react"
import GithubUser from "./GithubUser"
import { Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

function App() {
  const [language ,setLanguage] = useState('en');
  
  const changeLanguage = (newLanguage)=>{
    setLanguage(newLanguage)
  }
  return (
    <Routes>
      <Route path="user/:username" element={<ShowGithubUser />} />
    </Routes>
  )
}

export default App;