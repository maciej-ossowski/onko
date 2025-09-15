'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function DocumentsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'reports' | 'prescriptions' | 'certificates' | 'images'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    router.push('/');
  };

  const documents = [
    {
      id: 1,
      name: 'Wyniki mammografii',
      type: 'report',
      category: 'Badania obrazowe',
      date: '2025-01-15',
      size: '2.3 MB',
      format: 'PDF',
      doctor: 'Dr Anna Nowak',
      status: 'available',
      description: 'Mammografia kontrolna po zakończeniu chemioterapii'
    },
    {
      id: 2,
      name: 'Recepta na Tamoksyfen',
      type: 'prescription',
      category: 'Recepty',
      date: '2025-01-20',
      size: '0.5 MB',
      format: 'PDF',
      doctor: 'Dr Jan Kowalski',
      status: 'available',
      description: 'Recepta na hormonoterapię - Tamoksyfen 20mg'
    },
    {
      id: 3,
      name: 'Zwolnienie lekarskie',
      type: 'certificate',
      category: 'Zwolnienia',
      date: '2025-01-20',
      size: '0.8 MB',
      format: 'PDF',
      doctor: 'Dr Jan Kowalski',
      status: 'available',
      description: 'Zwolnienie z pracy na okres radioterapii'
    },
    {
      id: 4,
      name: 'Wyniki biopsji',
      type: 'report',
      category: 'Badania histopatologiczne',
      date: '2023-09-15',
      size: '1.2 MB',
      format: 'PDF',
      doctor: 'Dr Anna Nowak',
      status: 'available',
      description: 'Wyniki badania histopatologicznego guza piersi'
    },
    {
      id: 5,
      name: 'USG piersi - obraz',
      type: 'image',
      category: 'Badania obrazowe',
      date: '2025-01-22',
      size: '4.1 MB',
      format: 'DICOM',
      doctor: 'Dr Anna Nowak',
      status: 'available',
      description: 'Obraz ultrasonograficzny piersi'
    },
    {
      id: 6,
      name: 'Karta DiLO',
      type: 'report',
      category: 'Dokumenty medyczne',
      date: '2023-10-01',
      size: '3.5 MB',
      format: 'PDF',
      doctor: 'Dr Jan Kowalski',
      status: 'available',
      description: 'Karta Diagnostyki i Leczenia Onkologicznego'
    },
    {
      id: 7,
      name: 'Recepta na Metforminę',
      type: 'prescription',
      category: 'Recepty',
      date: '2023-10-01',
      size: '0.4 MB',
      format: 'PDF',
      doctor: 'Dr Jan Kowalski',
      status: 'expired',
      description: 'Recepta na Metforminę 500mg (wygasła)'
    },
    {
      id: 8,
      name: 'Skierowanie na radioterapię',
      type: 'certificate',
      category: 'Skierowania',
      date: '2025-01-25',
      size: '0.6 MB',
      format: 'PDF',
      doctor: 'Dr Jan Kowalski',
      status: 'pending',
      description: 'Skierowanie na radioterapię pooperacyjną'
    }
  ];

  const getDocuments = () => {
    let filtered = documents;
    
    if (activeTab !== 'all') {
      filtered = filtered.filter(doc => doc.type === activeTab);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(doc => 
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'report': return 'file-text';
      case 'prescription': return 'receipt';
      case 'certificate': return 'award';
      case 'image': return 'image';
      default: return 'file';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'report': return 'text-blue-600 bg-blue-100';
      case 'prescription': return 'text-green-600 bg-green-100';
      case 'certificate': return 'text-purple-600 bg-purple-100';
      case 'image': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'expired': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available': return 'Dostępny';
      case 'expired': return 'Wygasł';
      case 'pending': return 'Oczekuje';
      default: return 'Nieznany';
    }
  };

  const documentStats = {
    total: documents.length,
    reports: documents.filter(d => d.type === 'report').length,
    prescriptions: documents.filter(d => d.type === 'prescription').length,
    certificates: documents.filter(d => d.type === 'certificate').length,
    images: documents.filter(d => d.type === 'image').length
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Dokumenty"
        userRole="patient"
        userName="Anna Kowalska"
        onLogout={handleLogout}
        showBackButton={true}
        onBack={() => router.push('/patient/dashboard')}
        actions={<HeaderActions userRole="patient" />}
      />

      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Moje dokumenty</h1>
            <p className="text-gray-600 mt-2">Zarządzaj swoimi dokumentami medycznymi</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            <Card className="text-center">
              <div className="text-2xl font-bold text-gray-900">{documentStats.total}</div>
              <div className="text-sm text-gray-600">Wszystkie</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-blue-600">{documentStats.reports}</div>
              <div className="text-sm text-gray-600">Raporty</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-green-600">{documentStats.prescriptions}</div>
              <div className="text-sm text-gray-600">Recepty</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-purple-600">{documentStats.certificates}</div>
              <div className="text-sm text-gray-600">Zaświadczenia</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-orange-600">{documentStats.images}</div>
              <div className="text-sm text-gray-600">Obrazy</div>
            </Card>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Wyszukaj dokumenty..."
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <Icon name="search" size="sm" color="gray" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  variant={activeTab === 'all' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('all')}
                >
                  Wszystkie
                </Button>
                <Button
                  variant={activeTab === 'reports' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('reports')}
                >
                  Raporty
                </Button>
                <Button
                  variant={activeTab === 'prescriptions' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('prescriptions')}
                >
                  Recepty
                </Button>
                <Button
                  variant={activeTab === 'certificates' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('certificates')}
                >
                  Zaświadczenia
                </Button>
                <Button
                  variant={activeTab === 'images' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('images')}
                >
                  Obrazy
                </Button>
              </div>
            </div>
          </Card>

          {/* Documents List */}
          <div className="space-y-4">
            {getDocuments().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="file" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">
                    {searchQuery ? 'Nie znaleziono dokumentów dla wyszukiwanej frazy' : 'Brak dokumentów w tej kategorii'}
                  </p>
                </div>
              </Card>
            ) : (
              getDocuments().map((document) => (
                <Card key={document.id} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(document.type)}`}>
                        <Icon name={getTypeIcon(document.type)} size="lg" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{document.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(document.status)}`}>
                            {getStatusText(document.status)}
                          </span>
                          <span className="text-xs text-gray-500">{document.format}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-3">{document.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center space-x-2">
                          <Icon name="calendar" size="sm" color="gray" />
                          <span className="text-sm text-gray-600">{document.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="hard-drive" size="sm" color="gray" />
                          <span className="text-sm text-gray-600">{document.size}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="doctor" size="sm" color="gray" />
                          <span className="text-sm text-gray-600">{document.doctor}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="tag" size="sm" color="gray" />
                          <span className="text-sm text-gray-600">{document.category}</span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3">
                        <Button variant="outline" size="sm">
                          <Icon name="eye" size="sm" />
                          <span className="ml-1">Podgląd</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="download" size="sm" />
                          <span className="ml-1">Pobierz</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="share" size="sm" />
                          <span className="ml-1">Udostępnij</span>
                        </Button>
                        {document.status === 'available' && (
                          <Button variant="outline" size="sm">
                            <Icon name="print" size="sm" />
                            <span className="ml-1">Drukuj</span>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Quick Actions */}
          <Card className="mt-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="plus" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Szybkie akcje</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="upload" size="sm" />
                <span className="ml-2">Dodaj dokument</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="download" size="sm" />
                <span className="ml-2">Pobierz wszystkie</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="share" size="sm" />
                <span className="ml-2">Udostępnij lekarzowi</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="archive" size="sm" />
                <span className="ml-2">Archiwizuj</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
