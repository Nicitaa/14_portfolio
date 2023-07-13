import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { languages } from "../data/languages"

export function Language() {

  const [showDropdown, setShowDropdown] = useState(false)

  /* for close on clicking outside */
  const dropdownContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        if (!dropdownContainerRef.current?.contains(e.target)) {
          setShowDropdown(false)
        }
      }
    }

    document.addEventListener("mousedown", handler)
  }, [])

  /* for closing on esc */
  document.onkeydown = function (evt) {
    if (evt.keyCode == 27) {
      setShowDropdown(false)
    }
  }

  const [currentLanguage, setCurrentLanguage] = useState(2) //LocalStorage in feature
  const [hover, setHover] = useState(null)
  const isHover = hover !== null

  function mouseHover(index) {
    return () => setHover(index)
  }

  function changeLanguage(index) {
    return () => setCurrentLanguage(index)
  }



  return (
    <div className="relative flex items-center gap-sm px-sm border-[1px] border-solid border-secondary
    h-lg ml-auto cursor-pointer"
      onClick={() => setShowDropdown(!showDropdown)} ref={dropdownContainerRef}>
      <img className="w-md h-md" src="/world.png" alt="world" />
      <div className="flex items-center w-[7rem]">
        <h1 className="text-sm text-secondary">Language</h1>
        <img className="w-md h-md mt-[2px]" src="/tringle.png" alt="tringle" />
      </div>

      {/* Dropdown-content */}
      <div className={`dropdown absolute top-[100%] left-[-1px] right-[-1px]
      border-[1px] border-solid border-secondary z-10 
       flex flex-col text-md text-center text-secondary ${showDropdown
          ? 'opacity-100 visible translate-y-0 transition-all duration-300'
          : 'opacity-0 invisible translate-y-[-20px] transition-all duration-300'}`}
        onMouseLeave={() => setHover(null)}>

        {languages.map(language => (
          language.id !== 5
            ? <Link className={`border-b-[1px] border-solid border-secondary
        transition-all duration-[300ms]
                ${isHover
                ? hover === language.id && 'active'
                : currentLanguage === language.id && 'active'}`}
              onMouseOver={mouseHover(language.id)}
              onClick={changeLanguage(language.id)}
              to={language.url} key={language.id}>{language.label}</Link>
            : <Link className={`border-solid border-secondary
        transition-all duration-[300ms]
         ${isHover
                ? hover === language.id && 'active'
                : currentLanguage === language.id && 'active'}`}
              onMouseOver={mouseHover(language.id)}
              onClick={changeLanguage(language.id)}
              to={language.url} key={language.id}>{language.label}</Link>
        ))}
      </div>
    </div>
  )
}