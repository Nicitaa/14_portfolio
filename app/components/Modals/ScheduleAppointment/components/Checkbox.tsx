import { twMerge } from "tailwind-merge"
import { BsCheckLg } from "react-icons/bs"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean
  onChange: () => void
  label: React.ReactNode
  labelClassName?: string
  disabled?: boolean
}

export function Checkbox({ isChecked, onChange, label, labelClassName = "", disabled, ...props }: CheckboxProps) {
  return (
    <div
      className={twMerge(
        `relative flex flex-row justify-start items-center gap-x-xs transition-all duration-300 justify-self-start`,
        disabled && "opacity-50 cursor-default pointer-events-none",
      )}>
      <div className="h-fit w-fit relative inline-flex justify-center items-center cursor-default mt-2">
        <input
          className="w-[20px] h-[20px] appearance-none outline-none mr-2 ml-1 rounded-[2px] shadow-sm flex justify-center items-center
          border
          bg-transparent cursor-pointer checked:bg-cta/50 duration-300
          before:content-[''] before:w-[8px] before:h-[8px] before:rounded-[2px] before:scale-90 before:absolute
          before:top-2 before:left-2 before:duration-300 before:opacity-0
          before:translate-x-[105%] before:translate-y-[80%] before:pointer-events-none before:bg-success/50"
          type="checkbox"
          id="check"
          checked={isChecked}
          onChange={onChange}
          {...props}
        />
      </div>
      <label className={`${labelClassName} text-sm select-none cursor-pointer`} onClick={onChange}>
        {label}
      </label>
      {isChecked && (
        <BsCheckLg className="absolute left-[0px] top-[2px] text-white pointer-events-none select-none" size={20} />
      )}
    </div>
  )
}
