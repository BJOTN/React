function MouseClicker({name, nameTwo}){
    const handleClick = ((event) => {
        console.log(event.currentTarget.name)
    })
    return (<><button name={name} onClick={handleClick}>click me</button>
    <button name={nameTwo} onClick={handleClick}>Click me</button>
    </>)
}
export default MouseClicker