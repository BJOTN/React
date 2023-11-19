import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "./LanguageContext"

function Clock (){
    const language = useContext(LanguageContext)
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(()=>{
        const setIntervalId = setInterval(()=>{
            setCurrentTime(new Date())
        },1000)
        
        return ()=>{
            clearInterval(setIntervalId)
        }
    })

    return(
        <div className="clock">
            <h2>
                {language === 'en' ? 'Current time:' : 'Ora corrente:'}
                {currentTime.toLocaleTimeString()}
            </h2>
        </div>
    )
}
export default Clock