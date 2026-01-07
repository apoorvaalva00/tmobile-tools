
import React from 'react';

interface LogoProps {
  name: string;
  src?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const COLORS = [
  'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 
  'bg-emerald-500', 'bg-orange-500', 'bg-rose-500',
  'bg-cyan-500', 'bg-amber-500'
];

export const Logo: React.FC<LogoProps> = ({ name, src, size = 'md' }) => {
  const [error, setError] = React.useState(false);

  const getInitials = (text: string) => {
    return text.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const getColor = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    return COLORS[Math.abs(hash) % COLORS.length];
  };

  const sizeClasses = {
    sm: 'w-8 h-8 text-[10px]',
    md: 'w-14 h-14 text-sm',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-20 h-20 text-xl'
  };

  if (src && !error) {
    return (
      <div className={`${sizeClasses[size]} rounded-2xl p-2 flex items-center justify-center bg-white dark:bg-white shadow-sm border border-slate-100 dark:border-slate-800 transition-transform group-hover:scale-105 duration-300`}>
        <img 
          src={src} 
          alt={name} 
          className="w-full h-full object-contain pointer-events-none"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <div className={`${sizeClasses[size]} ${getColor(name)} rounded-2xl flex items-center justify-center font-bold text-white shadow-lg border-b-4 border-black/10 transition-transform group-hover:scale-105 duration-300`}>
      {getInitials(name)}
    </div>
  );
};
