import React, { useState, useRef, useEffect } from "react";
import { BiArrowBack, BiSend, BiMicrophone, BiVolumeFull } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
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

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((msgs) => [
      ...msgs,
      { from: "user", text: input },
      {
        from: "system",
        text:
          "This is a mock AI chat. Implement real logic here. You said: " +
          input,
      },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-full bg-surface rounded-2xl shadow-lg p-4 max-w-3xl mx-auto">
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
      <div className="flex-1 overflow-y-auto p-4 bg-card rounded-xl mb-2 flex flex-col gap-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[70%] rounded-xl px-4 py-2 flex items-center gap-2 ${
              msg.from === "user"
                ? "bg-primary text-black self-end"
                : "bg-surface text-white self-start"
            }`}
          >
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
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        {allowAiVoiceOver && (
          <button
            type="button"
            onClick={userListening ? stopUserMic : startUserMic}
            className={`p-3 rounded-xl transition-colors ${
              userListening
                ? "bg-primary text-black animate-pulse"
                : "text-primary bg-card hover:bg-primary/20"
            }`}
            aria-label={userListening ? "Stop Recording" : "Start Recording"}
          >
            <BiMicrophone size={22} />
          </button>
        )}
        <input
          className="flex-1 px-4 py-2 rounded-xl bg-card text-white focus:outline-none"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          type="submit"
          className="bg-primary p-3 rounded-xl text-black font-bold"
        >
          <BiSend size={22} />
        </motion.button>
      </form>
    </div>
  );
}

export default AIChat;