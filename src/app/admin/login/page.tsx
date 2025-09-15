'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import LoginCard from '@/components/layout/LoginCard';
import LoginButton from '@/components/auth/LoginButton';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (method: string) => {
    console.log(`Logowanie przez: ${method}`);
    router.push('/admin/dashboard');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin('Email/Password');
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <LoginCard
      title="Logowanie - Administrator"
      subtitle="Zaloguj się kontem instytucjonalnym lub social media"
      icon="admin"
      iconColor="green"
      onBack={handleBack}
    >
      {/* Formularz email/hasło */}
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email instytucjonalny</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="admin@szpital-onkologiczny.pl"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Hasło</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="••••••••"
          />
        </div>

        <Button type="submit" variant="primary" size="lg" className="w-full">
          Zaloguj się
        </Button>
      </form>

      {/* Separator */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">lub</span>
        </div>
      </div>

      {/* Social Loginy */}
      <LoginButton
        method="Zaloguj przez Google"
        onClick={() => handleLogin('Google')}
        variant="outline"
        icon="google"
        iconType="social"
      />

      <LoginButton
        method="Zaloguj przez Facebook"
        onClick={() => handleLogin('Facebook')}
        variant="primary"
        icon="facebook"
        iconType="social"
      />

      {/* Info Card */}
      <Card className="mt-6" padding="sm" elevation="none">
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Uprawnienia administratora</h3>
        <p className="text-xs text-gray-600">
          Jako administrator masz dostęp do zarządzania użytkownikami, 
          raportów, integracji z systemami NFZ i audytu dostępu.
        </p>
      </Card>
    </LoginCard>
  );
}
