'use client';

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import ShareModal from './ShareModal';

interface DiloCardProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
}

interface DiloData {
  patientName: string;
  pesel: string;
  diagnosis: string;
  stage: string;
  histology: string;
  treatmentPlan: string;
  startDate: string;
  endDate: string;
  status: string;
  notes: string;
}

export default function DiloCard({ isOpen, onClose, userRole }: DiloCardProps) {
  const [diloData, setDiloData] = useState<DiloData>({
    patientName: 'Anna Kowalska',
    pesel: '85010112345',
    diagnosis: 'Rak piersi',
    stage: 'T2N0M0',
    histology: 'Inwazyjny rak przewodowy',
    treatmentPlan: 'Chemioterapia neoadjuwantowa + chirurgia + radioterapia',
    startDate: '2025-01-15',
    endDate: '2025-07-15',
    status: 'Aktywna',
    notes: 'Pacjentka w dobrej kondycji, toleruje leczenie'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const handleInputChange = (field: keyof DiloData, value: string) => {
    setDiloData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Tutaj można dodać logikę zapisywania
    console.log('Dane DiLO zapisane:', diloData);
  };

  const handleShare = () => {
    setIsShareModalOpen(true);
  };



  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Karta DiLO"
      size="xl"
      userRole={userRole}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <Icon name="medical" size="lg" className="text-pink-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Dokumentacja DiLO</h2>
              <p className="text-sm text-gray-600">Zintegrowana ścieżka leczenia onkologicznego</p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className={isEditing ? 'bg-pink-100 text-pink-700 border-pink-300' : ''}
          >
            <Icon name={isEditing ? "check" : "edit"} size="sm" />
            <span className="ml-1">{isEditing ? "Zapisz" : "Edytuj"}</span>
          </Button>
        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <Card padding="sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Dane pacjentki</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
                  <input
                    type="text"
                    value={diloData.patientName}
                    onChange={(e) => handleInputChange('patientName', e.target.value)}
                    disabled={!isEditing}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">PESEL</label>
                  <input
                    type="text"
                    value={diloData.pesel}
                    onChange={(e) => handleInputChange('pesel', e.target.value)}
                    disabled={!isEditing}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status karty</label>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium text-green-600">{diloData.status}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card padding="sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Diagnoza</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rozpoznanie</label>
                  <input
                    type="text"
                    value={diloData.diagnosis}
                    onChange={(e) => handleInputChange('diagnosis', e.target.value)}
                    disabled={!isEditing}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Stopień zaawansowania</label>
                  <input
                    type="text"
                    value={diloData.stage}
                    onChange={(e) => handleInputChange('stage', e.target.value)}
                    disabled={!isEditing}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Histologia</label>
                  <input
                    type="text"
                    value={diloData.histology}
                    onChange={(e) => handleInputChange('histology', e.target.value)}
                    disabled={!isEditing}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <Card padding="sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Plan leczenia</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Schemat leczenia</label>
                  <textarea
                    value={diloData.treatmentPlan}
                    onChange={(e) => handleInputChange('treatmentPlan', e.target.value)}
                    disabled={!isEditing}
                    rows={3}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-50"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Data rozpoczęcia</label>
                    <input
                      type="date"
                      value={diloData.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                      disabled={!isEditing}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Data zakończenia</label>
                    <input
                      type="date"
                      value={diloData.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                      disabled={!isEditing}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-50"
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card padding="sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notatki</h3>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Uwagi dodatkowe</label>
                <textarea
                  value={diloData.notes}
                  onChange={(e) => handleInputChange('notes', e.target.value)}
                  disabled={!isEditing}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent disabled:bg-gray-50"
                />
              </div>
            </Card>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between space-x-3 pt-4 border-t border-gray-200">
          <Button variant="outline" onClick={handleShare}>
            <Icon name="qr-code" size="sm" />
            <span className="ml-1">Udostępnij</span>
          </Button>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose}>
              Zamknij
            </Button>
            {isEditing && (
              <Button variant="outline" onClick={handleSave}>
                <Icon name="check" size="sm" />
                <span className="ml-1">Zapisz zmiany</span>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        userRole={userRole}
        shareType="dilo"
      />
    </Modal>
  );
}
