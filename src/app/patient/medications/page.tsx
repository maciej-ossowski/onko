'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function MedicationsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'current' | 'completed' | 'side-effects'>('current');

  const handleLogout = () => {
    router.push('/');
  };

  const currentMedications = [
    {
      id: 1,
      name: 'Metformina',
      dosage: '500mg',
      frequency: '2x dziennie',
      time: '8:00, 20:00',
      startDate: '2023-10-01',
      endDate: '2025-07-15',
      doctor: 'Dr Jan Kowalski',
      purpose: 'Kontrola cukrzycy',
      status: 'Aktywny',
      nextDose: '2025-01-15 20:00',
      remaining: 15
    },
    {
      id: 2,
      name: 'Insulina',
      dosage: '10 jednostek',
      frequency: '1x dziennie',
      time: '8:00',
      startDate: '2023-10-01',
      endDate: '2025-07-15',
      doctor: 'Dr Jan Kowalski',
      purpose: 'Kontrola cukrzycy',
      status: 'Aktywny',
      nextDose: '2025-01-15 8:00',
      remaining: 8
    },
    {
      id: 3,
      name: 'Tamoksyfen',
      dosage: '20mg',
      frequency: '1x dziennie',
      time: '18:00',
      startDate: '2025-01-20',
      endDate: '2027-01-20',
      doctor: 'Dr Jan Kowalski',
      purpose: 'Hormonoterapia',
      status: 'Aktywny',
      nextDose: '2025-01-15 18:00',
      remaining: 30
    }
  ];

  const completedMedications = [
    {
      id: 4,
      name: 'Doksorubicyna',
      dosage: '60mg/m²',
      frequency: 'Co 3 tygodnie',
      time: '10:00',
      startDate: '2023-10-01',
      endDate: '2023-12-15',
      doctor: 'Dr Jan Kowalski',
      purpose: 'Chemioterapia',
      status: 'Zakończony',
      reason: 'Zakończenie cyklu chemioterapii'
    },
    {
      id: 5,
      name: 'Cyklofosfamid',
      dosage: '600mg/m²',
      frequency: 'Co 3 tygodnie',
      time: '10:00',
      startDate: '2023-10-01',
      endDate: '2023-12-15',
      doctor: 'Dr Jan Kowalski',
      purpose: 'Chemioterapia',
      status: 'Zakończony',
      reason: 'Zakończenie cyklu chemioterapii'
    }
  ];

  const sideEffects = [
    {
      id: 1,
      medication: 'Tamoksyfen',
      effect: 'Uderzenia gorąca',
      severity: 'Łagodne',
      frequency: '2-3x dziennie',
      startDate: '2025-01-20',
      status: 'Aktywne',
      notes: 'Głównie wieczorem, można kontrolować'
    },
    {
      id: 2,
      medication: 'Metformina',
      effect: 'Nudności',
      severity: 'Łagodne',
      frequency: 'Rzadko',
      startDate: '2023-10-01',
      status: 'Aktywne',
      notes: 'Tylko po większych posiłkach'
    },
    {
      id: 3,
      medication: 'Doksorubicyna',
      effect: 'Wypadanie włosów',
      severity: 'Umiarkowane',
      frequency: 'Ciągłe',
      startDate: '2023-10-15',
      endDate: '2023-12-15',
      status: 'Zakończone',
      notes: 'Włosy odrosły po zakończeniu chemioterapii'
    }
  ];

  const getMedications = () => {
    switch (activeTab) {
      case 'current': return currentMedications;
      case 'completed': return completedMedications;
      case 'side-effects': return sideEffects;
      default: return [];
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Aktywny': return 'text-green-600 bg-green-100';
      case 'Zakończony': return 'text-gray-600 bg-gray-100';
      case 'Aktywne': return 'text-yellow-600 bg-yellow-100';
      case 'Zakończone': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Łagodne': return 'text-green-600 bg-green-100';
      case 'Umiarkowane': return 'text-yellow-600 bg-yellow-100';
      case 'Ciężkie': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Leki"
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
            <h1 className="text-3xl font-bold text-gray-900">Moje leki</h1>
            <p className="text-gray-600 mt-2">Zarządzaj swoimi lekami i monitoruj skutki uboczne</p>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('current')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'current'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Aktualne ({currentMedications.length})
                </button>
                <button
                  onClick={() => setActiveTab('completed')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'completed'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Zakończone ({completedMedications.length})
                </button>
                <button
                  onClick={() => setActiveTab('side-effects')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'side-effects'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Skutki uboczne ({sideEffects.length})
                </button>
              </nav>
            </div>
          </div>

          {/* Medications List */}
          <div className="space-y-4">
            {getMedications().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="pill" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">
                    {activeTab === 'current' ? 'Brak aktualnych leków' :
                     activeTab === 'completed' ? 'Brak zakończonych leków' :
                     'Brak zgłoszonych skutków ubocznych'}
                  </p>
                </div>
              </Card>
            ) : (
              getMedications().map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Icon name="pill" size="md" className="text-pink-600" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {activeTab === 'side-effects' ? String((item as Record<string, unknown>).medication || (item as Record<string, unknown>).name || 'Lek') : String((item as Record<string, unknown>).name || 'Lek')}
                        </h3>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </div>
                      
                      {activeTab === 'side-effects' ? (
                        <div className="mt-2 space-y-2">
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">
                              <strong>Skutek:</strong> {String((item as Record<string, unknown>).effect || 'Brak opisu')}
                            </span>
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(String((item as Record<string, unknown>).severity || 'Łagodny'))}`}>
                              {String((item as Record<string, unknown>).severity || 'Łagodny')}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">
                              <strong>Częstość:</strong> {String((item as Record<string, unknown>).frequency || 'Codziennie')}
                            </span>
                            <span className="text-sm text-gray-600">
                              <strong>Od:</strong> {String((item as Record<string, unknown>).startDate || 'Dzisiaj')}
                            </span>
                          </div>
                          {Boolean((item as Record<string, unknown>).notes) && (
                            <p className="text-sm text-gray-700 mt-2">{String((item as Record<string, unknown>).notes)}</p>
                          )}
                        </div>
                      ) : (
                        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <Icon name="pill" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">
                                <strong>Dawka:</strong> {String((item as Record<string, unknown>).dosage || 'Brak informacji')}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="clock" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">
                                <strong>Częstość:</strong> {String((item as Record<string, unknown>).frequency || 'Codziennie')}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="calendar" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">
                                <strong>Godziny:</strong> {String((item as Record<string, unknown>).time || 'Brak informacji')}
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2">
                              <Icon name="doctor" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">{String((item as Record<string, unknown>).doctor || 'Brak informacji')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="info" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">{String((item as Record<string, unknown>).purpose || 'Brak informacji')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="calendar" size="sm" color="gray" />
                              <span className="text-sm text-gray-600">
                                <strong>Okres:</strong> {item.startDate} - {item.endDate}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {activeTab === 'current' && (
                        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-blue-900">Następna dawka</p>
                              <p className="text-sm text-blue-700">{String((item as Record<string, unknown>).nextDose || 'Brak informacji')}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-blue-900">Pozostało</p>
                              <p className="text-sm text-blue-700">{String((item as Record<string, unknown>).remaining || 0)} tabletek</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-4 flex space-x-3">
                        <Button variant="outline" size="sm">
                          <Icon name="eye" size="sm" />
                          <span className="ml-1">Szczegóły</span>
                        </Button>
                        {activeTab === 'current' && (
                          <Button variant="outline" size="sm">
                            <Icon name="check" size="sm" />
                            <span className="ml-1">Oznacz jako przyjęte</span>
                          </Button>
                        )}
                        {activeTab === 'side-effects' && (
                          <Button variant="outline" size="sm">
                            <Icon name="edit" size="sm" />
                            <span className="ml-1">Edytuj</span>
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
                <Icon name="plus" size="sm" />
                <span className="ml-2">Dodaj lek</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="warning" size="sm" />
                <span className="ml-2">Zgłoś skutek uboczny</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="download" size="sm" />
                <span className="ml-2">Pobierz listę leków</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
