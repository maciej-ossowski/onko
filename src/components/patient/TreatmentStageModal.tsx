'use client';

import { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

interface TreatmentStageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (data: { firstName: string; lastName: string; stage: number }) => void;
}

const treatmentStages = [
  { value: 0, label: 'Brak karty DiLO', description: 'Pacjentka nie posiada jeszcze karty DiLO' },
  { value: 1, label: 'Karta DiLO', description: 'Utworzono kartę DiLO pacjentki' },
  { value: 2, label: 'Diagnostyka', description: 'Etap badań diagnostycznych' },
  { value: 3, label: 'Konsylium', description: 'Konsylium lekarskie i planowanie leczenia' },
  { value: 4, label: 'Leczenie', description: 'Aktywne leczenie onkologiczne' },
  { value: 5, label: 'Follow-up', description: 'Kontrola po zakończeniu leczenia' }
];

export default function TreatmentStageModal({ isOpen, onClose, onComplete }: TreatmentStageModalProps) {
  const [firstName, setFirstName] = useState('Janina');
  const [lastName, setLastName] = useState('Gwoździk');
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; stage?: string }>({});

  const handleSubmit = () => {
    const newErrors: { firstName?: string; lastName?: string; stage?: string } = {};

    if (!firstName.trim()) {
      newErrors.firstName = 'Imię jest wymagane';
    }
    if (!lastName.trim()) {
      newErrors.lastName = 'Nazwisko jest wymagane';
    }
    if (selectedStage === null) {
      newErrors.stage = 'Wybierz etap leczenia';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save to localStorage
    const patientData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      stage: selectedStage!,
      timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('onko_patient_data', JSON.stringify(patientData));
    
    onComplete(patientData);
  };

  const handleClose = () => {
    setFirstName('');
    setLastName('');
    setSelectedStage(null);
    setErrors({});
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Konfiguracja profilu pacjentki">
      <div className="space-y-6">
        {/* Info Box */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
              <Icon name="info" size="sm" className="text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-blue-900 mb-1">Informacja testowa</h4>
              <p className="text-sm text-blue-800">
                To jest wersja testowa aplikacji. Wybierz etap leczenia, aby zobaczyć jak wygląda proces 
                na każdym z etapów ścieżki terapeutycznej. Dane są zapisywane lokalnie w przeglądarce.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Dane osobowe</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Imię *
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Wprowadź imię"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Nazwisko *
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Wprowadź nazwisko"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>
        </div>

        {/* Treatment Stage Selection */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900">Etap leczenia *</h3>
          
          <div className="space-y-3">
            {treatmentStages.map((stage) => (
              <div
                key={stage.value}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedStage === stage.value
                    ? 'border-pink-500 bg-pink-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedStage(stage.value)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 ${
                    selectedStage === stage.value
                      ? 'border-pink-500 bg-pink-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedStage === stage.value && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{stage.label}</h4>
                    <p className="text-sm text-gray-600 mt-1">{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {errors.stage && (
            <p className="text-sm text-red-600">{errors.stage}</p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-4 border-t">
          <Button
            variant="outline"
            onClick={handleClose}
          >
            Anuluj
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="bg-pink-600 hover:bg-pink-700"
          >
            <Icon name="check" size="sm" className="mr-2" />
            Zapisz i kontynuuj
          </Button>
        </div>
      </div>
    </Modal>
  );
}
