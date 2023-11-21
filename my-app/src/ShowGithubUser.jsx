import { useNavigate, useParams, useRoutes } from "react-router-dom"
import GithubUser from "./GithubUser"

export default function ShowGithubUser() {
    const navigate = useNavigate();
    const { userName } = useParams(); 
    return (
      <div>
        {navigate(<GithubUser username ={userName} />)}
      </div>
    );
  }