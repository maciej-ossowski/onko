import React from 'react';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import Dropdown from '../ui/Dropdown';

interface HeaderProps {
  title: string;
  subtitle?: string;
  userRole: 'patient' | 'doctor' | 'admin';
  userName?: string;
  onLogout: () => void;
  showBackButton?: boolean;
  onBack?: () => void;
  actions?: React.ReactNode;
  onSettings?: () => void;
  onShare?: () => void;
}

export default function Header({
  title,
  subtitle,
  userRole,
  userName,
  onLogout,
  showBackButton = false,
  onBack,
  actions,
  onSettings,
  onShare
}: HeaderProps) {
  const roleConfig = {
    patient: {
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      icon: 'user' as const,
      label: 'Pacjentka'
    },
    doctor: {
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: 'doctor' as const,
      label: 'Lekarz'
    },
    admin: {
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: 'admin' as const,
      label: 'Administrator'
    }
  };

  const config = roleConfig[userRole];

  // Get initials from userName
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Create dropdown items
  const dropdownItems = [
    {
      label: 'Ustawienia',
      icon: 'settings',
      onClick: onSettings || (() => console.log('Ustawienia'))
    },
    {
      label: 'Udostępnij',
      icon: 'qr-code',
      onClick: onShare || (() => console.log('Udostępnij'))
    },
    {
      label: 'Wyloguj',
      icon: 'logout',
      onClick: onLogout,
      variant: 'danger' as const
    }
  ];

  return (
    <header className={`sticky top-0 z-50 shadow-sm border-b ${userRole === 'patient' ? 'bg-pink-600 border-pink-700' : userRole === 'doctor' ? 'bg-blue-600 border-blue-700' : 'bg-green-600 border-green-700'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {showBackButton && onBack && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onBack}
                className="p-2 hover:bg-pink-700"
              >
                <Icon name="arrow-left" size="md" className="text-white" />
              </Button>
            )}
            
            {/* Logo */}
            <Logo 
              size="md" 
              showText={false} 
              className="mr-4" 
              invert={userRole === 'doctor' || userRole === 'admin'}
            />
            
            <div>
              <h1 className="text-xl font-semibold text-white">{title}</h1>
              {subtitle && (
                <p className="text-sm text-gray-300">{subtitle}</p>
              )}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {actions && (
              <div className="hidden sm:flex items-center space-x-2">
                {actions}
              </div>
            )}
            
            {/* User Dropdown */}
            <Dropdown
              trigger={
                <div className={`flex items-center cursor-pointer rounded-lg px-3 py-2 transition-colors ${userRole === 'patient' ? 'hover:bg-pink-700' : userRole === 'doctor' ? 'hover:bg-blue-700' : 'hover:bg-green-700'}`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full ${config.bgColor} flex items-center justify-center`}>
                    <span className={`text-xs font-semibold ${config.color}`}>
                      {userName ? getInitials(userName) : config.label.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Name - only on larger screens */}
                  <div className="text-center hidden sm:block">
                    <div className="text-sm font-medium text-white ml-3">
                      {userName || config.label}
                    </div>
                    <div className={`text-xs ${userRole === 'patient' ? 'text-pink-200' : userRole === 'doctor' ? 'text-blue-200' : 'text-green-200'} ml-3`}>
                      {config.label}
                    </div>
                  </div>
                  
                  {/* Dropdown Arrow - only on larger screens */}
                  <Icon name="arrow-down" size="sm" className="text-gray-300 hidden sm:block ml-2" />
                </div>
              }
              items={dropdownItems}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
