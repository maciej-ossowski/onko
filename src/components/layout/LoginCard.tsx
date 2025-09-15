import React from 'react';
import Card from '../ui/Card';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

interface LoginCardProps {
  title: string;
  subtitle: string;
  icon: string;
  iconColor: 'pink' | 'blue' | 'green';
  children: React.ReactNode;
  onBack: () => void;
}

export default function LoginCard({
  title,
  subtitle,
  icon,
  iconColor,
  children,
  onBack
}: LoginCardProps) {
  const colorConfig = {
    pink: {
      gradient: 'from-pink-50 to-rose-50',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600'
    },
    blue: {
      gradient: 'from-blue-50 to-indigo-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    green: {
      gradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    }
  };

  const config = colorConfig[iconColor];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.gradient} flex items-center justify-center p-4`}>
      <Card className="max-w-md w-full" padding="lg" elevation="lg">
        <div className="text-center mb-8">
          <div className={`w-16 h-16 ${config.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
            <Icon name={icon} size="xl" className={config.iconColor} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="space-y-4">
          {children}
        </div>

        <div className="text-center mt-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="text-gray-500 hover:text-gray-700"
          >
            <Icon name="arrow-left" size="sm" />
            <span className="ml-1">Powrót do wyboru roli</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}
