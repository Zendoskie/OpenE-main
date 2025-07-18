'use client';

import React from 'react';

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-panel">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-uBlack">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-uGray max-w-3xl mx-auto">
              Get answers to common questions about our intelligent evaluation system
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-8 py-6">
                <h3 className="text-lg font-semibold text-uBlack mb-4">
                  How accurate is the AI evaluation compared to human graders?
                </h3>
                <p className="text-uGray leading-relaxed">
                  Our AI evaluation system achieves 95% accuracy compared to expert human evaluators. The system uses advanced GPT-4o and NLP algorithms trained on thousands of graded responses to ensure consistent and reliable assessment.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-8 py-6">
                <h3 className="text-lg font-semibold text-uBlack mb-4">
                  What platforms does OpenE support?
                </h3>
                <p className="text-uGray leading-relaxed">
                  OpenE is available as a desktop application for both Windows and Linux operating systems. We're also working on integration capabilities with popular Learning Management Systems.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-8 py-6">
                <h3 className="text-lg font-semibold text-uBlack mb-4">
                  Is student data secure and private?
                </h3>
                <p className="text-uGray leading-relaxed">
                  Yes, we take data security very seriously. All student responses are encrypted during transmission and storage. We comply with educational privacy regulations including FERPA and GDPR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;