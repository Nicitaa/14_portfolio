import Link from "next/link"
import { AiOutlineCheckCircle } from "react-icons/ai"
import { BiErrorCircle } from "react-icons/bi"
import { IoMdWarning } from "react-icons/io"
import { CiCircleInfo } from "react-icons/ci"
import { twMerge } from "tailwind-merge"
import { motion } from "framer-motion"

import useToast from "@/store/useToast"

export function Toast() {
  const { status, subTitle, title } = useToast()

  return (
    <motion.div
      className={twMerge(
        // 100%-2% - its like paddings 1% for right and 1% for left
        `fixed w-full max-w-[calc(100%-2%)] laptop:max-w-[30vw]
         left-[1%] laptop:left-auto right-[1%] bottom-[2%] border-[1px]
         bg-foreground flex gap-x-2 rounded-lg px-4 py-2 z-[7777]`,
        status === "success" && "border-success",
        status === "error" && "border-danger",
        status === "warning" && "border-warning",
        status === "info" && "border-info",
      )}
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      exit={{ y: 200 }}>
      <div className="flex items-center">
        {status === "success" && <AiOutlineCheckCircle className="text-success" size={32} />}
        {status === "error" && <BiErrorCircle className="text-danger" size={32} />}
        {status === "warning" && <IoMdWarning className="text-warning" size={32} />}
        {status === "info" && <CiCircleInfo className="text-info" size={32} />}
      </div>
      <div className="flex flex-col w-full">
        <div className={`text-title font-bold`}>
          <h1 className="whitespace-pre-line">{title ? title : status}</h1>
        </div>
        <div className="text-subTitle whitespace-pre-line">
          {subTitle ? (
            subTitle
          ) : status === "error" ? (
            <p className="flex flex-wrap">
              Unknown error please contact -&nbsp;
              <Link className="inline-block text-info" href="t.me/nicitaacom">
                Admin
              </Link>
            </p>
          ) : status === "success" ? (
            <p>Just success</p>
          ) : status === "info" ? (
            <p>Warning!</p>
          ) : (
            <p>Info</p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
