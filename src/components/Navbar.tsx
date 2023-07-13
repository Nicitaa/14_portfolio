import { repos } from '../data/repos'
import { Link } from "react-router-dom"
import { useSlider } from '../hooks/useSlider'
import { Language } from './Language'



export function Navbar() {

  const { handleMouseDown, handleMouseMove, handleTouchDown, handleTouchMove } = useSlider()

  return (

    <nav className='flex justify-between laptop:justify-stretch items-center transition-[height] duration-[600ms] px-md
    py-sm'>

      <div className='flex items-center pr-md line'>
        <Link to={'/'} className='font-bold text-lg inner-shadow text-transparent'>Portfolio</Link>
      </div>


      <div className='hidden laptop:inline-flex overflow-x-hidden w-[90%]'
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}>
        <ul className='hidden laptop:inline-flex items-center gap-md text-secondary'>
          {repos.map((repo) => (
            <li key={repo.id} className='flex flex-col items-center w-[10rem] select-none'>
              <p className='flex justify-center'>{repo.id}</p>
              <Link className='transition-all duration-200 ease-in hover:brightness-75 whitespace-nowrap' to={repo.url} target='_blank'>{repo.description}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Language />
    </nav>


  )

}

