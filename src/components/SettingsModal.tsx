import React, { useContext } from "react";
import { BiX } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { SettingsContext } from "../Contexts/SettingsContext";

type SettingsModalProps = {
  open: boolean;
  onClose: () => void;
};

const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose }) => {
  const { allowAiVoiceOver, setAllowAiVoiceOver } = useContext(SettingsContext);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-card p-6 rounded-2xl shadow-xl min-w-[320px] relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-primary hover:bg-surface rounded-full p-1"
              onClick={onClose}
              aria-label="Close settings"
              type="button"
            >
              <BiX size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4 text-primary">Settings</h2>
            <div className="flex items-center gap-4 mb-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={allowAiVoiceOver}
                  onChange={e => setAllowAiVoiceOver(e.target.checked)}
                  className="accent-primary"
                />
                <span className="font-medium text-white">Allow AI voice over</span>
              </label>
            </div>
            <p className="text-sm text-gray-400">
              When enabled, microphone and speaker controls will appear in supported tabs.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsModal;