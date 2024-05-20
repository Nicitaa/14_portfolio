import { useAppointmentStore } from "@/store/useAppointmentStore"
import { Checkbox } from "./Checkbox"
import { SendNotificationTo } from "./SendNotificationTo"
import { Button } from "@/components/Button"
import { twMerge } from "tailwind-merge"
import { useForm } from "react-hook-form"

interface FormData {
  inputNotificationTo: string
}

const validationRules = {
  email: {
    required: "This field is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Enter valid email address",
    },
  },
}

export function Step2() {
  const {
    sendNotificationTo,
    inputNotificationTo,
    isShowUpOnACall,
    isSendNotification,
    toggleIsShowUpOnACall,
    toggleIsSendNotification,
  } = useAppointmentStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    if (sendNotificationTo === "email" && !validationRules.email.pattern.value.test(data.inputNotificationTo)) {
      setError("inputNotificationTo", { type: "manual", message: validationRules.email.pattern.message })
    }
  }

  return (
    <form className="w-full flex flex-col justify-start gap-y-[1.5rem]" onSubmit={handleSubmit(onSubmit)}>
      <div className="font-bold">
        <Checkbox
          isChecked={isShowUpOnACall}
          onChange={toggleIsShowUpOnACall}
          label="I affirm that 99% that I show up on a call"
        />
        <Checkbox
          isChecked={isSendNotification}
          onChange={toggleIsSendNotification}
          label={<SendNotificationTo register={register} errors={errors} setError={setError} />}
        />
      </div>
      <div className="flex justify-center items-center">
        <Button
          className={twMerge(
            "w-fit",
            (!isShowUpOnACall || !isSendNotification) && "pointer-events-none cursor-default opacity-50",
          )}
          type="submit">
          Book a call
        </Button>
      </div>
    </form>
  )
}
