'use client';

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Card from '../ui/Card';

interface Notification {
  id: number;
  title: string;
  message: string;
  timestamp: string;
  type: 'info' | 'warning' | 'success' | 'error';
  isRead: boolean;
  action?: string;
}

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
}

export default function NotificationsModal({ isOpen, onClose, userRole }: NotificationsModalProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'Nowe badanie zaplanowane',
      message: 'Mammografia zaplanowana na 15.01.2025 o 10:00',
      timestamp: '2 min temu',
      type: 'info',
      isRead: false,
      action: 'Zobacz szczegóły'
    },
    {
      id: 2,
      title: 'Karta DiLO zaktualizowana',
      message: 'Dane zostały przesłane do NFZ i są już dostępne',
      timestamp: '1 godzina temu',
      type: 'success',
      isRead: false,
      action: 'Otwórz kartę'
    },
    {
      id: 3,
      title: 'Przypomnienie o lekach',
      message: 'Pamiętaj o przyjęciu leku o 14:00',
      timestamp: '3 godziny temu',
      type: 'warning',
      isRead: true,
      action: 'Oznacz jako wykonane'
    },
    {
      id: 4,
      title: 'Wizyta potwierdzona',
      message: 'Wizyta z Dr Kowalskim na 20.01.2025 została potwierdzona',
      timestamp: '1 dzień temu',
      type: 'success',
      isRead: true,
      action: 'Zobacz szczegóły'
    },
    {
      id: 5,
      title: 'Wyniki badań gotowe',
      message: 'Wyniki morfologii są już dostępne w aplikacji',
      timestamp: '2 dni temu',
      type: 'info',
      isRead: true,
      action: 'Pobierz wyniki'
    }
  ]);

  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filteredNotifications = notifications.filter(notification => 
    filter === 'all' || !notification.isRead
  );

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleMarkAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'info': return 'info';
      case 'warning': return 'warning';
      case 'success': return 'check';
      case 'error': return 'x';
      default: return 'mail';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'info': return 'text-pink-600';
      case 'warning': return 'text-yellow-600';
      case 'success': return 'text-green-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getTypeBgColor = (type: string) => {
    switch (type) {
      case 'info': return 'bg-pink-50';
      case 'warning': return 'bg-yellow-50';
      case 'success': return 'bg-green-50';
      case 'error': return 'bg-red-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Powiadomienia"
      size="lg"
      userRole={userRole}
    >
      <div className="space-y-4">
        {/* Filter and Actions */}
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFilter('all')}
              className={filter === 'all' ? 'bg-pink-100 text-pink-700 border-pink-300' : ''}
            >
              Wszystkie ({notifications.length})
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setFilter('unread')}
              className={filter === 'unread' ? 'bg-pink-100 text-pink-700 border-pink-300' : ''}
            >
              Nieprzeczytane ({unreadCount})
            </Button>
          </div>
          
          {unreadCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleMarkAllAsRead}
            >
              <Icon name="check" size="sm" />
              <span className="ml-1">Oznacz wszystkie jako przeczytane</span>
            </Button>
          )}
        </div>

        {/* Notifications List */}
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {filteredNotifications.length === 0 ? (
            <div className="text-center py-8">
              <Icon name="mail" size="xl" color="gray" />
              <p className="text-gray-500 mt-2">
                {filter === 'unread' ? 'Brak nieprzeczytanych powiadomień' : 'Brak powiadomień'}
              </p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                  !notification.isRead ? 'border-l-4 border-pink-500' : ''
                }`}
                onClick={() => handleMarkAsRead(notification.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className={`w-8 h-8 rounded-full ${getTypeBgColor(notification.type)} flex items-center justify-center flex-shrink-0`}>
                    <Icon 
                      name={getTypeIcon(notification.type)} 
                      size="sm" 
                      color="gray"
                      className={getTypeColor(notification.type)}
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-sm font-medium ${!notification.isRead ? 'text-gray-900' : 'text-gray-700'}`}>
                        {notification.title}
                      </h4>
                      <span className="text-xs text-gray-500">
                        {notification.timestamp}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mt-1">
                      {notification.message}
                    </p>
                    
                    {notification.action && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 text-xs"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log(`Akcja: ${notification.action}`);
                        }}
                      >
                        {notification.action}
                        <Icon name="arrow-right" size="xs" className="ml-1" />
                      </Button>
                    )}
                  </div>
                  
                  {!notification.isRead && (
                    <div className="w-2 h-2 bg-pink-500 rounded-full flex-shrink-0"></div>
                  )}
                </div>
              </Card>
            ))
          )}
        </div>

        {/* Quick Actions */}
        <div className="pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="text-xs">
              <Icon name="settings" size="sm" />
              <span className="ml-1">Ustawienia powiadomień</span>
            </Button>
            <Button variant="outline" size="sm" className="text-xs">
              <Icon name="trash" size="sm" />
              <span className="ml-1">Wyczyść wszystkie</span>
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
