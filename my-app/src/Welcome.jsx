import { useParams } from "react-router-dom";
import { Age } from "./Age";

export function Welcome() {
  const { name, age } = useParams()
  return (
    <div>
      <p>Welcome {name}!</p>
      <Age age={age} />
    </div>
  );
}
