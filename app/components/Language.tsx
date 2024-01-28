"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"

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

    return () => {
      document.removeEventListener("mousedown", handler)
    }
  }, [])

  /* for closing on esc */
  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        setShowDropdown(false)
      }
    }

    if (typeof document !== "undefined") {
      document.addEventListener("keydown", handleKeyDown)
    }

    return () => {
      if (typeof document !== "undefined") {
        document.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [])

  const [currentLanguage, setCurrentLanguage] = useState(2) //Cookies in feature
  const [hover, setHover] = useState<number | null>(null)
  const isHover = hover !== null

  function mouseHover(index: number) {
    return () => setHover(index)
  }

  function changeLanguage(index: number) {
    return () => setCurrentLanguage(index)
  }

  return (
    <div
      className="relative flex items-center gap-sm px-sm border-[1px] border-solid border-secondary
    h-lg ml-auto cursor-pointer"
      onClick={() => setShowDropdown(!showDropdown)}
      ref={dropdownContainerRef}>
      <Image className="w-md h-md" src="/world.png" alt="world" width={32} height={32} />
      <div className="flex items-center w-[7rem]">
        <h1 className="text-sm text-secondary">Language</h1>
        <Image className="w-md h-md mt-[2px]" src="/tringle.png" alt="tringle" width={32} height={32} />
      </div>

      {/* Dropdown-content */}
      <div
        className={`dropdown absolute top-[100%] left-[-1px] right-[-1px]
      border-[1px] border-solid border-secondary z-10 
       flex flex-col text-md text-center text-secondary ${
         showDropdown
           ? "opacity-100 visible translate-y-[0px] transition-all duration-300"
           : "opacity-0 invisible translate-y-[-20px] transition-all duration-300"
       }`}
        onMouseLeave={() => setHover(null)}>
        {languages.map(language =>
          language.id !== 5 ? (
            <Link
              className={`border-b-[1px] border-solid border-secondary
        transition-all duration-[300ms]
                ${isHover ? hover === language.id && "active" : currentLanguage === language.id && "active"}`}
              onMouseOver={mouseHover(language.id)}
              onClick={changeLanguage(language.id)}
              href={language.url}
              key={language.id}>
              {language.label}
            </Link>
          ) : (
            <Link
              className={`border-solid border-secondary
        transition-all duration-[300ms]
         ${isHover ? hover === language.id && "active" : currentLanguage === language.id && "active"}`}
              onMouseOver={mouseHover(language.id)}
              onClick={changeLanguage(language.id)}
              href={language.url}
              key={language.id}>
              {language.label}
            </Link>
          ),
        )}
      </div>
    </div>
  )
}
