'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function PsychologistPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'appointments' | 'resources' | 'mood-tracker' | 'emergency'>('appointments');

  const handleLogout = () => {
    router.push('/');
  };

  const appointments = [
    {
      id: 1,
      type: 'Konsultacja psychologiczna',
      psychologist: 'Dr Maria Kowalczyk',
      date: '2025-01-30',
      time: '15:00',
      duration: '45 min',
      location: 'Centrum Onkologii w Warszawie',
      room: 'Gabinet 301',
      status: 'upcoming',
      purpose: 'Wsparcie psychologiczne',
      notes: 'Pierwsza wizyta u psychologa'
    },
    {
      id: 2,
      type: 'Wideorozmowa',
      psychologist: 'Dr Maria Kowalczyk',
      date: '2025-02-05',
      time: '16:00',
      duration: '30 min',
      location: 'Online',
      room: 'Zoom',
      status: 'upcoming',
      purpose: 'Kontynuacja terapii',
      notes: 'Omówienie postępów'
    },
    {
      id: 3,
      type: 'Konsultacja psychologiczna',
      psychologist: 'Dr Maria Kowalczyk',
      date: '2025-01-15',
      time: '14:00',
      duration: '45 min',
      location: 'Centrum Onkologii w Warszawie',
      room: 'Gabinet 301',
      status: 'completed',
      purpose: 'Wsparcie psychologiczne',
      notes: 'Omówienie emocji związanych z diagnozą',
      summary: 'Pacjentka otwarta na rozmowę, zidentyfikowano główne obawy. Zalecono techniki relaksacyjne.'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Techniki relaksacyjne - przewodnik',
      type: 'PDF',
      size: '1.2 MB',
      description: 'Zbiór technik relaksacyjnych dostosowanych do pacjentek onkologicznych',
      category: 'Relaksacja',
      downloads: 45
    },
    {
      id: 2,
      title: 'Medytacja mindfulness - nagrania',
      type: 'ZIP',
      size: '25.3 MB',
      description: 'Nagrania z medytacjami mindfulness dla redukcji stresu',
      category: 'Medytacja',
      downloads: 23
    },
    {
      id: 3,
      title: 'Radzenie sobie z lękiem - ćwiczenia',
      type: 'PDF',
      size: '0.8 MB',
      description: 'Praktyczne ćwiczenia do radzenia sobie z lękiem i niepokojem',
      category: 'Lęk',
      downloads: 67
    },
    {
      id: 4,
      title: 'Wsparcie dla bliskich - poradnik',
      type: 'PDF',
      size: '1.5 MB',
      description: 'Jak rozmawiać z rodziną i przyjaciółmi o chorobie',
      category: 'Relacje',
      downloads: 34
    }
  ];

  const moodEntries = [
    {
      id: 1,
      date: '2025-01-20',
      mood: 'neutral',
      energy: 6,
      anxiety: 4,
      sleep: 7,
      notes: 'Dzień w miarę dobry, trochę zmęczona po radioterapii'
    },
    {
      id: 2,
      date: '2025-01-19',
      mood: 'sad',
      energy: 4,
      anxiety: 7,
      sleep: 5,
      notes: 'Trudny dzień, myśli o przyszłości'
    },
    {
      id: 3,
      date: '2025-01-18',
      mood: 'happy',
      energy: 8,
      anxiety: 2,
      sleep: 8,
      notes: 'Dobry dzień, spotkanie z przyjaciółką'
    }
  ];

  const emergencyContacts = [
    {
      name: 'Dr Maria Kowalczyk',
      role: 'Psycholog prowadzący',
      phone: '+48 123 456 789',
      email: 'm.kowalczyk@onkoapp.ai',
      availability: 'Pon-Pt 8:00-18:00'
    },
    {
      name: 'Centrum Kryzysowe',
      role: 'Wsparcie 24/7',
      phone: '+48 800 123 456',
      email: 'kryzys@onkoapp.ai',
      availability: '24/7'
    },
    {
      name: 'Telefon Zaufania',
      role: 'Wsparcie psychologiczne',
      phone: '+48 116 123',
      email: 'wsparcie@onkoapp.ai',
      availability: '24/7'
    }
  ];

  const getContent = () => {
    switch (activeTab) {
      case 'appointments': return appointments;
      case 'resources': return resources;
      case 'mood-tracker': return moodEntries;
      case 'emergency': return emergencyContacts;
      default: return [];
    }
  };

  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case 'happy': return 'smile';
      case 'neutral': return 'meh';
      case 'sad': return 'frown';
      default: return 'meh';
    }
  };

  const getMoodColor = (mood: string) => {
    switch (mood) {
      case 'happy': return 'text-green-600 bg-green-100';
      case 'neutral': return 'text-yellow-600 bg-yellow-100';
      case 'sad': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Psycholog"
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
            <h1 className="text-3xl font-bold text-gray-900">Wsparcie psychologiczne</h1>
            <p className="text-gray-600 mt-2">Zadbaj o swoje zdrowie psychiczne podczas leczenia</p>
          </div>

          {/* Welcome Card */}
          <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon name="heart" size="xl" color="primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Witaj w sekcji wsparcia psychologicznego</h2>
                <p className="text-gray-700">
                  Twoje zdrowie psychiczne jest równie ważne jak fizyczne. Tutaj znajdziesz wsparcie, 
                  materiały edukacyjne i narzędzia do radzenia sobie z emocjami podczas leczenia.
                </p>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('appointments')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'appointments'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Wizyty ({appointments.length})
                </button>
                <button
                  onClick={() => setActiveTab('resources')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'resources'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Materiały ({resources.length})
                </button>
                <button
                  onClick={() => setActiveTab('mood-tracker')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'mood-tracker'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Dziennik nastroju ({moodEntries.length})
                </button>
                <button
                  onClick={() => setActiveTab('emergency')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'emergency'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Pilny kontakt
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {getContent().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="heart" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">Brak treści w tej kategorii</p>
                </div>
              </Card>
            ) : (
              getContent().map((item: Record<string, unknown>, index: number) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  {activeTab === 'appointments' && (
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{String(item.type || 'Sesja')}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Icon name="user" size="sm" color="gray" />
                              <span>{String(item.psychologist || 'Psycholog')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="calendar" size="sm" color="gray" />
                              <span>{String(item.date || 'Dzisiaj')} {String(item.time || '10:00')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="clock" size="sm" color="gray" />
                              <span>{String(String(item.duration || '60 min') || '60 min')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="map-pin" size="sm" color="gray" />
                              <span>{String(item.location || 'Online')}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mt-2">{String(item.purpose || 'Konsultacja')}</p>
                          {String(item.notes || 'Brak notatek') && (
                            <p className="text-sm text-gray-600 mt-1">Notatki: {String(item.notes || 'Brak notatek')}</p>
                          )}
                          {String(item.summary || 'Brak podsumowania') && (
                            <div className="mt-3 p-3 bg-green-50 rounded-lg">
                              <p className="text-sm font-medium text-green-700 mb-1">Podsumowanie wizyty:</p>
                              <p className="text-sm text-green-900">{String(item.summary || 'Brak podsumowania')}</p>
                            </div>
                          )}
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(String(item.status || 'Zaplanowana'))}`}>
                          {String(item.status || 'Zaplanowana') === 'upcoming' ? 'Nadchodząca' : 'Zakończona'}
                        </span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'resources' && (
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Icon name="file-text" size="md" className="text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{String(item.title || 'Zasób')}</h3>
                          <span className="text-sm text-gray-500">{String(item.type || 'Sesja')} • {String(item.size || 'Brak informacji')}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{String(item.description || 'Brak opisu')}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="text-purple-600">{String(item.category || 'Ogólne')}</span>
                          <span>Pobrania: {String(item.downloads || '0')}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'mood-tracker' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getMoodColor(String(item.mood || 'neutral'))}`}>
                            <Icon name={getMoodIcon(String(item.mood || 'neutral'))} size="lg" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{String(item.date || 'Dzisiaj')}</h3>
                            <p className="text-sm text-gray-600 capitalize">{String(item.mood || 'neutral')}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Energia</p>
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(10)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < Number(item.energy || 0) ? 'bg-green-500' : 'bg-gray-200'
                                }`}
                              />
                            ))}
                            <span className="text-sm text-gray-600 ml-2">{Number(item.energy || 0)}/10</span>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Lęk</p>
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(10)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < Number(item.anxiety || 0) ? 'bg-red-500' : 'bg-gray-200'
                                }`}
                              />
                            ))}
                            <span className="text-sm text-gray-600 ml-2">{Number(item.anxiety || 0)}/10</span>
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <p className="text-sm text-gray-600">Sen</p>
                          <div className="flex items-center justify-center space-x-1">
                            {[...Array(10)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                  i < Number(item.sleep || 0) ? 'bg-blue-500' : 'bg-gray-200'
                                }`}
                              />
                            ))}
                            <span className="text-sm text-gray-600 ml-2">{Number(item.sleep || 0)}/10</span>
                          </div>
                        </div>
                      </div>
                      
                      {String(item.notes || 'Brak notatek') && (
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-700">{String(item.notes || 'Brak notatek')}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'emergency' && (
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon name="phone" size="lg" color="error" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{String(item.name || 'Psycholog')}</h3>
                        <p className="text-sm text-gray-600 mb-2">{String(item.role || 'Psycholog')}</p>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Icon name="phone" size="sm" color="gray" />
                            <span>{String(item.phone || 'Brak numeru')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="mail" size="sm" color="gray" />
                            <span>{String(item.email || 'Brak email')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="clock" size="sm" color="gray" />
                            <span>{String(item.availability || 'Brak informacji')}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-3 pt-3 border-t border-gray-200 mt-3">
                    {activeTab === 'appointments' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="calendar" size="sm" />
                          <span className="ml-1">Przełóż</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="video" size="sm" />
                          <span className="ml-1">Wideorozmowa</span>
                        </Button>
                      </>
                    )}
                    {activeTab === 'resources' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="download" size="sm" />
                          <span className="ml-1">Pobierz</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="eye" size="sm" />
                          <span className="ml-1">Podgląd</span>
                        </Button>
                      </>
                    )}
                    {activeTab === 'mood-tracker' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="edit" size="sm" />
                          <span className="ml-1">Edytuj</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="chart" size="sm" />
                          <span className="ml-1">Wykres</span>
                        </Button>
                      </>
                    )}
                    {activeTab === 'emergency' && (
                      <>
                        <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
                          <Icon name="phone" size="sm" />
                          <span className="ml-1">Zadzwoń</span>
                        </Button>
                        <Button variant="outline" size="sm" className="border-red-300 text-red-700 hover:bg-red-100">
                          <Icon name="message" size="sm" />
                          <span className="ml-1">Napisz</span>
                        </Button>
                      </>
                    )}
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Quick Actions */}
          <Card className="mt-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="plus" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Szybkie akcje</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="calendar" size="sm" />
                <span className="ml-2">Umów wizytę</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="plus" size="sm" />
                <span className="ml-2">Dodaj wpis do dziennika</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="phone" size="sm" />
                <span className="ml-2">Pilny kontakt</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="download" size="sm" />
                <span className="ml-2">Pobierz materiały</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
