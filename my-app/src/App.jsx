import { Counter } from "./Counter";
import { CounterDisplay } from "./CounterDisplay";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <CounterDisplay />
  );
}

Welcome.defaultProps = {
  name: "unknow",
}
/* -se non passo la prop name in Welcome mi stampa solo welcome senza il nome
    -mettendo la prop default se non viene specificato il name verrà utilizzato quello di default */