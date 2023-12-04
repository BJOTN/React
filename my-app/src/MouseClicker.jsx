function MouseClicker({ name, nameTwo ,imgUrl}) {
  const handleClick = (event) => {
    if (event.currentTarget === event.target) {
      console.log(event.currentTarget.name);
    }
  };

  const handleImageClick = (event) => {
    if (event.currentTarget.parentElement === event.target.parentElement) {
      console.log( imgUrl);
    }
  };

  return (
    <>
      <button name={name} onClick={handleClick}>
        Click me
        <img src={imgUrl} alt="Click me" onClick={handleImageClick} />
      </button>
      <button name={nameTwo} onClick={handleClick}>
        Click me
        <img src={imgUrl} alt="Click me" onClick={handleImageClick} />
      </button>
    </>
  );
}
export default MouseClicker