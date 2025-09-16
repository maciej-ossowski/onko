'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import QRScanner from '@/components/qr/QRScanner';
import RiskCalculator from '@/components/risk/RiskCalculator';
import DiloCard from '@/components/patient/DiloCard';
import Diagnostics from '@/components/patient/Diagnostics';
import ShareModal from '@/components/patient/ShareModal';
import ChatModal from '@/components/patient/ChatModal';
import NotificationsModal from '@/components/patient/NotificationsModal';
import WoundTreatmentModal from '@/components/patient/WoundTreatmentModal';
import TreatmentTimelineModal from '@/components/patient/TreatmentTimelineModal';
import ProfileModal from '@/components/patient/ProfileModal';
import MedicationsModal from '@/components/patient/MedicationsModal';

interface PatientData {
  firstName: string;
  lastName: string;
  stage: number;
  timestamp: string;
}

export default function PatientDashboard() {
  const router = useRouter();
  const [patientData, setPatientData] = useLocalStorage<PatientData | null>('onko_patient_data', null);
  const [riskScore, setRiskScore] = useLocalStorage<number | null>('onko_risk_score', null);
  const [isQRScannerOpen, setIsQRScannerOpen] = useState(false);
  const [isRiskCalculatorOpen, setIsRiskCalculatorOpen] = useState(false);
  const [isDiloCardOpen, setIsDiloCardOpen] = useState(false);
  const [isDiagnosticsOpen, setIsDiagnosticsOpen] = useState(false);
  const [isDiloShareOpen, setIsDiloShareOpen] = useState(false);
  const [isDiagnosticsShareOpen, setIsDiagnosticsShareOpen] = useState(false);
  const [isRiskShareOpen, setIsRiskShareOpen] = useState(false);
  const [isWoundTreatmentOpen, setIsWoundTreatmentOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMedicationsOpen, setIsMedicationsOpen] = useState(false);
  const [isWoundShareOpen, setIsWoundShareOpen] = useState(false);
  const [isProfileShareOpen, setIsProfileShareOpen] = useState(false);
  const [isMedicationsShareOpen, setIsMedicationsShareOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [shouldLogout, setShouldLogout] = useState(false);

  // Prevent hydration mismatch by not rendering until client-side
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle logout redirect
  useEffect(() => {
    if (shouldLogout) {
      router.push('/');
    }
  }, [shouldLogout, router]);

  const handleLogout = () => {
    // Clear patient data from localStorage
    setPatientData(null);
    // Trigger logout redirect
    setShouldLogout(true);
  };

  // Get stage label based on stage number
  const getStageLabel = (stage: number): string => {
    const stages = [
      'Brak karty DiLO',
      'Karta DiLO',
      'Diagnostyka',
      'Konsylium',
      'Leczenie',
      'Follow-up'
    ];
    return stages[stage] || 'Nieznany etap';
  };

  // Render cards based on treatment stage
  const renderStageCards = () => {
    const stage = patientData?.stage ?? 0;

    switch (stage) {
      case 0: // Brak karty DiLO
        return (
          <>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="user" size="lg" className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Profil</h3>
              <p className="text-gray-600 text-sm mb-4">Dane osobowe i medyczne</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={handleProfile}>
                  Zobacz szczegóły
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleProfileShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="help-circle" size="lg" className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Co zrobić?</h3>
              <p className="text-gray-600 text-sm mb-4">Wypełnij kartę DiLO z lekarzem i pobierz do aplikacji</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="outline" size="sm" onClick={handleDiloShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="arrow-right" size="lg" className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Następny etap</h3>
              <p className="text-gray-600 text-sm mb-4">Diagnostyka: Wykonanie badań obrazowych i laboratoryjnych w celu dokładnego określenia stopnia zaawansowania choroby. Na podstawie wyników zostanie opracowany indywidualny plan leczenia.</p>
            </Card>
          </>
        );

      case 1: // Karta DiLO
        return (
          <>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="medical" size="lg" className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Karta DiLO</h3>
              <p className="text-gray-600 text-sm mb-4">Status: Aktywna</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={handleDiloCard}>
                  Zobacz szczegóły
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleDiloShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="chart" size="lg" className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diagnostyka</h3>
              <p className="text-gray-600 text-sm mb-4">2 badania do wykonania</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={handleDiagnostics}>
                  Zobacz harmonogram
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleDiagnosticsShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="arrow-right" size="lg" className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Następny etap</h3>
              <p className="text-gray-600 text-sm mb-4">Konsylium: Zespół specjalistów przeanalizuje wyniki badań i opracuje szczegółowy plan leczenia. Będziesz mogła omówić wszystkie opcje terapeutyczne.</p>
            </Card>
          </>
        );

      case 2: // Diagnostyka
        return (
          <>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="chart" size="lg" className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diagnostyka</h3>
              <p className="text-gray-600 text-sm mb-4">2 badania do wykonania</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={handleDiagnostics}>
                  Zobacz harmonogram
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleDiagnosticsShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>

            {renderRiskCalculatorCard()}

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="arrow-right" size="lg" className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Następny etap</h3>
              <p className="text-gray-600 text-sm mb-4">Konsylium: Zespół specjalistów przeanalizuje wyniki badań i opracuje szczegółowy plan leczenia. Będziesz mogła omówić wszystkie opcje terapeutyczne.</p>
            </Card>
          </>
        );

      case 3: // Konsylium
        return (
          <>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="users" size="lg" className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Konsylium</h3>
              <p className="text-gray-600 text-sm mb-4">Zespół specjalistów opracowuje plan leczenia</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={() => console.log('Konsylium')}>
                  Zobacz szczegóły
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
              </div>
            </Card>

            {renderRiskCalculatorCard()}

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="arrow-right" size="lg" className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Następny etap</h3>
              <p className="text-gray-600 text-sm mb-4">Leczenie: Rozpoczęcie aktywnej terapii onkologicznej zgodnie z opracowanym planem. Będziesz pod stałą opieką zespołu medycznego.</p>
            </Card>
          </>
        );

      case 4: // Leczenie
        return (
          <>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="activity" size="lg" className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leczenie ran</h3>
              <p className="text-gray-600 text-sm mb-4">Status: W trakcie</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={handleWoundTreatment}>
                  Zobacz szczegóły
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleWoundShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="pill" size="lg" className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Leki</h3>
              <p className="text-gray-600 text-sm mb-4">5 aktywnych leków</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={handleMedications}>
                  Zobacz szczegóły
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleMedicationsShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="arrow-right" size="lg" className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Następny etap</h3>
              <p className="text-gray-600 text-sm mb-4">Follow-up: Regularne kontrole po zakończeniu leczenia w celu monitorowania stanu zdrowia i wczesnego wykrycia ewentualnych nawrotów.</p>
            </Card>
          </>
        );

      case 5: // Follow-up
        return (
          <>
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="recycling" size="lg" className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Follow-up</h3>
              <p className="text-gray-600 text-sm mb-4">Kontrola po zakończeniu leczenia</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={() => console.log('Follow-up')}>
                  Zobacz szczegóły
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="user" size="lg" className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Profil</h3>
              <p className="text-gray-600 text-sm mb-4">Dane osobowe i medyczne</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={handleProfile}>
                  Zobacz szczegóły
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleProfileShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="medical" size="lg" className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Karta DiLO</h3>
              <p className="text-gray-600 text-sm mb-4">Status: Zakończona</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={handleDiloCard}>
                  Zobacz szczegóły
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleDiloShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>
          </>
        );

      default:
        return null;
    }
  };


  const handleRiskCalculator = () => {
    setIsRiskCalculatorOpen(true);
  };

  const handleRiskScore = (score: number) => {
    setRiskScore(score);
  };

  const renderRiskCalculatorCard = () => {
    const getRiskLevel = (score: number | null) => {
      if (score === null) return { level: 'Nie obliczono', color: 'text-gray-500', bgColor: 'bg-gray-100' };
      if (score <= 30) return { level: 'Niskie', color: 'text-green-600', bgColor: 'bg-green-100' };
      if (score <= 60) return { level: 'Średnie', color: 'text-yellow-600', bgColor: 'bg-yellow-100' };
      return { level: 'Wysokie', color: 'text-red-600', bgColor: 'bg-red-100' };
    };

    const riskInfo = getRiskLevel(riskScore);

    return (
      <Card className="text-center p-6">
        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="scale" size="lg" className="text-pink-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Kalkulator ryzyka</h3>
        {riskScore !== null ? (
          <div className="mb-4">
            <p className="text-gray-600 text-sm mb-2">Wynik: {riskScore}%</p>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${riskInfo.bgColor} ${riskInfo.color}`}>
              Ryzyko: {riskInfo.level}
            </div>
          </div>
        ) : (
          <p className="text-gray-600 text-sm mb-4">Oceń ryzyko powikłań</p>
        )}
        <div className="flex space-x-2 justify-center">
          <Button variant="ghost" size="sm" onClick={handleRiskCalculator}>
            {riskScore !== null ? 'Przelicz' : 'Zobacz szczegóły'}
            <Icon name="arrow-right" size="sm" className="ml-1" />
          </Button>
          <Button variant="outline" size="sm" onClick={handleRiskShare}>
            <Icon name="qr-code" size="sm" />
            <span className="ml-1">Udostępnij</span>
          </Button>
        </div>
      </Card>
    );
  };

  const handleDiloCard = () => {
    setIsDiloCardOpen(true);
  };

  const handleDiagnostics = () => {
    setIsDiagnosticsOpen(true);
  };

  const handleDiloShare = () => {
    setIsDiloShareOpen(true);
  };

  const handleDiagnosticsShare = () => {
    setIsDiagnosticsShareOpen(true);
  };

  const handleRiskShare = () => {
    setIsRiskShareOpen(true);
  };

  const handleWoundTreatment = () => {
    setIsWoundTreatmentOpen(true);
  };

  const handleProfile = () => {
    setIsProfileOpen(true);
  };

  const handleMedications = () => {
    setIsMedicationsOpen(true);
  };

  const handleWoundShare = () => {
    setIsWoundShareOpen(true);
  };

  const handleProfileShare = () => {
    setIsProfileShareOpen(true);
  };

  const handleMedicationsShare = () => {
    setIsMedicationsShareOpen(true);
  };

  const handleSettings = () => {
    router.push('/patient/settings');
  };

  const handleShare = () => {
    setIsQRScannerOpen(true);
  };

  const handleChat = () => {
    setIsChatOpen(true);
  };

  const handleNotifications = () => {
    setIsNotificationsOpen(true);
  };

  const handleAccessRequest = (doctorName: string) => {
    console.log(`Dostęp przyznany dla: ${doctorName}`);
    // Tutaj można dodać logikę przyznawania dostępu
    // Usunięto alert - dostęp jest przyznawany automatycznie
  };

  // Show loading state during hydration
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header
          title="OnkoApp.AI"
          subtitle="Panel pacjentki"
          userRole="patient"
          userName="Pacjentka"
          onLogout={handleLogout}
          onSettings={handleSettings}
          onShare={handleShare}
          actions={
            <div className="flex items-center space-x-2">
              {/* Chat Button */}
              <div className="relative">
                <Button variant="ghost" size="sm" onClick={handleChat} className="p-2 hover:bg-pink-700">
                  <Icon name="message" size="lg" className="text-white hover:text-pink-200" />
                </Button>
                {/* Chat Badge */}
                <div className="absolute -top-1 -right-1 bg-pink-200 text-pink-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              
              {/* Notifications Button */}
              <div className="relative">
                <Button variant="ghost" size="sm" onClick={handleNotifications} className="p-2 hover:bg-pink-700">
                  <Icon name="mail" size="lg" className="text-white hover:text-pink-200" />
                </Button>
                {/* Notifications Badge */}
                <div className="absolute -top-1 -right-1 bg-pink-200 text-pink-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  2
                </div>
              </div>
            </div>
          }
        />
        <div className="flex-1 bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Ładowanie...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Panel pacjentki"
        userRole="patient"
        userName={patientData ? `${patientData.firstName} ${patientData.lastName}` : 'Pacjentka'}
        onLogout={handleLogout}
        onSettings={handleSettings}
        onShare={handleShare}
        actions={
          <div className="flex items-center space-x-2">
            {/* Chat Button */}
            <div className="relative">
              <Button variant="ghost" size="sm" onClick={handleChat} className="p-2 hover:bg-pink-700">
                <Icon name="message" size="lg" className="text-white hover:text-pink-200" />
              </Button>
              {/* Chat Badge */}
              <div className="absolute -top-1 -right-1 bg-pink-200 text-pink-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                3
              </div>
            </div>
            
            {/* Notifications Button */}
            <div className="relative">
              <Button variant="ghost" size="sm" onClick={handleNotifications} className="p-2 hover:bg-pink-700">
                <Icon name="mail" size="lg" className="text-white hover:text-pink-200" />
              </Button>
              {/* Notifications Badge */}
              <div className="absolute -top-1 -right-1 bg-pink-200 text-pink-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                2
              </div>
            </div>
          </div>
        }
      />

      <div className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status ścieżki */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">Moja ścieżka leczenia</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsTimelineOpen(true)}
              className="flex items-center space-x-2 text-gray-600 hover:text-pink-600"
            >
              <Icon name="info" size="sm" />
              <span className="text-sm">Zobacz timeline</span>
            </Button>
          </div>
          <Card>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                <span className="text-lg font-medium">
                  {patientData ? getStageLabel(patientData.stage) : 'Brak karty DiLO'}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {patientData ? `Etap ${patientData.stage + 1} z 6` : 'Etap 1 z 6'}
              </div>
            </div>
            <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-pink-500 h-2 rounded-full" 
                style={{width: patientData ? `${(patientData.stage / 5) * 100}%` : '0%'}}
              ></div>
            </div>
          </Card>
        </div>

        {/* Dynamiczne karty w zależności od etapu leczenia */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {renderStageCards()}
        </div>

        {/* Drugi rząd kart dla etapów 1, 2, 3, 4 */}
        {patientData && (patientData.stage === 1 || patientData.stage === 2 || patientData.stage === 3 || patientData.stage === 4) && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="user" size="lg" className="text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Profil</h3>
              <p className="text-gray-600 text-sm mb-4">Dane osobowe i medyczne</p>
              <div className="flex space-x-2 justify-center">
                <Button variant="ghost" size="sm" onClick={handleProfile}>
                  Zobacz szczegóły
                  <Icon name="arrow-right" size="sm" className="ml-1" />
                </Button>
                <Button variant="outline" size="sm" onClick={handleProfileShare}>
                  <Icon name="qr-code" size="sm" />
                  <span className="ml-1">Udostępnij</span>
                </Button>
              </div>
            </Card>

            {/* Karta DiLO tylko dla etapów 2, 3 i 4 (etap 1 ma już ją w pierwszym rzędzie) */}
            {(patientData.stage === 2 || patientData.stage === 3 || patientData.stage === 4) && (
              <Card className="text-center p-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="medical" size="lg" className="text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Karta DiLO</h3>
                <p className="text-gray-600 text-sm mb-4">Status: Aktywna</p>
                <div className="flex space-x-2 justify-center">
                  <Button variant="ghost" size="sm" onClick={handleDiloCard}>
                    Zobacz szczegóły
                    <Icon name="arrow-right" size="sm" className="ml-1" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleDiloShare}>
                    <Icon name="qr-code" size="sm" />
                    <span className="ml-1">Udostępnij</span>
                  </Button>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* Powiadomienia */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ostatnie powiadomienia</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="mail" size="md" className="text-pink-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Nowe badanie zaplanowane</p>
                <p className="text-xs text-gray-600">Mammografia zaplanowana na 15.01.2025</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="check" size="md" className="text-pink-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Karta DiLO zaktualizowana</p>
                <p className="text-xs text-gray-600">Dane zostały przesłane do NFZ</p>
              </div>
            </div>
          </div>
        </Card>
        </div>
      </div>

      {/* QR Scanner Modal */}
      <QRScanner
        isOpen={isQRScannerOpen}
        onClose={() => setIsQRScannerOpen(false)}
        onAccessRequest={handleAccessRequest}
        userRole="patient"
      />

      {/* Risk Calculator Modal */}
        <RiskCalculator
          isOpen={isRiskCalculatorOpen}
          onClose={() => setIsRiskCalculatorOpen(false)}
          userRole="patient"
          onRiskCalculated={handleRiskScore}
        />

      {/* Dilo Card Modal */}
      <DiloCard
        isOpen={isDiloCardOpen}
        onClose={() => setIsDiloCardOpen(false)}
        userRole="patient"
      />

      {/* Diagnostics Modal */}
      <Diagnostics
        isOpen={isDiagnosticsOpen}
        onClose={() => setIsDiagnosticsOpen(false)}
        userRole="patient"
      />

      {/* Dilo Share Modal */}
      <ShareModal
        isOpen={isDiloShareOpen}
        onClose={() => setIsDiloShareOpen(false)}
        userRole="patient"
        shareType="dilo"
      />

      {/* Diagnostics Share Modal */}
      <ShareModal
        isOpen={isDiagnosticsShareOpen}
        onClose={() => setIsDiagnosticsShareOpen(false)}
        userRole="patient"
        shareType="diagnostics"
      />

      {/* Risk Share Modal */}
      <ShareModal
        isOpen={isRiskShareOpen}
        onClose={() => setIsRiskShareOpen(false)}
        userRole="patient"
        shareType="risk"
      />

      {/* Wound Treatment Modal */}
      <WoundTreatmentModal
        isOpen={isWoundTreatmentOpen}
        onClose={() => setIsWoundTreatmentOpen(false)}
        userRole="patient"
      />

      {/* Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        userRole="patient"
      />

      {/* Medications Modal */}
      <MedicationsModal
        isOpen={isMedicationsOpen}
        onClose={() => setIsMedicationsOpen(false)}
        userRole="patient"
      />

      {/* Wound Share Modal */}
      <ShareModal
        isOpen={isWoundShareOpen}
        onClose={() => setIsWoundShareOpen(false)}
        userRole="patient"
        shareType="wound"
      />

      {/* Profile Share Modal */}
      <ShareModal
        isOpen={isProfileShareOpen}
        onClose={() => setIsProfileShareOpen(false)}
        userRole="patient"
        shareType="profile"
      />

      {/* Medications Share Modal */}
      <ShareModal
        isOpen={isMedicationsShareOpen}
        onClose={() => setIsMedicationsShareOpen(false)}
        userRole="patient"
        shareType="medications"
      />

      {/* Chat Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        userRole="patient"
      />

      {/* Notifications Modal */}
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        userRole="patient"
      />

      {/* Treatment Timeline Modal */}
      <TreatmentTimelineModal
        isOpen={isTimelineOpen}
        onClose={() => setIsTimelineOpen(false)}
        currentStage={patientData?.stage || 0}
      />

      {/* Footer */}
      <Footer userRole="patient" />
    </div>
  );
}
