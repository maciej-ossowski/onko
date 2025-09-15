'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function NotificationsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'important' | 'medications'>('all');
  const [selectedNotifications, setSelectedNotifications] = useState<number[]>([]);

  const handleLogout = () => {
    router.push('/');
  };

  const notifications = [
    {
      id: 1,
      title: 'Nowe badanie zaplanowane',
      message: 'Mammografia zaplanowana na 15.01.2025 o 10:00 w Centrum Onkologii w Warszawie',
      type: 'appointment',
      priority: 'normal',
      isRead: false,
      date: '2025-01-14',
      time: '09:30',
      action: 'Zobacz szczegóły',
      category: 'Badania'
    },
    {
      id: 2,
      title: 'Przypomnienie o lekach',
      message: 'Pamiętaj o przyjęciu Tamoksyfenu o 18:00',
      type: 'medication',
      priority: 'high',
      isRead: false,
      date: '2025-01-14',
      time: '17:45',
      action: 'Oznacz jako wykonane',
      category: 'Leki'
    },
    {
      id: 3,
      title: 'Karta DiLO zaktualizowana',
      message: 'Dane zostały przesłane do NFZ i są już dostępne w systemie',
      type: 'update',
      priority: 'normal',
      isRead: true,
      date: '2025-01-13',
      time: '14:20',
      action: 'Otwórz kartę',
      category: 'Dokumenty'
    },
    {
      id: 4,
      title: 'Odpowiedź na pytanie',
      message: 'Dr Jan Kowalski odpowiedział na Twoje pytanie dotyczące skutków ubocznych',
      type: 'message',
      priority: 'normal',
      isRead: true,
      date: '2025-01-13',
      time: '11:15',
      action: 'Przeczytaj odpowiedź',
      category: 'Komunikacja'
    },
    {
      id: 5,
      title: 'Wizyta potwierdzona',
      message: 'Wizyta z Dr Kowalskim na 20.01.2025 została potwierdzona',
      type: 'appointment',
      priority: 'normal',
      isRead: true,
      date: '2025-01-12',
      time: '16:30',
      action: 'Zobacz szczegóły',
      category: 'Wizyty'
    },
    {
      id: 6,
      title: 'Wyniki badań gotowe',
      message: 'Wyniki morfologii z 10.01.2025 są już dostępne w aplikacji',
      type: 'results',
      priority: 'high',
      isRead: false,
      date: '2025-01-11',
      time: '08:45',
      action: 'Pobierz wyniki',
      category: 'Badania'
    },
    {
      id: 7,
      title: 'Aktualizacja aplikacji',
      message: 'Dostępna jest nowa wersja aplikacji z ulepszeniami',
      type: 'system',
      priority: 'low',
      isRead: true,
      date: '2025-01-10',
      time: '10:00',
      action: 'Zaktualizuj',
      category: 'System'
    },
    {
      id: 8,
      title: 'Przypomnienie o wizycie',
      message: 'Wizyta z psychologiem zaplanowana na jutro o 15:00',
      type: 'reminder',
      priority: 'normal',
      isRead: false,
      date: '2025-01-14',
      time: '20:00',
      action: 'Zobacz szczegóły',
      category: 'Wizyty'
    }
  ];

  const getNotifications = () => {
    let filtered = notifications;
    
    switch (activeTab) {
      case 'unread':
        filtered = filtered.filter(n => !n.isRead);
        break;
      case 'important':
        filtered = filtered.filter(n => n.priority === 'high');
        break;
      case 'medications':
        filtered = filtered.filter(n => n.type === 'medication');
        break;
      default:
        break;
    }
    
    return filtered;
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'appointment': return 'calendar';
      case 'medication': return 'pill';
      case 'update': return 'refresh';
      case 'message': return 'message';
      case 'results': return 'chart';
      case 'system': return 'settings';
      case 'reminder': return 'mail';
      default: return 'info';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'appointment': return 'text-blue-600 bg-blue-100';
      case 'medication': return 'text-green-600 bg-green-100';
      case 'update': return 'text-purple-600 bg-purple-100';
      case 'message': return 'text-orange-600 bg-orange-100';
      case 'results': return 'text-pink-600 bg-pink-100';
      case 'system': return 'text-gray-600 bg-gray-100';
      case 'reminder': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'normal': return 'text-blue-600 bg-blue-100';
      case 'low': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high': return 'Wysoki';
      case 'normal': return 'Normalny';
      case 'low': return 'Niski';
      default: return 'Normalny';
    }
  };

  const handleSelectNotification = (id: number) => {
    setSelectedNotifications(prev => 
      prev.includes(id) 
        ? prev.filter(n => n !== id)
        : [...prev, id]
    );
  };

  const handleMarkAsRead = (id: number) => {
    console.log('Oznaczono jako przeczytane:', id);
  };

  const handleMarkAllAsRead = () => {
    console.log('Oznaczono wszystkie jako przeczytane');
  };

  const handleDeleteSelected = () => {
    console.log('Usunięto wybrane powiadomienia:', selectedNotifications);
    setSelectedNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const importantCount = notifications.filter(n => n.priority === 'high').length;
  const medicationCount = notifications.filter(n => n.type === 'medication').length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Powiadomienia"
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
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Powiadomienia</h1>
                <p className="text-gray-600 mt-2">Zarządzaj swoimi powiadomieniami i nie przegap ważnych informacji</p>
              </div>
              <div className="flex space-x-3">
                {selectedNotifications.length > 0 && (
                  <Button variant="outline" onClick={handleDeleteSelected}>
                    <Icon name="trash" size="sm" />
                    <span className="ml-2">Usuń wybrane</span>
                  </Button>
                )}
                <Button variant="outline" onClick={handleMarkAllAsRead}>
                  <Icon name="check" size="sm" />
                  <span className="ml-2">Oznacz wszystkie jako przeczytane</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center">
              <div className="text-2xl font-bold text-gray-900">{notifications.length}</div>
              <div className="text-sm text-gray-600">Wszystkie</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-blue-600">{unreadCount}</div>
              <div className="text-sm text-gray-600">Nieprzeczytane</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-red-600">{importantCount}</div>
              <div className="text-sm text-gray-600">Ważne</div>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-green-600">{medicationCount}</div>
              <div className="text-sm text-gray-600">Leki</div>
            </Card>
          </div>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'all'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Wszystkie ({notifications.length})
                </button>
                <button
                  onClick={() => setActiveTab('unread')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'unread'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Nieprzeczytane ({unreadCount})
                </button>
                <button
                  onClick={() => setActiveTab('important')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'important'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Ważne ({importantCount})
                </button>
                <button
                  onClick={() => setActiveTab('medications')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'medications'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Leki ({medicationCount})
                </button>
              </nav>
            </div>
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {getNotifications().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="mail" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">
                    {activeTab === 'unread' ? 'Brak nieprzeczytanych powiadomień' :
                     activeTab === 'important' ? 'Brak ważnych powiadomień' :
                     activeTab === 'medications' ? 'Brak powiadomień o lekach' :
                     'Brak powiadomień'}
                  </p>
                </div>
              </Card>
            ) : (
              getNotifications().map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`hover:shadow-md transition-shadow ${
                    !notification.isRead ? 'border-l-4 border-pink-500' : ''
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 pt-1">
                      <input
                        type="checkbox"
                        checked={selectedNotifications.includes(notification.id)}
                        onChange={() => handleSelectNotification(notification.id)}
                        className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                      />
                    </div>
                    
                    <div className="flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getTypeColor(notification.type)}`}>
                        <Icon name={getTypeIcon(notification.type)} size="sm" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className={`text-lg font-semibold ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                              {notification.title}
                            </h3>
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(notification.priority)}`}>
                              {getPriorityText(notification.priority)}
                            </span>
                          </div>
                          
                          <p className="text-gray-700 mb-2">{notification.message}</p>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>{notification.date} {notification.time}</span>
                            <span className="text-pink-600">{notification.category}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMarkAsRead(notification.id)}
                          >
                            <Icon name="check" size="sm" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex space-x-3">
                        <Button variant="outline" size="sm">
                          {notification.action}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Icon name="trash" size="sm" />
                        </Button>
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
                <Icon name="settings" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Ustawienia powiadomień</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="mail" size="sm" />
                <span className="ml-2">Konfiguruj powiadomienia</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="download" size="sm" />
                <span className="ml-2">Eksportuj powiadomienia</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="trash" size="sm" />
                <span className="ml-2">Wyczyść wszystkie</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
