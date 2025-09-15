import React from 'react';
import Icon from '../ui/Icon';
import Logo from '../ui/Logo';

interface FooterProps {
  userRole: 'patient' | 'doctor' | 'admin';
}

export default function Footer({ userRole }: FooterProps) {
  const roleColors = {
    patient: 'pink',
    doctor: 'blue',
    admin: 'green'
  };

  const color = roleColors[userRole];

  const footerSections = {
    patient: [
      {
        title: 'Moje dane',
        links: [
          { label: 'Profil', href: '/patient/profile', icon: 'user' },
          { label: 'Karta DiLO', href: '/patient/dilo', icon: 'medical' },
          { label: 'Historia leczenia', href: '/patient/history', icon: 'history' },
          { label: 'Dokumenty', href: '/patient/documents', icon: 'file' }
        ]
      },
      {
        title: 'Leczenie',
        links: [
          { label: 'Harmonogram badań', href: '/patient/schedule', icon: 'calendar' },
          { label: 'Wizyty', href: '/patient/appointments', icon: 'clock' },
          { label: 'Leki', href: '/patient/medications', icon: 'pill' },
          { label: 'Skutki uboczne', href: '/patient/side-effects', icon: 'warning' }
        ]
      },
      {
        title: 'Wsparcie',
        links: [
          { label: 'Pytania do lekarza', href: '/patient/questions', icon: 'message' },
          { label: 'Grupa wsparcia', href: '/patient/support-group', icon: 'users' },
          { label: 'Psycholog', href: '/patient/psychologist', icon: 'heart' },
          { label: 'Dietetyk', href: '/patient/dietitian', icon: 'apple' }
        ]
      },
      {
        title: 'Aplikacja',
        links: [
          { label: 'Powiadomienia', href: '/patient/notifications', icon: 'mail' },
          { label: 'Ustawienia', href: '/patient/settings', icon: 'settings' },
          { label: 'Pomoc', href: '/patient/help', icon: 'info' },
          { label: 'O aplikacji', href: '/patient/about', icon: 'info-circle' }
        ]
      }
    ],
    doctor: [
      {
        title: 'Pacjenci',
        links: [
          { label: 'Lista pacjentów', href: '/doctor/patients', icon: 'users' },
          { label: 'Nowi pacjenci', href: '/doctor/new-patients', icon: 'user-plus' },
          { label: 'Karty DiLO', href: '/doctor/dilo-cards', icon: 'medical' },
          { label: 'Wizyty', href: '/doctor/appointments', icon: 'calendar' }
        ]
      },
      {
        title: 'Diagnostyka',
        links: [
          { label: 'Wyniki badań', href: '/doctor/results', icon: 'chart' },
          { label: 'Zlecenia', href: '/doctor/orders', icon: 'file-text' },
          { label: 'Obrazy', href: '/doctor/images', icon: 'image' },
          { label: 'Raporty', href: '/doctor/reports', icon: 'bar-chart' }
        ]
      },
      {
        title: 'Leczenie',
        links: [
          { label: 'Plany leczenia', href: '/doctor/treatment-plans', icon: 'medical' },
          { label: 'Protokoły', href: '/doctor/protocols', icon: 'book' },
          { label: 'Leki', href: '/doctor/medications', icon: 'pill' },
          { label: 'Skutki uboczne', href: '/doctor/side-effects', icon: 'warning' }
        ]
      },
      {
        title: 'System',
        links: [
          { label: 'Dashboard', href: '/doctor/dashboard', icon: 'dashboard' },
          { label: 'Statystyki', href: '/doctor/statistics', icon: 'bar-chart' },
          { label: 'Ustawienia', href: '/doctor/settings', icon: 'settings' },
          { label: 'Pomoc', href: '/doctor/help', icon: 'info' }
        ]
      }
    ],
    admin: [
      {
        title: 'Użytkownicy',
        links: [
          { label: 'Pacjenci', href: '/admin/patients', icon: 'users' },
          { label: 'Lekarze', href: '/admin/doctors', icon: 'doctor' },
          { label: 'Administratorzy', href: '/admin/admins', icon: 'admin' },
          { label: 'Uprawnienia', href: '/admin/permissions', icon: 'shield' }
        ]
      },
      {
        title: 'System',
        links: [
          { label: 'Dashboard', href: '/admin/dashboard', icon: 'dashboard' },
          { label: 'Logi', href: '/admin/logs', icon: 'file-text' },
          { label: 'Backup', href: '/admin/backup', icon: 'database' },
          { label: 'Monitoring', href: '/admin/monitoring', icon: 'activity' }
        ]
      },
      {
        title: 'Konfiguracja',
        links: [
          { label: 'Ustawienia systemu', href: '/admin/system-settings', icon: 'settings' },
          { label: 'Integracje', href: '/admin/integrations', icon: 'link' },
          { label: 'Szablony', href: '/admin/templates', icon: 'file' },
          { label: 'Raporty', href: '/admin/reports', icon: 'bar-chart' }
        ]
      },
      {
        title: 'Wsparcie',
        links: [
          { label: 'Pomoc techniczna', href: '/admin/support', icon: 'help-circle' },
          { label: 'Dokumentacja', href: '/admin/docs', icon: 'book' },
          { label: 'Szkolenia', href: '/admin/training', icon: 'graduation-cap' },
          { label: 'Kontakt', href: '/admin/contact', icon: 'phone' }
        ]
      }
    ]
  };

  const sections = footerSections[userRole];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors group"
                    >
                      <Icon 
                        name={link.icon} 
                        size="sm" 
                        color="gray" 
                        className="group-hover:text-gray-900 transition-colors"
                      />
                      <span className="text-sm">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Logo and Description */}
            <div className="flex items-center space-x-4">
              <Logo size="sm" showText={false} />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">OnkoApp.AI</h4>
                <p className="text-sm text-gray-600">
                  Cyfrowa platforma dla pacjentek z rakiem piersi
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center space-x-6">
              <a
                href="/patient/emergency"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon name="phone" size="sm" />
                <span className="text-sm font-medium">Pilne</span>
              </a>
              <a
                href="/patient/contact"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon name="message" size="sm" />
                <span className="text-sm font-medium">Kontakt</span>
              </a>
              <a
                href="/patient/help"
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon name="help-circle" size="sm" />
                <span className="text-sm font-medium">Pomoc</span>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              © 2025 OnkoApp.AI. Wszystkie prawa zastrzeżone.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="/privacy" className="text-xs text-gray-500 hover:text-gray-700">
                Polityka prywatności
              </a>
              <a href="/terms" className="text-xs text-gray-500 hover:text-gray-700">
                Regulamin
              </a>
              <a href="/cookies" className="text-xs text-gray-500 hover:text-gray-700">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
