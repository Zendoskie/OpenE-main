'use client';

import React from 'react';

const ObjectiveSection = () => {
  return (
    <section id="objective" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-uBlack">
              Research <span className="text-primary">Objectives</span>
            </h2>
            <p className="text-xl text-uGray max-w-3xl mx-auto">
              Understanding the impact of AI-powered evaluation systems on educational assessment
            </p>
          </div>

          <div className="bg-panel rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-uBlack">Primary Research Goal</h3>
              <p className="text-lg text-uGray leading-relaxed">
                To develop and evaluate an intelligent assessment system that can accurately grade open-ended responses 
                while providing meaningful feedback to both students and educators. This research aims to bridge the gap 
                between traditional manual grading and modern educational technology needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ObjectiveSection;