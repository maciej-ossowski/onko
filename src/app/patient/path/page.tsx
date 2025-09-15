'use client';

import { useRouter } from 'next/navigation';

export default function PatientPath() {
  const router = useRouter();

  const handleLogout = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <a href="/patient/dashboard" className="text-blue-600 hover:text-blue-800 mr-4">← Powrót</a>
              <h1 className="text-xl font-semibold text-gray-900">Moja ścieżka leczenia</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Pacjentka</span>
              <button 
                onClick={handleLogout}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Wyloguj
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Oś czasu */}
        <div className="bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Etapy leczenia</h2>
          
          <div className="relative">
            {/* Linia osi czasu */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            {/* Etapy */}
            <div className="space-y-8">
              {/* DiLO */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Karta DiLO</h3>
                  <p className="text-gray-600 mb-2">Zakładanie i obsługa karty DiLO</p>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      W toku
                    </span>
                    <span className="text-sm text-gray-500">Rozpoczęto: 10.01.2025</span>
                  </div>
                  <div className="mt-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Zobacz szczegóły karty →
                    </button>
                  </div>
                </div>
              </div>

              {/* Diagnostyka */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Diagnostyka</h3>
                  <p className="text-gray-600 mb-2">Badania diagnostyczne zgodne z wytycznymi ESMO/NCCN</p>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      Oczekuje
                    </span>
                    <span className="text-sm text-gray-500">Planowane: 20.01.2025</span>
                  </div>
                  <div className="mt-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Zobacz harmonogram badań →
                    </button>
                  </div>
                </div>
              </div>

              {/* Operacja */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  3
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Operacja</h3>
                  <p className="text-gray-600 mb-2">Zabieg chirurgiczny z oceną ryzyka AI</p>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Planowane
                    </span>
                    <span className="text-sm text-gray-500">Data: Do ustalenia</span>
                  </div>
                  <div className="mt-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Zobacz kalkulator ryzyka →
                    </button>
                  </div>
                </div>
              </div>

              {/* Rekonwalescencja */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  4
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Rekonwalescencja</h3>
                  <p className="text-gray-600 mb-2">Monitoring ran i opieka pooperacyjna</p>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Oczekuje
                    </span>
                    <span className="text-sm text-gray-500">Po operacji</span>
                  </div>
                  <div className="mt-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Zobacz monitoring ran →
                    </button>
                  </div>
                </div>
              </div>

              {/* Follow-up */}
              <div className="relative flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
                  5
                </div>
                <div className="ml-6 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">Follow-up</h3>
                  <p className="text-gray-600 mb-2">Kontynuacja opieki i monitorowanie</p>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Oczekuje
                    </span>
                    <span className="text-sm text-gray-500">Po rekonwalescencji</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
