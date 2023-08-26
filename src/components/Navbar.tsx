import { repos } from '../data/repos'
import { Link } from "react-router-dom"
import { useSlider } from '../hooks/useSlider'
import { Language } from './Language'
import { AnimatePresence, motion } from 'framer-motion'
import useNavbar from '../hooks/useNavbar'


export function Navbar() {

  const { handleMouseDown, handleMouseMove, handleTouchDown, handleTouchMove } = useSlider()

  const navbar = useNavbar()

  return (

    <AnimatePresence>
      {navbar.isOpen &&
        <motion.nav
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ ease: 'circIn', duration: 0.5 }}
          className='flex justify-between desktop:justify-stretch items-center transition-[height] duration-[600ms] px-md
    py-sm'>

          <div className='flex items-center pr-md line'>
            <Link data-text="Portfolio" to={'/'} className='text-shadow text-lg before:text-secondary'>
              Portfolio
            </Link>
          </div>


          <div className='hidden desktop:inline-flex overflow-x-hidden w-[90%]'
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchDown}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}>
            <ul className='hidden desktop:inline-flex items-center gap-md'>
              {repos.map((repo) => (
                <li key={repo.id} className='flex flex-col items-center w-[10rem] select-none'>
                  <p className='flex justify-center'>{repo.id}</p>
                  <Link className='transition-all duration-200 ease-in hover:brightness-75 whitespace-nowrap'
                    to={repo.url} target='_blank'>{repo.description}</Link>
                </li>
              ))}
            </ul>
          </div>

          <Language />
        </motion.nav>}
    </AnimatePresence>

  )

}

