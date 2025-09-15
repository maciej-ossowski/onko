export default function DoctorPatientView({ params }: { params: Promise<{ id: string }> }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/doctor/dashboard" className="text-blue-600 hover:text-blue-800 mr-4">← Powrót</a>
              <h1 className="text-xl font-semibold text-gray-900">Panel pacjentki - Anna Kowalska</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Dodaj notatkę
              </button>
              <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors text-sm">
                Telekonsultacja
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Alert */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-red-800">Pilny alert</h3>
              <p className="text-sm text-red-700">AI wykrył podejrzenie infekcji na zdjęciu rany z 12.01.2025</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Główne informacje */}
          <div className="lg:col-span-2 space-y-6">
            {/* Karta DiLO */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Karta DiLO</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Numer karty</label>
                  <p className="text-gray-900">DiLO/2025/001234</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Aktywna
                  </span>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Data założenia</label>
                  <p className="text-gray-900">10.01.2025</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Ostatnia aktualizacja</label>
                  <p className="text-gray-900">12.01.2025</p>
                </div>
              </div>
            </div>

            {/* Wyniki badań */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Wyniki badań</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">USG piersi</h3>
                    <span className="text-sm text-gray-500">20.01.2025</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">Wynik: Zmiana ogniskowa w lewej piersi</p>
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Pobierz wynik
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Dodaj notatkę
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Zdjęcia ran z AI */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Zdjęcia ran - Ocena AI</h2>
              <div className="space-y-4">
                <div className="border border-red-200 bg-red-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-red-900">Zdjęcie z 12.01.2025</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      PILNY
                    </span>
                  </div>
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-red-700">
                    <strong>AI:</strong> Podejrzenie infekcji - zaczerwienienie, obrzęk, możliwa ropna wydzielina
                  </p>
                  <div className="mt-2 flex space-x-2">
                    <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                      Pilny kontakt
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-300">
                      Zobacz pełne zdjęcie
                    </button>
                  </div>
                </div>

                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-green-900">Zdjęcie z 10.01.2025</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      OK
                    </span>
                  </div>
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm text-green-700">
                    <strong>AI:</strong> Prawidłowe gojenie, brak oznak infekcji
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Panel boczny */}
          <div className="space-y-6">
            {/* Kalkulator ryzyka */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kalkulator ryzyka</h3>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-medium text-yellow-600">Średnie ryzyko</h4>
                <p className="text-sm text-gray-600 mt-1">BMI: 28.5, Palenie: Tak</p>
              </div>
            </div>

            {/* Dziennik objawów */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Ostatnie objawy</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Ból</span>
                  <span className="text-sm font-medium text-red-600">7/10</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Gorączka</span>
                  <span className="text-sm font-medium text-red-600">38.2°C</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Samopoczucie</span>
                  <span className="text-sm font-medium text-yellow-600">Słabe</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  <p>Ostatni wpis: 12.01.2025, 15:30</p>
                  <p>&ldquo;Zwiększony ból w okolicy rany, gorączka&rdquo;</p>
                </div>
              </div>
            </div>

            {/* Notatki */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notatki</h3>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="text-gray-600">13.01.2025, 16:00</p>
                  <p className="text-gray-900">Pacjentka zgłasza zwiększony ból i gorączkę. Zalecam pilną wizytę kontrolną.</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600">10.01.2025, 14:30</p>
                  <p className="text-gray-900">Rana goi się prawidłowo, brak powikłań.</p>
                </div>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Dodaj notatkę
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
