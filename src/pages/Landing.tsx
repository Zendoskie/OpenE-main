import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-surface">
      {/* Theme context is read but not used in this component, so it could be removed unless used elsewhere */}
      <div className="absolute top-4 right-4" />
      <div className="flex flex-col items-center gap-6">
        <div>
          <h1 className="text-6xl font-extrabold text-primary text-center mb-2">OpenE</h1>
          <h2 className="text-2xl text-white text-center font-light">
            Evaluation solution for computer literacy subject
          </h2>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-primary bg-opacity-10 text-primary text-xl font-semibold px-8 py-3 rounded-xl shadow-md"
          onClick={() => navigate("/evaluate")}
          type="button"
        >
          Get Started &nbsp; <span className="inline-block">&rarr;</span>
        </motion.button>
        <span className="text-gray-400 text-sm">
          Analyze and evaluate computer science concepts
        </span>
      </div>
      <footer className="absolute bottom-4 w-full text-center text-gray-400 text-sm">
        © 2025 OpenE – All rights reserved
      </footer>
    </div>
  );
};

export default Landing;