import React, { useState } from "react";
import { BiCheck, BiX, BiPlus, BiTrash } from "react-icons/bi";
import { motion } from "framer-motion";
import { useLoading } from "../components/LoadingContext";

const Enumeration: React.FC = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswers, setCorrectAnswers] = useState<string[]>([""]);
  const [correctHidden, setCorrectHidden] = useState(false);
  const [answers, setAnswers] = useState<string[]>([""]);
  const [score, setScore] = useState("Not checked yet");
  const [details, setDetails] = useState("Submit your answer to see detailed results.");
  const [error, setError] = useState(""); // Add error state
  const { setLoading } = useLoading();

  // When correctAnswers changes (add/remove), make answers match its length
  React.useEffect(() => {
    setAnswers((prev) => {
      if (correctAnswers.length > prev.length) {
        // Add blank answer(s)
        return [...prev, ...Array(correctAnswers.length - prev.length).fill("")];
      } else if (correctAnswers.length < prev.length) {
        // Remove answer(s) from the end
        return prev.slice(0, correctAnswers.length);
      }
      return prev;
    });
  }, [correctAnswers.length]);

  const handleCheck = async () => {
    setError(""); // Clear previous errors

    // Validation: At least one correct and answer (not empty), and question not empty
    if (
      !question.trim() ||
      correctAnswers.length === 0 ||
      correctAnswers.every(a => !a.trim()) ||
      answers.length === 0 ||
      answers.every(a => !a.trim())
    ) {
      setError("Please provide a question, at least one correct answer, and fill in all your answers.");
      return;
    }

    setLoading(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Mock score: count matches
    const cleanCorrect = correctAnswers.map(a => a.trim().toLowerCase()).filter(Boolean);
    const cleanAnswers = answers.map(a => a.trim().toLowerCase()).filter(Boolean);
    const correct = cleanAnswers.filter(ans => cleanCorrect.includes(ans)).length;
    const total = cleanCorrect.length;
    setScore(`${((correct / (total || 1)) * 100).toFixed(0)}%`);
    setDetails(
      `Matched ${correct} out of ${total} correct answers. (${correct} correct, ${cleanAnswers.length - correct} incorrect)\nThis is a mock check!`
    );
    setLoading(false);
  };

  const handleClear = () => {
    setQuestion("");
    setCorrectAnswers([""]);
    setAnswers([""]);
    setScore("Not checked yet");
    setDetails("Submit your answer to see detailed results.");
    setError(""); // Clear error on reset
  };

  // For correct answers
  const handleCorrectChange = (idx: number, value: string) => {
    setCorrectAnswers(prev => prev.map((a, i) => (i === idx ? value : a)));
  };
  const addCorrect = () => setCorrectAnswers(prev => [...prev, ""]);
  const removeCorrect = (idx: number) => {
    setCorrectAnswers(prev =>
      prev.length > 1 ? prev.filter((_, i) => i !== idx) : prev
    );
  };

  // For user answers (mapping 1-1 to correct answers)
  const handleAnswerChange = (idx: number, value: string) => {
    setAnswers(prev => prev.map((a, i) => (i === idx ? value : a)));
  };

  return (
    <div className="relative flex flex-col w-full h-full">
      <div className="flex flex-row gap-6 w-full flex-1">
        <div className="flex flex-col gap-4 flex-1">
          {/* Question */}
          <motion.div className="bg-card rounded-2xl p-4 shadow-lg">
            <span className="text-lg font-semibold mb-2 block">Question</span>
            <div className="flex gap-2">
              <textarea
                value={question}
                onChange={e => setQuestion(e.target.value)}
                className="w-full h-16 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
                placeholder="Enter the enumeration exam question..."
              />
            </div>
          </motion.div>
          {/* Correct Answers (Dynamic List) */}
          <motion.div className="bg-card rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg font-semibold">Correct Answers</span>
              <label className="flex items-center gap-2">
                <span className="text-sm text-gray-400">{correctHidden ? "Show" : "Hide"}</span>
                <input
                  type="checkbox"
                  checked={correctHidden}
                  onChange={() => setCorrectHidden(!correctHidden)}
                  className="accent-primary"
                />
              </label>
            </div>
            {!correctHidden && (
              <div className="flex flex-col gap-2">
                {correctAnswers.map((answer, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <textarea
                      value={answer}
                      onChange={e => handleCorrectChange(idx, e.target.value)}
                      className="w-full h-12 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
                      placeholder={`Correct Answer #${idx + 1}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeCorrect(idx)}
                      className={`text-red-400 hover:text-red-600 p-2 rounded-lg transition-colors ${
                        correctAnswers.length === 1 ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                      disabled={correctAnswers.length === 1}
                      aria-label={`Remove correct answer #${idx + 1}`}
                    >
                      <BiTrash size={20} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addCorrect}
                  className="flex items-center gap-2 text-primary font-semibold mt-2 hover:text-cyan-400 transition-colors"
                >
                  <BiPlus /> Add Correct Answer
                </button>
              </div>
            )}
          </motion.div>
          {/* Answers (1-1 to Correct) */}
          <motion.div className="bg-card rounded-2xl p-4 shadow-lg">
            <span className="text-lg font-semibold mb-2 block">Answers</span>
            <div className="flex flex-col gap-2">
              {answers.map((answer, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <textarea
                    value={answer}
                    onChange={e => handleAnswerChange(idx, e.target.value)}
                    className="w-full h-12 rounded-xl bg-surface text-white p-3 focus:outline-none resize-none"
                    placeholder={`Answer #${idx + 1}`}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-2 mt-4">
              <button
                className="flex-1 bg-surface text-gray-300 rounded-xl p-2 font-semibold flex items-center gap-2 hover:bg-card"
                onClick={handleClear}
                type="button"
              >
                <BiX /> Clear
              </button>
              <button
                className="flex-1 bg-primary text-black rounded-xl p-2 font-semibold flex items-center gap-2 shadow-md hover:bg-opacity-90"
                onClick={handleCheck}
                type="button"
              >
                <BiCheck /> Check
              </button>
            </div>
            {error && (
              <div className="mt-2 text-red-400 font-medium">{error}</div>
            )}
          </motion.div>
        </div>
        {/* Check Results */}
        <motion.div className="bg-card rounded-2xl p-4 shadow-lg flex-[0.8] flex flex-col gap-4">
          <h3 className="text-lg font-semibold mb-2">Check Results</h3>
          <div>
            <div className="text-gray-400 mb-1">Score</div>
            <div className="bg-surface rounded-xl p-3 text-white font-bold mb-4">
              {score}
            </div>
            <div className="text-gray-400 mb-1">Details</div>
            <div className="bg-surface rounded-xl p-3 text-white min-h-[80px]">
              {details}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Enumeration;