import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  elevation?: 'none' | 'sm' | 'md' | 'lg';
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Card({
  children,
  className = '',
  padding = 'md',
  elevation = 'sm',
  onClick
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const elevationClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg'
  };
  
  return (
    <div 
      className={`bg-white rounded-xl border border-gray-100 ${paddingClasses[padding]} ${elevationClasses[elevation]} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
