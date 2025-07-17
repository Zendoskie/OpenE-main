'use client';

import React, { useState } from 'react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      question: "How accurate is the AI evaluation compared to human graders?",
      answer: "Our AI evaluation system achieves 95% accuracy compared to expert human evaluators. The system uses advanced GPT-4o and NLP algorithms trained on thousands of graded responses to ensure consistent and reliable assessment across different types of open-ended questions."
    },
    {
      question: "What types of questions can the system evaluate?",
      answer: "The system is designed to evaluate various types of open-ended questions including essay responses, short answers, critical thinking problems, and computer literacy assessments. It works particularly well with questions that require analysis, explanation, and demonstration of understanding rather than simple factual recall."
    },
    {
      question: "Is student data secure and private?",
      answer: "Yes, we take data security very seriously. All student responses are encrypted during transmission and storage. We comply with educational privacy regulations including FERPA and GDPR. Data is processed locally on your institution's systems, and we never store or share personal student information."
    },
    {
      question: "How long does it take to get results?",
      answer: "The AI evaluation provides results in approximately 3 seconds per response. This includes not only the score but also detailed feedback and suggestions for improvement. Batch processing of multiple responses can be completed in minutes rather than hours or days required for manual grading."
    },
    {
      question: "Can educators customize the grading criteria?",
      answer: "Absolutely! The system allows educators to define custom rubrics, adjust scoring weights for different criteria, and set specific evaluation parameters based on their course requirements. This ensures that the AI evaluation aligns with your teaching objectives and institutional standards."
    },
    {
      question: "What platforms does OpenE support?",
      answer: "OpenE is available as a desktop application for both Windows and Linux operating systems. We're also working on integration capabilities with popular Learning Management Systems (LMS) like Canvas, Blackboard, and Moodle to streamline the assessment workflow."
    },
    {
      question: "Do I need technical expertise to use the system?",
      answer: "Not at all! OpenE is designed with educators in mind, featuring an intuitive interface that requires no technical background. The setup process is straightforward, and we provide comprehensive documentation and support to help you get started quickly."
    },
    {
      question: "Can the system detect plagiarism or AI-generated content?",
      answer: "Yes, our system includes built-in detection capabilities for both traditional plagiarism and AI-generated content. It can identify suspicious patterns and flag responses that may require additional review, helping maintain academic integrity in your assessments."
    },
    {
      question: "How does the system handle different languages?",
      answer: "Currently, OpenE is optimized for English language assessments. However, we're actively developing multilingual capabilities and plan to support Spanish, French, and other major languages in future updates based on user demand and research priorities."
    },
    {
      question: "Is there a limit to how many responses I can evaluate?",
      answer: "The desktop application doesn't impose artificial limits on the number of responses you can evaluate. Performance depends on your system specifications, but the software is optimized to handle large batches efficiently, making it suitable for everything from small quizzes to institution-wide assessments."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-panel">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-uBlack">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-uGray max-w-3xl mx-auto">
              Get answers to common questions about our intelligent evaluation system
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-uBlack pr-8">
                    {item.question}
                  </h3>
                  <div className={`transform transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-8 pb-6 border-t border-panel">
                    <div className="pt-4">
                      <p className="text-uGray leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-uBlue/10 rounded-2xl p-8 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-uBlack">Still have questions?</h3>
              <p className="text-uGray max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our research team is here to help. 
                Contact us for more detailed information about our evaluation system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:research.opene@university.edu" 
                  className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Us</span>
                </a>
                <a 
                  href="#about" 
                  className="inline-flex items-center justify-center space-x-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m0 0h-4a2 2 0 01-2-2V4a2 2 0 012-2h4z" />
                  </svg>
                  <span>Contact Research Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;