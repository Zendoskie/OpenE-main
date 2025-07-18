'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-uBlack">
              About <span className="text-primary">Our Research Team</span>
            </h2>
            <p className="text-xl text-uGray max-w-3xl mx-auto">
              Meet the dedicated researchers and developers behind the OpenE intelligent evaluation system
            </p>
          </div>

          <div className="bg-panel rounded-2xl p-8 lg:p-12 text-center shadow-lg">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-uBlack">Educational Technology Research Lab</h3>
              <p className="text-lg text-uGray max-w-2xl mx-auto leading-relaxed">
                Our research initiative focuses on developing innovative AI-powered solutions to enhance educational 
                assessment processes. We are committed to bridging the gap between traditional teaching methods and 
                modern technological advancement in education.
              </p>
              <div className="pt-4">
                <a 
                  href="mailto:research.opene@university.edu" 
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
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

export default AboutSection;