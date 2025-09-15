'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function HelpPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleLogout = () => {
    router.push('/');
  };

  const faqCategories = [
    { id: 'all', name: 'Wszystkie', icon: 'help-circle' },
    { id: 'getting-started', name: 'Pierwsze kroki', icon: 'play' },
    { id: 'medications', name: 'Leki', icon: 'pill' },
    { id: 'appointments', name: 'Wizyty', icon: 'calendar' },
    { id: 'technical', name: 'Techniczne', icon: 'settings' },
    { id: 'privacy', name: 'Prywatność', icon: 'shield' }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'getting-started',
      question: 'Jak rozpocząć korzystanie z aplikacji?',
      answer: 'Aby rozpocząć korzystanie z aplikacji, zaloguj się używając swoich danych dostępowych. Po pierwszym logowaniu zostaniesz poprowadzony przez proces konfiguracji profilu i ustawień powiadomień.',
      tags: ['pierwsze kroki', 'logowanie', 'konfiguracja']
    },
    {
      id: 2,
      category: 'medications',
      question: 'Jak dodać nowy lek?',
      answer: 'Aby dodać nowy lek, przejdź do sekcji "Leki" i kliknij przycisk "Dodaj lek". Wypełnij formularz z nazwą leku, dawką, częstotliwością przyjmowania i innymi szczegółami. Lek zostanie dodany do Twojej listy leków.',
      tags: ['leki', 'dodawanie', 'formularz']
    },
    {
      id: 3,
      category: 'appointments',
      question: 'Jak zaplanować wizytę?',
      answer: 'Aby zaplanować wizytę, przejdź do sekcji "Harmonogram badań" i kliknij "Zaplanuj badanie". Wybierz typ badania, preferowaną datę i godzinę. System automatycznie sprawdzi dostępność i potwierdzi wizytę.',
      tags: ['wizyty', 'planowanie', 'harmonogram']
    },
    {
      id: 4,
      category: 'technical',
      question: 'Aplikacja działa wolno - co robić?',
      answer: 'Jeśli aplikacja działa wolno, spróbuj: 1) Zrestartować aplikację, 2) Sprawdzić połączenie internetowe, 3) Wyczyścić cache przeglądarki, 4) Zaktualizować aplikację do najnowszej wersji.',
      tags: ['wydajność', 'problemy', 'rozwiązywanie']
    },
    {
      id: 5,
      category: 'privacy',
      question: 'Czy moje dane są bezpieczne?',
      answer: 'Tak, Twoje dane są w pełni szyfrowane i przechowywane zgodnie z najwyższymi standardami bezpieczeństwa. Aplikacja jest zgodna z RODO i nie udostępniamy Twoich danych medycznych bez Twojej zgody.',
      tags: ['bezpieczeństwo', 'prywatność', 'RODO']
    },
    {
      id: 6,
      category: 'medications',
      question: 'Jak zgłosić skutek uboczny?',
      answer: 'Aby zgłosić skutek uboczny, przejdź do sekcji "Leki" i kliknij "Zgłoś skutek uboczny". Wypełnij formularz z opisem objawów, ich nasileniem i częstotliwością. Informacja zostanie przekazana do Twojego lekarza.',
      tags: ['skutki uboczne', 'zgłaszanie', 'lekarz']
    },
    {
      id: 7,
      category: 'getting-started',
      question: 'Jak skontaktować się z lekarzem?',
      answer: 'Możesz skontaktować się z lekarzem na kilka sposobów: 1) Użyj funkcji czatu w aplikacji, 2) Zadzwoń bezpośrednio przez przycisk "Zadzwoń", 3) Umów wizytę przez harmonogram badań.',
      tags: ['kontakt', 'lekarz', 'komunikacja']
    },
    {
      id: 8,
      category: 'technical',
      question: 'Nie mogę się zalogować - co robić?',
      answer: 'Jeśli masz problemy z logowaniem: 1) Sprawdź poprawność danych logowania, 2) Użyj funkcji "Przypomnij hasło", 3) Sprawdź połączenie internetowe, 4) Skontaktuj się z pomocą techniczną.',
      tags: ['logowanie', 'hasło', 'problemy']
    }
  ];

  const filteredFaqs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const contactMethods = [
    {
      name: 'Pomoc techniczna',
      description: 'Problemy z aplikacją i funkcjami technicznymi',
      phone: '+48 123 456 789',
      email: 'pomoc@onkoapp.ai',
      hours: '24/7'
    },
    {
      name: 'Wsparcie medyczne',
      description: 'Pytania dotyczące leczenia i opieki medycznej',
      phone: '+48 987 654 321',
      email: 'medyczny@onkoapp.ai',
      hours: '8:00 - 20:00'
    },
    {
      name: 'Centrum pomocy',
      description: 'Ogólne pytania i informacje',
      phone: '+48 555 123 456',
      email: 'info@onkoapp.ai',
      hours: '9:00 - 17:00'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Pomoc"
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
            <h1 className="text-3xl font-bold text-gray-900">Centrum pomocy</h1>
            <p className="text-gray-600 mt-2">Znajdź odpowiedzi na swoje pytania i uzyskaj wsparcie</p>
          </div>

          {/* Search */}
          <Card className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="search" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Wyszukaj pomoc</h2>
            </div>
            
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Wpisz pytanie lub słowo kluczowe..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <Icon name="search" size="sm" color="gray" className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </Card>

          {/* Categories */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Kategorie</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    selectedCategory === category.id
                      ? 'border-pink-500 bg-pink-50 text-pink-700'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-pink-300'
                  }`}
                >
                  <Icon name={category.icon} size="md" className="text-pink-600 mx-auto mb-2" />
                  <p className="text-sm font-medium text-center">{category.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Najczęściej zadawane pytania
              {selectedCategory !== 'all' && (
                <span className="text-sm font-normal text-gray-500 ml-2">
                  ({filteredFaqs.length} wyników)
                </span>
              )}
            </h2>
            
            <div className="space-y-4">
              {filteredFaqs.length === 0 ? (
                <Card>
                  <div className="text-center py-8">
                    <Icon name="search" size="xl" color="gray" />
                    <p className="text-gray-500 mt-2">Nie znaleziono wyników dla wyszukiwanej frazy</p>
                  </div>
                </Card>
              ) : (
                filteredFaqs.map((item) => (
                  <Card key={item.id} className="hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                      <p className="text-gray-700">{item.answer}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>

          {/* Contact Methods */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skontaktuj się z nami</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon name="phone" size="md" className="text-pink-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{method.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <Icon name="phone" size="sm" color="gray" />
                        <span className="text-sm text-gray-700">{method.phone}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Icon name="mail" size="sm" color="gray" />
                        <span className="text-sm text-gray-700">{method.email}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <Icon name="clock" size="sm" color="gray" />
                        <span className="text-sm text-gray-700">{method.hours}</span>
                      </div>
                    </div>
                    
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      <Icon name="phone" size="sm" />
                      <span className="ml-2">Zadzwoń</span>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <Card>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="lightbulb" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Szybkie akcje</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="message" size="sm" />
                <span className="ml-2">Wyślij wiadomość</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="video" size="sm" />
                <span className="ml-2">Rozpocznij wideorozmowę</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="file-text" size="sm" />
                <span className="ml-2">Pobierz instrukcję</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
