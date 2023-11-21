import { Counter } from "./Counter";
import { Routes, Route, Link } from 'react-router-dom'

export function App() {
  return (
    <div>
      <Routes>
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </div>
  );
}
