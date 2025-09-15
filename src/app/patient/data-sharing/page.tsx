export default function PatientDataSharing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/patient/dashboard" className="text-blue-600 hover:text-blue-800 mr-4">← Powrót</a>
              <h1 className="text-xl font-semibold text-gray-900">Udostępnianie danych</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Generowanie QR */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Wygeneruj kod QR</h2>
          <p className="text-gray-600 mb-6">
            Pokaż ten kod lekarzowi, aby udostępnić mu dostęp do Twoich danych medycznych. 
            Lekarz otrzyma powiadomienie na Twój telefon z prośbą o potwierdzenie dostępu.
          </p>
          
          <div className="text-center">
            <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V4zm2 2V5h1v1h-1z" clipRule="evenodd" />
                <path d="M13 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3zm2 2v-1h1v1h-1z" />
              </svg>
            </div>
            <p className="text-sm text-gray-500 mb-4">Kod QR będzie wygenerowany po kliknięciu poniższego przycisku</p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Wygeneruj nowy kod QR
            </button>
          </div>
        </div>

        {/* Historia udostępnień */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Historia udostępnień</h3>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">Dr Jan Kowalski</h4>
                  <p className="text-sm text-gray-600">Szpital Onkologiczny - Oddział Chirurgii</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Aktywny
                  </span>
                  <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Cofnij dostęp
                  </button>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <p>Udostępniono: 12.01.2025, 14:30</p>
                <p>Zakres: Karta DiLO, wyniki badań, monitoring ran</p>
                <p>Ostatni dostęp: 13.01.2025, 09:15</p>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">Dr Anna Nowak</h4>
                  <p className="text-sm text-gray-600">Szpital Onkologiczny - Oddział Onkologii</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Wygasł
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500">
                <p>Udostępniono: 08.01.2025, 10:00</p>
                <p>Zakres: Tylko wyniki badań</p>
                <p>Wygasł: 10.01.2025, 10:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Oczekujące potwierdzenia */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Oczekujące potwierdzenia</h3>
          <div className="space-y-4">
            <div className="border border-yellow-200 bg-yellow-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <h4 className="font-medium text-gray-900">Dr Piotr Wiśniewski</h4>
                  <p className="text-sm text-gray-600">Szpital Onkologiczny - Oddział Radiologii</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Oczekuje
                  </span>
                </div>
              </div>
              <div className="text-sm text-gray-500 mb-3">
                <p>Prośba o dostęp: 13.01.2025, 16:45</p>
                <p>Zakres: Wyniki badań, karta DiLO</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                  Zezwól
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                  Odrzuć
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ustawienia prywatności */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ustawienia prywatności</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Automatyczne wygasanie dostępu</h4>
                <p className="text-sm text-gray-600">Dostęp wygasa po 48 godzinach</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Zmień
              </button>
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Powiadomienia o dostępie</h4>
                <p className="text-sm text-gray-600">Otrzymuj powiadomienia o każdym dostępie do danych</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Włączone
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-gray-900">Eksport danych</h4>
                <p className="text-sm text-gray-600">Pobierz wszystkie swoje dane medyczne</p>
              </div>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                Pobierz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
