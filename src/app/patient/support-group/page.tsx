'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function SupportGroupPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'discussions' | 'events' | 'members' | 'resources'>('discussions');

  const handleLogout = () => {
    router.push('/');
  };

  const discussions = [
    {
      id: 1,
      title: 'Jak radzić sobie z wypadaniem włosów?',
      author: 'Maria K.',
      date: '2025-01-20',
      replies: 12,
      likes: 8,
      category: 'Wsparcie emocjonalne',
      lastActivity: '2 godziny temu',
      isPinned: true
    },
    {
      id: 2,
      title: 'Przepisy na zdrowe posiłki podczas chemioterapii',
      author: 'Anna W.',
      date: '2025-01-19',
      replies: 6,
      likes: 15,
      category: 'Dieta i żywienie',
      lastActivity: '1 dzień temu',
      isPinned: false
    },
    {
      id: 3,
      title: 'Ćwiczenia fizyczne po operacji',
      author: 'Katarzyna L.',
      date: '2025-01-18',
      replies: 9,
      likes: 11,
      category: 'Aktywność fizyczna',
      lastActivity: '2 dni temu',
      isPinned: false
    },
    {
      id: 4,
      title: 'Moja historia - 5 lat bez nawrotu',
      author: 'Ewa S.',
      date: '2025-01-17',
      replies: 25,
      likes: 32,
      category: 'Historie sukcesu',
      lastActivity: '3 dni temu',
      isPinned: true
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Spotkanie grupy wsparcia - "Radzenie sobie ze stresem"',
      date: '2025-01-25',
      time: '18:00',
      location: 'Centrum Onkologii w Warszawie',
      type: 'Spotkanie stacjonarne',
      participants: 15,
      maxParticipants: 20,
      description: 'Warsztat poświęcony technikom radzenia sobie ze stresem podczas leczenia',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Wideorozmowa - "Pytania i odpowiedzi z psychologiem"',
      date: '2025-01-28',
      time: '19:00',
      location: 'Online',
      type: 'Spotkanie online',
      participants: 8,
      maxParticipants: 15,
      description: 'Otwarta sesja pytań i odpowiedzi z psychologiem onkologicznym',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Spacer terapeutyczny w Parku Łazienkowskim',
      date: '2025-01-30',
      time: '10:00',
      location: 'Park Łazienkowski, Warszawa',
      type: 'Aktywność fizyczna',
      participants: 12,
      maxParticipants: 15,
      description: 'Spokojny spacer w grupie, połączony z rozmowami i wsparciem',
      status: 'upcoming'
    }
  ];

  const members = [
    {
      id: 1,
      name: 'Anna Kowalska',
      joinDate: '2023-10-01',
      status: 'Aktywna',
      posts: 45,
      helpful: 23,
      avatar: 'AK',
      story: 'W trakcie leczenia, dzielę się doświadczeniami'
    },
    {
      id: 2,
      name: 'Maria Nowak',
      joinDate: '2023-09-15',
      status: 'Mentor',
      posts: 89,
      helpful: 67,
      avatar: 'MN',
      story: '5 lat po leczeniu, pomagam innym pacjentkom'
    },
    {
      id: 3,
      name: 'Katarzyna Wiśniewska',
      joinDate: '2023-11-20',
      status: 'Aktywna',
      posts: 23,
      helpful: 15,
      avatar: 'KW',
      story: 'W trakcie radioterapii, szukam wsparcia'
    },
    {
      id: 4,
      name: 'Ewa Kowalczyk',
      joinDate: '2023-08-10',
      status: 'Moderator',
      posts: 156,
      helpful: 98,
      avatar: 'EK',
      story: '3 lata po leczeniu, moderuję grupę'
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Przewodnik dla pacjentek z rakiem piersi',
      type: 'PDF',
      size: '2.3 MB',
      downloads: 145,
      description: 'Kompletny przewodnik zawierający informacje o leczeniu, diecie i wsparciu',
      category: 'Materiały edukacyjne'
    },
    {
      id: 2,
      title: 'Lista kontaktów do specjalistów',
      type: 'PDF',
      size: '0.8 MB',
      downloads: 89,
      description: 'Aktualna lista kontaktów do lekarzy, psychologów i dietetyków',
      category: 'Kontakty'
    },
    {
      id: 3,
      title: 'Przepisy kulinarne dla pacjentek onkologicznych',
      type: 'PDF',
      size: '1.5 MB',
      downloads: 67,
      description: 'Zbiór przepisów dostosowanych do potrzeb pacjentek w trakcie leczenia',
      category: 'Dieta'
    },
    {
      id: 4,
      title: 'Techniki relaksacyjne - nagrania audio',
      type: 'ZIP',
      size: '45.2 MB',
      downloads: 34,
      description: 'Nagrania z ćwiczeniami relaksacyjnymi i medytacjami',
      category: 'Wsparcie emocjonalne'
    }
  ];

  const getContent = () => {
    switch (activeTab) {
      case 'discussions': return discussions;
      case 'events': return events;
      case 'members': return members;
      case 'resources': return resources;
      default: return [];
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aktywna': return 'text-green-600 bg-green-100';
      case 'Mentor': return 'text-blue-600 bg-blue-100';
      case 'Moderator': return 'text-purple-600 bg-purple-100';
      case 'upcoming': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Spotkanie stacjonarne': return 'users';
      case 'Spotkanie online': return 'video';
      case 'Aktywność fizyczna': return 'activity';
      case 'PDF': return 'file-text';
      case 'ZIP': return 'archive';
      default: return 'file';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Grupa wsparcia"
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
            <h1 className="text-3xl font-bold text-gray-900">Grupa wsparcia</h1>
            <p className="text-gray-600 mt-2">Połącz się z innymi pacjentkami i uzyskaj wsparcie</p>
          </div>

          {/* Welcome Card */}
          <Card className="mb-8 bg-gradient-to-r from-pink-50 to-blue-50 border-pink-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="users" size="xl" color="primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Witaj w grupie wsparcia!</h2>
                <p className="text-gray-700">
                  Jesteś częścią społeczności 150+ pacjentek, które wzajemnie się wspierają. 
                  Dziel się doświadczeniami, zadawaj pytania i znajdź przyjaciół na tej trudnej drodze.
                </p>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('discussions')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'discussions'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Dyskusje ({discussions.length})
                </button>
                <button
                  onClick={() => setActiveTab('events')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'events'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Wydarzenia ({events.length})
                </button>
                <button
                  onClick={() => setActiveTab('members')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'members'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Członkowie ({members.length})
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
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {getContent().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="users" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">Brak treści w tej kategorii</p>
                </div>
              </Card>
            ) : (
              getContent().map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  {activeTab === 'discussions' && (
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            {Boolean((item as Record<string, unknown>).isPinned) && (
                              <Icon name="pin" size="sm" color="primary" />
                            )}
                            <h3 className="text-lg font-semibold text-gray-900">{String((item as Record<string, unknown>).title || 'Temat')}</h3>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Autor: {String((item as Record<string, unknown>).author || 'Autor')}</span>
                            <span>{String((item as Record<string, unknown>).date || 'Dzisiaj')}</span>
                            <span className="text-pink-600">{String((item as Record<string, unknown>).category || 'Ogólne')}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Icon name="message" size="sm" />
                            <span>{String((item as Record<string, unknown>).replies || 0)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="heart" size="sm" />
                            <span>{String((item as Record<string, unknown>).likes || 0)}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">Ostatnia aktywność: {String((item as Record<string, unknown>).lastActivity || 'Dzisiaj')}</p>
                    </div>
                  )}

                  {activeTab === 'events' && (
                    <div className="space-y-3">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                          <Icon name={getTypeIcon(String((item as Record<string, unknown>).type || 'Spotkanie'))} size="md" className="text-pink-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold text-gray-900">{String((item as Record<string, unknown>).title || 'Temat')}</h3>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(String((item as Record<string, unknown>).status || 'Aktywne'))}`}>
                              {String((item as Record<string, unknown>).status || 'Aktywne') === 'upcoming' ? 'Nadchodzące' : String((item as Record<string, unknown>).status || 'Aktywne')}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Icon name="calendar" size="sm" color="gray" />
                              <span>{String((item as Record<string, unknown>).date || 'Dzisiaj')} {String((item as Record<string, unknown>).time || '10:00')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="map-pin" size="sm" color="gray" />
                              <span>{String((item as Record<string, unknown>).location || 'Online')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="users" size="sm" color="gray" />
                              <span>{String((item as Record<string, unknown>).participants || 0)}/{String((item as Record<string, unknown>).maxParticipants || 0)} uczestników</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="tag" size="sm" color="gray" />
                              <span>{String((item as Record<string, unknown>).type || 'Spotkanie')}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mt-2">{String((item as Record<string, unknown>).description || 'Brak opisu')}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'members' && (
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-pink-700">{String((item as Record<string, unknown>).avatar || 'U')}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="text-lg font-semibold text-gray-900">{String((item as Record<string, unknown>).name || 'Użytkownik')}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(String((item as Record<string, unknown>).status || 'Aktywne'))}`}>
                            {String((item as Record<string, unknown>).status || 'Aktywne')}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{String((item as Record<string, unknown>).story || 'Brak historii')}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Dołączyła: {String((item as Record<string, unknown>).joinDate || 'Dzisiaj')}</span>
                          <span>Posty: {String((item as Record<string, unknown>).posts || 0)}</span>
                          <span>Pomocne: {String((item as Record<string, unknown>).helpful || 0)}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'resources' && (
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Icon name={getTypeIcon(String((item as Record<string, unknown>).type || 'Spotkanie'))} size="lg" color="primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{String((item as Record<string, unknown>).title || 'Temat')}</h3>
                          <span className="text-sm text-gray-500">{String((item as Record<string, unknown>).type || 'Spotkanie')} • {String((item as Record<string, unknown>).size || 'Brak informacji')}</span>
                        </div>
                        <p className="text-sm text-gray-700 mb-2">{String((item as Record<string, unknown>).description || 'Brak opisu')}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="text-pink-600">{String((item as Record<string, unknown>).category || 'Ogólne')}</span>
                          <span>Pobrania: {String((item as Record<string, unknown>).downloads || '0')}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-3 pt-3 border-t border-gray-200 mt-3">
                    {activeTab === 'discussions' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="eye" size="sm" />
                          <span className="ml-1">Przeczytaj</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="message" size="sm" />
                          <span className="ml-1">Odpowiedz</span>
                        </Button>
                      </>
                    )}
                    {activeTab === 'events' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="calendar" size="sm" />
                          <span className="ml-1">Zapisz się</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="share" size="sm" />
                          <span className="ml-1">Udostępnij</span>
                        </Button>
                      </>
                    )}
                    {activeTab === 'members' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="message" size="sm" />
                          <span className="ml-1">Napisz</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="user-plus" size="sm" />
                          <span className="ml-1">Dodaj do znajomych</span>
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
                <Icon name="plus" size="sm" />
                <span className="ml-2">Nowa dyskusja</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="calendar" size="sm" />
                <span className="ml-2">Utwórz wydarzenie</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="upload" size="sm" />
                <span className="ml-2">Dodaj materiał</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="users" size="sm" />
                <span className="ml-2">Zaproś znajomych</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
