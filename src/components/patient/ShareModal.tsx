'use client';

import React, { useState, useEffect } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Icon from '../ui/Icon';
import Image from 'next/image';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
  shareType: 'dilo' | 'diagnostics' | 'risk' | 'wound' | 'profile' | 'medications';
}

export default function ShareModal({ isOpen, onClose, userRole, shareType }: ShareModalProps) {
  const [showAccessRequest, setShowAccessRequest] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (!isOpen) return;

    // Reset state when modal opens
    setShowAccessRequest(false);
    setCountdown(10);

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          setShowAccessRequest(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const handleAccessGranted = () => {
    console.log('Dostęp przyznany dla: Dr Jan Kowalski');
    onClose();
  };

  const handleAccessDenied = () => {
    onClose();
  };
  const getShareTitle = () => {
    switch (shareType) {
      case 'dilo': return 'Udostępnij kartę DiLO';
      case 'diagnostics': return 'Udostępnij diagnostykę';
      case 'risk': return 'Udostępnij kalkulator ryzyka';
      case 'wound': return 'Udostępnij leczenie ran';
      case 'profile': return 'Udostępnij profil';
      case 'medications': return 'Udostępnij leki';
      default: return 'Udostępnij dane';
    }
  };

  const getShareDescription = () => {
    switch (shareType) {
      case 'dilo': return 'Udostępnij swoją kartę DiLO z lekarzem poprzez skanowanie kodu QR';
      case 'diagnostics': return 'Udostępnij harmonogram badań diagnostycznych z lekarzem';
      case 'risk': return 'Udostępnij wyniki kalkulatora ryzyka z lekarzem';
      case 'wound': return 'Udostępnij dane o leczeniu ran z lekarzem';
      case 'profile': return 'Udostępnij swój profil medyczny z lekarzem';
      case 'medications': return 'Udostępnij listę leków z lekarzem';
      default: return 'Udostępnij dane medyczne z lekarzem';
    }
  };

  const roleColors = {
    patient: 'pink',
    doctor: 'blue',
    admin: 'green'
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={getShareTitle()}
      size="md"
      userRole={userRole}
      showCloseButton={!showAccessRequest}
    >
      {!showAccessRequest ? (
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="qr-code" size="xl" className="text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{getShareTitle()}</h3>
            <p className="text-gray-600 text-sm">{getShareDescription()}</p>
          </div>

          {/* QR Code */}
          <Card padding="lg" className="text-center">
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Kod QR do udostępnienia</h4>
              <div className="w-48 h-48 mx-auto bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center">
                <Image
                  src="/qrcode.png"
                  alt="QR Code"
                  width={192}
                  height={192}
                  className="rounded-lg"
                />
              </div>
            </div>
            
            <div className="text-xs text-gray-500">
              Lekarz może zeskanować ten kod, aby uzyskać dostęp do Twoich danych
            </div>
          </Card>

          {/* Countdown */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {countdown > 0 ? countdown : 'Oczekiwanie na skanowanie...'}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-pink-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((10 - countdown) / 10) * 100}%` }}
              />
            </div>
          </div>

          {/* Share Details */}
          <Card padding="sm" className="bg-gray-50">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Szczegóły udostępnienia</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Typ danych:</span>
                <span className="font-medium">
                  {shareType === 'dilo' ? 'Karta DiLO' : 
                   shareType === 'diagnostics' ? 'Diagnostyka' : 'Kalkulator ryzyka'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Dostęp:</span>
                <span className="font-medium">Tylko do odczytu</span>
              </div>
              <div className="flex justify-between">
                <span>Czas dostępu:</span>
                <span className="font-medium">30 minut</span>
              </div>
              <div className="flex justify-between">
                <span>Bezpieczeństwo:</span>
                <span className="font-medium text-green-600">Szyfrowane</span>
              </div>
            </div>
          </Card>

          {/* Instructions */}
          <div className="bg-pink-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-pink-900 mb-2">Jak udostępnić?</h4>
            <ol className="text-sm text-pink-800 space-y-1">
              <li>1. Pokaż ten kod QR lekarzowi</li>
              <li>2. Lekarz zeskanuje kod swoim telefonem</li>
              <li>3. Potwierdź udostępnienie w aplikacji</li>
              <li>4. Lekarz otrzyma dostęp do Twoich danych</li>
            </ol>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Zamknij
            </Button>
            <Button variant="outline" className="flex-1">
              <Icon name="download" size="sm" />
              <span className="ml-1">Pobierz QR</span>
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          {/* Access Request */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="doctor" size="xl" className="text-pink-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Prośba o dostęp do danych
            </h3>
            <p className="text-gray-600">
              <strong>Dr Jan Kowalski</strong> prosi o dostęp do Twoich danych medycznych
            </p>
          </div>

          {/* Access Details */}
          <Card className="mb-6" padding="sm" elevation="none">
            <div className="text-left space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Lekarz:</span>
                <span className="text-sm font-medium">Dr Jan Kowalski</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Specjalizacja:</span>
                <span className="text-sm font-medium">Onkologia</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Dostęp do:</span>
                <span className="text-sm font-medium">
                  {shareType === 'dilo' ? 'Karta DiLO' : 
                   shareType === 'diagnostics' ? 'Diagnostyka' : 'Kalkulator ryzyka'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Czas dostępu:</span>
                <span className="text-sm font-medium">30 minut</span>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="lg"
              onClick={handleAccessDenied}
              className="flex-1"
            >
              <Icon name="close" size="sm" />
              <span className="ml-2">Odmów</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleAccessGranted}
              className="flex-1 bg-pink-100 text-pink-700 border-pink-300"
            >
              <Icon name="check" size="sm" />
              <span className="ml-2">Zgoda</span>
            </Button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Możesz w każdej chwili cofnąć zgodę w ustawieniach prywatności
          </p>
        </div>
      )}
    </Modal>
  );
}
