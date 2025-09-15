export default function DoctorQRScanner() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/doctor/dashboard" className="text-blue-600 hover:text-blue-800 mr-4">← Powrót</a>
              <h1 className="text-xl font-semibold text-gray-900">Skanowanie kodu QR</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Instrukcje */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Jak skanować kod QR</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Poproś pacjentkę</h3>
              <p className="text-sm text-gray-600">Pacjentka generuje kod QR w swojej aplikacji</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Skanuj kod</h3>
              <p className="text-sm text-gray-600">Użyj kamery poniżej aby zeskanować kod QR</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1">Potwierdź dostęp</h3>
              <p className="text-sm text-gray-600">Pacjentka potwierdzi dostęp na swoim telefonie</p>
            </div>
          </div>
        </div>

        {/* Skaner QR */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Skaner kodu QR</h3>
          <div className="text-center">
            <div className="w-80 h-80 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-500 text-sm">Kamera będzie aktywna po kliknięciu &ldquo;Rozpocznij skanowanie&rdquo;</p>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Rozpocznij skanowanie
            </button>
          </div>
        </div>

        {/* Ostatnie skanowania */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ostatnie skanowania</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Anna Kowalska</p>
                <p className="text-sm text-gray-600">13.01.2025, 14:30 - Dostęp potwierdzony</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Aktywny
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Maria Nowak</p>
                <p className="text-sm text-gray-600">13.01.2025, 10:15 - Oczekuje na potwierdzenie</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                Oczekuje
              </span>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Ewa Wiśniewska</p>
                <p className="text-sm text-gray-600">12.01.2025, 16:45 - Dostęp wygasł</p>
              </div>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                Wygasł
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
