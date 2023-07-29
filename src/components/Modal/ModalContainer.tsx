import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { gsap } from 'gsap'

import { IoMdClose } from 'react-icons/io'

interface ModalContainerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export function ModalContainer({ isOpen, onClose, children, className }: ModalContainerProps) {

  const modalBgRef = useRef(null)

  const [showModal, setShowModal] = useState(isOpen)

  /* onOpen - show modal - disable scroll and scrollbar - hide navbar - show bg */
  useEffect(() => {
    setShowModal(isOpen)
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.width = 'calc(100% - 17px)';

      const modalBg = modalBgRef.current
      if (modalBg) {
        gsap.to(modalBg, {
          duration: 0.5,
          backgroundColor: 'rgba(0,0,0,0.4)',
        })
      }
    }
  }, [isOpen])

  /* onClose - close modal - show navbar - show scrollbar */
  function closeModal() {
    onClose()
    document.body.removeAttribute('style');
  }



  /* for e.stopPropagation when mousedown on modal and mouseup on modalBg */
  const modalBgHandler = useSwipeable({
    onTouchStartOrOnMouseDown: () => {
      closeModal()
    },
    trackMouse: true
  })

  const modalHandler = useSwipeable({
    onTouchStartOrOnMouseDown: (e) => {
      e.event.stopPropagation()
    },
    trackMouse: true
  })
  return (
    <AnimatePresence>
      {showModal &&
        <div className="fixed inset-[0] bg-[rgba(0,0,0,0.2)] z-[99]
         flex justify-center items-center" {...modalBgHandler} ref={modalBgRef}>
          <motion.div className={`relative bg-primary flex justify-center items-center rounded-sm z-[100] ${className}`}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            {...modalHandler}>
            <IoMdClose className='absolute right-[0] top-[0] border-b-[1px] border-l-[1px] border-solid border-cta rounded-bl-sm cursor-pointer'
              size={32} onClick={closeModal} />
            {children}
          </motion.div>
        </div>}
    </AnimatePresence>
  )
}