'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
}

export default function ProfileModal({ isOpen, onClose, userRole }: ProfileModalProps) {
  if (!isOpen) return null;

  const profileData = {
    name: 'Anna Kowalska',
    age: 45,
    pesel: '78012345678',
    phone: '+48 123 456 789',
    email: 'anna.kowalska@email.com',
    address: 'ul. Medyczna 1, 00-001 Warszawa',
    emergencyContact: 'Jan Kowalski (+48 987 654 321)',
    bloodType: 'A+',
    allergies: 'Penicylina, Lateks',
    chronicConditions: 'Cukrzyca typu 2'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="user" size="lg" className="text-pink-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Profil pacjentki</h2>
                <p className="text-sm text-gray-600">Dane osobowe i medyczne</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="close" size="sm" />
            </Button>
          </div>

          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Imię i nazwisko</h3>
              <p className="text-gray-900">{profileData.name}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Wiek</h3>
              <p className="text-gray-900">{profileData.age} lat</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">PESEL</h3>
              <p className="text-gray-900">{profileData.pesel}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Telefon</h3>
              <p className="text-gray-900">{profileData.phone}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Email</h3>
              <p className="text-gray-900">{profileData.email}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Adres</h3>
              <p className="text-gray-900">{profileData.address}</p>
            </div>
          </div>

          {/* Medical Information */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Informacje medyczne</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Kontakt w nagłych przypadkach</h4>
                <p className="text-gray-900">{profileData.emergencyContact}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Grupa krwi</h4>
                <p className="text-gray-900">{profileData.bloodType}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Alergie</h4>
                <p className="text-gray-900">{profileData.allergies}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Choroby przewlekłe</h4>
                <p className="text-gray-900">{profileData.chronicConditions}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <Button variant="outline" onClick={onClose}>
              Zamknij
            </Button>
            <Button variant="outline">
              <Icon name="edit" size="sm" />
              <span className="ml-2">Edytuj profil</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
