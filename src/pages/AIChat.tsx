import React, { useState, useRef, useEffect } from "react";
import { BiArrowBack, BiSend, BiMicrophone, BiVolumeFull, BiBot, BiUser, BiErrorCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useSettings } from "../Contexts/SettingsContext"; // Import the settings context

// TypeScript: Add SpeechRecognition types if missing
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type SpeechRecognition = typeof window.SpeechRecognition extends undefined
  ? any
  : InstanceType<typeof window.SpeechRecognition>;
type SpeechRecognitionEvent = any;

// Simple browser speech recognition/tts helpers
function useSpeechRecognition(onResult: (text: string) => void) {
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) return;
    const SpeechRecognitionClass =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognitionClass();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = "en-US";
    recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map((result) => (result as SpeechRecognitionResult)[0].transcript)
        .join("");
      onResult(transcript);
      setListening(false);
    };
    recognitionRef.current.onend = () => setListening(false);
    recognitionRef.current.onerror = () => setListening(false);
  }, [onResult]);

  const startListening = () => {
    if (recognitionRef.current && !listening) {
      setListening(true);
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && listening) {
      recognitionRef.current.stop();
      setListening(false);
    }
  };

  return { startListening, stopListening, listening };
}

function speak(text: string) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new window.SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  window.speechSynthesis.cancel(); // stop others
  window.speechSynthesis.speak(utterance);
}

const initialMessages: Message[] = [
  {
    from: "system",
    text: "Hello! I'm your OpenE assistant. How can I help you today?",
  },
];

type Message = {
  from: "user" | "system";
  text: string;
};

const ErrorBanner = ({ message, onClose }: { message: string; onClose: () => void }) => (
  <motion.div
    className="fixed top-5 right-5 z-50 bg-red-800/90 border border-red-400 text-white px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg backdrop-blur-md"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
  >
    <BiErrorCircle className="text-xl" />
    <span>{message}</span>
    <button className="ml-2 text-white hover:text-red-200" onClick={onClose}>
      <BiArrowBack />
    </button>
  </motion.div>
);

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);
  const navigate = useNavigate();
  const bottomRef = useRef<HTMLDivElement>(null);
  const { allowAiVoiceOver } = useSettings(); // Get the AI voice over setting

  // Mic logic for user input
  const {
    startListening: startUserMic,
    stopListening: stopUserMic,
    listening: userListening,
  } = useSpeechRecognition((transcript) => {
    setInput((prev) => (prev ? prev + " " + transcript : transcript));
  });

  // Speaker logic for last system message
  const handleSpeak = (msg?: string) => {
    const text =
      msg ??
      [...messages]
        .reverse()
        .find((m) => m.from === "system")?.text ??
      "";
    if (text) speak(text);
  };

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) {
      setError("Please type a message to send.");
      return;
    }
    setIsSending(true);
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
    ]);
    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setMessages((msgs) => [
      ...msgs,
      {
        from: "system",
        text:
          "This is a mock AI chat. Implement real logic here. You said: " +
          input,
      },
    ]);
    setInput("");
    setIsSending(false);
  };

  // Responsive bubble
  const bubbleBase =
    "max-w-[70%] rounded-xl px-4 py-2 flex items-center gap-2 relative transition-all duration-200";
  const userBubble =
    "bg-primary text-black self-end shadow-lg shadow-primary/10";
  const systemBubble =
    "bg-surface text-white self-start shadow-lg shadow-primary/10";

  return (
    <motion.div
      className="flex flex-col h-full bg-surface rounded-2xl shadow-lg p-4 max-w-3xl mx-auto min-h-[70vh]"
      animate={{ backgroundColor: "#171f2c" }}
      transition={{ duration: 0.3 }}
    >
      {/* Error Banner */}
      <AnimatePresence>
        {error && (
          <ErrorBanner message={error} onClose={() => setError("")} />
        )}
      </AnimatePresence>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          className="text-primary flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <BiArrowBack size={22} />
          <span className="font-bold text-lg">Back</span>
        </button>
        <span className="font-bold text-xl">OpenE Chat</span>
      </div>
      {/* Chat bubbles */}
      <div className="flex-1 overflow-y-auto p-4 bg-card rounded-xl mb-2 flex flex-col gap-2">
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            className={`${bubbleBase} ${msg.from === "user" ? userBubble : systemBubble}`}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, type: "spring" }}
          >
            <span className="text-lg">
              {msg.from === "user" ? <BiUser /> : <BiBot />}
            </span>
            <span>{msg.text}</span>
            {msg.from === "system" && allowAiVoiceOver && (
              <button
                type="button"
                className="ml-2 text-primary hover:bg-card rounded-xl p-1"
                aria-label="Speaker"
                onClick={() => handleSpeak(msg.text)}
                tabIndex={0}
              >
                <BiVolumeFull size={18} />
              </button>
            )}
          </motion.div>
        ))}
        <div ref={bottomRef} />
      </div>
      {/* Input area */}
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (!isSending) sendMessage();
        }}
      >
        {allowAiVoiceOver && (
          <button
            type="button"
            onClick={userListening ? stopUserMic : startUserMic}
            className={`p-3 rounded-xl transition-all duration-200 ${
              userListening
                ? "bg-primary text-black animate-pulse shadow shadow-primary/30"
                : "text-primary bg-card hover:bg-primary/20"
            }`}
            aria-label={userListening ? "Stop Recording" : "Start Recording"}
          >
            <BiMicrophone size={22} />
          </button>
        )}
        <input
          className="flex-1 px-4 py-2 rounded-xl bg-card text-white focus:outline-none focus:ring focus:ring-primary/60"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isSending}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          type="submit"
          className={`bg-primary p-3 rounded-xl text-black font-bold flex items-center justify-center transition-all duration-200 ${
            isSending ? "opacity-70 cursor-not-allowed" : ""
          }`}
          disabled={isSending}
        >
          {isSending ? (
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
          ) : (
            <BiSend size={22} />
          )}
        </motion.button>
      </form>
    </motion.div>
  );
}

export default AIChat;