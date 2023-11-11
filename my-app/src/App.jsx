import { Counter } from "./Counter";


export function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter initialValue={0} incrementAmount={2} decrementAmount={1} reset ={0}/>
    </div>
  );
}
