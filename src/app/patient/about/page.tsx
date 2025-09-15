'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function AboutPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  const features = [
    {
      icon: 'medical',
      title: 'Karta DiLO',
      description: 'Cyfrowa karta diagnostyki i leczenia onkologicznego z pełną historią choroby'
    },
    {
      icon: 'calendar',
      title: 'Harmonogram badań',
      description: 'Zarządzanie wizytami, badaniami i terminami w jednym miejscu'
    },
    {
      icon: 'pill',
      title: 'Zarządzanie lekami',
      description: 'Monitorowanie przyjmowania leków i skutków ubocznych'
    },
    {
      icon: 'message',
      title: 'Kontakt z lekarzem',
      description: 'Bezpośrednia komunikacja z zespołem medycznym'
    },
    {
      icon: 'chart',
      title: 'Kalkulator ryzyka',
      description: 'Ocena ryzyka nawrotu choroby z wykorzystaniem AI'
    },
    {
      icon: 'shield',
      title: 'Bezpieczeństwo danych',
      description: 'Pełne szyfrowanie i ochrona danych medycznych'
    }
  ];

  const team = [
    {
      name: 'Dr Jan Kowalski',
      role: 'Onkolog prowadzący',
      specialization: 'Onkologia kliniczna',
      experience: '15 lat',
      description: 'Specjalista w leczeniu raka piersi z wieloletnim doświadczeniem'
    },
    {
      name: 'Dr Anna Nowak',
      role: 'Radiolog',
      specialization: 'Radiologia onkologiczna',
      experience: '12 lat',
      description: 'Ekspert w diagnostyce obrazowej nowotworów piersi'
    },
    {
      name: 'Dr Piotr Wiśniewski',
      role: 'Radioterapeuta',
      specialization: 'Radioterapia',
      experience: '10 lat',
      description: 'Specjalista w radioterapii nowotworów piersi'
    },
    {
      name: 'Dr Maria Kowalczyk',
      role: 'Psycholog',
      specialization: 'Psychoonkologia',
      experience: '8 lat',
      description: 'Wsparcie psychologiczne dla pacjentek onkologicznych'
    }
  ];

  const statistics = [
    { number: '1000+', label: 'Pacjentek' },
    { number: '50+', label: 'Lekarzy' },
    { number: '99.9%', label: 'Dostępność' },
    { number: '24/7', label: 'Wsparcie' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="O aplikacji"
        userRole="patient"
        userName="Anna Kowalska"
        onLogout={handleLogout}
        showBackButton={true}
        onBack={() => router.push('/patient/dashboard')}
        actions={<HeaderActions userRole="patient" />}
      />

      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">OnkoApp.AI</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cyfrowa platforma dla pacjentek z rakiem piersi, która prowadzi je przez całą ścieżkę leczenia 
              z wykorzystaniem sztucznej inteligencji i nowoczesnych technologii.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Mission */}
          <Card className="mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Nasza misja</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                OnkoApp.AI powstało z myślą o pacjentkach zmagających się z rakiem piersi. 
                Naszym celem jest zapewnienie im kompleksowej opieki medycznej, wsparcia psychologicznego 
                i dostępu do najnowszych technologii w leczeniu onkologicznym. Wierzymy, że każda pacjentka 
                zasługuje na indywidualne podejście i najwyższą jakość opieki medycznej.
              </p>
            </div>
          </Card>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Funkcjonalności</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size="xl" color="primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology */}
          <Card className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologie</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Wykorzystujemy najnowsze technologie w medycynie cyfrowej, aby zapewnić 
                najlepszą opiekę naszym pacjentkom.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="cpu" size="md" className="text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Sztuczna Inteligencja</h3>
                <p className="text-sm text-gray-600">Analiza danych medycznych i predykcja ryzyka</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="shield" size="md" className="text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Bezpieczeństwo</h3>
                <p className="text-sm text-gray-600">Szyfrowanie end-to-end i ochrona RODO</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="smartphone" size="md" className="text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Mobilność</h3>
                <p className="text-sm text-gray-600">Dostęp z każdego urządzenia, 24/7</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="cloud" size="md" className="text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Chmura</h3>
                <p className="text-sm text-gray-600">Bezpieczne przechowywanie w chmurze</p>
              </div>
            </div>
          </Card>

          {/* Team */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nasz zespół</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="user" size="xl" color="primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.specialization}</p>
                  <p className="text-xs text-gray-500 mb-3">{member.experience} doświadczenia</p>
                  <p className="text-sm text-gray-700">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact */}
          <Card className="mb-16">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Kontakt</h2>
              <p className="text-lg text-gray-700 mb-8">
                Masz pytania? Chcesz dowiedzieć się więcej o naszej aplikacji? 
                Skontaktuj się z nami!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="phone" size="md" className="text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Telefon</h3>
                  <p className="text-sm text-gray-600">+48 123 456 789</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="mail" size="md" className="text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-sm text-gray-600">info@onkoapp.ai</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name="map-pin" size="md" className="text-pink-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Adres</h3>
                  <p className="text-sm text-gray-600">Warszawa, Polska</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Version Info */}
          <Card className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="info" size="sm" className="text-pink-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Informacje o aplikacji</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <strong>Wersja:</strong> 1.0.0
              </div>
              <div>
                <strong>Ostatnia aktualizacja:</strong> 15.01.2025
              </div>
              <div>
                <strong>Wymagania:</strong> iOS 12+, Android 8+
              </div>
            </div>
            
            <div className="mt-6">
              <Button variant="outline">
                <Icon name="download" size="sm" />
                <span className="ml-2">Sprawdź aktualizacje</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
