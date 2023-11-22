import { Counter } from "./Counter";
import { Routes, Route, Link } from 'react-router-dom'
import { Message } from "./message";
import { Welcome } from "./Welcome";
import NotFound from "./NotFound";


export function App() {
  return (
    <div>
      <ul>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/messages'>Message</Link></li>
        <li><Link to='/welcome'>Welcome</Link></li>
      </ul>
      
      <Routes>
        <Route path='/counter' element={<Counter />} />
        <Route path='/messages' element={<Message />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}
