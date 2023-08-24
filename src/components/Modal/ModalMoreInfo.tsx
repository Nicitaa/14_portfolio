import { Button } from "../Button";
import { ModalContainer } from "./ModalContainer";

import { PiTelegramLogoBold } from 'react-icons/pi'
import { RiDiscordLine } from 'react-icons/ri'

interface ModalInfoProps {
  isOpen: boolean
  onClose: () => void
  label: string
  collaborationChildren: React.ReactNode
  taskLabel?: string
  deadline?: string
  price: string
}

export function ModalMoreInfo({ isOpen, onClose, label, taskLabel, deadline, price, collaborationChildren }: ModalInfoProps) {

  return (
    <ModalContainer className="w-[400px] h-fit flex justify-center items-center"
      isOpen={isOpen} onClose={onClose} >
      <div className="flex flex-col justify-between items-center text-center gap-y-md h-full py-md px-md">
        <div className="flex flex-col gap-y-md">

          <h1 className="text-lg">{label}</h1>
          {/* Collaboration */}
          <div className="flex flex-col items-center">
            <h1 className="text-lg">Collaboration</h1>
            <div className="flex gap-x-md">
              {collaborationChildren}
            </div>
          </div>
          {/* Task */}
          {taskLabel &&
            <div className="flex flex-col">
              <h1 className="text-lg">Task</h1>
              <p>{taskLabel}</p>
            </div>}
          {/* Deadline + Price */}
          {deadline &&
            <div className="flex flex-col">
              <h1 className="text-lg">Deadline</h1>
              <p>{deadline}</p>
            </div>}
          <div className="flex flex-col">
            <h1 className="text-lg">Price</h1>
            <p>{price}</p>
          </div>
          <div className="flex flex-col gap-y-md">
            <h1 className="mt-md">Want more info or want similar site?<br />
              Message me:</h1>
            <div className="flex justify-center gap-x-md">
              <Button onClick={() => window.open('https://t.me/icpcedu')}>Telegram <PiTelegramLogoBold /></Button>
              <Button onClick={() => window.open('https://discord.com/users/780002958380498955')}>Discord <RiDiscordLine /></Button>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}