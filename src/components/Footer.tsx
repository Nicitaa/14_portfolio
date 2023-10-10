import { PiTelegramLogoBold } from "react-icons/pi"
import { RiDiscordLine } from "react-icons/ri"
import {AiFillLinkedin} from 'react-icons/ai'
import {BsFiletypePdf} from 'react-icons/bs'

import { Button } from "./Button"

export function Footer() {


  return (
    <footer className="mb-lg mt-auto">
      <div className="relative grid grid-cols-2 tablet:flex gap-y-md max-w-[80vw] mx-auto justify-center gap-x-md">
        <Button onClick={() => window.open('https://t.me/nicitaacom')}>Telegram <PiTelegramLogoBold /></Button>
        <Button onClick={() => window.open('https://discord.com/users/780002958380498955')}>Discord <RiDiscordLine /></Button>
        <Button onClick={() => window.open('https://linkedin.com/in/nicitaa')}>LinkedIn <AiFillLinkedin /></Button>
        <Button onClick={() => window.open('https://drive.google.com/file/d/1veZDYS_i1Udmy_a-zV4c55cOABTglIPa/view?usp=sharing')}>
          Summary <BsFiletypePdf/>
        </Button>
      </div>
    </footer>
  )
}