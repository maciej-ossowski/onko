'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';

export default function TermsPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  const sections = [
    {
      title: '1. Postanowienia ogólne',
      content: 'Niniejszy Regulamin określa zasady korzystania z aplikacji OnkoApp.AI. Aplikacja jest własnością OnkoApp.AI Sp. z o.o. z siedzibą w Warszawie. Korzystanie z aplikacji oznacza akceptację postanowień niniejszego Regulaminu. W przypadku niezgodności między Regulaminem a przepisami prawa, zastosowanie mają przepisy prawa.'
    },
    {
      title: '2. Definicje',
      content: 'Aplikacja - aplikacja mobilna i webowa OnkoApp.AI; Użytkownik - osoba fizyczna korzystająca z Aplikacji; Usługodawca - OnkoApp.AI Sp. z o.o.; Usługi - funkcjonalności dostępne w Aplikacji; Konto - indywidualne konto użytkownika w Aplikacji; Dane medyczne - informacje o stanie zdrowia użytkownika.'
    },
    {
      title: '3. Warunki korzystania z aplikacji',
      content: 'Aplikacja przeznaczona jest dla pacjentek z rakiem piersi oraz ich lekarzy. Użytkownik zobowiązuje się do podania prawdziwych i aktualnych danych. Zabrania się udostępniania konta innym osobom. Użytkownik ponosi odpowiedzialność za bezpieczeństwo swojego konta. Zabrania się używania aplikacji w celach niezgodnych z prawem.'
    },
    {
      title: '4. Rejestracja i konto użytkownika',
      content: 'Rejestracja odbywa się poprzez podanie danych osobowych i medycznych. Użytkownik potwierdza prawdziwość podanych informacji. Konto może zostać zablokowane w przypadku naruszenia Regulaminu. Użytkownik może usunąć swoje konto w dowolnym momencie. Usługodawca zastrzega sobie prawo do weryfikacji danych użytkownika.'
    },
    {
      title: '5. Funkcjonalności aplikacji',
      content: 'Aplikacja umożliwia: zarządzanie kartą DiLO, śledzenie harmonogramu badań, komunikację z lekarzem, monitorowanie leków, dostęp do materiałów edukacyjnych, kontakt z grupą wsparcia. Funkcjonalności mogą być modyfikowane bez wcześniejszego powiadomienia. Niektóre funkcje mogą być płatne.'
    },
    {
      title: '6. Dane medyczne',
      content: 'Dane medyczne są przetwarzane zgodnie z Polityką Prywatności. Użytkownik wyraża zgodę na przetwarzanie danych medycznych w celach medycznych. Dane mogą być udostępniane lekarzom prowadzącym. Użytkownik ma prawo do dostępu i modyfikacji swoich danych. Dane są szyfrowane i przechowywane bezpiecznie.'
    },
    {
      title: '7. Odpowiedzialność',
      content: 'Aplikacja ma charakter wspomagający i nie zastępuje konsultacji medycznej. Użytkownik ponosi odpowiedzialność za decyzje medyczne. Usługodawca nie ponosi odpowiedzialności za szkody wynikające z nieprawidłowego użytkowania. Aplikacja może być niedostępna z przyczyn technicznych. Usługodawca nie gwarantuje ciągłości działania.'
    },
    {
      title: '8. Własność intelektualna',
      content: 'Wszystkie prawa do aplikacji należą do Usługodawcy. Zabrania się kopiowania, modyfikowania lub rozpowszechniania aplikacji. Użytkownik nie nabywa żadnych praw własnościowych. Treści w aplikacji są chronione prawem autorskim. Zabrania się używania znaków towarowych bez zgody.'
    },
    {
      title: '9. Płatności i rozliczenia',
      content: 'Niektóre funkcje aplikacji mogą być płatne. Płatności realizowane są przez zewnętrznych operatorów. Ceny podane są w złotych polskich. Użytkownik ma prawo do odstąpienia od umowy w terminie 14 dni. Zwroty realizowane są w terminie 14 dni roboczych.'
    },
    {
      title: '10. Zawieszenie i zakończenie usług',
      content: 'Usługodawca może zawiesić lub zakończyć usługi w przypadku naruszenia Regulaminu. Użytkownik może zakończyć korzystanie z aplikacji w dowolnym momencie. W przypadku zakończenia usług dane użytkownika są usuwane. Usługodawca nie ponosi odpowiedzialności za utratę danych. Zakończenie usług nie wpływa na obowiązujące zobowiązania.'
    },
    {
      title: '11. Reklamacje',
      content: 'Reklamacje można składać na adres e-mail: reklamacje@onkoapp.ai. Reklamacja powinna zawierać opis problemu i dane kontaktowe. Odpowiedź na reklamację udzielana jest w terminie 14 dni. W przypadku niezadowolenia z odpowiedzi można skontaktować się z Inspektorem Ochrony Danych. Użytkownik ma prawo do skorzystania z pozasądowych sposobów rozwiązywania sporów.'
    },
    {
      title: '12. Zmiany regulaminu',
      content: 'Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O zmianach użytkownicy są informowani przez aplikację. Zmiany wchodzą w życie po 14 dniach od powiadomienia. Kontynuowanie korzystania z aplikacji oznacza akceptację zmian. W przypadku niezgody na zmiany użytkownik może zakończyć korzystanie z aplikacji.'
    },
    {
      title: '13. Prawo właściwe',
      content: 'Regulamin podlega prawu polskiemu. Wszelkie spory rozstrzygane są przez sądy polskie. W przypadku sporów konsumenckich zastosowanie mają przepisy o ochronie konsumentów. Użytkownik ma prawo do skorzystania z pozasądowych sposobów rozwiązywania sporów. W przypadku sporów międzynarodowych zastosowanie mają przepisy prawa międzynarodowego.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Regulamin"
        userRole="patient"
        userName="Anna Kowalska"
        onLogout={handleLogout}
        showBackButton={true}
        onBack={() => router.push('/patient/dashboard')}
      />

      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Regulamin</h1>
            <p className="text-gray-600 mt-2">Ostatnia aktualizacja: 15 stycznia 2025</p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <div className="flex items-start space-x-4">
              <Icon name="file-text" size="lg" color="primary" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Warunki korzystania z aplikacji</h2>
                <p className="text-gray-700 leading-relaxed">
                  Niniejszy Regulamin określa zasady korzystania z aplikacji OnkoApp.AI. 
                  Prosimy o dokładne zapoznanie się z jego treścią przed rozpoczęciem korzystania z aplikacji. 
                  Korzystanie z aplikacji oznacza akceptację wszystkich postanowień niniejszego Regulaminu.
                </p>
              </div>
            </div>
          </Card>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h3>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </Card>
            ))}
          </div>

          {/* Contact Information */}
          <Card className="mt-8 bg-blue-50 border-blue-200">
            <div className="flex items-start space-x-4">
              <Icon name="info" size="lg" color="primary" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Kontakt w sprawach regulaminu</h3>
                <p className="text-blue-800 mb-4">
                  Jeśli masz pytania dotyczące Regulaminu lub chcesz zgłosić naruszenie, 
                  skontaktuj się z nami:
                </p>
                <div className="space-y-2 text-blue-800">
                  <div className="flex items-center space-x-2">
                    <Icon name="mail" size="sm" color="primary" />
                    <span>regulamin@onkoapp.ai</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="phone" size="sm" color="primary" />
                    <span>+48 123 456 789</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="map-pin" size="sm" color="primary" />
                    <span>ul. Onkologiczna 1, 00-001 Warszawa</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Legal Information */}
          <Card className="mt-8">
            <div className="flex items-start space-x-4">
              <Icon name="scale" size="lg" color="primary" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informacje prawne</h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <p className="font-semibold">Nazwa firmy:</p>
                    <p>OnkoApp.AI Sp. z o.o.</p>
                  </div>
                  <div>
                    <p className="font-semibold">Adres siedziby:</p>
                    <p>ul. Onkologiczna 1, 00-001 Warszawa</p>
                  </div>
                  <div>
                    <p className="font-semibold">NIP:</p>
                    <p>123-456-78-90</p>
                  </div>
                  <div>
                    <p className="font-semibold">REGON:</p>
                    <p>123456789</p>
                  </div>
                  <div>
                    <p className="font-semibold">KRS:</p>
                    <p>0000000000</p>
                  </div>
                  <div>
                    <p className="font-semibold">Kapitał zakładowy:</p>
                    <p>100 000 zł</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Consumer Rights */}
          <Card className="mt-8 bg-green-50 border-green-200">
            <div className="flex items-start space-x-4">
              <Icon name="shield" size="lg" color="success" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-4">Prawa konsumenta</h3>
                <p className="text-green-800 mb-4">
                  Jako konsument masz następujące prawa:
                </p>
                <ul className="text-green-800 space-y-2 list-disc list-inside">
                  <li>Prawo do odstąpienia od umowy w terminie 14 dni</li>
                  <li>Prawo do reklamacji wadliwych usług</li>
                  <li>Prawo do informacji o cenie i warunkach usługi</li>
                  <li>Prawo do ochrony danych osobowych</li>
                  <li>Prawo do pozasądowego rozwiązywania sporów</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
