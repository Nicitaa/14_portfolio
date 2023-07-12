import { repos } from '../data/repos'
import { Link } from "react-router-dom"
import { useSlider } from '../hooks/useSlider'
import { Language } from './Language'



export function Navbar() {

  const { handleMouseDown, handleMouseMove, handleTouchDown, handleTouchMove } = useSlider()

  return (

    <nav className='flex justify-between transition-[height] duration-[600ms] overflow-x-hidden
   py-lg'>
      <div className='flex justify-center items-center px-md line'>
        <Link to={'/'} className='text-secondary font-bold text-lg'>Portfolio</Link>
      </div>

      <Language />

      <div className='flex overflow-x-hidden'
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}>
        <ul className='hidden laptop:inline-flex items-center gap-md m-md text-secondary'>
          {repos.map((repo) => (
            <li key={repo.id} className='flex flex-col items-center w-[11vw]'>
              <p className='flex justify-center'>{repo.id}</p>
              <Link className='transition-all duration-200 ease-in hover:brightness-75' to={repo.url} target='_blank'>{repo.description}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>


  )

}

