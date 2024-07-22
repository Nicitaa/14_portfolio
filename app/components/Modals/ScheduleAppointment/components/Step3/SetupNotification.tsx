import { useAppointmentStore } from "@/store/useAppointmentStore"
import { Checkbox } from "../Checkbox"
import { tooltip } from "@/utils/tooltip"

export function SetupNotification() {
  const { sendNotificationTo, inputNotificationTo, isCustomNotification, toggleIsCustomNotification } =
    useAppointmentStore()

  return (
    <div className="w-full">
      {inputNotificationTo.length > 3 && (
        <p>
          You recieve notification in {sendNotificationTo} with {tooltip("GM", "Google meets")} link in 10 minutes
          before appointment
        </p>
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
