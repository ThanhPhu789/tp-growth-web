import { motion } from 'motion/react';

export const NodeConnections = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.15]">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <g stroke="currentColor" fill="none" className="text-brand-primary" strokeWidth="1" strokeDasharray="4 4">
          <motion.path
            d="M 100 200 C 300 200, 400 400, 600 400 S 800 200, 1000 200"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 200 600 C 400 600, 500 300, 700 300 S 900 600, 1200 600"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
            strokeWidth="0.5"
          />
        </g>
        
        {/* Nodes */}
        <g fill="currentColor" className="text-brand-accent">
          <circle cx="100" cy="200" r="3" />
          <circle cx="600" cy="400" r="4" />
          <circle cx="1000" cy="200" r="3" />
          
          <circle cx="200" cy="600" r="3" />
          <circle cx="700" cy="300" r="4" />
          <circle cx="1200" cy="600" r="3" />
        </g>
      </svg>
    </div>
  );
};

export const AbstractArchitecture = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Strategic Blocks */}
        <g stroke="currentColor" fill="none" className="text-brand-primary" strokeWidth="1">
          <rect x="10%" y="20%" width="120" height="80" rx="4" />
          <rect x="25%" y="45%" width="160" height="60" rx="4" />
          <rect x="40%" y="25%" width="140" height="100" rx="4" />
          <rect x="65%" y="30%" width="180" height="120" rx="4" />
          
          {/* Connectors */}
          <path d="M 10%+120 20%+40 L 25% 45%+30" strokeDasharray="4 4" />
          <path d="M 25%+160 45%+30 L 40%+70 25%+100" strokeDasharray="4 4" />
          <path d="M 40%+140 25%+50 L 65% 30%+60" strokeDasharray="4 4" />
        </g>
      </svg>
    </div>
  );
};

export const FlowLines = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
       <svg className="absolute w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" fill="none" className="text-brand-primary" strokeWidth="1">
             <path d="M-100,100 C200,300 400,0 800,200 C1200,400 1400,100 1800,300" />
             <path d="M-100,200 C300,50 500,400 900,100 C1300,-200 1500,300 1800,100" />
             <path d="M-100,500 C150,200 600,600 1000,300 C1400,0 1600,500 1800,400" />
          </g>
       </svg>
    </div>
  )
}
