import supabaseAdmin from "@/libs/supabaseAdmin"
import { ScheduleAppointment } from "./components/ScheduleAppointment"
import { ScheduleAppointmentModal } from "@/components/Modals/ScheduleAppointment/ScheduleAppointmentModal"
import { Button } from "@/components/Button"

export default async function AppointmentPage() {
  const { data } = await supabaseAdmin.from("liveCall").select().eq("id", 1).single()

  return (
    <div className="flex flex-col gap-y-md justify-start items-center px-md pt-[8rem]">
      {data?.isGMLive && (
        <>
          <Button className="font-bold" href="https://meet.google.com/yiy-pbnd-ygo" target="_blank">
            Join google meets now
          </Button>
          <span>or</span>
        </>
      )}

      <ScheduleAppointment />
      <ScheduleAppointmentModal />
    </div>
  )
}
