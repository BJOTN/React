import { Welcome } from "./Welcome";

export function App() {
  const name = 'Bjorn';
  const age = '25'
  return <Welcome name = {name} age ={age}/>;
}

Welcome.defaultProps = {
  name: "unknow",
  age: 'none',
};
