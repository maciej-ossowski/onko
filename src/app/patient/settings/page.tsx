'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function SettingsPage() {
  const router = useRouter();
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      sms: true,
      push: true,
      reminders: true,
      updates: true
    },
    privacy: {
      shareData: false,
      analytics: true,
      marketing: false
    },
    display: {
      theme: 'light',
      language: 'pl',
      fontSize: 'medium'
    },
    security: {
      twoFactor: false,
      biometric: true,
      autoLock: true
    }
  });

  const handleLogout = () => {
    router.push('/');
  };

  const handleSettingChange = (category: string, setting: string, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [setting]: value
      }
    }));
  };

  const handleSave = () => {
    console.log('Ustawienia zapisane:', settings);
    // Tutaj można dodać logikę zapisywania ustawień
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Ustawienia"
        userRole="patient"
        userName="Anna Kowalska"
        onLogout={handleLogout}
        showBackButton={true}
        onBack={() => router.push('/patient/dashboard')}
        actions={<HeaderActions userRole="patient" />}
      />

      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Ustawienia</h1>
            <p className="text-gray-600 mt-2">Dostosuj aplikację do swoich potrzeb</p>
          </div>

          {/* Settings Sections */}
          <div className="space-y-8">
            {/* Notifications */}
            <Card>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="mail" size="md" className="text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Powiadomienia</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Powiadomienia email</h3>
                    <p className="text-sm text-gray-500">Otrzymuj powiadomienia na adres email</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications.email}
                      onChange={(e) => handleSettingChange('notifications', 'email', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Powiadomienia SMS</h3>
                    <p className="text-sm text-gray-500">Otrzymuj powiadomienia na telefon</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications.sms}
                      onChange={(e) => handleSettingChange('notifications', 'sms', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Powiadomienia push</h3>
                    <p className="text-sm text-gray-500">Otrzymuj powiadomienia w aplikacji</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications.push}
                      onChange={(e) => handleSettingChange('notifications', 'push', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Przypomnienia o lekach</h3>
                    <p className="text-sm text-gray-500">Otrzymuj przypomnienia o przyjmowaniu leków</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.notifications.reminders}
                      onChange={(e) => handleSettingChange('notifications', 'reminders', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>
              </div>
            </Card>

            {/* Privacy */}
            <Card>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="shield" size="md" className="text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Prywatność</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Udostępnianie danych</h3>
                    <p className="text-sm text-gray-500">Zezwól na udostępnianie danych do badań naukowych</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.privacy.shareData}
                      onChange={(e) => handleSettingChange('privacy', 'shareData', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Analityka</h3>
                    <p className="text-sm text-gray-500">Pomóż nam ulepszać aplikację</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.privacy.analytics}
                      onChange={(e) => handleSettingChange('privacy', 'analytics', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Marketing</h3>
                    <p className="text-sm text-gray-500">Otrzymuj informacje o nowych funkcjach</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.privacy.marketing}
                      onChange={(e) => handleSettingChange('privacy', 'marketing', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>
              </div>
            </Card>

            {/* Display */}
            <Card>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="settings" size="md" className="text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Wyświetlanie</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Motyw</label>
                  <select
                    value={settings.display.theme}
                    onChange={(e) => handleSettingChange('display', 'theme', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="light">Jasny</option>
                    <option value="dark">Ciemny</option>
                    <option value="auto">Automatyczny</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Język</label>
                  <select
                    value={settings.display.language}
                    onChange={(e) => handleSettingChange('display', 'language', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="pl">Polski</option>
                    <option value="en">English</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rozmiar czcionki</label>
                  <select
                    value={settings.display.fontSize}
                    onChange={(e) => handleSettingChange('display', 'fontSize', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="small">Mały</option>
                    <option value="medium">Średni</option>
                    <option value="large">Duży</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Security */}
            <Card>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="lock" size="md" className="text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Bezpieczeństwo</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Uwierzytelnianie dwuskładnikowe</h3>
                    <p className="text-sm text-gray-500">Dodatkowa warstwa bezpieczeństwa</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.security.twoFactor}
                      onChange={(e) => handleSettingChange('security', 'twoFactor', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Uwierzytelnianie biometryczne</h3>
                    <p className="text-sm text-gray-500">Logowanie za pomocą odcisku palca lub twarzy</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.security.biometric}
                      onChange={(e) => handleSettingChange('security', 'biometric', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Automatyczne blokowanie</h3>
                    <p className="text-sm text-gray-500">Blokuj aplikację po okresie nieaktywności</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.security.autoLock}
                      onChange={(e) => handleSettingChange('security', 'autoLock', e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pink-600"></div>
                  </label>
                </div>
              </div>
            </Card>

            {/* Account Actions */}
            <Card>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="user" size="md" className="text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Konto</h2>
              </div>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="download" size="sm" />
                  <span className="ml-2">Eksportuj dane</span>
                </Button>
                
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="trash" size="sm" />
                  <span className="ml-2">Usuń konto</span>
                </Button>
              </div>
            </Card>
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-8">
            <Button variant="primary" onClick={handleSave}>
              <Icon name="check" size="sm" />
              <span className="ml-2">Zapisz ustawienia</span>
            </Button>
          </div>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
