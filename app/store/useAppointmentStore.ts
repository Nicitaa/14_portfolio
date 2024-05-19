import { create } from "zustand"

export type Step = "step-1" | "step-2" | "step-3"

export type Channel = "telegram" | "discord" | "google-meets" | null

export type SendNotificationTo = "tg" | "dis" | "email"

interface AppointmentStore {
  step: Step
  channel: Channel
  isShowUpOnACall: boolean
  isSendNotification: boolean
  sendNotificationTo: SendNotificationTo
  inputNotifictionTo: string
  setStep: (step: Step) => void
  setPrevStep: () => void
  setChannel: (channel: Channel) => void
  toggleIsShowUpOnACall: () => void
  toggleIsSendNotification: () => void
  setInputNotificationTo: (inputValue: string) => void
  setNextSendNotificationTo: () => void
}

export const useAppointmentStore = create<AppointmentStore>()((set, get) => ({
  step: "step-1",
  channel: null,
  isShowUpOnACall: false,
  isSendNotification: false,
  sendNotificationTo: "tg",
  inputNotifictionTo: "",
  setStep: (step: Step) => set(() => ({ step: step })),
  setPrevStep: () => set(() => ({ step: get().step === "step-3" ? "step-2" : "step-1" })),
  setChannel: (channel: Channel) => set(() => ({ channel: channel })),
  toggleIsShowUpOnACall: () => set(() => ({ isShowUpOnACall: !get().isShowUpOnACall })),
  toggleIsSendNotification: () => set(() => ({ isSendNotification: !get().isSendNotification })),
  setInputNotificationTo: (inputValue: string) => set(() => ({ inputNotifictionTo: inputValue })),
  setNextSendNotificationTo: () =>
    set(() => ({
      sendNotificationTo:
        get().sendNotificationTo === "tg" ? "dis" : get().sendNotificationTo === "dis" ? "email" : "tg",
    })),
}))
