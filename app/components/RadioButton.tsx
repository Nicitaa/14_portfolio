import { ChangeEvent } from "react"

interface RadioButton extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  inputName: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  isChecked?: boolean | null
}

export function RadioButton({ label, inputName, onChange, isChecked, ...props }: RadioButton) {
  return (
    <label
      htmlFor={label}
      className="relative cursor-pointer flex justify-center items-center px-4 py-2
    transition-all duration-300 text-secondary">
      <input
        type="radio"
        name={inputName}
        value={label}
        id={label}
        className="hidden peer"
        onChange={onChange}
        checked={isChecked ?? false}
        {...props}
      />
      <span
        className={`before:absolute before:border-2 before:rounded-sm before:border-solid before:border-secondary before:w-full before:h-[50px]
        before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%]
        before:transition-all before:duration-300 
        peer-checked:before:border-cta peer-checked:before:border-2`}
      />
      {label}
    </label>
  )
}
