import { useRef, useEffect } from "react"

function MountMessage(){
    const myRef = useRef(false)

    useEffect(()=>{
        if(!myRef.current){
            myRef.current = true;
            console.log('first Mount')
        }
    },[]);
    return <h1>Hello!</h1>
}
export default MountMessage