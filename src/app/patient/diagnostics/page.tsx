export default function PatientDiagnostics() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/patient/dashboard" className="text-blue-600 hover:text-blue-800 mr-4">← Powrót</a>
              <h1 className="text-xl font-semibold text-gray-900">Diagnostyka</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Harmonogram badań */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Harmonogram badań</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Mammografia</h3>
                  <p className="text-sm text-gray-600">15.01.2025, 10:00 - Szpital Onkologiczny</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Zaplanowane
                </span>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4 py-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">USG piersi</h3>
                  <p className="text-sm text-gray-600">20.01.2025, 14:30 - Szpital Onkologiczny</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Wykonane
                </span>
              </div>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Biopsja cienkoigłowa</h3>
                  <p className="text-sm text-gray-600">25.01.2025, 09:00 - Szpital Onkologiczny</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Oczekuje
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Wyniki badań */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Wyniki badań</h2>
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
                  Udostępnij lekarzowi
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Integracja z e-skierowaniami */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">E-skierowania</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Mammografia</p>
                <p className="text-sm text-gray-600">Numer: 123456789</p>
              </div>
              <span className="text-sm text-green-600 font-medium">Aktywne</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">USG piersi</p>
                <p className="text-sm text-gray-600">Numer: 987654321</p>
              </div>
              <span className="text-sm text-gray-500">Wykorzystane</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
