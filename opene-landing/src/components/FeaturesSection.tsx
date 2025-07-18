'use client';

import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-panel">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-uBlack">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-uGray max-w-3xl mx-auto">
              Discover how our intelligent evaluation tool revolutionizes the way educators assess and provide feedback
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">AI-Powered Grading</h4>
                <p className="text-uGray">
                  Leveraging GPT-4o and advanced NLP to provide accurate, consistent evaluation of open-ended responses.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-uGreen/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-uGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Instant Feedback</h4>
                <p className="text-uGray">
                  Get detailed, constructive feedback in seconds rather than waiting days for manual grading.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-uBlue/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-uBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Analytics Dashboard</h4>
                <p className="text-uGray">
                  Track student progress and gain insights with comprehensive analytics and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;