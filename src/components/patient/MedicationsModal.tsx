'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

interface MedicationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
}

export default function MedicationsModal({ isOpen, onClose, userRole }: MedicationsModalProps) {
  if (!isOpen) return null;

  const medications = [
    {
      id: 1,
      name: 'Tamoksyfen',
      dosage: '20mg',
      frequency: '1x dziennie',
      startDate: '01.01.2025',
      endDate: '01.01.2026',
      status: 'Aktywny'
    },
    {
      id: 2,
      name: 'Anastrozol',
      dosage: '1mg',
      frequency: '1x dziennie',
      startDate: '15.12.2024',
      endDate: '15.12.2025',
      status: 'Aktywny'
    },
    {
      id: 3,
      name: 'Metformina',
      dosage: '500mg',
      frequency: '2x dziennie',
      startDate: '01.06.2024',
      endDate: 'Ciągłe',
      status: 'Aktywny'
    },
    {
      id: 4,
      name: 'Doksorubicyna',
      dosage: '60mg/m²',
      frequency: 'Co 3 tygodnie',
      startDate: '01.10.2024',
      endDate: '15.12.2024',
      status: 'Zakończony'
    }
  ];

  const activeMedications = medications.filter(med => med.status === 'Aktywny');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="pill" size="lg" className="text-pink-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Leki</h2>
                <p className="text-sm text-gray-600">Aktualne i historyczne leki</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="close" size="sm" />
            </Button>
          </div>

          {/* Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">{activeMedications.length}</div>
                <div className="text-sm text-gray-600">Aktywne leki</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{medications.length - activeMedications.length}</div>
                <div className="text-sm text-gray-600">Zakończone</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{medications.length}</div>
                <div className="text-sm text-gray-600">Wszystkie leki</div>
              </div>
            </div>
          </div>

          {/* Medications List */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Lista leków</h3>
            {medications.map((medication) => (
              <Card key={medication.id} className="hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="pill" size="md" className="text-pink-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">{medication.name}</h4>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        medication.status === 'Aktywny' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {medication.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Dawka:</span> {medication.dosage}
                      </div>
                      <div>
                        <span className="font-medium">Częstotliwość:</span> {medication.frequency}
                      </div>
                      <div>
                        <span className="font-medium">Data rozpoczęcia:</span> {medication.startDate}
                      </div>
                      <div>
                        <span className="font-medium">Data zakończenia:</span> {medication.endDate}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <Button variant="outline" onClick={onClose}>
              Zamknij
            </Button>
            <Button variant="outline">
              <Icon name="plus" size="sm" />
              <span className="ml-2">Dodaj lek</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
