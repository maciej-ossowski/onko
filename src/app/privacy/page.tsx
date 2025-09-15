'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';

export default function PrivacyPage() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  const sections = [
    {
      title: '1. Informacje ogólne',
      content: 'Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych użytkowników aplikacji OnkoApp.AI. Administratorem danych osobowych jest OnkoApp.AI Sp. z o.o. z siedzibą w Warszawie, ul. Onkologiczna 1, 00-001 Warszawa, wpisana do rejestru przedsiębiorców KRS pod numerem 0000000000.'
    },
    {
      title: '2. Rodzaje przetwarzanych danych',
      content: 'Przetwarzamy następujące kategorie danych osobowych: dane identyfikacyjne (imię, nazwisko, PESEL), dane kontaktowe (adres e-mail, numer telefonu), dane medyczne (historia choroby, wyniki badań, plany leczenia), dane techniczne (adres IP, pliki cookies), dane biometryczne (w przypadku skanowania dokumentów).'
    },
    {
      title: '3. Cele przetwarzania danych',
      content: 'Dane osobowe przetwarzamy w celu: świadczenia usług medycznych i wsparcia pacjentów, komunikacji z użytkownikami, zapewnienia bezpieczeństwa systemu, wypełnienia obowiązków prawnych, prowadzenia statystyk i analiz, marketingu bezpośredniego (za zgodą).'
    },
    {
      title: '4. Podstawy prawne przetwarzania',
      content: 'Przetwarzanie danych odbywa się na podstawie: art. 6 ust. 1 lit. a RODO (zgoda), art. 6 ust. 1 lit. b RODO (wykonanie umowy), art. 6 ust. 1 lit. c RODO (obowiązek prawny), art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes), art. 9 ust. 2 lit. a RODO (zgoda na przetwarzanie danych medycznych).'
    },
    {
      title: '5. Okres przechowywania danych',
      content: 'Dane osobowe przechowujemy przez okres niezbędny do realizacji celów, dla których zostały zebrane, nie dłużej jednak niż: dane medyczne - 20 lat od zakończenia leczenia, dane kontaktowe - 3 lata od ostatniego kontaktu, dane techniczne - 2 lata, dane marketingowe - do momentu wycofania zgody.'
    },
    {
      title: '6. Udostępnianie danych',
      content: 'Dane osobowe mogą być udostępniane: lekarzom prowadzącym leczenie, placówkom medycznym, organom państwowym na podstawie przepisów prawa, podmiotom świadczącym usługi IT (w ramach umów powierzenia), innym podmiotom za wyraźną zgodą użytkownika.'
    },
    {
      title: '7. Prawa użytkownika',
      content: 'Użytkownik ma prawo do: dostępu do swoich danych, sprostowania nieprawidłowych danych, usunięcia danych, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu, cofnięcia zgody w dowolnym momencie, wniesienia skargi do organu nadzorczego (UODO).'
    },
    {
      title: '8. Bezpieczeństwo danych',
      content: 'Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony danych osobowych przed: nieuprawnionym dostępem, utratą, zniszczeniem, nieuprawnionym ujawnieniem, nieuprawnioną modyfikacją. Wszystkie dane są szyfrowane i przechowywane na bezpiecznych serwerach.'
    },
    {
      title: '9. Pliki cookies',
      content: 'Używamy plików cookies w celu: zapewnienia prawidłowego działania aplikacji, analizy ruchu użytkowników, personalizacji treści, prowadzenia statystyk. Użytkownik może zarządzać plikami cookies w ustawieniach przeglądarki.'
    },
    {
      title: '10. Zmiany w polityce',
      content: 'Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce Prywatności. O wszelkich zmianach poinformujemy użytkowników poprzez aplikację lub e-mail. Kontynuowanie korzystania z aplikacji po wprowadzeniu zmian oznacza akceptację nowej polityki.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Polityka prywatności"
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
            <h1 className="text-3xl font-bold text-gray-900">Polityka prywatności</h1>
            <p className="text-gray-600 mt-2">Ostatnia aktualizacja: 15 stycznia 2025</p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <div className="flex items-start space-x-4">
              <Icon name="shield" size="lg" color="primary" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Ochrona Twojej prywatności</h2>
                <p className="text-gray-700 leading-relaxed">
                  Szanujemy Twoją prywatność i zobowiązujemy się do ochrony Twoich danych osobowych. 
                  Niniejsza Polityka Prywatności wyjaśnia, jak zbieramy, używamy, przechowujemy i chronimy 
                  Twoje dane osobowe w związku z korzystaniem z aplikacji OnkoApp.AI.
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
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Kontakt w sprawach prywatności</h3>
                <p className="text-blue-800 mb-4">
                  Jeśli masz pytania dotyczące przetwarzania Twoich danych osobowych lub chcesz skorzystać 
                  ze swoich praw, skontaktuj się z nami:
                </p>
                <div className="space-y-2 text-blue-800">
                  <div className="flex items-center space-x-2">
                    <Icon name="mail" size="sm" color="primary" />
                    <span>privacy@onkoapp.ai</span>
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

          {/* Data Protection Officer */}
          <Card className="mt-8">
            <div className="flex items-start space-x-4">
              <Icon name="user" size="lg" color="primary" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Inspektor Ochrony Danych</h3>
                <p className="text-gray-700 mb-4">
                  W sprawach związanych z ochroną danych osobowych możesz skontaktować się z naszym 
                  Inspektorem Ochrony Danych:
                </p>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Icon name="mail" size="sm" color="gray" />
                    <span>iod@onkoapp.ai</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="phone" size="sm" color="gray" />
                    <span>+48 123 456 790</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Supervisory Authority */}
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <div className="flex items-start space-x-4">
              <Icon name="alert-triangle" size="lg" color="warning" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-4">Prawo do skargi</h3>
                <p className="text-yellow-800">
                  Masz prawo wniesienia skargi do organu nadzorczego - Prezesa Urzędu Ochrony Danych Osobowych 
                  (UODO) - jeśli uznasz, że przetwarzanie Twoich danych osobowych narusza przepisy RODO.
                </p>
                <div className="mt-4 text-yellow-800">
                  <p><strong>Adres UODO:</strong></p>
                  <p>ul. Stawki 2, 00-193 Warszawa</p>
                  <p>Telefon: +48 22 531 00 00</p>
                  <p>Email: kancelaria@uodo.gov.pl</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
