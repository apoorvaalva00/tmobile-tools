
import React from 'react';
import { AppDefinition } from '../types';
import { AppCard } from './AppCard';

interface CategorySectionProps {
  title: string;
  apps: AppDefinition[];
  favorites: string[];
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onToggleFavorite: (id: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ 
  title, 
  apps, 
  favorites, 
  isCollapsed, 
  onToggleCollapse,
  onToggleFavorite 
}) => {
  if (apps.length === 0) return null;

  return (
    <section className="mb-10">
      <div 
        onClick={onToggleCollapse}
        className="flex items-center justify-between mb-4 cursor-pointer group"
      >
        <div className="flex items-center gap-3">
          <div className="w-1 h-6 bg-blue-600 rounded-full"></div>
          <h2 className="text-lg font-bold text-slate-800 dark:text-slate-100 tracking-tight">
            {title} <span className="ml-2 text-sm font-normal text-slate-400">({apps.length})</span>
          </h2>
        </div>
        <button className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" height="20" 
            viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="2.5" 
            strokeLinecap="round" strokeLinejoin="round"
            className={`transition-transform duration-300 ${isCollapsed ? '-rotate-90' : 'rotate-0'}`}
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>
      </div>

      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all duration-300 ${
        isCollapsed ? 'max-h-0 opacity-0 overflow-hidden' : 'max-h-[2000px] opacity-100'
      }`}>
        {apps.map(app => (
          <AppCard 
            key={app.id} 
            app={app} 
            isFavorite={favorites.includes(app.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </section>
  );
};
