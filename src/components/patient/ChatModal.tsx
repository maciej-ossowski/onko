'use client';

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import Card from '../ui/Card';

interface Message {
  id: number;
  sender: string;
  message: string;
  timestamp: string;
  isFromDoctor: boolean;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
}

export default function ChatModal({ isOpen, onClose, userRole }: ChatModalProps) {
  const [newMessage, setNewMessage] = useState('');
  const [messages] = useState<Message[]>([
    {
      id: 1,
      sender: 'Dr Jan Kowalski',
      message: 'Witam Pani Anno, jak się czuje po ostatniej chemioterapii?',
      timestamp: '10:30',
      isFromDoctor: true
    },
    {
      id: 2,
      sender: 'Anna Kowalska',
      message: 'Dzień dobry Panie Doktorze, czuję się lepiej niż wczoraj. Nudności już minęły.',
      timestamp: '10:35',
      isFromDoctor: false
    },
    {
      id: 3,
      sender: 'Dr Jan Kowalski',
      message: 'To świetnie! Pamięta Pani o piciu dużej ilości wody?',
      timestamp: '10:36',
      isFromDoctor: true
    },
    {
      id: 4,
      sender: 'Anna Kowalska',
      message: 'Tak, piję około 2 litrów dziennie. Kiedy mam się zgłosić na następną wizytę?',
      timestamp: '10:38',
      isFromDoctor: false
    },
    {
      id: 5,
      sender: 'Dr Jan Kowalski',
      message: 'Proszę zgłosić się w przyszłym tygodniu, w środę o 14:00. Wyślę Pani szczegóły.',
      timestamp: '10:40',
      isFromDoctor: true
    }
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log('Wysyłanie wiadomości:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Czat z lekarzem"
      size="lg"
      userRole={userRole}
    >
      <div className="flex flex-col h-96">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isFromDoctor ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.isFromDoctor
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-pink-100 text-pink-900'
                }`}
              >
                <div className="text-xs font-medium mb-1">
                  {msg.sender}
                </div>
                <div className="text-sm">{msg.message}</div>
                <div className="text-xs opacity-70 mt-1">
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Napisz wiadomość..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
            >
              <Icon name="send" size="sm" />
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" size="sm" className="text-xs">
            <Icon name="phone" size="sm" />
            <span className="ml-1">Zadzwoń</span>
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <Icon name="video" size="sm" />
            <span className="ml-1">Wideorozmowa</span>
          </Button>
        </div>
      </div>
    </Modal>
  );
}
