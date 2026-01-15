import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
  dark?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children, dark = false }) => {
  return (
    <section 
      id={id} 
      className={`py-20 px-4 md:px-8 transition-colors duration-300 ${dark ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'} ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {title && (
          <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight ${dark ? 'text-white' : 'text-slate-800'}`}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};
