import { Welcome } from "./Welcome";

export function App() {
  return <Welcome name = 'Bjorn'age ={30}/>;
}

Welcome.defaultProps = {
  name: "unknow",
};
/* -se non passo la prop name in Welcome mi stampa solo welcome senza il nome
    -mettendo la prop default se non viene specificato il name verrà utilizzato quello di default */