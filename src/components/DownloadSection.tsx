'use client';

import React from 'react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-uBlack">
              Download <span className="text-primary">OpenE</span>
            </h2>
            <p className="text-xl text-uGray max-w-3xl mx-auto">
              Get started with our intelligent evaluation tool. Available for Windows and Linux platforms.
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Windows Download */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-panel hover:border-primary transition-colors">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-uBlue/10 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-uBlue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 12V6.75L9 5.43V11.59L3 12ZM3 13L9 13.41V19.57L3 18.25V13ZM10 13.59L21 15.25V21.25L10 19.25V13.59ZM21 3.75V9.75L10 11.59V5.59L21 3.75Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-uBlack">Windows</h3>
                    <p className="text-uGray">Windows 10/11 (64-bit)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-uBlack">System Requirements:</h4>
                    <ul className="text-sm text-uGray space-y-1">
                      <li>• Windows 10 or later (64-bit)</li>
                      <li>• 4GB RAM (8GB recommended)</li>
                      <li>• 2GB available disk space</li>
                      <li>• Internet connection for AI processing</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-uBlack">Package Info:</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-uGray">Version:</span>
                      <span className="text-uBlack font-medium">1.0.0 (Beta)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-uGray">Size:</span>
                      <span className="text-uBlack font-medium">~150 MB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-uGray">Format:</span>
                      <span className="text-uBlack font-medium">.msi installer</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="w-full bg-uBlue text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-uBlue/90 transition-colors flex items-center justify-center space-x-2"
                  onClick={() => alert('Download will be available when desktop app is completed')}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <span>Download for Windows</span>
                </button>

                <p className="text-xs text-uGrayLight text-center">
                  * Download placeholder - will be activated when desktop app is completed
                </p>
              </div>
            </div>

            {/* Linux Download */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-panel hover:border-primary transition-colors">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0 .04.12c.861-.687 1.711-1.365 2.31-2.169.443-.59.723-1.291.971-1.983.31-.865.519-1.607 1.057-2.256.58-.699 1.219-1.411 1.918-2.045.682-.619 1.442-1.138 2.213-1.653.771-.515 1.562-1.024 2.252-1.665.551-.511.976-1.13 1.4-1.754a17.364 17.364 0 0 0 1.304-2.14c.246-.487.425-1.023.425-1.565 0-.243-.06-.479-.18-.685-.12-.206-.3-.374-.51-.493-.42-.239-.97-.239-1.39 0-.21.119-.39.287-.51.493-.12.206-.18.442-.18.685 0 .542.179 1.078.425 1.565.123.244.263.476.425.693.081.108.174.208.28.296.053.044.108.085.166.123.029.019.059.036.09.051.015.008.031.015.047.021.008.003.016.006.025.008.004.001.009.002.013.002.002 0 .004 0 .006.001h.001c.001 0 .002 0 .003.001.006.002.013.003.019.005.013.004.025.009.038.013.025.008.051.017.076.025.05.016.099.032.148.047.098.03.194.059.289.087.19.056.375.111.556.164.362.106.714.21 1.056.31.684.2 1.346.39 1.98.57.634.18 1.24.35 1.815.51.575.16 1.12.31 1.634.45.257.07.507.14.75.21.122.035.24.07.355.104.058.017.114.034.169.05.027.008.054.016.08.023.013.004.026.007.038.01.006.002.012.003.018.004.003.001.006.001.009.002.001 0 .003 0 .004.001h.001l.002.001c.002 0 .003.001.005.001.003.001.006.001.009.002.006.001.012.002.018.003.012.002.024.004.036.006.024.004.048.008.072.011.048.006.096.012.144.017.096.01.191.019.285.027.188.016.373.03.556.042.366.024.725.045 1.076.063.702.036 1.39.067 2.06.093.67.026 1.324.048 1.96.066.636.018 1.255.032 1.857.043.301.006.598.011.891.015.146.002.291.004.434.005.072.001.143.001.213.002.035 0 .07 0 .104.001.017 0 .034 0 .051 0 .008 0 .017 0 .025 0 .004 0 .008 0 .012 0 .002 0 .004 0 .006 0h.001c.001 0 .002 0 .003 0 .001 0 .002 0 .003 0 .002 0 .003 0 .005 0 .002 0 .004 0 .006 0 .004 0 .008 0 .012 0 .008 0 .016 0 .024 0 .016 0 .032 0 .048 0 .032 0 .064-.001.096-.001.064-.001.128-.002.191-.003.126-.002.252-.005.377-.008.25-.006.498-.013.744-.021.492-.016.979-.034 1.458-.055.958-.042 1.906-.09 2.836-.144 1.86-.108 3.675-.236 5.422-.38 1.747-.144 3.425-.305 4.999-.48 1.574-.175 3.044-.364 4.384-.566 1.34-.202 2.549-.416 3.604-.642 1.055-.226 1.956-.464 2.681-.714.725-.25 1.273-.511 1.618-.784.345-.273.487-.558.394-.856-.093-.298-.44-.608-1.034-.931-.594-.323-1.436-.659-2.525-1.008-1.089-.349-2.425-.71-3.982-1.084-1.557-.374-3.335-.76-5.296-1.159-1.961-.399-4.104-.81-6.394-1.233-2.29-.423-4.728-.858-7.268-1.305-2.54-.447-5.182-.906-7.875-1.377-2.693-.471-5.437-.954-8.181-1.449C12.82.008 12.66 0 12.504 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-uBlack">Linux</h3>
                    <p className="text-uGray">Ubuntu 20.04+ / Debian 11+</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-uBlack">System Requirements:</h4>
                    <ul className="text-sm text-uGray space-y-1">
                      <li>• Ubuntu 20.04+ or compatible distro</li>
                      <li>• 4GB RAM (8GB recommended)</li>
                      <li>• 2GB available disk space</li>
                      <li>• GTK 3.0 or later</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-uBlack">Package Info:</h4>
                    <div className="flex justify-between text-sm">
                      <span className="text-uGray">Version:</span>
                      <span className="text-uBlack font-medium">1.0.0 (Beta)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-uGray">Size:</span>
                      <span className="text-uBlack font-medium">~140 MB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-uGray">Format:</span>
                      <span className="text-uBlack font-medium">.deb / .AppImage</span>
                    </div>
                  </div>
                </div>

                <button 
                  className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                  onClick={() => alert('Download will be available when desktop app is completed')}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <span>Download for Linux</span>
                </button>

                <p className="text-xs text-uGrayLight text-center">
                  * Download placeholder - will be activated when desktop app is completed
                </p>
              </div>
            </div>
          </div>

          {/* Installation Guide */}
          <div className="bg-panel rounded-2xl p-8 lg:p-12">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-uBlack mb-4">Installation Guide</h3>
                <p className="text-lg text-uGray max-w-2xl mx-auto">
                  Follow these simple steps to get OpenE running on your system
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Windows Installation */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-uBlue rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3 12V6.75L9 5.43V11.59L3 12ZM3 13L9 13.41V19.57L3 18.25V13ZM10 13.59L21 15.25V21.25L10 19.25V13.59ZM21 3.75V9.75L10 11.59V5.59L21 3.75Z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-uBlack">Windows Installation</h4>
                  </div>
                  <ol className="space-y-2 text-uGray ml-11">
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-primary min-w-[20px]">1.</span>
                      <span>Download the .msi installer file</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-primary min-w-[20px]">2.</span>
                      <span>Right-click and select "Run as administrator"</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-primary min-w-[20px]">3.</span>
                      <span>Follow the installation wizard</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-primary min-w-[20px]">4.</span>
                      <span>Launch OpenE from Start Menu or Desktop</span>
                    </li>
                  </ol>
                </div>

                {/* Linux Installation */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0 .04.12c.861-.687 1.711-1.365 2.31-2.169.443-.59.723-1.291.971-1.983.31-.865.519-1.607 1.057-2.256.58-.699 1.219-1.411 1.918-2.045.682-.619 1.442-1.138 2.213-1.653.771-.515 1.562-1.024 2.252-1.665.551-.511.976-1.13 1.4-1.754a17.364 17.364 0 0 0 1.304-2.14c.246-.487.425-1.023.425-1.565 0-.243-.06-.479-.18-.685-.12-.206-.3-.374-.51-.493-.42-.239-.97-.239-1.39 0-.21.119-.39.287-.51.493-.12.206-.18.442-.18.685 0 .542.179 1.078.425 1.565.123.244.263.476.425.693.081.108.174.208.28.296.053.044.108.085.166.123.029.019.059.036.09.051.015.008.031.015.047.021.008.003.016.006.025.008.004.001.009.002.013.002.002 0 .004 0 .006.001h.001c.001 0 .002 0 .003.001.006.002.013.003.019.005.013.004.025.009.038.013.025.008.051.017.076.025.05.016.099.032.148.047.098.03.194.059.289.087.19.056.375.111.556.164.362.106.714.21 1.056.31.684.2 1.346.39 1.98.57.634.18 1.24.35 1.815.51.575.16 1.12.31 1.634.45.257.07.507.14.75.21.122.035.24.07.355.104.058.017.114.034.169.05.027.008.054.016.08.023.013.004.026.007.038.01.006.002.012.003.018.004.003.001.006.001.009.002.001 0 .003 0 .004.001h.001l.002.001c.002 0 .003.001.005.001.003.001.006.001.009.002.006.001.012.002.018.003.012.002.024.004.036.006.024.004.048.008.072.011.048.006.096.012.144.017.096.01.191.019.285.027.188.016.373.03.556.042.366.024.725.045 1.076.063.702.036 1.39.067 2.06.093.67.026 1.324.048 1.96.066.636.018 1.255.032 1.857.043.301.006.598.011.891.015.146.002.291.004.434.005.072.001.143.001.213.002.035 0 .07 0 .104.001.017 0 .034 0 .051 0 .008 0 .017 0 .025 0 .004 0 .008 0 .012 0 .002 0 .004 0 .006 0h.001c.001 0 .002 0 .003 0 .001 0 .002 0 .003 0 .002 0 .003 0 .005 0 .002 0 .004 0 .006 0 .004 0 .008 0 .012 0 .008 0 .016 0 .024 0 .016 0 .032 0 .048 0 .032 0 .064-.001.096-.001.064-.001.128-.002.191-.003.126-.002.252-.005.377-.008.25-.006.498-.013.744-.021.492-.016.979-.034 1.458-.055.958-.042 1.906-.09 2.836-.144 1.86-.108 3.675-.236 5.422-.38 1.747-.144 3.425-.305 4.999-.48 1.574-.175 3.044-.364 4.384-.566 1.34-.202 2.549-.416 3.604-.642 1.055-.226 1.956-.464 2.681-.714.725-.25 1.273-.511 1.618-.784.345-.273.487-.558.394-.856-.093-.298-.44-.608-1.034-.931-.594-.323-1.436-.659-2.525-1.008-1.089-.349-2.425-.71-3.982-1.084-1.557-.374-3.335-.76-5.296-1.159-1.961-.399-4.104-.81-6.394-1.233-2.29-.423-4.728-.858-7.268-1.305-2.54-.447-5.182-.906-7.875-1.377-2.693-.471-5.437-.954-8.181-1.449C12.82.008 12.66 0 12.504 0z"/>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-uBlack">Linux Installation</h4>
                  </div>
                  <ol className="space-y-2 text-uGray ml-11">
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-primary min-w-[20px]">1.</span>
                      <span>Download .deb package or .AppImage file</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-primary min-w-[20px]">2.</span>
                      <span>For .deb: <code className="bg-gray-100 px-1 rounded text-sm">sudo dpkg -i opene.deb</code></span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-primary min-w-[20px]">3.</span>
                      <span>For .AppImage: Make executable and run directly</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="font-semibold text-primary min-w-[20px]">4.</span>
                      <span>Launch from Applications menu or terminal</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Support Note */}
              <div className="bg-primary/10 rounded-xl p-6 text-center">
                <div className="space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-uBlack">Need Help?</h4>
                  <p className="text-uGray">
                    If you encounter any issues during installation, please contact our support team at{' '}
                    <a href="mailto:support@opene.edu" className="text-primary hover:underline">
                      support@opene.edu
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;