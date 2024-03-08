"use client"

import { repos } from "../data/repos"
import Link from "next/link"
import { useSlider } from "../hooks/useSlider"

export function Navbar() {
  const { handleMouseDown, handleMouseMove, handleTouchDown, handleTouchMove } = useSlider()

  return (
    <nav
      className="flex justify-between desktop:justify-stretch items-center transition-[height] duration-[600ms] px-md
    py-sm text-secondary">
      <div className="flex items-center pr-md line">
        <Link data-text="Portfolio" href="/" className="text-shadow text-lg text-secondary before:text-secondary">
          Portfolio
        </Link>
      </div>

      <div
        className="hidden desktop:inline-flex overflow-x-hidden "
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchDown}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}>
        <ul className="hidden desktop:inline-flex items-center gap-md">
          {repos.map(repo => (
            <li key={repo.id} className="flex flex-col items-center w-[10rem] select-none">
              <p className="flex justify-center">{repo.id}</p>
              <Link
                className="transition-all duration-200 ease-in hover:brightness-75 whitespace-nowrap"
                href={repo.url}
                target="_blank">
                {repo.description}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
