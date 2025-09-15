'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

interface WoundTreatmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
}

export default function WoundTreatmentModal({ isOpen, onClose, userRole }: WoundTreatmentModalProps) {
  if (!isOpen) return null;

  const woundData = {
    status: 'W trakcie leczenia',
    lastCheck: '15.01.2025',
    nextCheck: '20.01.2025',
    treatment: 'Opaska kompresyjna + maść antybiotykowa',
    progress: 65,
    notes: 'Rana goi się prawidłowo, zmniejszyła się o 30% w ciągu ostatniego tygodnia'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="activity" size="lg" className="text-pink-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Leczenie ran</h2>
                <p className="text-sm text-gray-600">Monitorowanie i leczenie ran pooperacyjnych</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="close" size="sm" />
            </Button>
          </div>

          {/* Status */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Status leczenia</span>
              <span className="text-sm text-pink-600 font-medium">{woundData.status}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-pink-500 h-2 rounded-full transition-all duration-300" 
                style={{width: `${woundData.progress}%`}}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">{woundData.progress}% zakończone</div>
          </div>

          {/* Treatment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Ostatnia kontrola</h3>
              <p className="text-gray-900">{woundData.lastCheck}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Następna kontrola</h3>
              <p className="text-gray-900">{woundData.nextCheck}</p>
            </div>
          </div>

          {/* Treatment Plan */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Aktualne leczenie</h3>
            <p className="text-gray-900">{woundData.treatment}</p>
          </div>

          {/* Notes */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Notatki lekarza</h3>
            <p className="text-gray-900">{woundData.notes}</p>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <Button variant="outline" onClick={onClose}>
              Zamknij
            </Button>
            <Button variant="outline">
              <Icon name="edit" size="sm" />
              <span className="ml-2">Edytuj</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
