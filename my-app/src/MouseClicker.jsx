function MouseClicker({ name, nameTwo ,imgUrl}) {
    const handleClick = ((event) => {
        console.log(event.currentTarget.name)
    })
    const handleClickImg =((event) => {
        console.log(event.currentTarget.src)
    })
    return (
        <>
            <button name={name} onClick={handleClick}><img src={imgUrl} onClick={handleClickImg} /></button>
            <button name={nameTwo} onClick={handleClick}>Click me</button>
            
        </>)
}
export default MouseClicker