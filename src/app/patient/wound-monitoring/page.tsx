export default function PatientWoundMonitoring() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/patient/dashboard" className="text-blue-600 hover:text-blue-800 mr-4">← Powrót</a>
              <h1 className="text-xl font-semibold text-gray-900">Monitoring ran</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Status AI */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Ocena AI - Ostatnie zdjęcie</h2>
          <div className="text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-green-600 mb-2">OK - Prawidłowe gojenie</h3>
            <p className="text-gray-600 mb-4">Zdjęcie z 12.01.2025, 14:30</p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800">
                <strong>AI ocenia:</strong> Rana goi się prawidłowo, brak oznak infekcji. 
                Kontynuuj obecną pielęgnację.
              </p>
            </div>
          </div>
        </div>

        {/* Nowe zdjęcie */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dodaj nowe zdjęcie</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-600 mb-4">Kliknij aby dodać zdjęcie rany</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Wybierz zdjęcie
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p><strong>Wskazówki:</strong></p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Zdjęcie powinno być wykonane w dobrym świetle</li>
              <li>Rana powinna być wyraźnie widoczna</li>
              <li>Unikaj cieni i odblasków</li>
            </ul>
          </div>
        </div>

        {/* Historia zdjęć */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Historia zdjęć</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Zdjęcie z 12.01.2025</h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    OK
                  </span>
                </div>
                <p className="text-sm text-gray-600">AI: Prawidłowe gojenie, brak infekcji</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Zdjęcie z 10.01.2025</h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    OK
                  </span>
                </div>
                <p className="text-sm text-gray-600">AI: Prawidłowe gojenie</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 border rounded-lg">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-gray-900">Zdjęcie z 08.01.2025</h4>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    Obserwuj
                  </span>
                </div>
                <p className="text-sm text-gray-600">AI: Lekkie zaczerwienienie, monitoruj</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dziennik objawów */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Dziennik objawów</h3>
          <div className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ból (1-10)</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>2 - Bardzo lekki</option>
                  <option>3 - Lekki</option>
                  <option>4 - Umiarkowany</option>
                  <option>5 - Średni</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gorączka</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Brak</option>
                  <option>Lekka (37-38°C)</option>
                  <option>Umiarkowana (38-39°C)</option>
                  <option>Wysoka (&gt;39°C)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Samopoczucie</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option>Dobre</option>
                  <option>Zadowalające</option>
                  <option>Umiarkowane</option>
                  <option>Słabe</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Dodatkowe uwagi</label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg px-3 py-2" 
                rows={3}
                placeholder="Opisz dodatkowe objawy lub uwagi..."
              ></textarea>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Zapisz wpis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
