import { Counter } from "./Counter";
import { Routes, Route, Link } from 'react-router-dom'
import { Message } from "./message";
import { Welcome } from "./Welcome";
import NotFound from "./NotFound";
import GithubUserList from "./GithubUserLIst";
import ShowGithubUser from "./ShowGithubUser";



export function App() {
  return (
    <div>
      <ul>
        <GithubUserList />
      </ul>

      <Routes>
        <Route path="/users" element={<GithubUserList />}>
          <Route index element={<h2>Add a user and select it</h2>}/>
        </Route>
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
