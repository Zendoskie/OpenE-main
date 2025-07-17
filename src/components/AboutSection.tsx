'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-uBlack">
              About <span className="text-primary">Our Research Team</span>
            </h2>
            <p className="text-xl text-uGray max-w-3xl mx-auto">
              Meet the dedicated researchers and developers behind the OpenE intelligent evaluation system
            </p>
          </div>

          {/* Research Institution */}
          <div className="bg-panel rounded-2xl p-8 lg:p-12 text-center shadow-lg">
            <div className="space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-uBlack">Educational Technology Research Lab</h3>
              <p className="text-lg text-uGray max-w-2xl mx-auto leading-relaxed">
                Our research initiative focuses on developing innovative AI-powered solutions to enhance educational 
                assessment processes. We are committed to bridging the gap between traditional teaching methods and 
                modern technological advancement in education.
              </p>
            </div>
          </div>

          {/* Research Team */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-uBlack text-center">Research Team</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Lead Researcher */}
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/70 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Lead Researcher
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-uBlack">[Researcher Name]</h4>
                  <p className="text-uGray">Ph.D. in Educational Technology</p>
                  <p className="text-sm text-uGrayLight">
                    Specializes in AI applications in education and natural language processing for academic assessment.
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm text-uGray">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>researcher@university.edu</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Co-Researcher */}
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-uBlue to-uBlue/70 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-uBlue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Co-Researcher
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-uBlack">[Co-Researcher Name]</h4>
                  <p className="text-uGray">M.S. in Computer Science</p>
                  <p className="text-sm text-uGrayLight">
                    Expert in machine learning algorithms and educational data analytics with focus on assessment technologies.
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm text-uGray">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>co.researcher@university.edu</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Lead */}
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center space-y-6">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-uGreen to-uGreen/70 rounded-full mx-auto flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-uGreen text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Technical Lead
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold text-uBlack">[Technical Lead Name]</h4>
                  <p className="text-uGray">Software Engineering Specialist</p>
                  <p className="text-sm text-uGrayLight">
                    Responsible for system architecture, development, and ensuring robust performance of the evaluation platform.
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-sm text-uGray">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>tech.lead@university.edu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-panel to-background rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-uBlack">Get in Touch</h3>
                <p className="text-lg text-uGray leading-relaxed">
                  We welcome collaboration opportunities, feedback on our research, and inquiries about implementing 
                  our evaluation system in educational institutions.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-uBlack">Email</div>
                      <div className="text-uGray">research.opene@university.edu</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-uBlue/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-uBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-uBlack">Phone</div>
                      <div className="text-uGray">+1 (555) 123-4567</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-uGreen/10 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-uGreen" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-uBlack">Address</div>
                      <div className="text-uGray">Educational Technology Research Lab<br />University Campus, Building A, Room 301</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-uBlack">Research Collaboration</h4>
                <p className="text-uGray">
                  Interested in collaborating on educational technology research or implementing our evaluation system? 
                  Contact us to discuss partnership opportunities.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack">Academic partnerships welcome</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack">Open to pilot program participation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-uBlack">Available for conference presentations</span>
                  </div>
                </div>

                <a 
                  href="mailto:research.opene@university.edu" 
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

export default AboutSection;