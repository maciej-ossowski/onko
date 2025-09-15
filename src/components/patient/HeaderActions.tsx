'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import ChatModal from './ChatModal';
import NotificationsModal from './NotificationsModal';

interface HeaderActionsProps {
  userRole: 'patient' | 'doctor' | 'admin';
}

export default function HeaderActions({ userRole }: HeaderActionsProps) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleChat = () => {
    setIsChatOpen(true);
  };

  const handleNotifications = () => {
    setIsNotificationsOpen(true);
  };

  return (
    <>
      <div className="flex items-center space-x-2">
        {/* Chat Button */}
        <div className="relative">
          <Button variant="ghost" size="sm" onClick={handleChat} className="p-2 hover:bg-pink-700">
            <Icon name="message" size="lg" className="text-white hover:text-pink-200" />
          </Button>
          {/* Chat Badge */}
          <div className="absolute -top-1 -right-1 bg-pink-200 text-pink-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            3
          </div>
        </div>
        
        {/* Notifications Button */}
        <div className="relative">
          <Button variant="ghost" size="sm" onClick={handleNotifications} className="p-2 hover:bg-pink-700">
            <Icon name="mail" size="lg" className="text-white hover:text-pink-200" />
          </Button>
          {/* Notifications Badge */}
          <div className="absolute -top-1 -right-1 bg-pink-200 text-pink-800 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            2
          </div>
        </div>
      </div>

      {/* Chat Modal */}
      <ChatModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        userRole={userRole}
      />

      {/* Notifications Modal */}
      <NotificationsModal
        isOpen={isNotificationsOpen}
        onClose={() => setIsNotificationsOpen(false)}
        userRole={userRole}
      />
    </>
  );
}
