'use client';

import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-panel">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              {/* Logo placeholder - you can replace this with the actual logo */}
              <span className="text-white font-bold text-lg">2K</span>
            </div>
            <span className="font-bold text-xl text-uBlack">OpenE</span>
          </div>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-uGray hover:text-primary transition-colors">
              Home
            </a>
            <a href="#objective" className="text-uGray hover:text-primary transition-colors">
              Objective
            </a>
            <a href="#features" className="text-uGray hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-uGray hover:text-primary transition-colors">
              About
            </a>
            <a href="#faq" className="text-uGray hover:text-primary transition-colors">
              FAQ
            </a>
            <a href="#download" className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Download
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-uGray hover:text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;