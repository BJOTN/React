import Clock from "./Clock"
import FocusableInput from "./MountMessage"
import InteractiveWelcome from "./InteractiveWelcome"
import Login from "./Login"
import UncontrolledLogin from "./uncontrolledLogin"
import { Counter } from "./Counter"
import Colors from './Colors';

function App() {
  const colorArray = [
    { id: 1, name: 'Blue' },
    { id: 2, name: 'Red' },
  ];

  return <Colors arr={colorArray} />;
}

export default App;