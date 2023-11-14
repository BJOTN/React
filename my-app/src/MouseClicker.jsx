function MouseClicker({ name, nameTwo ,imgUrl}) {
    const handleClick = ((event) => {
        console.log(event.currentTarget.name)
    })
    
    return (
        <>
            <button name={name} onClick={handleClick}>Click me </button>
            <button name={nameTwo} onClick={handleClick}>Click me</button>
            
        </>)
}
export default MouseClicker