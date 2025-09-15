'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function HistoryPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'timeline' | 'treatments' | 'examinations' | 'hospitalizations'>('timeline');

  const handleLogout = () => {
    router.push('/');
  };

  const timelineEvents = [
    {
      id: 1,
      date: '2023-09-15',
      type: 'diagnosis',
      title: 'Rozpoznanie choroby',
      description: 'Zdiagnozowano raka piersi, inwazyjny przewodowy',
      doctor: 'Dr Jan Kowalski',
      hospital: 'Centrum Onkologii w Warszawie',
      status: 'completed'
    },
    {
      id: 2,
      date: '2023-10-01',
      type: 'treatment',
      title: 'Rozpoczęcie chemioterapii',
      description: 'Pierwszy cykl chemioterapii AC-T',
      doctor: 'Dr Jan Kowalski',
      hospital: 'Centrum Onkologii w Warszawie',
      status: 'completed'
    },
    {
      id: 3,
      date: '2025-01-20',
      type: 'surgery',
      title: 'Operacja piersi',
      description: 'Lumpektomia z usunięciem węzłów chłonnych',
      doctor: 'Dr Anna Nowak',
      hospital: 'Centrum Onkologii w Warszawie',
      status: 'completed'
    },
    {
      id: 4,
      date: '2025-02-01',
      type: 'treatment',
      title: 'Rozpoczęcie radioterapii',
      description: 'Radioterapia pooperacyjna - 25 frakcji',
      doctor: 'Dr Piotr Wiśniewski',
      hospital: 'Centrum Onkologii w Warszawie',
      status: 'in-progress'
    },
    {
      id: 5,
      date: '2025-03-20',
      type: 'treatment',
      title: 'Rozpoczęcie hormonoterapii',
      description: 'Tamoksyfen 20mg dziennie przez 5 lat',
      doctor: 'Dr Jan Kowalski',
      hospital: 'Centrum Onkologii w Warszawie',
      status: 'pending'
    }
  ];

  const treatments = [
    {
      id: 1,
      name: 'Chemioterapia AC-T',
      startDate: '2023-10-01',
      endDate: '2023-12-15',
      cycles: 4,
      completedCycles: 4,
      status: 'completed',
      drugs: ['Doksorubicyna', 'Cyklofosfamid', 'Paclitaxel'],
      sideEffects: ['Wypadanie włosów', 'Nudności', 'Zmęczenie'],
      effectiveness: 'Dobra odpowiedź na leczenie'
    },
    {
      id: 2,
      name: 'Radioterapia',
      startDate: '2025-02-01',
      endDate: '2025-03-15',
      cycles: 25,
      completedCycles: 15,
      status: 'in-progress',
      drugs: [],
      sideEffects: ['Podrażnienie skóry', 'Zmęczenie'],
      effectiveness: 'W trakcie oceny'
    },
    {
      id: 3,
      name: 'Hormonoterapia',
      startDate: '2025-03-20',
      endDate: '2029-03-20',
      cycles: 60,
      completedCycles: 0,
      status: 'pending',
      drugs: ['Tamoksyfen'],
      sideEffects: [],
      effectiveness: 'Nie rozpoczęto'
    }
  ];

  const examinations = [
    {
      id: 1,
      name: 'Mammografia',
      date: '2023-09-10',
      result: 'Podejrzenie zmiany nowotworowej',
      doctor: 'Dr Anna Nowak',
      status: 'completed'
    },
    {
      id: 2,
      name: 'USG piersi',
      date: '2023-09-12',
      result: 'Potwierdzenie obecności guza',
      doctor: 'Dr Anna Nowak',
      status: 'completed'
    },
    {
      id: 3,
      name: 'Biopsja cienkoigłowa',
      date: '2023-09-15',
      result: 'Rak piersi, inwazyjny przewodowy, G2',
      doctor: 'Dr Anna Nowak',
      status: 'completed'
    },
    {
      id: 4,
      name: 'Tomografia komputerowa',
      date: '2023-09-20',
      result: 'Brak przerzutów odległych',
      doctor: 'Dr Jan Kowalski',
      status: 'completed'
    },
    {
      id: 5,
      name: 'Mammografia kontrolna',
      date: '2025-01-15',
      result: 'Brak wznowy miejscowej',
      doctor: 'Dr Jan Kowalski',
      status: 'completed'
    }
  ];

  const hospitalizations = [
    {
      id: 1,
      startDate: '2025-01-20',
      endDate: '2025-01-22',
      reason: 'Operacja piersi',
      department: 'Chirurgia onkologiczna',
      doctor: 'Dr Anna Nowak',
      hospital: 'Centrum Onkologii w Warszawie',
      status: 'completed',
      notes: 'Pacjentka w dobrej kondycji po operacji'
    },
    {
      id: 2,
      startDate: '2023-10-01',
      endDate: '2023-10-01',
      reason: 'Pierwszy cykl chemioterapii',
      department: 'Onkologia',
      doctor: 'Dr Jan Kowalski',
      hospital: 'Centrum Onkologii w Warszawie',
      status: 'completed',
      notes: 'Obserwacja po podaniu leków'
    }
  ];

  const getEvents = () => {
    switch (activeTab) {
      case 'timeline': return timelineEvents;
      case 'treatments': return treatments;
      case 'examinations': return examinations;
      case 'hospitalizations': return hospitalizations;
      default: return [];
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'diagnosis': return 'medical';
      case 'treatment': return 'pill';
      case 'surgery': return 'scissors';
      case 'examination': return 'chart';
      default: return 'calendar';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'diagnosis': return 'text-red-600 bg-red-100';
      case 'treatment': return 'text-blue-600 bg-blue-100';
      case 'surgery': return 'text-purple-600 bg-purple-100';
      case 'examination': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-yellow-600 bg-yellow-100';
      case 'pending': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Historia leczenia"
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
            <h1 className="text-3xl font-bold text-gray-900">Historia leczenia</h1>
            <p className="text-gray-600 mt-2">Przeglądaj swoją historię medyczną i postępy w leczeniu</p>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('timeline')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'timeline'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Oś czasu
                </button>
                <button
                  onClick={() => setActiveTab('treatments')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'treatments'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Leczenie
                </button>
                <button
                  onClick={() => setActiveTab('examinations')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'examinations'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Badania
                </button>
                <button
                  onClick={() => setActiveTab('hospitalizations')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'hospitalizations'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Hospitalizacje
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {activeTab === 'timeline' && (
              <div className="relative">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                {timelineEvents.map((event, index) => (
                  <div key={event.id} className="relative flex items-start space-x-4 mb-8">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getTypeColor(event.type)}`}>
                      <Icon name={getTypeIcon(event.type)} size="sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Card className="hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                            {event.status === 'completed' ? 'Zakończone' : 
                             event.status === 'in-progress' ? 'W toku' : 'Planowane'}
                          </span>
                        </div>
                        <p className="text-gray-700 mb-3">{event.description}</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Icon name="calendar" size="sm" color="gray" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="doctor" size="sm" color="gray" />
                            <span>{event.doctor}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="map-pin" size="sm" color="gray" />
                            <span>{event.hospital}</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'treatments' && (
              <div className="space-y-4">
                {treatments.map((treatment) => (
                  <Card key={treatment.id} className="hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                          <Icon name="pill" size="md" className="text-pink-600" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{treatment.name}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(treatment.status)}`}>
                            {treatment.status === 'completed' ? 'Zakończone' : 
                             treatment.status === 'in-progress' ? 'W toku' : 'Planowane'}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Icon name="calendar" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">
                                <strong>Okres:</strong> {treatment.startDate} - {treatment.endDate}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="repeat" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">
                                <strong>Cykle:</strong> {treatment.completedCycles}/{treatment.cycles}
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Icon name="activity" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">
                                <strong>Skuteczność:</strong> {treatment.effectiveness}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        {treatment.drugs.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm font-medium text-gray-700 mb-1">Leki:</p>
                            <div className="flex flex-wrap gap-2">
                              {treatment.drugs.map((drug, index) => (
                                <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {drug}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {treatment.sideEffects.length > 0 && (
                          <div className="mb-3">
                            <p className="text-sm font-medium text-gray-700 mb-1">Skutki uboczne:</p>
                            <div className="flex flex-wrap gap-2">
                              {treatment.sideEffects.map((effect, index) => (
                                <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                  {effect}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                            style={{width: `${(treatment.completedCycles / treatment.cycles) * 100}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'examinations' && (
              <div className="space-y-4">
                {examinations.map((exam) => (
                  <Card key={exam.id} className="hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                          <Icon name="chart" size="md" className="text-pink-600" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{exam.name}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                            {exam.status === 'completed' ? 'Zakończone' : 'W toku'}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                          <div className="flex items-center space-x-2">
                            <Icon name="calendar" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{exam.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="doctor" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{exam.doctor}</span>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Wynik:</p>
                          <p className="text-sm text-gray-900">{exam.result}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'hospitalizations' && (
              <div className="space-y-4">
                {hospitalizations.map((hospitalization) => (
                  <Card key={hospitalization.id} className="hover:shadow-md transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                          <Icon name="home" size="md" className="text-pink-600" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{hospitalization.reason}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(hospitalization.status)}`}>
                            {hospitalization.status === 'completed' ? 'Zakończone' : 'W toku'}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Icon name="calendar" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">
                                <strong>Okres:</strong> {hospitalization.startDate} - {hospitalization.endDate}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="building" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">{hospitalization.hospital}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Icon name="users" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">{hospitalization.department}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="doctor" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">{hospitalization.doctor}</span>
                            </div>
                          </div>
                        </div>
                        
                        {hospitalization.notes && (
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <p className="text-sm font-medium text-gray-700 mb-1">Notatki:</p>
                            <p className="text-sm text-gray-900">{hospitalization.notes}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <Card className="mt-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="download" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Szybkie akcje</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="download" size="sm" />
                <span className="ml-2">Pobierz historię</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="share" size="sm" />
                <span className="ml-2">Udostępnij lekarzowi</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="print" size="sm" />
                <span className="ml-2">Wydrukuj</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
