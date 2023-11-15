import { useRef, useEffect } from "react"

function FocusableInput(){
    const myRef = useRef(null)

    useEffect(()=>{
        myRef.current.focus()
    },[])
    return (
        <div>
            <input ref={myRef}></input>
        </div>
    )
}
export default FocusableInput