'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

export default function CookiesPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  const cookieTypes = [
    {
      name: 'Cookies niezbędne',
      description: 'Umożliwiają podstawowe funkcjonowanie aplikacji',
      examples: ['Sesja użytkownika', 'Ustawienia bezpieczeństwa', 'Preferencje językowe'],
      necessary: true,
      duration: 'Sesja'
    },
    {
      name: 'Cookies funkcjonalne',
      description: 'Zapamiętują Twoje preferencje i ustawienia',
      examples: ['Zapamiętane dane logowania', 'Ustawienia wyświetlania', 'Preferencje powiadomień'],
      necessary: false,
      duration: '30 dni'
    },
    {
      name: 'Cookies analityczne',
      description: 'Pomagają nam zrozumieć, jak korzystasz z aplikacji',
      examples: ['Statystyki odwiedzin', 'Czas spędzony w aplikacji', 'Najczęściej używane funkcje'],
      necessary: false,
      duration: '2 lata'
    },
    {
      name: 'Cookies marketingowe',
      description: 'Używane do personalizacji treści i reklam',
      examples: ['Personalizowane rekomendacje', 'Targetowane treści', 'Analityka reklam'],
      necessary: false,
      duration: '1 rok'
    }
  ];

  const cookieSettings = [
    {
      category: 'Niezbędne',
      description: 'Te pliki cookie są niezbędne do działania aplikacji i nie można ich wyłączyć.',
      enabled: true,
      disabled: true
    },
    {
      category: 'Funkcjonalne',
      description: 'Te pliki cookie umożliwiają ulepszone funkcje i personalizację.',
      enabled: false,
      disabled: false
    },
    {
      category: 'Analityczne',
      description: 'Te pliki cookie pomagają nam zrozumieć, jak użytkownicy korzystają z aplikacji.',
      enabled: false,
      disabled: false
    },
    {
      category: 'Marketingowe',
      description: 'Te pliki cookie są używane do wyświetlania reklam i treści spersonalizowanych.',
      enabled: false,
      disabled: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Polityka cookies"
        userRole="patient"
        userName="Anna Kowalska"
        onLogout={handleLogout}
        showBackButton={true}
        onBack={() => router.push('/patient/dashboard')}
      />

      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Polityka cookies</h1>
            <p className="text-gray-600 mt-2">Ostatnia aktualizacja: 15 stycznia 2025</p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <div className="flex items-start space-x-4">
              <Icon name="info" size="lg" color="primary" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Co to są pliki cookie?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Pliki cookie to małe pliki tekstowe, które są zapisywane na Twoim urządzeniu podczas 
                  korzystania z aplikacji OnkoApp.AI. Pomagają nam zapewnić lepsze doświadczenie 
                  użytkownika, analizować ruch w aplikacji i personalizować treści.
                </p>
              </div>
            </div>
          </Card>

          {/* Cookie Types */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Rodzaje plików cookie</h2>
            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{cookie.name}</h3>
                      <p className="text-gray-700 mb-3">{cookie.description}</p>
                      <div className="mb-3">
                        <p className="text-sm font-medium text-gray-600 mb-1">Przykłady:</p>
                        <ul className="text-sm text-gray-600 list-disc list-inside">
                          {cookie.examples.map((example, idx) => (
                            <li key={idx}>{example}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        cookie.necessary 
                          ? 'text-green-600 bg-green-100' 
                          : 'text-blue-600 bg-blue-100'
                      }`}>
                        {cookie.necessary ? 'Niezbędne' : 'Opcjonalne'}
                      </span>
                      <span className="text-sm text-gray-500">Czas: {cookie.duration}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Cookie Settings */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zarządzanie plikami cookie</h2>
            <Card>
              <div className="space-y-6">
                {cookieSettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{setting.category}</h3>
                      <p className="text-sm text-gray-600">{setting.description}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`text-sm ${setting.enabled ? 'text-green-600' : 'text-gray-500'}`}>
                        {setting.enabled ? 'Włączone' : 'Wyłączone'}
                      </span>
                      <button
                        disabled={setting.disabled}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                          setting.enabled ? 'bg-pink-600' : 'bg-gray-200'
                        } ${setting.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            setting.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 flex justify-between items-center">
                <Button variant="outline">
                  <Icon name="settings" size="sm" />
                  <span className="ml-2">Zapisz ustawienia</span>
                </Button>
                <Button variant="primary">
                  <Icon name="check" size="sm" />
                  <span className="ml-2">Akceptuj wszystkie</span>
                </Button>
              </div>
            </Card>
          </div>

          {/* Browser Settings */}
          <Card className="mb-8">
            <div className="flex items-start space-x-4">
              <Icon name="settings" size="lg" color="primary" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Ustawienia w przeglądarce</h3>
                <p className="text-gray-700 mb-4">
                  Możesz również zarządzać plikami cookie bezpośrednio w ustawieniach swojej przeglądarki:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="chrome" size="sm" color="gray" />
                    <div>
                      <p className="font-medium text-gray-900">Google Chrome</p>
                      <p className="text-sm text-gray-600">Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="firefox" size="sm" color="gray" />
                    <div>
                      <p className="font-medium text-gray-900">Mozilla Firefox</p>
                      <p className="text-sm text-gray-600">Opcje → Prywatność i bezpieczeństwo → Pliki cookie</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="safari" size="sm" color="gray" />
                    <div>
                      <p className="font-medium text-gray-900">Safari</p>
                      <p className="text-sm text-gray-600">Preferencje → Prywatność → Zarządzaj danymi witryn</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="edge" size="sm" color="gray" />
                    <div>
                      <p className="font-medium text-gray-900">Microsoft Edge</p>
                      <p className="text-sm text-gray-600">Ustawienia → Pliki cookie i uprawnienia witryn</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Third Party Cookies */}
          <Card className="mb-8">
            <div className="flex items-start space-x-4">
              <Icon name="link" size="lg" color="primary" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pliki cookie stron trzecich</h3>
                <p className="text-gray-700 mb-4">
                  Używamy również plików cookie od zewnętrznych dostawców usług:
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Google Analytics</p>
                    <p className="text-sm text-gray-600">Analityka ruchu i zachowań użytkowników</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Google Maps</p>
                    <p className="text-sm text-gray-600">Wyświetlanie map i lokalizacji</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium text-gray-900">Facebook Pixel</p>
                    <p className="text-sm text-gray-600">Śledzenie konwersji i reklam</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="bg-blue-50 border-blue-200">
            <div className="flex items-start space-x-4">
              <Icon name="info" size="lg" color="primary" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Pytania dotyczące plików cookie</h3>
                <p className="text-blue-800 mb-4">
                  Jeśli masz pytania dotyczące naszej polityki plików cookie, skontaktuj się z nami:
                </p>
                <div className="space-y-2 text-blue-800">
                  <div className="flex items-center space-x-2">
                    <Icon name="mail" size="sm" color="primary" />
                    <span>cookies@onkoapp.ai</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="phone" size="sm" color="primary" />
                    <span>+48 123 456 789</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
