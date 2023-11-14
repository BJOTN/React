import { useEffect, useState } from "react"

function Clock (){
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
        <div>
            <h2>
                {currentTime.toLocaleTimeString()}
            </h2>
        </div>
    )
}
export default Clock