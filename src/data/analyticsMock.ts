export const faqData = [
  { question: "Q1", frequency: 24 },
  { question: "Q2", frequency: 18 },
  { question: "Q3", frequency: 15 },
  { question: "Q4", frequency: 10 },
  { question: "Q5", frequency: 6 },
];

export const scoreByQuestion = [
  { question: "Q1", score: 85 },
  { question: "Q2", score: 73 },
  { question: "Q3", score: 95 },
  { question: "Q4", score: 65 },
  { question: "Q5", score: 78 },
];

export const overallScoreDist = [
  { name: "90-100", value: 15 },
  { name: "80-89", value: 30 },
  { name: "70-79", value: 25 },
  { name: "60-69", value: 20 },
  { name: "Below 60", value: 10 },
];

export const qSpecificScores: Record<string, { name: string; value: number }[]> = {
  Q1: [
    { name: "Excellent", value: 40 },
    { name: "Good", value: 30 },
    { name: "Average", value: 20 },
    { name: "Poor", value: 10 },
  ],
  Q2: [
    { name: "Excellent", value: 30 },
    { name: "Good", value: 40 },
    { name: "Average", value: 20 },
    { name: "Poor", value: 10 },
  ],
};