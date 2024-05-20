import { useAppointmentStore } from "@/store/useAppointmentStore"
import { Checkbox } from "../Checkbox"

export function SetupNotification() {
  const { channel, inputNotificationTo, isCustomNotification, toggleIsCustomNotification } = useAppointmentStore()

  return (
    <div>
      {inputNotificationTo.length > 3 && (
        <p>You recieve notification in {channel} with GM link in 10 minutes before intervew</p>
      )}
      {inputNotificationTo.length > 3 ? (
        <p>If you want create additional notification on your own</p>
      ) : (
        <Checkbox
          isChecked={isCustomNotification}
          onChange={toggleIsCustomNotification}
          label="I have setup my own notification"
        />
      )}
    </div>
  )
}
