import { Welcome } from "./Welcome";

export function App() {
  return <Welcome name = 'Bjorn' age ={25}/>;
}

Welcome.defaultProps = {
  name: "unknow",
  age: 'none',
};
