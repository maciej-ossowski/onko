'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function AppointmentsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'completed' | 'cancelled'>('upcoming');

  const handleLogout = () => {
    router.push('/');
  };

  const appointments = [
    {
      id: 1,
      type: 'Konsultacja onkologiczna',
      doctor: 'Dr Jan Kowalski',
      date: '2025-01-25',
      time: '10:00',
      duration: '30 min',
      location: 'Centrum Onkologii w Warszawie',
      room: 'Gabinet 205',
      status: 'upcoming',
      purpose: 'Omówienie wyników badań i dalszego leczenia',
      notes: 'Proszę przynieść wyniki ostatnich badań'
    },
    {
      id: 2,
      type: 'Konsultacja psychologiczna',
      doctor: 'Dr Maria Kowalczyk',
      date: '2025-01-30',
      time: '14:00',
      duration: '45 min',
      location: 'Centrum Onkologii w Warszawie',
      room: 'Gabinet 301',
      status: 'upcoming',
      purpose: 'Wsparcie psychologiczne',
      notes: 'Pierwsza wizyta u psychologa'
    },
    {
      id: 3,
      type: 'Konsultacja dietetyczna',
      doctor: 'Dr Anna Zielińska',
      date: '2025-02-05',
      time: '11:30',
      duration: '30 min',
      location: 'Centrum Onkologii w Warszawie',
      room: 'Gabinet 150',
      status: 'upcoming',
      purpose: 'Porady żywieniowe podczas leczenia',
      notes: 'Proszę przygotować dziennik żywieniowy'
    },
    {
      id: 4,
      type: 'Konsultacja onkologiczna',
      doctor: 'Dr Jan Kowalski',
      date: '2025-01-15',
      time: '09:00',
      duration: '30 min',
      location: 'Centrum Onkologii w Warszawie',
      room: 'Gabinet 205',
      status: 'completed',
      purpose: 'Kontrola po zakończeniu chemioterapii',
      notes: 'Wszystko w porządku, kontynuujemy leczenie',
      summary: 'Pacjentka w dobrej kondycji, toleruje leczenie. Zalecono rozpoczęcie radioterapii.'
    },
    {
      id: 5,
      type: 'Konsultacja radiologiczna',
      doctor: 'Dr Anna Nowak',
      date: '2025-01-10',
      time: '15:30',
      duration: '20 min',
      location: 'Centrum Onkologii w Warszawie',
      room: 'Gabinet 120',
      status: 'completed',
      purpose: 'Omówienie wyników mammografii',
      notes: 'Wyniki w normie, brak wznowy',
      summary: 'Wyniki badań obrazowych w normie. Brak oznak wznowy miejscowej.'
    },
    {
      id: 6,
      type: 'Konsultacja onkologiczna',
      doctor: 'Dr Jan Kowalski',
      date: '2025-01-05',
      time: '10:30',
      duration: '30 min',
      location: 'Centrum Onkologii w Warszawie',
      room: 'Gabinet 205',
      status: 'cancelled',
      purpose: 'Konsultacja kontrolna',
      notes: 'Odwołane z powodu choroby lekarza',
      cancellationReason: 'Choroba lekarza',
      rescheduledDate: '2025-01-12'
    }
  ];

  const getAppointments = () => {
    return appointments.filter(appointment => appointment.status === activeTab);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-green-600 bg-green-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'upcoming': return 'Nadchodząca';
      case 'completed': return 'Zakończona';
      case 'cancelled': return 'Odwołana';
      default: return 'Nieznany';
    }
  };

  const getTypeIcon = (type: string) => {
    if (type.includes('onkologiczna')) return 'doctor';
    if (type.includes('psychologiczna')) return 'heart';
    if (type.includes('dietetyczna')) return 'apple';
    if (type.includes('radiologiczna')) return 'chart';
    return 'calendar';
  };

  const upcomingCount = appointments.filter(a => a.status === 'upcoming').length;
  const completedCount = appointments.filter(a => a.status === 'completed').length;
  const cancelledCount = appointments.filter(a => a.status === 'cancelled').length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Wizyty"
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Moje wizyty</h1>
                <p className="text-gray-600 mt-2">Zarządzaj swoimi wizytami i umów nowe</p>
              </div>
              <Button variant="outline" onClick={() => console.log('Umów wizytę')}>
                <Icon name="plus" size="sm" />
                <span className="ml-2">Umów wizytę</span>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <div className="text-2xl font-bold text-blue-600">{upcomingCount}</div>
              <div className="text-sm text-gray-600">Nadchodzące</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-green-600">{completedCount}</div>
              <div className="text-sm text-gray-600">Zakończone</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-red-600">{cancelledCount}</div>
              <div className="text-sm text-gray-600">Odwołane</div>
            </Card>
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
                  Nadchodzące ({upcomingCount})
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'completed'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Zakończone ({completedCount})
                </button>
                <button
                  onClick={() => setActiveTab('cancelled')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'cancelled'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Odwołane ({cancelledCount})
                </button>
              </nav>
            </div>
          </div>

          {/* Appointments List */}
          <div className="space-y-4">
            {getAppointments().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="calendar" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">
                    {activeTab === 'upcoming' ? 'Brak nadchodzących wizyt' :
                     activeTab === 'completed' ? 'Brak zakończonych wizyt' :
                     'Brak odwołanych wizyt'}
                  </p>
                </div>
              </Card>
            ) : (
              getAppointments().map((appointment) => (
                <Card key={appointment.id} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Icon name={getTypeIcon(appointment.type)} size="md" className="text-pink-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{appointment.type}</h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                          {getStatusText(appointment.status)}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Icon name="doctor" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{appointment.doctor}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="calendar" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{appointment.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="clock" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{appointment.time} ({appointment.duration})</span>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Icon name="map-pin" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{appointment.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="home" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">Gabinet {appointment.room}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="info" size="sm" color="gray" />
                            <span className="text-sm text-gray-600">{appointment.purpose}</span>
                          </div>
                        </div>
                      </div>
                      
                      {appointment.notes && (
                        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                          <p className="text-sm font-medium text-gray-700 mb-1">Notatki:</p>
                          <p className="text-sm text-gray-900">{appointment.notes}</p>
                        </div>
                      )}
                      
                      {appointment.summary && (
                        <div className="mb-4 p-3 bg-green-50 rounded-lg">
                          <p className="text-sm font-medium text-green-700 mb-1">Podsumowanie wizyty:</p>
                          <p className="text-sm text-green-900">{appointment.summary}</p>
                        </div>
                      )}
                      
                      {appointment.cancellationReason && (
                        <div className="mb-4 p-3 bg-red-50 rounded-lg">
                          <p className="text-sm font-medium text-red-700 mb-1">Powód odwołania:</p>
                          <p className="text-sm text-red-900">{appointment.cancellationReason}</p>
                          {appointment.rescheduledDate && (
                            <p className="text-sm text-red-800 mt-1">
                              Przełożono na: {appointment.rescheduledDate}
                            </p>
                          )}
                        </div>
                      )}
                      
                      <div className="flex space-x-3">
                        {appointment.status === 'upcoming' && (
                          <>
                            <Button variant="outline" size="sm">
                              <Icon name="edit" size="sm" />
                              <span className="ml-1">Przełóż</span>
                            </Button>
                            <Button variant="outline" size="sm">
                              <Icon name="x" size="sm" />
                              <span className="ml-1">Odwołaj</span>
                            </Button>
                          </>
                        )}
                        <Button variant="outline" size="sm">
                          <Icon name="eye" size="sm" />
                          <span className="ml-1">Szczegóły</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="calendar" size="sm" />
                          <span className="ml-1">Dodaj do kalendarza</span>
                        </Button>
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
                <Icon name="lightbulb" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Szybkie akcje</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="plus" size="sm" />
                <span className="ml-2">Umów wizytę</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="phone" size="sm" />
                <span className="ml-2">Zadzwoń do rejestracji</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="calendar" size="sm" />
                <span className="ml-2">Eksportuj kalendarz</span>
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
