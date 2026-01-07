
import React from 'react';
import { Category } from '../types';

interface SegmentedControlProps {
  active: Category;
  onChange: (cat: Category) => void;
}

export const SegmentedControl: React.FC<SegmentedControlProps> = ({ active, onChange }) => {
  const categories: Category[] = ['ALL', 'NON-PROD', 'PROD', 'COMMON'];

  return (
    <div className="relative flex p-1.5 bg-slate-100 dark:bg-slate-800/50 backdrop-blur rounded-2xl w-full max-w-2xl mx-auto shadow-inner border border-slate-200/50 dark:border-slate-700/50">
      {/* Animated Background Slider */}
      <div 
        className="absolute h-[calc(100%-12px)] top-1.5 left-1.5 rounded-xl bg-white dark:bg-slate-700 shadow-lg transition-all duration-300 ease-out"
        style={{
          width: `calc(${100 / categories.length}% - 3px)`,
          transform: `translateX(${categories.indexOf(active) * 100}%)`
        }}
      />
      
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`relative z-10 flex-1 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 ${
            active === cat 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
          }`}
        >
          {cat.replace('-', ' ')}
        </button>
      ))}
    </div>
  );
};
