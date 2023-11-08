import { AlertClock } from "./AlertClock";
import { Welcome } from "./Welcome";

export function App() {
  const handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`The time is: ${currentTime}`);
  };

  return (
    <div>
      <h1>Alert Clock Time</h1>
      <AlertClock onButtonClick ={handleButtonClick}/>
    </div>
  )
  
}

Welcome.defaultProps = {
  name: "unknow",
}
