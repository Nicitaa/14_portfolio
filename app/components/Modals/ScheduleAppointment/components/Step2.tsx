import { useAppointmentStore } from "@/store/useAppointmentStore"
import { Checkbox } from "./Checkbox"
import { Input } from "@/components/Input"
import { SendNotificationTo } from "./SendNotificationTo"

export function Step2() {
  const {
    channel,
    inputNotifictionTo,
    isShowUpOnACall,
    isSendNotification,
    setInputNotificationTo,
    toggleIsShowUpOnACall,
    toggleIsSendNotification,
  } = useAppointmentStore()

  return (
    <div className="w-full flex flex-col justify-start">
      <Checkbox
        isChecked={isShowUpOnACall}
        onChange={toggleIsShowUpOnACall}
        label="I affirm that 99% that I show up on a call"
      />
      <Checkbox isChecked={isSendNotification} onChange={toggleIsSendNotification} label={<SendNotificationTo />} />
    </div>
  )
}
