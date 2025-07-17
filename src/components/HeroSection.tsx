'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background to-panel">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-uBlack leading-tight">
                Intelligent Evaluation Tool for{' '}
                <span className="text-primary">Open-Ended Questions</span>
              </h1>
              <p className="text-xl text-uGray leading-relaxed">
                Manual grading of open-ended questions is slow, inconsistent, and stressful for both teachers and students. 
                Our intelligent evaluation tool uses{' '}
                <span className="font-semibold text-uBlack">GPT-4o and NLP</span> to automatically analyze and score 
                student responses — providing clear, consistent, and constructive feedback in seconds.
              </p>
              <p className="text-lg text-uGrayLight">
                Perfect for computer literacy and other critical-thinking subjects.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#download" 
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors text-center"
              >
                Download Now
              </a>
              <a 
                href="#features" 
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors text-center"
              >
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-panel">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-uGray">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">3s</div>
                <div className="text-sm text-uGray">Average Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-uGray">Always Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Placeholder */}
          <div className="relative">
            <div className="bg-panel rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                {/* App Screenshot Placeholder */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-uRed rounded-full"></div>
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <div className="w-3 h-3 bg-uGreen rounded-full"></div>
                    </div>
                    <div className="text-sm text-uGrayLight">OpenE Evaluation Tool</div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-panel rounded w-3/4"></div>
                    <div className="h-4 bg-panel rounded w-full"></div>
                    <div className="h-4 bg-panel rounded w-2/3"></div>
                    <div className="flex justify-between items-center mt-6">
                      <div className="text-sm text-uGray">Score:</div>
                      <div className="bg-uGreen text-white px-3 py-1 rounded text-sm font-semibold">8.5/10</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-uBlue/20 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;