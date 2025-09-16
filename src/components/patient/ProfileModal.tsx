'use client';

import React, { useState } from 'react';
import Modal from '@/components/ui/Modal';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Input from '@/components/ui/Input';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
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
  });

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Tutaj można dodać logikę zapisywania do API
    console.log('Zapisywanie danych:', formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form data to original values
    setFormData({
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
    });
    setIsEditing(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Profil pacjentki"
      size="xl"
      userRole="patient"
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            <Icon name="user" size="lg" className="text-pink-600" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Profil pacjentki</h2>
            <p className="text-sm text-gray-600">Dane osobowe i medyczne</p>
          </div>
        </div>

        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Imię i nazwisko</label>
            {isEditing ? (
              <Input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Wprowadź imię i nazwisko"
              />
            ) : (
              <p className="text-gray-900">{formData.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Wiek</label>
            {isEditing ? (
              <Input
                type="number"
                value={formData.age}
                onChange={(e) => handleInputChange('age', e.target.value)}
                placeholder="Wprowadź wiek"
              />
            ) : (
              <p className="text-gray-900">{formData.age} lat</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">PESEL</label>
            {isEditing ? (
              <Input
                type="text"
                value={formData.pesel}
                onChange={(e) => handleInputChange('pesel', e.target.value)}
                placeholder="Wprowadź PESEL"
              />
            ) : (
              <p className="text-gray-900">{formData.pesel}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
            {isEditing ? (
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Wprowadź numer telefonu"
              />
            ) : (
              <p className="text-gray-900">{formData.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            {isEditing ? (
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="Wprowadź adres email"
              />
            ) : (
              <p className="text-gray-900">{formData.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Adres</label>
            {isEditing ? (
              <Input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                placeholder="Wprowadź adres"
              />
            ) : (
              <p className="text-gray-900">{formData.address}</p>
            )}
          </div>
          </div>

        {/* Medical Information */}
        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Informacje medyczne</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kontakt w nagłych przypadkach</label>
              {isEditing ? (
                <Input
                  type="text"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  placeholder="Wprowadź kontakt w nagłych przypadkach"
                />
              ) : (
                <p className="text-gray-900">{formData.emergencyContact}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grupa krwi</label>
              {isEditing ? (
                <Input
                  type="text"
                  value={formData.bloodType}
                  onChange={(e) => handleInputChange('bloodType', e.target.value)}
                  placeholder="Wprowadź grupę krwi"
                />
              ) : (
                <p className="text-gray-900">{formData.bloodType}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alergie</label>
              {isEditing ? (
                <Input
                  type="text"
                  value={formData.allergies}
                  onChange={(e) => handleInputChange('allergies', e.target.value)}
                  placeholder="Wprowadź alergie"
                />
              ) : (
                <p className="text-gray-900">{formData.allergies}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Choroby przewlekłe</label>
              {isEditing ? (
                <Input
                  type="text"
                  value={formData.chronicConditions}
                  onChange={(e) => handleInputChange('chronicConditions', e.target.value)}
                  placeholder="Wprowadź choroby przewlekłe"
                />
              ) : (
                <p className="text-gray-900">{formData.chronicConditions}</p>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
          <Button variant="outline" onClick={onClose}>
            Zamknij
          </Button>
          {isEditing ? (
            <>
              <Button variant="outline" onClick={handleCancel}>
                Anuluj
              </Button>
              <Button variant="outline" onClick={handleSave}>
                <Icon name="check" size="sm" />
                <span className="ml-2">Zapisz zmiany</span>
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={() => setIsEditing(true)}>
              <Icon name="edit" size="sm" />
              <span className="ml-2">Edytuj profil</span>
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
