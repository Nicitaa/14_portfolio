"use client"

import { useState } from "react"

import { RadioButton } from "./RadioButton"
import {
  Project15,
  Project16,
  Project17,
  Project19,
  Project20,
  Project22,
  Project23,
  Project24,
  Project26,
  Project28,
  ProjectRizAdminDashboard,
} from "./Projects"

export function ProjectsSwitcher() {
  const [projectTab, setProjectTab] = useState<"work" | "projects" | "clones">("work")

  return (
    <>
      <div className="grid grid-cols-3 gap-x-md">
        <RadioButton
          label="Work"
          inputName="input-name"
          onChange={() => setProjectTab("work")}
          isChecked={projectTab === "work"}
        />
        <RadioButton
          label="Projects"
          inputName="input-name"
          onChange={() => setProjectTab("projects")}
          isChecked={projectTab === "projects"}
        />
        <RadioButton
          label="Clones"
          inputName="input-name"
          onChange={() => setProjectTab("clones")}
          isChecked={projectTab === "clones"}
        />
      </div>

      {projectTab === "work" ? (
        <>
          <ProjectRizAdminDashboard />
        </>
      ) : projectTab === "projects" ? (
        <>
          <Project28 />
          <Project20 />
          <Project19 />
          <Project17 />
        </>
      ) : (
        projectTab === "clones" && (
          <>
            <Project26 />
            <Project23 />
            <Project22 />
            <Project24 />
            <Project16 />
            <Project15 />
          </>
        )
      )}
    </>
  )
}
