'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function DiloPage() {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [diloData, setDiloData] = useState({
    patientName: 'Anna Kowalska',
    pesel: '90010112345',
    diagnosis: 'Rak piersi, inwazyjny przewodowy',
    tnmStage: 'T2 N1 M0',
    histology: 'G2, ER+, PR+, HER2-',
    treatmentPlan: 'Chemioterapia (AC-T) → Operacja → Radioterapia → Hormonoterapia',
    startDate: '2023-10-01',
    endDate: '2025-07-15',
    status: 'Aktywna',
    oncologist: 'Dr Jan Kowalski',
    hospital: 'Centrum Onkologii w Warszawie',
    notes: 'Pacjentka w dobrej kondycji, toleruje leczenie. Regularne kontrole co 3 tygodnie.'
  });

  const handleLogout = () => {
    router.push('/');
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Karta DiLO zapisana:', diloData);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleInputChange = (field: string, value: string) => {
    setDiloData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const treatmentPhases = [
    { phase: 'Chemioterapia', status: 'completed', date: '2023-10-01 - 2025-01-15', progress: 100 },
    { phase: 'Operacja', status: 'completed', date: '2025-01-20', progress: 100 },
    { phase: 'Radioterapia', status: 'in-progress', date: '2025-02-01 - 2025-03-15', progress: 60 },
    { phase: 'Hormonoterapia', status: 'pending', date: '2025-03-20 - 2027-03-20', progress: 0 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Karta DiLO"
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
                <h1 className="text-3xl font-bold text-gray-900">Karta DiLO</h1>
                <p className="text-gray-600 mt-2">Diagnostyka i Leczenie Onkologiczne</p>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline">
                  <Icon name="download" size="sm" />
                  <span className="ml-2">Pobierz PDF</span>
                </Button>
                <Button variant="outline">
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-2">Udostępnij</span>
                </Button>
                {!isEditing && (
                  <Button variant="outline" onClick={handleEdit}>
                    <Icon name="edit" size="sm" />
                    <span className="ml-2">Edytuj</span>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Status Card */}
          <Card className="mb-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-lg font-medium">Status: {diloData.status}</span>
              </div>
              <div className="text-sm text-gray-500">
                Etap 3 z 4
              </div>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div className="bg-pink-500 h-2 rounded-full" style={{width: '75%'}}></div>
            </div>
          </Card>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Patient Information */}
            <Card>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="user" size="md" className="text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Dane pacjentki</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Imię i nazwisko</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={diloData.patientName}
                      onChange={(e) => handleInputChange('patientName', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  ) : (
                    <p className="text-gray-900">{diloData.patientName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">PESEL</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={diloData.pesel}
                      onChange={(e) => handleInputChange('pesel', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  ) : (
                    <p className="text-gray-900">{diloData.pesel}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Onkolog prowadzący</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={diloData.oncologist}
                      onChange={(e) => handleInputChange('oncologist', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  ) : (
                    <p className="text-gray-900">{diloData.oncologist}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Szpital</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={diloData.hospital}
                      onChange={(e) => handleInputChange('hospital', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  ) : (
                    <p className="text-gray-900">{diloData.hospital}</p>
                  )}
                </div>
              </div>
            </Card>

            {/* Medical Information */}
            <Card>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                  <Icon name="medical" size="md" className="text-pink-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Informacje medyczne</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rozpoznanie</label>
                  {isEditing ? (
                    <textarea
                      value={diloData.diagnosis}
                      onChange={(e) => handleInputChange('diagnosis', e.target.value)}
                      rows={2}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  ) : (
                    <p className="text-gray-900">{diloData.diagnosis}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Stopień zaawansowania (TNM)</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={diloData.tnmStage}
                      onChange={(e) => handleInputChange('tnmStage', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  ) : (
                    <p className="text-gray-900">{diloData.tnmStage}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Histopatologia</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={diloData.histology}
                      onChange={(e) => handleInputChange('histology', e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  ) : (
                    <p className="text-gray-900">{diloData.histology}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plan leczenia</label>
                  {isEditing ? (
                    <textarea
                      value={diloData.treatmentPlan}
                      onChange={(e) => handleInputChange('treatmentPlan', e.target.value)}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  ) : (
                    <p className="text-gray-900">{diloData.treatmentPlan}</p>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Treatment Timeline */}
          <Card className="mt-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="calendar" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Harmonogram leczenia</h2>
            </div>
            
            <div className="space-y-4">
              {treatmentPhases.map((phase, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    phase.status === 'completed' ? 'bg-green-500 text-white' :
                    phase.status === 'in-progress' ? 'bg-pink-500 text-white' :
                    'bg-gray-300 text-gray-600'
                  }`}>
                    <Icon 
                      name={phase.status === 'completed' ? 'check' : 'clock'} 
                      size="sm" 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{phase.phase}</h3>
                      <span className="text-sm text-gray-500">{phase.date}</span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          phase.status === 'completed' ? 'bg-green-500' :
                          phase.status === 'in-progress' ? 'bg-pink-500' :
                          'bg-gray-300'
                        }`}
                        style={{width: `${phase.progress}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Notes */}
          <Card className="mt-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="file-text" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Notatki</h2>
            </div>
            
            <div>
              {isEditing ? (
                <textarea
                  value={diloData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              ) : (
                <p className="text-gray-900">{diloData.notes}</p>
              )}
            </div>
          </Card>

          {/* Action Buttons */}
          {isEditing && (
            <div className="flex justify-end space-x-4 mt-8">
              <Button variant="outline" onClick={handleCancel}>
                Anuluj
              </Button>
              <Button variant="outline" onClick={handleSave}>
                <Icon name="check" size="sm" />
                <span className="ml-2">Zapisz zmiany</span>
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}