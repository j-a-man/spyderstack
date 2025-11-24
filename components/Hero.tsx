'use client'; 

import React from 'react';
import { Play, ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  // We use Tailwind utilities that map to your globals.css variables
  const brandAccent = "#22d3ee"; // Keeping Cyan for the "Web" effect as it pops against your dark blue

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-center bg-background text-foreground overflow-hidden font-sans selection:bg-primary/30">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `radial-gradient(${brandAccent} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        {/* Fog Overlay - Uses your background color for a seamless fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_100%)]"></div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center max-w-5xl mx-auto mt-[-50px]">
        
        {/* The Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md shadow-[0_0_15px_rgba(55,35,134,0.3)]">
          <Zap size={14} className="text-cyan-400 fill-cyan-400" />
          <span className="text-primary-foreground text-sm font-medium tracking-wide">
            Premium Automation for Contractors
          </span>
        </div>

        {/* The Headline - Now using your 'font-display' (Rajdhani) */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight mb-8">
          Stop Letting Leads <br />
          <span className="relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-cyan-400 animate-pulse">
              Slip Through
            </span>
            <span className="text-foreground ml-4">The Cracks</span>
            
            {/* Underline Decoration */}
            <svg className="absolute w-full h-4 -bottom-2 left-0 text-primary opacity-60" viewBox="0 0 200 10" preserveAspectRatio="none">
              <path d="M0 5 Q 100 10 200 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light">
          Build a web that catches every opportunity. Automated missed call responses, 
          reputation management, and instant quotes for <span className="text-foreground font-medium">HVAC, Roofing, and Plumbing</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          {/* Primary Button */}
          <button className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg text-lg overflow-hidden transition-all hover:bg-primary/90 shadow-[0_0_20px_var(--primary)] hover:shadow-[0_0_30px_var(--primary)] hover:-translate-y-1">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start Catching Leads <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          {/* Secondary Button */}
          <button className="px-8 py-4 bg-transparent border border-border text-muted-foreground font-semibold rounded-lg text-lg transition-all hover:border-foreground hover:bg-foreground/5 flex items-center justify-center gap-2 hover:text-foreground">
            <Play size={18} fill="currentColor" /> Watch Demo
          </button>
        </div>
      </div>
      
      {/* Decorative Bottom Fog */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;