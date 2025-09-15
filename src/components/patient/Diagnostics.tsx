'use client';

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';

interface DiagnosticsProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
}

interface DiagnosticTest {
  id: string;
  name: string;
  date: string;
  doctor: string;
  status: 'completed' | 'pending' | 'required';
  details: string;
  results?: string;
}

export default function Diagnostics({ isOpen, onClose, userRole }: DiagnosticsProps) {
  const [tests, setTests] = useState<DiagnosticTest[]>([
    {
      id: '1',
      name: 'Mammografia',
      date: '2025-01-10',
      doctor: 'Dr Jan Kowalski',
      status: 'completed',
      details: 'Badanie przesiewowe piersi',
      results: 'BI-RADS 4 - podejrzenie zmiany złośliwej'
    },
    {
      id: '2',
      name: 'Biopsja cienkoigłowa',
      date: '2025-01-15',
      doctor: 'Dr Anna Nowak',
      status: 'completed',
      details: 'Pobranie materiału do badania histopatologicznego',
      results: 'Potwierdzenie raka przewodowego'
    },
    {
      id: '3',
      name: 'USG piersi',
      date: '2025-01-20',
      doctor: 'Dr Jan Kowalski',
      status: 'completed',
      details: 'Badanie ultrasonograficzne piersi',
      results: 'Zmiana hypoechogeniczna 2.5cm'
    },
    {
      id: '4',
      name: 'Tomografia komputerowa',
      date: '2025-02-05',
      doctor: 'Dr Piotr Wiśniewski',
      status: 'pending',
      details: 'TK klatki piersiowej i jamy brzusznej',
      results: undefined
    },
    {
      id: '5',
      name: 'Rezonans magnetyczny',
      date: '2025-02-10',
      doctor: 'Dr Anna Nowak',
      status: 'required',
      details: 'MRI piersi z kontrastem',
      results: undefined
    },
    {
      id: '6',
      name: 'Badanie markerów nowotworowych',
      date: '2025-02-15',
      doctor: 'Dr Jan Kowalski',
      status: 'required',
      details: 'CA 15-3, CEA, CA 125',
      results: undefined
    }
  ]);

  const [selectedTab, setSelectedTab] = useState<'completed' | 'pending' | 'required'>('completed');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'required': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return 'check';
      case 'pending': return 'clock';
      case 'required': return 'warning';
      default: return 'info';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Wykonane';
      case 'pending': return 'Oczekujące';
      case 'required': return 'Wymagane';
      default: return 'Nieznany';
    }
  };

  const filteredTests = tests.filter(test => test.status === selectedTab);

  const roleColors = {
    patient: 'pink',
    doctor: 'blue',
    admin: 'green'
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Harmonogram badań diagnostycznych"
      size="xl"
      userRole={userRole}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <Icon name="chart" size="lg" className="text-pink-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Diagnostyka</h2>
            <p className="text-sm text-gray-600">Harmonogram i wyniki badań</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setSelectedTab('completed')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'completed'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Icon name="check" size="sm" color="success" />
              <span>Wykonane ({tests.filter(t => t.status === 'completed').length})</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab('pending')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'pending'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Icon name="clock" size="sm" color="warning" />
              <span>Oczekujące ({tests.filter(t => t.status === 'pending').length})</span>
            </div>
          </button>
          <button
            onClick={() => setSelectedTab('required')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              selectedTab === 'required'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="flex items-center justify-center space-x-2">
              <Icon name="warning" size="sm" color="error" />
              <span>Wymagane ({tests.filter(t => t.status === 'required').length})</span>
            </div>
          </button>
        </div>

        {/* Tests List */}
        <div className="space-y-4">
          {filteredTests.length === 0 ? (
            <Card padding="lg" className="text-center">
              <Icon name="info" size="lg" color="gray" className="mx-auto mb-4" />
              <p className="text-gray-600">Brak badań w tej kategorii</p>
            </Card>
          ) : (
            filteredTests.map((test) => (
              <Card key={test.id} padding="md">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{test.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(test.status)}`}>
                        <Icon name={getStatusIcon(test.status)} size="sm" className="inline mr-1" />
                        {getStatusText(test.status)}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Data:</span> {test.date}
                      </div>
                      <div>
                        <span className="font-medium">Lekarz:</span> {test.doctor}
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <span className="font-medium text-sm text-gray-700">Szczegóły:</span>
                      <p className="text-sm text-gray-600 mt-1">{test.details}</p>
                    </div>
                    
                    {test.results && (
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-sm text-gray-700">Wyniki:</span>
                        <p className="text-sm text-gray-600 mt-1">{test.results}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="ml-4 flex flex-col space-y-2">
                    {test.status === 'pending' && (
                      <Button variant="outline" size="sm">
                        <Icon name="calendar" size="sm" />
                        <span className="ml-1">Przełóż</span>
                      </Button>
                    )}
                    {test.status === 'required' && (
                      <Button variant="outline" size="sm">
                        <Icon name="plus" size="sm" />
                        <span className="ml-1">Zaplanuj</span>
                      </Button>
                    )}
                    {test.status === 'completed' && (
                      <Button variant="ghost" size="sm">
                        <Icon name="download" size="sm" />
                        <span className="ml-1">Pobierz</span>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Summary */}
        <Card padding="sm" className="bg-gray-50">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-green-600">
                {tests.filter(t => t.status === 'completed').length}
              </div>
              <div className="text-sm text-gray-600">Wykonane</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">
                {tests.filter(t => t.status === 'pending').length}
              </div>
              <div className="text-sm text-gray-600">Oczekujące</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-red-600">
                {tests.filter(t => t.status === 'required').length}
              </div>
              <div className="text-sm text-gray-600">Wymagane</div>
            </div>
          </div>
        </Card>

        {/* Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <Button variant="outline" onClick={onClose}>
            Zamknij
          </Button>
          <Button variant="outline">
            <Icon name="plus" size="sm" />
            <span className="ml-1">Dodaj badanie</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
}
