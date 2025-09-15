'use client';

import { useRouter } from 'next/navigation';
import LoginCard from '@/components/layout/LoginCard';
import LoginButton from '@/components/auth/LoginButton';
import Card from '@/components/ui/Card';

export default function PatientLogin() {
  const router = useRouter();

  const handleLogin = (method: string) => {
    console.log(`Logowanie przez: ${method}`);
    router.push('/patient/dashboard');
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <LoginCard
      title="Logowanie - Pacjentka"
      subtitle="Zaloguj się przez Profil Zaufany lub social media"
      icon="user"
      iconColor="pink"
      onBack={handleBack}
    >
      {/* Profil Zaufany */}
      <LoginButton
        method="Zaloguj przez Profil Zaufany (login.gov.pl)"
        onClick={() => handleLogin('Profil Zaufany')}
        variant="primary"
        icon="check"
      />

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
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Bezpieczeństwo danych</h3>
        <p className="text-xs text-gray-600">
          Wszystkie dane są pseudonimizowane zgodnie z RODO. 
          Masz pełną kontrolę nad udostępnianiem swoich danych medycznych.
        </p>
      </Card>
    </LoginCard>
  );
}
