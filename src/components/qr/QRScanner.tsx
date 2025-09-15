'use client';

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Card from '../ui/Card';
import Image from 'next/image';

interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
  onAccessRequest: (doctorName: string) => void;
  userRole?: 'patient' | 'doctor' | 'admin';
}

export default function QRScanner({ isOpen, onClose, onAccessRequest, userRole = 'patient' }: QRScannerProps) {
  const [showAccessRequest, setShowAccessRequest] = useState(false);

  const handleQRClick = () => {
    setShowAccessRequest(true);
  };

  const handleAccessGranted = () => {
    onAccessRequest('Dr Jan Kowalski');
    onClose();
  };

  const handleAccessDenied = () => {
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Skanowanie kodu QR"
      size="md"
      showCloseButton={!showAccessRequest}
      userRole={userRole}
    >
      {!showAccessRequest ? (
        <div className="text-center">
          {/* Static QR Code */}
          <div className="relative mb-6">
            <div 
              className="w-64 h-64 mx-auto bg-white rounded-lg border-2 border-gray-200 flex items-center justify-center cursor-pointer hover:border-pink-300 transition-colors"
              onClick={handleQRClick}
            >
              <div className="text-center">
                <Image
                  src="/qrcode.png"
                  alt="QR Code"
                  width={192}
                  height={192}
                  className="rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Kliknij kod QR</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            Kliknij na kod QR, aby symulować skanowanie
          </p>
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
                <span className="text-sm font-medium">Karta DiLO, Historia leczenia</span>
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
              variant="primary"
              size="lg"
              onClick={handleAccessGranted}
              className="flex-1"
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
