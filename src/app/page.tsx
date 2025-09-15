'use client';

import Link from "next/link";
import { useState } from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

export default function Home() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<'doctor' | 'admin' | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <Logo size="xl" showText={false} className="scale-125" />
          </div>
          <h1 className="text-6xl font-black text-gray-600 mb-6 tracking-tight">
            OnkoApp.AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cyfrowa platforma dla pacjentek z rakiem piersi, która prowadzi je przez całą ścieżkę leczenia z wykorzystaniem AI i nowoczesnych technologii
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Link href="/patient/login">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full relative">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-pink-200 transition-colors">
                  <Icon name="user" size="xl" className="text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Pacjentka</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kompleksowa platforma dla pacjentek z rakiem piersi. Dostęp do wszystkich funkcjonalności przez Profil Zaufany.
                </p>
                <div className="text-sm text-gray-500 space-y-1 mb-6">
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Karta DiLO i ścieżka leczenia</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Kalkulator ryzyka AI</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Monitoring ran z AI</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Harmonogram badań</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center text-pink-600 font-medium">
                  Zaloguj się
                  <Icon name="arrow-right" size="sm" className="ml-2" />
                </div>
              </div>
            </Card>
          </Link>

          <Link 
            href="/doctor/login"
            onMouseEnter={() => setHoveredCard('doctor')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Icon name="doctor" size="xl" className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Lekarz</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Logowanie przez ZUS PUE / RPWDL. Dostęp do listy pacjentek, skanowania kodów QR i analityki.
                </p>
                
                {/* Podstawowe funkcjonalności */}
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Lista pacjentek</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Skanowanie kodów QR</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Analityka medyczna</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Dostęp do kart DiLO</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center text-blue-600 font-medium">
                  Zaloguj się
                  <Icon name="arrow-right" size="sm" className="ml-2" />
                </div>
              </div>
            </Card>
          </Link>

          <Link 
            href="/admin/login"
            onMouseEnter={() => setHoveredCard('admin')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Icon name="admin" size="xl" className="text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Administrator</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Zarządzanie użytkownikami, raporty, integracja z systemami NFZ i audyt dostępu.
                </p>
                
                {/* Podstawowe funkcjonalności */}
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Zarządzanie użytkownikami</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Raporty i analityka</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Integracja z NFZ</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Icon name="check" size="sm" color="success" className="mr-2" />
                    <span>Audyt dostępu</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center text-green-600 font-medium">
                  Zaloguj się
                  <Icon name="arrow-right" size="sm" className="ml-2" />
                </div>
              </div>
            </Card>
          </Link>
        </div>


        {/* Dodatkowa karta z pełną listą funkcjonalności na hover */}
        {hoveredCard && (
          <div className="mt-8 transition-all duration-300 ease-in-out">
            <Card className="p-8" elevation="lg" style={{ border: '2px solid #3b82f6' }}>
              <div className="text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
                  hoveredCard === 'doctor' ? 'bg-blue-100' : 'bg-green-100'
                }`}>
                  <Icon 
                    name={hoveredCard === 'doctor' ? 'doctor' : 'admin'} 
                    size="xl" 
                    className={hoveredCard === 'doctor' ? 'text-blue-600' : 'text-green-600'} 
                  />
                </div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-8">
                  Funkcjonalności dla {hoveredCard === 'doctor' ? 'lekarza' : 'administratora'}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-600">
                  {hoveredCard === 'doctor' ? (
                    <>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Lista pacjentek z filtrowaniem</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Skanowanie kodów QR pacjentek</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Dostęp do kart DiLO</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Harmonogram badań pacjentek</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Wyniki kalkulatora ryzyka</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Monitoring ran z AI</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Historia medyczna pacjentek</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Zarządzanie lekami</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Komunikacja z pacjentkami</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Raporty i analityka</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Integracja z systemami NFZ</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Dokumentacja medyczna</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Zarządzanie użytkownikami (lekarze, pacjentki)</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Przypisywanie uprawnień i ról</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Raporty systemowe i medyczne</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Analityka wykorzystania platformy</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Integracja z systemami NFZ</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Audyt dostępu i bezpieczeństwa</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Zarządzanie danymi medycznymi</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Konfiguracja systemu</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Monitoring wydajności</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Backup i odzyskiwanie danych</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Zarządzanie integracjami</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="check" size="sm" color="success" className="mr-3" />
                        <span>Wsparcie techniczne</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}

        {!hoveredCard && (
          <Card className="p-8" elevation="lg">
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="user" size="xl" className="text-pink-600" />
              </div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-8">Funkcjonalności dla pacjentek</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Autoryzacja przez Profil Zaufany</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Karta DiLO i ścieżka onkologiczna</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Kalkulator ryzyka AI</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Monitoring ran z AI</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Udostępnianie danych przez QR</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Harmonogram badań i wizyt</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Zarządzanie lekami</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Historia medyczna</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Dokumenty medyczne</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Komunikacja z lekarzem</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Powiadomienia i przypomnienia</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Wsparcie psychologiczne</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Konsultacje dietetyczne</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Grupy wsparcia</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Raportowanie skutków ubocznych</span>
            </div>
            <div className="flex items-center">
              <Icon name="check" size="sm" color="success" className="mr-3" />
              <span>Kontakt w nagłych przypadkach</span>
            </div>
            </div>
        </Card>
        )}

        {/* Benefits Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="heart" size="lg" className="text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Wsparcie w leczeniu</h3>
            <p className="text-gray-600 text-sm">
              Kompleksowe narzędzia do monitorowania postępów leczenia, zarządzania lekami i komunikacji z zespołem medycznym.
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="chart" size="lg" className="text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI i nowoczesne technologie</h3>
            <p className="text-gray-600 text-sm">
              Wykorzystanie sztucznej inteligencji do kalkulacji ryzyka, monitorowania ran i personalizacji opieki medycznej.
            </p>
          </Card>

          <Card className="text-center p-6">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="users" size="lg" className="text-pink-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Społeczność i wsparcie</h3>
            <p className="text-gray-600 text-sm">
              Dostęp do grup wsparcia, konsultacji psychologicznych i dietetycznych oraz możliwość kontaktu z innymi pacjentkami.
            </p>
          </Card>
        </div>
      </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Polityka prywatności
              </button>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Regulamin
              </button>
              <button
                onClick={() => setIsCookiesOpen(true)}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Cookies
              </button>
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
              >
                Kontakt
              </button>
            </div>
            <div className="text-gray-500 text-sm">
              © 2025 OnkoApp.AI. Wszystkie prawa zastrzeżone.
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsPrivacyOpen(false)}
        >
          <Card 
            className="max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Polityka prywatności</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsPrivacyOpen(false)}>
                <Icon name="close" size="sm" />
              </Button>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                OnkoApp.AI zobowiązuje się do ochrony prywatności i bezpieczeństwa danych osobowych naszych użytkowników.
              </p>
              <h3 className="font-semibold text-gray-900">Zbieranie danych</h3>
              <p>
                Zbieramy tylko niezbędne dane medyczne i osobowe wymagane do świadczenia usług medycznych zgodnie z RODO.
              </p>
              <h3 className="font-semibold text-gray-900">Wykorzystanie danych</h3>
              <p>
                Dane są wykorzystywane wyłącznie w celu świadczenia opieki medycznej, komunikacji z zespołem medycznym i personalizacji usług.
              </p>
              <h3 className="font-semibold text-gray-900">Bezpieczeństwo</h3>
              <p>
                Wszystkie dane są szyfrowane i przechowywane zgodnie z najwyższymi standardami bezpieczeństwa medycznego.
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Terms Modal */}
      {isTermsOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsTermsOpen(false)}
        >
          <Card 
            className="max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Regulamin</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsTermsOpen(false)}>
                <Icon name="close" size="sm" />
              </Button>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                Niniejszy regulamin określa warunki korzystania z platformy OnkoApp.AI.
              </p>
              <h3 className="font-semibold text-gray-900">Warunki użytkowania</h3>
              <p>
                Platforma jest przeznaczona wyłącznie dla pacjentek z rakiem piersi i ich zespołów medycznych.
              </p>
              <h3 className="font-semibold text-gray-900">Odpowiedzialność</h3>
              <p>
                Użytkownicy są odpowiedzialni za prawdziwość podawanych danych i zgodność z zaleceniami medycznymi.
              </p>
              <h3 className="font-semibold text-gray-900">Ograniczenia</h3>
              <p>
                Platforma nie zastępuje bezpośredniej konsultacji medycznej i nie może być używana w nagłych przypadkach.
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Cookies Modal */}
      {isCookiesOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsCookiesOpen(false)}
        >
          <Card 
            className="max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Polityka cookies</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsCookiesOpen(false)}>
                <Icon name="close" size="sm" />
              </Button>
            </div>
            <div className="space-y-4 text-gray-600">
              <p>
                OnkoApp.AI używa plików cookies w celu zapewnienia prawidłowego funkcjonowania platformy.
              </p>
              <h3 className="font-semibold text-gray-900">Rodzaje cookies</h3>
              <p>
                Używamy cookies niezbędnych do funkcjonowania, analitycznych i funkcjonalnych.
              </p>
              <h3 className="font-semibold text-gray-900">Zarządzanie cookies</h3>
              <p>
                Możesz zarządzać ustawieniami cookies w ustawieniach przeglądarki lub w panelu użytkownika.
              </p>
              <h3 className="font-semibold text-gray-900">Cookies medyczne</h3>
              <p>
                Niektóre cookies są niezbędne do przechowywania danych medycznych i nie mogą być wyłączone.
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setIsContactOpen(false)}
        >
          <Card 
            className="max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Kontakt</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsContactOpen(false)}>
                <Icon name="close" size="sm" />
              </Button>
            </div>
            <div className="space-y-6 text-gray-600">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Dane kontaktowe</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Icon name="phone" size="sm" className="mr-3 text-gray-500" />
                    <span>+48 123 456 789</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="mail" size="sm" className="mr-3 text-gray-500" />
                    <span>kontakt@onkoapp.ai</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="location" size="sm" className="mr-3 text-gray-500" />
                    <span>ul. Medyczna 1, 00-001 Warszawa</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Godziny pracy</h3>
                <p>Poniedziałek - Piątek: 8:00 - 18:00</p>
                <p>Sobota: 9:00 - 15:00</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Wsparcie techniczne</h3>
                <p>Dla problemów technicznych skontaktuj się z naszym zespołem wsparcia.</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
