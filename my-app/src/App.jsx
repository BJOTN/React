import { HelloWorld } from "./helloWorld";
import { Message } from "./message";


export function App(){
   return (
    <div>
      <h1>This is my app</h1>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      <Message/>
    </div>
   )
}
/* si possono ripetere piu volte il richiamo della funzione Hello e me lo ristampa piu volte in pagina e invece la funzione Message viene messo nel div di app
 */
