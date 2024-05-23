import { create } from "zustand"

/* usage
const message = useToast()

toast.show("status",?"title",?"subTitle",?timeout)
e.g
toast.show("success")
toast.show("success","custom title")
toast.show("success","custom title","custom subTitle")
toast.show("success","custom title","custom subTitle",6000) //disashow after 6s

*/

export type TStatus = "error" | "success" | "warning" | "info"

interface MessageStore {
  isOpen: boolean
  show: (status: TStatus, title?: string, subTitle?: React.ReactNode, timeoutInMs?: number) => void
  status: TStatus
  title?: string
  subTitle?: React.ReactNode
}

export const useToast = create<MessageStore>(set => ({
  isOpen: false,
  status: "error",
  _subTitle: "",
  show(status: TStatus, _title?: string, _subTitle?: React.ReactNode, timeoutInMs?: number) {
    set({
      status: status,
      isOpen: true,
      title: _title,
      subTitle: _subTitle,
    })
    setTimeout(
      () => {
        set({ isOpen: false })
      },
      timeoutInMs ? timeoutInMs : 6000,
    )
  },
}))

export default useToast
