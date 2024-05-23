import moment from "moment"

import supabaseAdmin from "@/libs/supabaseAdmin"
import { ScheduleAppointment } from "./components/ScheduleAppointment"
import { Button } from "@/components/Button"
import { ScheduleAppointmentModal } from "@/components/Modals/ScheduleAppointment/ScheduleAppointmentModal"
import { ToastWrapper } from "./components/ToastWrapper"

export default async function AppointmentPage() {
  const { data: is_GM_live } = await supabaseAdmin.from("liveCall").select().eq("id", 1).single()
  const today = moment().format("YYYY-MM-DD")
  const { data: bookings } = await supabaseAdmin.from("bookings").select().gte("booking_date", today)
  return (
    <div className="flex flex-col gap-y-md justify-start items-center px-md pt-[8rem]">
      {is_GM_live?.isGMLive && (
        <>
          <Button className="font-bold" href="https://meet.google.com/yiy-pbnd-ygo" target="_blank">
            Join google meets now
          </Button>
          <span>or</span>
        </>
      )}

      <ScheduleAppointment bookings={bookings ?? []} />
      <ScheduleAppointmentModal />
      <ToastWrapper />
    </div>
  )
}
