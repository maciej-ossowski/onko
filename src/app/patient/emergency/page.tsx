'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function EmergencyPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  const emergencyContacts = [
    {
      name: 'Pogotowie Ratunkowe',
      phone: '999',
      description: 'W przypadku zagrożenia życia',
      type: 'emergency',
      available: '24/7'
    },
    {
      name: 'Dr Jan Kowalski - Onkolog',
      phone: '+48 123 456 789',
      description: 'Lekarz prowadzący - pilne konsultacje',
      type: 'doctor',
      available: 'Pon-Pt 8:00-18:00'
    },
    {
      name: 'Centrum Onkologii - Izba Przyjęć',
      phone: '+48 22 123 45 67',
      description: 'Pilne przypadki onkologiczne',
      type: 'hospital',
      available: '24/7'
    },
    {
      name: 'Telefon Zaufania Onkologicznego',
      phone: '+48 800 123 456',
      description: 'Wsparcie psychologiczne 24/7',
      type: 'support',
      available: '24/7'
    },
    {
      name: 'Pomoc Duszpasterska',
      phone: '+48 22 987 65 43',
      description: 'Wsparcie duchowe dla pacjentów',
      type: 'spiritual',
      available: 'Pon-Nd 6:00-22:00'
    }
  ];

  const emergencySymptoms = [
    {
      symptom: 'Silne krwawienie',
      action: 'Natychmiast wezwij pogotowie (999)',
      urgency: 'critical'
    },
    {
      symptom: 'Wysoka gorączka (>39°C)',
      action: 'Skontaktuj się z lekarzem prowadzącym',
      urgency: 'high'
    },
    {
      symptom: 'Silne bóle głowy z nudnościami',
      action: 'Pilna konsultacja z neurologiem',
      urgency: 'high'
    },
    {
      symptom: 'Duszności',
      action: 'Wezwij pogotowie lub jedź na SOR',
      urgency: 'critical'
    },
    {
      symptom: 'Silne nudności i wymioty',
      action: 'Skontaktuj się z lekarzem prowadzącym',
      urgency: 'medium'
    },
    {
      symptom: 'Problemy z oddychaniem',
      action: 'Natychmiast wezwij pogotowie (999)',
      urgency: 'critical'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'text-red-600 bg-red-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'emergency': return 'phone';
      case 'doctor': return 'doctor';
      case 'hospital': return 'home';
      case 'support': return 'heart';
      case 'spiritual': return 'users';
      default: return 'phone';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'emergency': return 'text-red-600 bg-red-100';
      case 'doctor': return 'text-blue-600 bg-blue-100';
      case 'hospital': return 'text-green-600 bg-green-100';
      case 'support': return 'text-purple-600 bg-purple-100';
      case 'spiritual': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Pilne kontakty"
        userRole="patient"
        userName="Anna Kowalska"
        onLogout={handleLogout}
        showBackButton={true}
        onBack={() => router.push('/patient/dashboard')}
        actions={<HeaderActions userRole="patient" />}
      />

      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Pilne kontakty</h1>
            <p className="text-gray-600 mt-2">W przypadku pilnych problemów zdrowotnych skontaktuj się z odpowiednimi służbami</p>
          </div>

          {/* Emergency Alert */}
          <Card className="mb-8 bg-red-50 border-red-200">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="phone" size="lg" color="error" />
              <h2 className="text-xl font-semibold text-red-900">W przypadku zagrożenia życia</h2>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">999</div>
              <p className="text-red-800 mb-4">Pogotowie Ratunkowe - 24/7</p>
              <Button 
                variant="primary" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open('tel:999')}
              >
                <Icon name="phone" size="sm" />
                <span className="ml-2">Zadzwoń teraz</span>
              </Button>
            </div>
          </Card>

          {/* Emergency Contacts */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakty pilne</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(contact.type)}`}>
                      <Icon name={getTypeIcon(contact.type)} size="lg" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{contact.name}</h3>
                      <p className="text-gray-700 mb-2">{contact.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <span className="font-medium">{contact.phone}</span>
                        <span>{contact.available}</span>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => window.open(`tel:${contact.phone}`)}
                      >
                        <Icon name="phone" size="sm" />
                        <span className="ml-2">Zadzwoń</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Emergency Symptoms */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Objawy wymagające pilnej pomocy</h2>
            <div className="space-y-4">
              {emergencySymptoms.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getUrgencyColor(item.urgency)}`}>
                      <Icon name="warning" size="sm" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.symptom}</h3>
                      <p className="text-gray-700">{item.action}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <Card className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="lightbulb" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Szybkie akcje</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="outline" 
                className="justify-start border-red-300 text-red-700 hover:bg-red-100"
                onClick={() => window.open('tel:999')}
              >
                <Icon name="phone" size="sm" />
                <span className="ml-2">Pogotowie (999)</span>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start border-blue-300 text-blue-700 hover:bg-blue-100"
                onClick={() => window.open('tel:+48123456789')}
              >
                <Icon name="doctor" size="sm" />
                <span className="ml-2">Lekarz prowadzący</span>
              </Button>
              <Button 
                variant="outline" 
                className="justify-start border-green-300 text-green-700 hover:bg-green-100"
                onClick={() => window.open('tel:+48221234567')}
              >
                <Icon name="home" size="sm" />
                <span className="ml-2">Centrum Onkologii</span>
              </Button>
            </div>
          </Card>

          {/* Important Information */}
          <Card className="bg-blue-50 border-blue-200">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="info" size="sm" className="text-pink-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Ważne informacje</h3>
                <ul className="text-blue-800 space-y-2">
                  <li>• W przypadku zagrożenia życia zawsze wybierz 999</li>
                  <li>• Miej przy sobie kartę DiLO i listę przyjmowanych leków</li>
                  <li>• Poinformuj służby medyczne o swojej chorobie onkologicznej</li>
                  <li>• W przypadku wątpliwości skontaktuj się z lekarzem prowadzącym</li>
                  <li>• Zachowaj spokój i postępuj zgodnie z instrukcjami operatora</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
