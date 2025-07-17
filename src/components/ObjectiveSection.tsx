'use client';

import React from 'react';

const ObjectiveSection = () => {
  return (
    <section id="objective" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-uBlack">
              Research <span className="text-primary">Objectives</span>
            </h2>
            <p className="text-xl text-uGray max-w-3xl mx-auto">
              Understanding the impact of AI-powered evaluation systems on educational assessment
            </p>
          </div>

          {/* Main Objective */}
          <div className="bg-panel rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-uBlack">Primary Research Goal</h3>
              <p className="text-lg text-uGray leading-relaxed">
                To develop and evaluate an intelligent assessment system that can accurately grade open-ended responses 
                while providing meaningful feedback to both students and educators. This research aims to bridge the gap 
                between traditional manual grading and modern educational technology needs.
              </p>
            </div>
          </div>

          {/* Specific Objectives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-panel">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-uBlue/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-uBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Speed & Efficiency</h4>
                <p className="text-uGray">
                  Reduce grading time from hours to seconds while maintaining assessment quality and consistency.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-panel">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-uGreen/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-uGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Accuracy Analysis</h4>
                <p className="text-uGray">
                  Measure the precision of AI-generated scores compared to expert human evaluators across different question types.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-panel">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m2-4h4a2 2 0 012 2v6a2 2 0 01-2 2h-4m0 0h-4a2 2 0 01-2-2V4a2 2 0 012-2h4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Feedback Quality</h4>
                <p className="text-uGray">
                  Evaluate the effectiveness of AI-generated feedback in helping students understand and improve their responses.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-panel">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-uRed/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-uRed" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">User Acceptance</h4>
                <p className="text-uGray">
                  Study educator and student satisfaction with AI-assisted grading compared to traditional methods.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-panel">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Scalability Testing</h4>
                <p className="text-uGray">
                  Assess system performance across different educational contexts and varying volumes of student responses.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-panel">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Bias Detection</h4>
                <p className="text-uGray">
                  Identify and mitigate potential biases in AI evaluation to ensure fair assessment across diverse student populations.
                </p>
              </div>
            </div>
          </div>

          {/* Expected Outcomes */}
          <div className="bg-gradient-to-r from-primary/10 to-uBlue/10 rounded-2xl p-8 lg:p-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-uBlack">Expected Research Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack font-medium">Enhanced Educational Efficiency</span>
                  </div>
                  <p className="text-uGray ml-4">Significantly reduce time spent on assessment while improving feedback quality.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack font-medium">Standardized Evaluation Framework</span>
                  </div>
                  <p className="text-uGray ml-4">Establish consistent grading criteria across different educators and institutions.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack font-medium">Improved Student Learning</span>
                  </div>
                  <p className="text-uGray ml-4">Provide immediate, detailed feedback to enhance student understanding and performance.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack font-medium">Technology Integration Guidelines</span>
                  </div>
                  <p className="text-uGray ml-4">Develop best practices for implementing AI evaluation tools in educational settings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;