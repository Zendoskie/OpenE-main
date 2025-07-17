'use client';

import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-panel">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-uBlack">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-uGray max-w-3xl mx-auto">
              Discover how our intelligent evaluation tool revolutionizes the way educators assess and provide feedback
            </p>
          </div>

          {/* Feature 1 - AI-Powered Grading */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-uBlack">AI-Powered Intelligent Grading</h3>
                <p className="text-lg text-uGray leading-relaxed">
                  Leveraging GPT-4o and advanced Natural Language Processing, our system understands context, 
                  evaluates critical thinking, and provides scores that align with expert human evaluators.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack">Contextual understanding of responses</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack">Multiple evaluation criteria assessment</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack">Consistent scoring across all responses</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Screenshot Placeholder 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-uGray h-8 flex items-center justify-between px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-uRed rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-uGreen rounded-full"></div>
                  </div>
                  <div className="text-white text-sm">AI Grading Interface</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-center text-uGray">
                    <div className="w-32 h-32 bg-panel rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm">Screenshot placeholder for AI Grading Interface</p>
                    <p className="text-xs text-uGrayLight mt-2">UI will be added when desktop app is completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Instant Feedback */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Screenshot Placeholder 2 */}
            <div className="relative lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-uGray h-8 flex items-center justify-between px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-uRed rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-uGreen rounded-full"></div>
                  </div>
                  <div className="text-white text-sm">Feedback Dashboard</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-center text-uGray">
                    <div className="w-32 h-32 bg-panel rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-uGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <p className="text-sm">Screenshot placeholder for Feedback System</p>
                    <p className="text-xs text-uGrayLight mt-2">UI will be added when desktop app is completed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 lg:order-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-uGreen rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-uBlack">Instant Detailed Feedback</h3>
                <p className="text-lg text-uGray leading-relaxed">
                  Students receive immediate, constructive feedback that helps them understand their mistakes and 
                  learn from them. No more waiting days or weeks for assessment results.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-uGreen rounded-full"></div>
                    <span className="text-uBlack">Real-time response analysis</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-uGreen rounded-full"></div>
                    <span className="text-uBlack">Specific improvement suggestions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-uGreen rounded-full"></div>
                    <span className="text-uBlack">Learning resources recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 3 - Analytics Dashboard */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-uBlue rounded-full">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-uBlack">Comprehensive Analytics</h3>
                <p className="text-lg text-uGray leading-relaxed">
                  Track student progress, identify learning patterns, and gain insights into class performance 
                  with detailed analytics and reporting features.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-uBlue rounded-full"></div>
                    <span className="text-uBlack">Individual student progress tracking</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-uBlue rounded-full"></div>
                    <span className="text-uBlack">Class performance overview</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-uBlue rounded-full"></div>
                    <span className="text-uBlack">Export reports for administrative review</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Screenshot Placeholder 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-uGray h-8 flex items-center justify-between px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-uRed rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-uGreen rounded-full"></div>
                  </div>
                  <div className="text-white text-sm">Analytics Dashboard</div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="text-center text-uGray">
                    <div className="w-32 h-32 bg-panel rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-16 h-16 text-uBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm">Screenshot placeholder for Analytics Dashboard</p>
                    <p className="text-xs text-uGrayLight mt-2">UI will be added when desktop app is completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Secure & Private</h4>
                <p className="text-uGray">
                  All student data is encrypted and processed securely. Complete privacy protection for educational institutions.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Easy Integration</h4>
                <p className="text-uGray">
                  Seamlessly integrate with existing Learning Management Systems and educational workflows.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-uBlack">Scalable Solution</h4>
                <p className="text-uGray">
                  Handle everything from individual assignments to institution-wide assessments with consistent performance.
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