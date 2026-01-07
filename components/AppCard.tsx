
import React from 'react';
import { AppDefinition } from '../types';
import { Logo } from './Logo';

interface AppCardProps {
  app: AppDefinition;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const AppCard: React.FC<AppCardProps> = ({ app, isFavorite, onToggleFavorite }) => {
  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case 'PROD': return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
      case 'NON-PROD': return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
      default: return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
    }
  };

  const getEnvGlow = (cat: string) => {
    switch(cat) {
      case 'PROD': return 'group-hover:shadow-emerald-500/10';
      case 'NON-PROD': return 'group-hover:shadow-amber-500/10';
      default: return 'group-hover:shadow-blue-500/10';
    }
  };

  return (
    <div className={`group relative bg-white/80 dark:bg-slate-800/40 backdrop-blur-sm rounded-[2rem] p-6 shadow-sm border border-slate-200/60 dark:border-slate-700/60 hover:shadow-2xl transition-all duration-500 ${getEnvGlow(app.category)}`}>
      <button 
        onClick={() => onToggleFavorite(app.id)}
        className={`absolute top-6 right-6 p-2 rounded-xl transition-all duration-300 ${
          isFavorite 
            ? 'text-amber-500 bg-amber-50 dark:bg-amber-900/20 scale-110' 
            : 'text-slate-300 hover:text-amber-400 hover:bg-slate-50 dark:hover:bg-slate-700/50 opacity-0 group-hover:opacity-100'
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </button>

      <div className="flex flex-col items-center text-center">
        <Logo name={app.name} src={app.logo} size="lg" />
        
        <div className="mt-5 space-y-1">
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            {app.name}
          </h3>
          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold border uppercase tracking-widest ${getCategoryColor(app.category)}`}>
            {app.category}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <a 
          href={app.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-2xl shadow-lg shadow-slate-200 dark:shadow-blue-900/20 transition-all active:scale-95 hover:-translate-y-0.5"
        >
          Open App
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>
      </div>
    </div>
  );
};
