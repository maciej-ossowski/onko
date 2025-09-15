import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  invert?: boolean;
}

export default function Logo({ size = 'md', showText = true, className = '', invert = false }: LogoProps) {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const textSizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Image */}
      <div className={`${sizeClasses[size]} relative`}>
        <Image
          src="/logo.png"
          alt="OnkoApp AI Logo"
          fill
          className={`object-contain drop-shadow-lg ${invert ? 'brightness-0 invert' : ''}`}
          priority
        />
      </div>
      
      {/* Text */}
      {showText && (
        <div className={`font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700 ${textSizeClasses[size]}`}>
          OnkoApp AI
        </div>
      )}
    </div>
  );
}
