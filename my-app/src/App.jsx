import Clock from "./Clock"
import FocusableInput from "./MountMessage"
import InteractiveWelcome from "./InteractiveWelcome"
import Login from "./Login"
import UncontrolledLogin from "./UncontrolledLogin"
import { Counter } from "./Counter"
import Colors from './Colors';
import { TodoList } from "./TodoList"
import Welcome from "./Welcome"
import Container from "./Container"

function App() {

  return (
    <Container title={<h1>Hello</h1>}>
      <p>children</p>
    </Container>
  )
}

export default App;