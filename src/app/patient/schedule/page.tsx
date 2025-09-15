'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function SchedulePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'pending'>('upcoming');

  const handleLogout = () => {
    router.push('/');
  };

  const upcomingExaminations = [
    {
      id: 1,
      name: 'Mammografia',
      date: '2025-01-15',
      time: '10:00',
      location: 'Centrum Onkologii w Warszawie',
      doctor: 'Dr Jan Kowalski',
      type: 'Diagnostyka',
      status: 'Zaplanowane',
      description: 'Badanie kontrolne po zakończeniu chemioterapii'
    },
    {
      id: 2,
      name: 'USG piersi',
      date: '2025-01-22',
      time: '14:30',
      location: 'Centrum Onkologii w Warszawie',
      doctor: 'Dr Anna Nowak',
      type: 'Diagnostyka',
      status: 'Zaplanowane',
      description: 'Badanie ultrasonograficzne piersi'
    },
    {
      id: 3,
      name: 'Konsultacja onkologiczna',
      date: '2025-01-25',
      time: '09:00',
      location: 'Centrum Onkologii w Warszawie',
      doctor: 'Dr Jan Kowalski',
      type: 'Konsultacja',
      status: 'Zaplanowane',
      description: 'Omówienie wyników badań i dalszego leczenia'
    }
  ];

  const completedExaminations = [
    {
      id: 4,
      name: 'Mammografia',
      date: '2023-12-15',
      time: '10:00',
      location: 'Centrum Onkologii w Warszawie',
      doctor: 'Dr Jan Kowalski',
      type: 'Diagnostyka',
      status: 'Zakończone',
      description: 'Badanie kontrolne',
      result: 'Wyniki w normie'
    },
    {
      id: 5,
      name: 'Biopsja cienkoigłowa',
      date: '2023-11-20',
      time: '11:30',
      location: 'Centrum Onkologii w Warszawie',
      doctor: 'Dr Anna Nowak',
      type: 'Diagnostyka',
      status: 'Zakończone',
      description: 'Pobranie materiału do badania histopatologicznego',
      result: 'Potwierdzenie rozpoznania'
    },
    {
      id: 6,
      name: 'Tomografia komputerowa',
      date: '2023-11-10',
      time: '08:00',
      location: 'Centrum Onkologii w Warszawie',
      doctor: 'Dr Jan Kowalski',
      type: 'Diagnostyka',
      status: 'Zakończone',
      description: 'Badanie obrazowe klatki piersiowej',
      result: 'Brak przerzutów odległych'
    }
  ];

  const pendingExaminations = [
    {
      id: 7,
      name: 'Rezonans magnetyczny',
      date: '2025-02-10',
      time: '16:00',
      location: 'Centrum Onkologii w Warszawie',
      doctor: 'Dr Jan Kowalski',
      type: 'Diagnostyka',
      status: 'Oczekujące na potwierdzenie',
      description: 'Badanie obrazowe do oceny zaawansowania choroby'
    },
    {
      id: 8,
      name: 'Konsultacja psychologiczna',
      date: '2025-01-30',
      time: '15:00',
      location: 'Centrum Onkologii w Warszawie',
      doctor: 'Dr Maria Kowalczyk',
      type: 'Wsparcie',
      status: 'Oczekujące na potwierdzenie',
      description: 'Konsultacja psychologiczna dla pacjentek onkologicznych'
    }
  ];

  const getExaminations = () => {
    switch (activeTab) {
      case 'upcoming': return upcomingExaminations;
      case 'completed': return completedExaminations;
      case 'pending': return pendingExaminations;
      default: return [];
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Zaplanowane': return 'text-blue-600 bg-blue-100';
      case 'Zakończone': return 'text-green-600 bg-green-100';
      case 'Oczekujące na potwierdzenie': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Diagnostyka': return 'chart';
      case 'Konsultacja': return 'doctor';
      case 'Wsparcie': return 'heart';
      default: return 'calendar';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Harmonogram badań"
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
            <h1 className="text-3xl font-bold text-gray-900">Harmonogram badań</h1>
            <p className="text-gray-600 mt-2">Zarządzaj swoimi badaniami i wizytami</p>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('upcoming')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'upcoming'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Nadchodzące ({upcomingExaminations.length})
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'completed'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Zakończone ({completedExaminations.length})
                </button>
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'pending'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Oczekujące ({pendingExaminations.length})
                </button>
              </nav>
            </div>
          </div>

          {/* Examinations List */}
          <div className="space-y-4">
            {getExaminations().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="calendar" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">
                    {activeTab === 'upcoming' ? 'Brak nadchodzących badań' :
                     activeTab === 'completed' ? 'Brak zakończonych badań' :
                     'Brak oczekujących badań'}
                  </p>
                </div>
              </Card>
            ) : (
              getExaminations().map((exam) => (
                <Card key={exam.id} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Icon name={getTypeIcon(exam.type)} size="md" className="text-pink-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{exam.name}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(exam.status)}`}>
                          {exam.status}
                        </span>
                      </div>
                      
                      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Icon name="calendar" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{exam.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="clock" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{exam.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="map-pin" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{exam.location}</span>
                          </div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <Icon name="doctor" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{exam.doctor}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="tag" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{exam.type}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-3">
                        <p className="text-sm text-gray-700">{exam.description}</p>
                        {Boolean((exam as Record<string, unknown>).result) && (
                          <p className="text-sm text-green-600 mt-1 font-medium">Wynik: {String((exam as Record<string, unknown>).result)}</p>
                        )}
                      </div>
                      
                      <div className="mt-4 flex space-x-3">
                        <Button variant="outline" size="sm">
                          <Icon name="eye" size="sm" />
                          <span className="ml-1">Szczegóły</span>
                        </Button>
                        {activeTab === 'upcoming' && (
                          <Button variant="outline" size="sm">
                            <Icon name="calendar" size="sm" />
                            <span className="ml-1">Przełóż</span>
                          </Button>
                        )}
                        {activeTab === 'pending' && (
                          <Button variant="outline" size="sm">
                            <Icon name="check" size="sm" />
                            <span className="ml-1">Potwierdź</span>
                          </Button>
                        )}
                      </div>
                    </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="calendar" size="sm" />
                <span className="ml-2">Zaplanuj badanie</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="phone" size="sm" />
                <span className="ml-2">Skontaktuj się z lekarzem</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="download" size="sm" />
                <span className="ml-2">Pobierz harmonogram</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
