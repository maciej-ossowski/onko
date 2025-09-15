'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  });

  const handleLogout = () => {
    router.push('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Tutaj można dodać logikę wysyłania formularza
  };

  const contactInfo = [
    {
      type: 'phone',
      title: 'Telefon',
      value: '+48 123 456 789',
      description: 'Pon-Pt 8:00-18:00',
      icon: 'phone'
    },
    {
      type: 'email',
      title: 'Email',
      value: 'kontakt@onkoapp.ai',
      description: 'Odpowiadamy w ciągu 24h',
      icon: 'mail'
    },
    {
      type: 'address',
      title: 'Adres',
      value: 'ul. Onkologiczna 1, 00-001 Warszawa',
      description: 'Centrum Onkologii',
      icon: 'map-pin'
    },
    {
      type: 'hours',
      title: 'Godziny pracy',
      value: 'Pon-Pt 8:00-18:00',
      description: 'Sob 9:00-14:00',
      icon: 'clock'
    }
  ];

  const departments = [
    {
      name: 'Wsparcie techniczne',
      email: 'support@onkoapp.ai',
      phone: '+48 123 456 780',
      description: 'Problemy z aplikacją, logowaniem, synchronizacją'
    },
    {
      name: 'Wsparcie medyczne',
      email: 'medical@onkoapp.ai',
      phone: '+48 123 456 781',
      description: 'Pytania medyczne, konsultacje, pilne przypadki'
    },
    {
      name: 'Wsparcie psychologiczne',
      email: 'psychology@onkoapp.ai',
      phone: '+48 123 456 782',
      description: 'Wsparcie emocjonalne, grupy wsparcia'
    },
    {
      name: 'Administracja',
      email: 'admin@onkoapp.ai',
      phone: '+48 123 456 783',
      description: 'Konta użytkowników, faktury, rozliczenia'
    }
  ];

  const categories = [
    { value: 'general', label: 'Ogólne pytania' },
    { value: 'technical', label: 'Wsparcie techniczne' },
    { value: 'medical', label: 'Pytania medyczne' },
    { value: 'psychological', label: 'Wsparcie psychologiczne' },
    { value: 'billing', label: 'Rozliczenia' },
    { value: 'feedback', label: 'Opinie i sugestie' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Kontakt"
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
            <h1 className="text-3xl font-bold text-gray-900">Kontakt</h1>
            <p className="text-gray-600 mt-2">Skontaktuj się z nami w każdej sprawie</p>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informacje kontaktowe</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={info.icon} size="md" className="text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 mb-1">{info.value}</p>
                  <p className="text-sm text-gray-500">{info.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Działy wsparcia</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                      <Icon name="users" size="md" className="text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.name}</h3>
                      <p className="text-gray-700 mb-3">{dept.description}</p>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Icon name="mail" size="sm" color="gray" />
                          <span>{dept.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="phone" size="sm" color="gray" />
                          <span>{dept.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wyślij wiadomość</h2>
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adres email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kategoria
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      {categories.map((category) => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Temat *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wiadomość *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Opisz szczegółowo swoją sprawę..."
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" variant="outline">
                    <Icon name="send" size="sm" />
                    <span className="ml-2">Wyślij wiadomość</span>
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* FAQ */}
          <Card className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="help-circle" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Często zadawane pytania</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Jak szybko odpowiadacie na wiadomości?</h3>
                <p className="text-gray-700">Odpowiadamy na wszystkie wiadomości w ciągu 24 godzin w dni robocze. W pilnych przypadkach medycznych staramy się odpowiedzieć w ciągu 2-4 godzin.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Czy mogę zadzwonić w weekendy?</h3>
                <p className="text-gray-700">Wsparcie techniczne jest dostępne 24/7. Wsparcie medyczne i psychologiczne dostępne jest w dni robocze 8:00-18:00 oraz w soboty 9:00-14:00.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Jak mogę zgłosić problem z aplikacją?</h3>
                <p className="text-gray-700">Możesz zgłosić problem przez formularz kontaktowy wybierając kategorię "Wsparcie techniczne" lub dzwoniąc na dedykowaną linię techniczną.</p>
              </div>
            </div>
          </Card>

          {/* Emergency Contact */}
          <Card className="bg-red-50 border-red-200">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="phone" size="lg" color="error" />
              <h2 className="text-xl font-semibold text-red-900">Pilne przypadki</h2>
            </div>
            
            <p className="text-red-800 mb-4">
              W przypadku pilnych problemów medycznych skontaktuj się bezpośrednio z lekarzem prowadzącym 
              lub wezwij pogotowie ratunkowe pod numerem 999.
            </p>
            
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                className="border-red-300 text-red-700 hover:bg-red-100"
                onClick={() => window.open('tel:999')}
              >
                <Icon name="phone" size="sm" />
                <span className="ml-2">Pogotowie (999)</span>
              </Button>
              <Button 
                variant="outline" 
                className="border-red-300 text-red-700 hover:bg-red-100"
                onClick={() => window.open('tel:+48123456789')}
              >
                <Icon name="doctor" size="sm" />
                <span className="ml-2">Lekarz prowadzący</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
