import { useState } from "react"
import Welcome from "./Welcome"

function InteractiveWelcome (){
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
    }
    return (
        <div>
            <input type='text' value={inputValue} onChange={handleChange}></input>
            <Welcome name={inputValue} />
        </div>
    )
}
export default InteractiveWelcome