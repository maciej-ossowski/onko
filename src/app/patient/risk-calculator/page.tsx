export default function PatientRiskCalculator() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/patient/dashboard" className="text-blue-600 hover:text-blue-800 mr-4">← Powrót</a>
              <h1 className="text-xl font-semibold text-gray-900">Kalkulator ryzyka powikłań</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Wynik AI */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ocena ryzyka powikłań</h2>
          <div className="text-center">
            <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-yellow-600 mb-2">Średnie ryzyko</h3>
            <p className="text-gray-600 mb-4">Ocena na podstawie danych klinicznych i czynników ryzyka</p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Rekomendacja:</strong> Wskazane jest przygotowanie przedoperacyjne, 
                w tym optymalizacja BMI i zaprzestanie palenia tytoniu.
              </p>
            </div>
          </div>
        </div>

        {/* Szczegóły oceny */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Czynniki ryzyka</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Wiek</span>
                <span className="text-sm font-medium text-gray-900">45 lat</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">BMI</span>
                <span className="text-sm font-medium text-yellow-600">28.5 (nadwaga)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Palenie tytoniu</span>
                <span className="text-sm font-medium text-red-600">Tak</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Cukrzyca</span>
                <span className="text-sm font-medium text-green-600">Nie</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Choroby serca</span>
                <span className="text-sm font-medium text-green-600">Nie</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Wyniki badań</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Morfologia</span>
                <span className="text-sm font-medium text-green-600">W normie</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Koagulologia</span>
                <span className="text-sm font-medium text-green-600">W normie</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Funkcja nerek</span>
                <span className="text-sm font-medium text-green-600">W normie</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Funkcja wątroby</span>
                <span className="text-sm font-medium text-yellow-600">Lekko podwyższona</span>
              </div>
            </div>
          </div>
        </div>

        {/* Rekomendacje profilaktyczne */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Rekomendacje profilaktyczne</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
              <svg className="w-5 h-5 text-red-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-medium text-red-900">Zaprzestanie palenia tytoniu</h4>
                <p className="text-sm text-red-700">Krytyczne dla zmniejszenia ryzyka powikłań pooperacyjnych</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
              <svg className="w-5 h-5 text-yellow-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-medium text-yellow-900">Optymalizacja BMI</h4>
                <p className="text-sm text-yellow-700">Zalecana redukcja wagi o 5-10 kg przed operacją</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
              <svg className="w-5 h-5 text-blue-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <div>
                <h4 className="font-medium text-blue-900">Konsultacja kardiologiczna</h4>
                <p className="text-sm text-blue-700">Zalecana przed operacją ze względu na wiek i BMI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Akcje */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Działania</h3>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Udostępnij lekarzowi
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              Pobierz raport
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
              Zaplanuj konsultację
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
