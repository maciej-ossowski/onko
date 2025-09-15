'use client';

import { useRouter } from 'next/navigation';
import LoginCard from '@/components/layout/LoginCard';
import LoginButton from '@/components/auth/LoginButton';
import Card from '@/components/ui/Card';

export default function DoctorLogin() {
  const router = useRouter();

  const handleLogin = (method: string) => {
    console.log(`Logowanie przez: ${method}`);
    router.push('/doctor/dashboard');
  };

  const handleBack = () => {
    router.push('/');
  };

  return (
    <LoginCard
      title="Logowanie - Lekarz"
      subtitle="Zaloguj się przez system ZUS PUE / RPWDL lub social media"
      icon="doctor"
      iconColor="blue"
      onBack={handleBack}
    >
      {/* Systemy medyczne */}
      <LoginButton
        method="Zaloguj przez ZUS PUE"
        onClick={() => handleLogin('ZUS PUE')}
        variant="primary"
        icon="check"
      />

      <LoginButton
        method="Zaloguj przez RPWDL"
        onClick={() => handleLogin('RPWDL')}
        variant="primary"
        icon="check"
      />

      <LoginButton
        method="Zaloguj przez login.gov.pl"
        onClick={() => handleLogin('login.gov.pl')}
        variant="secondary"
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
        <h3 className="text-sm font-semibold text-gray-900 mb-2">Dostęp do danych</h3>
        <p className="text-xs text-gray-600">
          Jako lekarz masz dostęp do danych pacjentek tylko po ich wyraźnej zgodzie 
          poprzez skanowanie kodu QR i potwierdzenie przez pacjentkę.
        </p>
      </Card>
    </LoginCard>
  );
}
