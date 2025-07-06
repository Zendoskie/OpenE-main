import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer,
} from "recharts";
import { BiExpand } from "react-icons/bi";
import { motion } from "framer-motion";
import { Modal } from "../components/Modal";
import {
  faqData, scoreByQuestion, overallScoreDist, qSpecificScores
} from "../data/analyticsMock";

const cardStyle = "bg-card rounded-2xl p-4 shadow-lg flex flex-col min-h-[320px] justify-between";

const COLORS = ["#38bdf8", "#2ee59d", "#facc15", "#f97316", "#a78bfa", "#f43f5e"];

const Analytics: React.FC = () => {
  const [maximized, setMaximized] = useState<string | null>(null);
  const [qSelect, setQSelect] = useState("Q1");
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const chartCards = [
    {
      key: "faq",
      title: "Frequently Asked Questions",
      chart: (
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={faqData}>
            <XAxis dataKey="question" stroke="#b4b4b4" />
            <YAxis stroke="#b4b4b4" />
            <Tooltip
              contentStyle={{ background: "#1d2532", borderRadius: "0.5rem" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#13ffbe" }}
              formatter={v => [`Frequency : ${v}`]}
            />
            <Line
              type="monotone"
              dataKey="frequency"
              stroke="#13ffbe"
              strokeWidth={2}
              dot={{ r: 4, fill: "#13ffbe" }}
              activeDot={{ r: 8, fill: "#13ffbe" }}
            />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      key: "score",
      title: "Score by Question",
      chart: (
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={scoreByQuestion}>
            <XAxis dataKey="question" stroke="#b4b4b4" />
            <YAxis stroke="#b4b4b4" />
            <Tooltip
              contentStyle={{ background: "#1d2532", borderRadius: "0.5rem" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#13ffbe" }}
              formatter={v => [`Average Score : ${v}`]}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#13ffbe"
              strokeWidth={2}
              dot={{ r: 4, fill: "#13ffbe" }}
              activeDot={{ r: 8, fill: "#13ffbe" }}
            />
          </LineChart>
        </ResponsiveContainer>
      ),
    },
    {
      key: "overall",
      title: "Overall Score Distribution",
      chart: (
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={overallScoreDist}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {overallScoreDist.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" iconType="circle" />
            <Tooltip
              contentStyle={{ background: "#1d2532", borderRadius: "0.5rem" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#13ffbe" }}
            />
          </PieChart>
        </ResponsiveContainer>
      ),
    },
    {
      key: "qspec",
      title: "Question-Specific Scores",
      chart: (
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={qSpecificScores[qSelect]}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {qSpecificScores[qSelect]?.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Legend verticalAlign="bottom" iconType="circle" />
            <Tooltip
              contentStyle={{ background: "#1d2532", borderRadius: "0.5rem" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#13ffbe" }}
            />
          </PieChart>
        </ResponsiveContainer>
      ),
      extra: (
        <select
          className="ml-3 bg-surface text-white rounded-lg px-2 py-1"
          value={qSelect}
          onChange={e => setQSelect(e.target.value)}
        >
          {Object.keys(qSpecificScores).map(q => (
            <option key={q} value={q}>{q}</option>
          ))}
        </select>
      ),
    },
  ];

  // Render the modal only once, outside the .map
  const maximizedCard = chartCards.find(card => card.key === maximized);

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        {chartCards.map((card, idx) => {
          const isMaximized = maximized === card.key;
          const modalOpen = maximized !== null;
          return (
            <motion.div
              className={cardStyle}
              key={card.key}
              whileHover={
                !modalOpen
                  ? { scale: 1.02, boxShadow: "0 0 12px #13ffbe44" }
                  : undefined
              }
              style={{
                pointerEvents:
                  modalOpen && !isMaximized ? "none" : "auto",
                opacity: modalOpen && !isMaximized ? 0.5 : 1,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={() => !modalOpen && setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-semibold">{card.title}</span>
                <button
                  className="p-2 text-primary hover:bg-surface rounded-xl"
                  onClick={() => setMaximized(card.key)}
                  aria-label="Maximize"
                  tabIndex={modalOpen && !isMaximized ? -1 : 0}
                  type="button"
                >
                  <BiExpand size={20} />
                </button>
                {card.extra && card.extra}
              </div>
              {card.chart}
            </motion.div>
          );
        })}
      </div>
      {/* Modal is rendered ONCE, for the maximized card */}
      {maximizedCard && (
        <Modal open={!!maximized} onClose={() => setMaximized(null)}>
          <div className="text-xl font-bold text-white mb-4">
            {maximizedCard.title}{maximizedCard.key === "qspec" && `: ${qSelect}`}
          </div>
          <div className="w-[600px] h-[380px]">
            {(() => {
              if (maximizedCard.key === "faq")
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={faqData}>
                      <XAxis dataKey="question" stroke="#b4b4b4" />
                      <YAxis stroke="#b4b4b4" />
                      <Tooltip contentStyle={{ background: "#1d2532", borderRadius: "0.5rem" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#13ffbe" }} formatter={v => [`Frequency : ${v}`]} />
                      <Line type="monotone" dataKey="frequency" stroke="#13ffbe" strokeWidth={2} dot={{ r: 4, fill: "#13ffbe" }} activeDot={{ r: 8, fill: "#13ffbe" }} />
                    </LineChart>
                  </ResponsiveContainer>
                );
              if (maximizedCard.key === "score")
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={scoreByQuestion}>
                      <XAxis dataKey="question" stroke="#b4b4b4" />
                      <YAxis stroke="#b4b4b4" />
                      <Tooltip contentStyle={{ background: "#1d2532", borderRadius: "0.5rem" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#13ffbe" }} formatter={v => [`Average Score : ${v}`]} />
                      <Line type="monotone" dataKey="score" stroke="#13ffbe" strokeWidth={2} dot={{ r: 4, fill: "#13ffbe" }} activeDot={{ r: 8, fill: "#13ffbe" }} />
                    </LineChart>
                  </ResponsiveContainer>
                );
              if (maximizedCard.key === "overall")
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={overallScoreDist} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                        {overallScoreDist.map((entry, idx) => (<Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />))}
                      </Pie>
                      <Legend verticalAlign="bottom" iconType="circle" />
                      <Tooltip contentStyle={{ background: "#1d2532", borderRadius: "0.5rem" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#13ffbe" }} />
                    </PieChart>
                  </ResponsiveContainer>
                );
              if (maximizedCard.key === "qspec")
                return (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={qSpecificScores[qSelect]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                        {qSpecificScores[qSelect]?.map((entry, idx) => (<Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />))}
                      </Pie>
                      <Legend verticalAlign="bottom" iconType="circle" />
                      <Tooltip contentStyle={{ background: "#1d2532", borderRadius: "0.5rem" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#13ffbe" }} />
                    </PieChart>
                  </ResponsiveContainer>
                );
            })()}
          </div>
          {maximizedCard.key === "qspec" && (
            <div className="mt-4">
              <select
                className="bg-surface text-white rounded-lg px-2 py-1"
                value={qSelect}
                onChange={e => setQSelect(e.target.value)}
              >
                {Object.keys(qSpecificScores).map(q => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default Analytics;