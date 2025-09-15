'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function QuestionsPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'all' | 'pending' | 'answered' | 'urgent'>('all');
  const [newQuestion, setNewQuestion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isUrgent, setIsUrgent] = useState(false);

  const handleLogout = () => {
    router.push('/');
  };

  const questions = [
    {
      id: 1,
      question: 'Czy mogę ćwiczyć podczas radioterapii?',
      category: 'leczenie',
      priority: 'normal',
      status: 'answered',
      date: '2025-01-10',
      answer: 'Tak, umiarkowana aktywność fizyczna jest zalecana podczas radioterapii. Unikaj jednak intensywnych ćwiczeń w okolicy poddawanej radioterapii. Spacer, joga czy pływanie to dobre opcje.',
      doctor: 'Dr Jan Kowalski',
      answerDate: '2025-01-11'
    },
    {
      id: 2,
      question: 'Jakie są skutki uboczne Tamoksyfenu?',
      category: 'leki',
      priority: 'normal',
      status: 'answered',
      date: '2025-01-15',
      answer: 'Najczęstsze skutki uboczne to uderzenia gorąca, suchość pochwy, zmęczenie i wahania nastroju. Większość z nich ustępuje po kilku miesiącach. Jeśli są bardzo uciążliwe, skontaktuj się ze mną.',
      doctor: 'Dr Jan Kowalski',
      answerDate: '2025-01-16'
    },
    {
      id: 3,
      question: 'Czy mogę jeść wszystko podczas chemioterapii?',
      category: 'dieta',
      priority: 'urgent',
      status: 'pending',
      date: '2025-01-20',
      answer: null,
      doctor: null,
      answerDate: null
    },
    {
      id: 4,
      question: 'Kiedy będę mogła wrócić do pracy?',
      category: 'ogólne',
      priority: 'normal',
      status: 'answered',
      date: '2025-01-05',
      answer: 'Zależy to od Twojego samopoczucia i rodzaju pracy. Po zakończeniu radioterapii, czyli za około 2-3 tygodnie, możesz stopniowo wracać do normalnej aktywności. Omówimy to na następnej wizycie.',
      doctor: 'Dr Jan Kowalski',
      answerDate: '2025-01-06'
    },
    {
      id: 5,
      question: 'Czy mogę podróżować samolotem?',
      category: 'ogólne',
      priority: 'normal',
      status: 'pending',
      date: '2025-01-18',
      answer: null,
      doctor: null,
      answerDate: null
    },
    {
      id: 6,
      question: 'Mam silne bóle głowy - czy to normalne?',
      category: 'objawy',
      priority: 'urgent',
      status: 'answered',
      date: '2025-01-12',
      answer: 'Bóle głowy mogą być związane z leczeniem. Jeśli są silne lub towarzyszą im inne objawy jak nudności czy zaburzenia widzenia, skontaktuj się ze mną natychmiast. Możesz wziąć paracetamol.',
      doctor: 'Dr Jan Kowalski',
      answerDate: '2025-01-12'
    }
  ];

  const categories = [
    { id: 'general', name: 'Ogólne', icon: 'help-circle' },
    { id: 'treatment', name: 'Leczenie', icon: 'medical' },
    { id: 'medications', name: 'Leki', icon: 'pill' },
    { id: 'diet', name: 'Dieta', icon: 'apple' },
    { id: 'symptoms', name: 'Objawy', icon: 'warning' },
    { id: 'appointments', name: 'Wizyty', icon: 'calendar' }
  ];

  const getQuestions = () => {
    let filtered = questions;
    
    switch (activeTab) {
      case 'pending':
        filtered = filtered.filter(q => q.status === 'pending');
        break;
      case 'answered':
        filtered = filtered.filter(q => q.status === 'answered');
        break;
      case 'urgent':
        filtered = filtered.filter(q => q.priority === 'urgent');
        break;
      default:
        break;
    }
    
    return filtered;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-100';
      case 'normal': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'answered': return 'text-green-600 bg-green-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : 'help-circle';
  };

  const handleSubmitQuestion = () => {
    if (newQuestion.trim()) {
      console.log('Nowe pytanie:', {
        question: newQuestion,
        category: selectedCategory,
        priority: isUrgent ? 'urgent' : 'normal',
        status: 'pending'
      });
      setNewQuestion('');
      setIsUrgent(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Pytania do lekarza"
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
            <h1 className="text-3xl font-bold text-gray-900">Pytania do lekarza</h1>
            <p className="text-gray-600 mt-2">Zadaj pytania swojemu lekarzowi i uzyskaj odpowiedzi</p>
          </div>

          {/* New Question Form */}
          <Card className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                <Icon name="plus" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Zadaj nowe pytanie</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kategoria</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pytanie</label>
                <textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  rows={4}
                  placeholder="Opisz swoje pytanie szczegółowo..."
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={isUrgent}
                    onChange={(e) => setIsUrgent(e.target.checked)}
                    className="rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Pilne pytanie</span>
                </label>
                
                <Button 
                  variant="primary" 
                  onClick={handleSubmitQuestion}
                  disabled={!newQuestion.trim()}
                >
                  <Icon name="send" size="sm" />
                  <span className="ml-2">Wyślij pytanie</span>
                </Button>
              </div>
            </div>
          </Card>

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
                  Wszystkie ({questions.length})
                </button>
                <button
                  onClick={() => setActiveTab('pending')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'pending'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Oczekujące ({questions.filter(q => q.status === 'pending').length})
                </button>
                <button
                  onClick={() => setActiveTab('answered')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'answered'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Odpowiedzi ({questions.filter(q => q.status === 'answered').length})
                </button>
                <button
                  onClick={() => setActiveTab('urgent')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'urgent'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Pilne ({questions.filter(q => q.priority === 'urgent').length})
                </button>
              </nav>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-4">
            {getQuestions().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="message" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">
                    {activeTab === 'pending' ? 'Brak oczekujących pytań' :
                     activeTab === 'answered' ? 'Brak odpowiedzi' :
                     activeTab === 'urgent' ? 'Brak pilnych pytań' :
                     'Brak pytań'}
                  </p>
                </div>
              </Card>
            ) : (
              getQuestions().map((question) => (
                <Card key={question.id} className="hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    {/* Question Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                            <Icon name={getCategoryIcon(question.category)} size="sm" color="primary" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">{question.question}</h3>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{question.date}</span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(question.priority)}`}>
                            {question.priority === 'urgent' ? 'Pilne' : 'Normalne'}
                          </span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(question.status)}`}>
                            {question.status === 'answered' ? 'Odpowiedziane' : 'Oczekujące'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Answer */}
                    {question.answer && (
                      <div className="border-t border-gray-200 pt-4">
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2 mb-2">
                            <Icon name="check" size="sm" color="success" />
                            <span className="text-sm font-medium text-green-800">Odpowiedź od {question.doctor}</span>
                            <span className="text-xs text-green-600">{question.answerDate}</span>
                          </div>
                          <p className="text-green-900">{question.answer}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Actions */}
                    <div className="flex space-x-3 pt-2">
                      <Button variant="outline" size="sm">
                        <Icon name="edit" size="sm" />
                        <span className="ml-1">Edytuj</span>
                      </Button>
                      {question.status === 'answered' && (
                        <Button variant="outline" size="sm">
                          <Icon name="thumbs-up" size="sm" />
                          <span className="ml-1">Pomocne</span>
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <Icon name="share" size="sm" />
                        <span className="ml-1">Udostępnij</span>
                      </Button>
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
                <Icon name="lightbulb" size="md" className="text-pink-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Szybkie akcje</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="justify-start">
                <Icon name="phone" size="sm" />
                <span className="ml-2">Zadzwoń do lekarza</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="video" size="sm" />
                <span className="ml-2">Wideorozmowa</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="calendar" size="sm" />
                <span className="ml-2">Umów wizytę</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
