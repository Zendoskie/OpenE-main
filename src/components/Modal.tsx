import React, { PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiX } from "react-icons/bi";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200 } },
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

export function Modal({ open, onClose, children }: PropsWithChildren<ModalProps>) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="relative bg-card rounded-2xl p-8 shadow-lg min-w-[600px] min-h-[400px] max-h-[90vh] max-w-3xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-white hover:text-primary"
              onClick={onClose}
              aria-label="Close"
            >
              <BiX size={28} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}