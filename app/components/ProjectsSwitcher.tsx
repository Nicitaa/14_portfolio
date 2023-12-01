"use client"

import { useState } from "react"

import { RadioButton } from "./RadioButton"
import { Project15, Project16, Project17, Project19, Project20, Project22, Project23, Project24 } from "./Projects"

export function ProjectsSwitcher() {
  const [clones, setClones] = useState<boolean | undefined>()

  //  <div className="grid grid-cols-2 gap-x-md">
  //       <div className="border rounded-sm">
  //         <h1 className="text-center text-[1.25rem] font-bold">Clones</h1>
  //         <p className="text-center">I repeat after youtube guide</p>
  //       </div>
  //       <div className="border rounded-sm ">
  //         <h1 className="text-center text-[1.25rem] font-bold">Projects</h1>
  //         <p className="text-center">I do this project on my own</p>
  //       </div>
  //     </div>

  return (
    <>
      <div className="grid grid-cols-2 gap-x-md">
        <RadioButton label="Projects" inputName="input-name" onChange={() => setClones(false)} isChecked={!clones} />
        <RadioButton label="Clones" inputName="input-name" onChange={() => setClones(true)} isChecked={clones} />
      </div>

      {clones ? (
        <>
          <Project20 />
          <Project19 />
          <Project17 />
        </>
      ) : (
        <>
          <Project23 />
          <Project22 />
          <Project24 />
          <Project16 />
          <Project15 />
        </>
      )}
    </>
  )
}
