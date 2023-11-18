import { useState } from "react"

export default function Container({ title, children }) {
    const [collapse ,setCollapse] = useState(false)
    console.log(collapse)
    const handleTogle = () => {
        setCollapse(t =>!t)
    }
    return (
        <div className="container">
            <div><button onClick={handleTogle}> {title}</button></div>
            {!collapse && <div>{children}</div>}
        </div>
    )
}