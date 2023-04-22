import './Navbar.css'
import {repos} from '../../data/repos.ts'
import {Link} from "react-router-dom";

export function Navbar(){
return (
  <nav className='nav'>
    <div className='portfolio-container'>
    <Link to={'/'} className='portfolio'>Portfolio</Link>
    </div>




      {repos.map((repo)=>{
        return <ul className='sites-ul'>
           <li key={repo.id}>
                   <p> {repo.id}</p>
                   <Link to={`/MySite/${repo.id}`}>{repo.description}</Link>
           </li>
        </ul>
      })}
  </nav>

    )
}