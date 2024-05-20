import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form"
import { twMerge } from "tailwind-merge"

interface FormData {
  inputNotificationTo: string
}

interface FormInputProps {
  id: keyof FormData
  type?: string
  className?: string
  placeholder?: string
  register: UseFormRegister<FormData>
  validationRule?: RegisterOptions<FormData, keyof FormData>
  errors: FieldErrors
  disabled?: boolean
}

type ValidationRules = {
  [key in keyof FormData]: {
    required: string
    pattern: {
      value: RegExp
      message: string
    }
  }
}

const validationRules: ValidationRules = {
  inputNotificationTo: {
    required: "This field is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Enter valid email address",
    },
  },
}

export function FormInput({
  className = "",
  id,
  type = "text",
  placeholder = "",
  register,
  validationRule,
  errors,
  disabled = false,
}: FormInputProps) {
  // const validationRule = validationRules[id as keyof typeof validationRules]

  return (
    <div>
      <div className="flex flex-col">
        <input
          className={twMerge(
            `px-[2px] py-xs text-secondary bg-transparent border-[1px] border-[#909090] rounded outline-none`,
            errors[id] && "focus:ring-rose-500 ",
            disabled && "opacity-50 cursor-default pointer-events-none",
            className,
          )}
          id={id}
          type={type}
          placeholder={placeholder}
          autoComplete={id}
          disabled={disabled}
          {...register(id, validationRule)}
        />
      </div>
    </div>
  )
}
