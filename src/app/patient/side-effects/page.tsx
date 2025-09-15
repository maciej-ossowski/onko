'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function SideEffectsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'resolved' | 'severe'>('all');

  const handleLogout = () => {
    router.push('/');
  };

  const sideEffects = [
    {
      id: 1,
      name: 'Uderzenia gorąca',
      medication: 'Tamoksyfen',
      severity: 'mild',
      frequency: '2-3x dziennie',
      startDate: '2025-01-20',
      endDate: null,
      status: 'active',
      description: 'Nagłe uczucie gorąca, głównie wieczorem',
      impact: 'Nieznaczny wpływ na codzienne funkcjonowanie',
      management: 'Pić dużo wody, unikać gorących napojów',
      doctorNotes: 'Normalny skutek uboczny, powinien ustąpić po kilku miesiącach'
    },
    {
      id: 2,
      name: 'Nudności',
      medication: 'Metformina',
      severity: 'mild',
      frequency: 'Rzadko',
      startDate: '2023-10-01',
      endDate: null,
      status: 'active',
      description: 'Lekkie nudności po większych posiłkach',
      impact: 'Minimalny wpływ na apetyt',
      management: 'Jeść mniejsze posiłki częściej',
      doctorNotes: 'Można wziąć lek przeciwwymiotny jeśli potrzeba'
    },
    {
      id: 3,
      name: 'Wypadanie włosów',
      medication: 'Doksorubicyna',
      severity: 'moderate',
      frequency: 'Ciągłe',
      startDate: '2023-10-15',
      endDate: '2023-12-15',
      status: 'resolved',
      description: 'Znaczne wypadanie włosów na głowie',
      impact: 'Duży wpływ na samoocenę',
      management: 'Używać delikatnych szamponów, nosić chusty',
      doctorNotes: 'Włosy odrosły po zakończeniu chemioterapii'
    },
    {
      id: 4,
      name: 'Zmęczenie',
      medication: 'Radioterapia',
      severity: 'moderate',
      frequency: 'Codziennie',
      startDate: '2025-02-01',
      endDate: null,
      status: 'active',
      description: 'Uczucie zmęczenia przez cały dzień',
      impact: 'Ogranicza aktywność fizyczną',
      management: 'Regularne drzemki, umiarkowana aktywność',
      doctorNotes: 'Normalny skutek radioterapii, ustąpi po zakończeniu'
    },
    {
      id: 5,
      name: 'Podrażnienie skóry',
      medication: 'Radioterapia',
      severity: 'moderate',
      frequency: 'Ciągłe',
      startDate: '2025-02-05',
      endDate: null,
      status: 'active',
      description: 'Czerwona, podrażniona skóra w okolicy piersi',
      impact: 'Dyskomfort przy dotyku',
      management: 'Stosować kremy nawilżające, unikać słońca',
      doctorNotes: 'Używać tylko zalecanych kremów'
    },
    {
      id: 6,
      name: 'Bóle głowy',
      medication: 'Tamoksyfen',
      severity: 'severe',
      frequency: '2-3x tygodniowo',
      startDate: '2025-01-25',
      endDate: '2025-01-30',
      status: 'resolved',
      description: 'Silne bóle głowy z nudnościami',
      impact: 'Uniemożliwiały normalne funkcjonowanie',
      management: 'Paracetamol, odpoczynek w ciemnym pokoju',
      doctorNotes: 'Skutek uboczny ustąpił po dostosowaniu dawki'
    }
  ];

  const getSideEffects = () => {
    let filtered = sideEffects;
    
    switch (activeTab) {
      case 'active':
        filtered = filtered.filter(effect => effect.status === 'active');
        break;
      case 'resolved':
        filtered = filtered.filter(effect => effect.status === 'resolved');
        break;
      case 'severe':
        filtered = filtered.filter(effect => effect.severity === 'severe');
        break;
      default:
        break;
    }
    
    return filtered;
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'mild': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'severe': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityText = (severity: string) => {
    switch (severity) {
      case 'mild': return 'Łagodne';
      case 'moderate': return 'Umiarkowane';
      case 'severe': return 'Ciężkie';
      default: return 'Nieznany';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-yellow-600 bg-yellow-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Aktywne';
      case 'resolved': return 'Rozwiązane';
      default: return 'Nieznany';
    }
  };

  const activeCount = sideEffects.filter(e => e.status === 'active').length;
  const resolvedCount = sideEffects.filter(e => e.status === 'resolved').length;
  const severeCount = sideEffects.filter(e => e.severity === 'severe').length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Skutki uboczne"
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
                <h1 className="text-3xl font-bold text-gray-900">Skutki uboczne</h1>
                <p className="text-gray-600 mt-2">Monitoruj i zgłaszaj skutki uboczne leków</p>
              </div>
              <Button variant="outline" onClick={() => console.log('Zgłoś skutek uboczny')}>
                <Icon name="plus" size="sm" />
                <span className="ml-2">Zgłoś skutek uboczny</span>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <div className="text-2xl font-bold text-yellow-600">{activeCount}</div>
              <div className="text-sm text-gray-600">Aktywne</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-green-600">{resolvedCount}</div>
              <div className="text-sm text-gray-600">Rozwiązane</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-red-600">{severeCount}</div>
              <div className="text-sm text-gray-600">Ciężkie</div>
            </Card>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'all'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Wszystkie ({sideEffects.length})
                </button>
                <button
                  onClick={() => setActiveTab('active')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'active'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Aktywne ({activeCount})
                </button>
                <button
                  onClick={() => setActiveTab('resolved')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'resolved'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Rozwiązane ({resolvedCount})
                </button>
                <button
                  onClick={() => setActiveTab('severe')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'severe'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Ciężkie ({severeCount})
                </button>
              </nav>
            </div>
          </div>

          {/* Side Effects List */}
          <div className="space-y-4">
            {getSideEffects().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="warning" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">
                    {activeTab === 'active' ? 'Brak aktywnych skutków ubocznych' :
                     activeTab === 'resolved' ? 'Brak rozwiązanych skutków ubocznych' :
                     activeTab === 'severe' ? 'Brak ciężkich skutków ubocznych' :
                     'Brak zgłoszonych skutków ubocznych'}
                  </p>
                </div>
              </Card>
            ) : (
              getSideEffects().map((effect) => (
                <Card key={effect.id} className="hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{effect.name}</h3>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSeverityColor(effect.severity)}`}>
                            {getSeverityText(effect.severity)}
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(effect.status)}`}>
                            {getStatusText(effect.status)}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-2">
                            <Icon name="pill" size="sm" color="gray" />
                            <span><strong>Lek:</strong> {effect.medication}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="clock" size="sm" color="gray" />
                            <span><strong>Częstość:</strong> {effect.frequency}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="calendar" size="sm" color="gray" />
                            <span><strong>Od:</strong> {effect.startDate}</span>
                          </div>
                          {effect.endDate && (
                            <div className="flex items-center space-x-2">
                              <Icon name="check" size="sm" color="gray" />
                              <span><strong>Do:</strong> {effect.endDate}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">{effect.description}</p>
                    </div>
                    
                    {/* Impact and Management */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-sm font-medium text-blue-700 mb-1">Wpływ na codzienne życie:</p>
                        <p className="text-sm text-blue-900">{effect.impact}</p>
                      </div>
                      
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-sm font-medium text-green-700 mb-1">Zalecenia:</p>
                        <p className="text-sm text-green-900">{effect.management}</p>
                      </div>
                    </div>
                    
                    {/* Doctor Notes */}
                    {effect.doctorNotes && (
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <p className="text-sm font-medium text-yellow-700 mb-1">Notatki lekarza:</p>
                        <p className="text-sm text-yellow-900">{effect.doctorNotes}</p>
                      </div>
                    )}
                    
                    {/* Actions */}
                    <div className="flex space-x-3 pt-2">
                      <Button variant="outline" size="sm">
                        <Icon name="edit" size="sm" />
                        <span className="ml-1">Edytuj</span>
                      </Button>
                      {effect.status === 'active' && (
                        <Button variant="outline" size="sm">
                          <Icon name="check" size="sm" />
                          <span className="ml-1">Oznacz jako rozwiązane</span>
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Icon name="message" size="sm" />
                        <span className="ml-1">Zgłoś lekarzowi</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Emergency Contact */}
          <Card className="mt-8 bg-red-50 border-red-200">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="phone" size="lg" color="error" />
              <h2 className="text-xl font-semibold text-red-900">Pilny kontakt</h2>
            </div>
            
            <p className="text-red-800 mb-4">
              Jeśli doświadczasz ciężkich skutków ubocznych lub masz pytania dotyczące bezpieczeństwa leków, 
              skontaktuj się natychmiast z lekarzem lub zadzwoń na numer alarmowy.
            </p>
            
            <div className="flex space-x-4">
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
                <Icon name="phone" size="sm" />
                <span className="ml-2">Zadzwoń do lekarza</span>
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-100">
                <Icon name="alert-triangle" size="sm" />
                <span className="ml-2">Zgłoś pilne</span>
              </Button>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="lightbulb" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Szybkie akcje</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="plus" size="sm" />
                <span className="ml-2">Zgłoś nowy skutek</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="download" size="sm" />
                <span className="ml-2">Pobierz raport</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="message" size="sm" />
                <span className="ml-2">Wyślij do lekarza</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
