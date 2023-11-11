import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter initialValue={0} incrementAmount={2} decrementAmount={1} reset ={0}/>
    </div>
  );
}

Welcome.defaultProps = {
  name: "unknow",
}
/* -se non passo la prop name in Welcome mi stampa solo welcome senza il nome
    -mettendo la prop default se non viene specificato il name verrà utilizzato quello di default */