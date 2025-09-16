'use client';

import React from 'react';
import Modal from '../ui/Modal';
import Icon from '../ui/Icon';

interface TreatmentTimelineModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStage: number;
}

const treatmentStages = [
  { 
    value: 0, 
    label: 'Brak karty DiLO', 
    description: 'Brak aktywnej karty diagnostyki i leczenia onkologicznego',
    details: 'W tym etapie pacjentka nie posiada jeszcze karty DiLO. Aby rozpocząć proces leczenia, należy skontaktować się z lekarzem i wypełnić kartę DiLO.'
  },
  { 
    value: 1, 
    label: 'Karta DiLO', 
    description: 'Aktywna karta diagnostyki i leczenia onkologicznego',
    details: 'Karta DiLO została wypełniona i jest aktywna. Zawiera podstawowe informacje medyczne i dane pacjentki potrzebne do dalszego procesu leczenia.'
  },
  { 
    value: 2, 
    label: 'Diagnostyka', 
    description: 'W trakcie badań diagnostycznych',
    details: 'Etap badań diagnostycznych - wykonywane są wszystkie niezbędne badania, które pomogą w postawieniu dokładnej diagnozy i zaplanowaniu leczenia.'
  },
  { 
    value: 3, 
    label: 'Konsylium', 
    description: 'Konsylium lekarskie i planowanie leczenia',
    details: 'Zespół lekarzy specjalistów analizuje wyniki badań i opracowuje indywidualny plan leczenia dostosowany do konkretnego przypadku pacjentki.'
  },
  { 
    value: 4, 
    label: 'Leczenie', 
    description: 'Aktywne leczenie onkologiczne',
    details: 'Etap aktywnego leczenia - realizacja zaplanowanej terapii, regularne kontrole i monitorowanie postępów leczenia.'
  },
  { 
    value: 5, 
    label: 'Follow-up', 
    description: 'Kontrola po zakończeniu leczenia',
    details: 'Etap kontroli po zakończeniu leczenia - regularne wizyty kontrolne, monitorowanie stanu zdrowia i wczesne wykrywanie ewentualnych nawrotów.'
  }
];

export default function TreatmentTimelineModal({ isOpen, onClose, currentStage }: TreatmentTimelineModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Timeline etapów leczenia"
      size="lg"
      userRole="patient"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <Icon name="calendar" size="lg" className="text-pink-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Twoja ścieżka leczenia</h2>
            <p className="text-sm text-gray-600">Przegląd wszystkich etapów procesu leczenia</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {treatmentStages.map((stage, index) => (
            <div key={stage.value} className="relative">
              {/* Connector line */}
              {index < treatmentStages.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-200"></div>
              )}
              
              <div className={`flex items-start space-x-4 p-4 rounded-lg border-2 transition-all ${
                stage.value === currentStage
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-200 bg-white'
              }`}>
                {/* Stage indicator */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                  stage.value === currentStage
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {stage.value < currentStage ? (
                    <Icon name="check" size="md" />
                  ) : stage.value === currentStage ? (
                    <Icon name="clock" size="md" />
                  ) : (
                    <span className="text-sm font-medium">{stage.value + 1}</span>
                  )}
                </div>

                {/* Stage content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {stage.label}
                    </h3>
                    <span className={`text-sm px-2 py-1 rounded-full ${
                      stage.value === currentStage
                        ? 'bg-pink-200 text-pink-800'
                        : stage.value < currentStage
                        ? 'bg-green-200 text-green-800'
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {stage.value === currentStage ? 'Aktualny' : 
                       stage.value < currentStage ? 'Zakończony' : 'Oczekujący'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{stage.description}</p>
                  
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <p className="text-sm text-gray-700">{stage.details}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress summary */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Postęp ogólny</span>
            <span className="text-sm text-gray-600">{Math.round((currentStage / 5) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-pink-500 h-2 rounded-full transition-all duration-300" 
              style={{width: `${(currentStage / 5) * 100}%`}}
            ></div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
