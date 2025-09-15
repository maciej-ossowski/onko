'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import HeaderActions from '@/components/patient/HeaderActions';

export default function DietitianPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'meal-plan' | 'recipes' | 'tracking' | 'consultations'>('meal-plan');

  const handleLogout = () => {
    router.push('/');
  };

  const mealPlans = [
    {
      id: 1,
      name: 'Plan żywieniowy - Chemioterapia',
      date: '2025-01-20',
      status: 'active',
      description: 'Zoptymalizowany plan żywieniowy podczas chemioterapii',
      meals: [
        { time: '8:00', name: 'Śniadanie', calories: 350, description: 'Owsianka z owocami i orzechami' },
        { time: '11:00', name: 'Przekąska', calories: 150, description: 'Jogurt naturalny z miodem' },
        { time: '14:00', name: 'Obiad', calories: 500, description: 'Ryba z warzywami i ryżem' },
        { time: '17:00', name: 'Podwieczorek', calories: 200, description: 'Smoothie z zielonych warzyw' },
        { time: '20:00', name: 'Kolacja', calories: 400, description: 'Zupa krem z dyni' }
      ],
      totalCalories: 1600,
      nutrients: {
        protein: '80g',
        carbs: '180g',
        fat: '60g',
        fiber: '25g'
      }
    },
    {
      id: 2,
      name: 'Plan żywieniowy - Radioterapia',
      date: '2025-02-01',
      status: 'upcoming',
      description: 'Plan dostosowany do radioterapii - więcej antyoksydantów',
      meals: [
        { time: '8:00', name: 'Śniadanie', calories: 400, description: 'Tosty z awokado i pomidorem' },
        { time: '12:00', name: 'Obiad', calories: 550, description: 'Sałatka z łososiem i orzechami' },
        { time: '16:00', name: 'Przekąska', calories: 180, description: 'Owoce jagodowe z jogurtem' },
        { time: '19:00', name: 'Kolacja', calories: 450, description: 'Kurczak z brokułami i quinoa' }
      ],
      totalCalories: 1580,
      nutrients: {
        protein: '85g',
        carbs: '170g',
        fat: '65g',
        fiber: '30g'
      }
    }
  ];

  const recipes = [
    {
      id: 1,
      name: 'Smoothie antyoksydacyjny',
      category: 'Napój',
      prepTime: '5 min',
      difficulty: 'Łatwy',
      calories: 180,
      ingredients: ['1 szklanka szpinaku', '1 banan', '1/2 awokado', '1 szklanka mleka migdałowego', '1 łyżka miodu'],
      instructions: 'Wszystkie składniki zmiksuj w blenderze do uzyskania gładkiej konsystencji.',
      benefits: 'Bogaty w antyoksydanty, witaminy i minerały',
      image: '/recipe1.jpg'
    },
    {
      id: 2,
      name: 'Zupa krem z dyni',
      category: 'Zupa',
      prepTime: '30 min',
      difficulty: 'Średni',
      calories: 120,
      ingredients: ['500g dyni', '1 cebula', '2 ząbki czosnku', '1 litr bulionu warzywnego', '1 łyżka oliwy'],
      instructions: 'Dynię upiecz, następnie zmiksuj z pozostałymi składnikami. Dopraw do smaku.',
      benefits: 'Wzmacnia odporność, bogata w beta-karoten',
      image: '/recipe2.jpg'
    },
    {
      id: 3,
      name: 'Sałatka z łososiem',
      category: 'Sałatka',
      prepTime: '15 min',
      difficulty: 'Łatwy',
      calories: 320,
      ingredients: ['200g łososia', '1 awokado', '1 pomidor', '1/2 ogórka', '2 łyżki oliwy', '1 łyżka soku z cytryny'],
      instructions: 'Łososia upiecz, warzywa pokrój. Wymieszaj z oliwą i sokiem z cytryny.',
      benefits: 'Źródło omega-3, białka i zdrowych tłuszczów',
      image: '/recipe3.jpg'
    }
  ];

  const trackingData = [
    {
      date: '2025-01-20',
      meals: [
        { name: 'Śniadanie', calories: 320, protein: 15, carbs: 45, fat: 12 },
        { name: 'Obiad', calories: 480, protein: 25, carbs: 60, fat: 18 },
        { name: 'Kolacja', calories: 380, protein: 20, carbs: 35, fat: 15 }
      ],
      totalCalories: 1180,
      water: 6,
      weight: 65.2,
      notes: 'Dobry dzień, brak nudności'
    },
    {
      date: '2025-01-19',
      meals: [
        { name: 'Śniadanie', calories: 280, protein: 12, carbs: 35, fat: 10 },
        { name: 'Obiad', calories: 420, protein: 22, carbs: 50, fat: 16 },
        { name: 'Kolacja', calories: 350, protein: 18, carbs: 30, fat: 12 }
      ],
      totalCalories: 1050,
      water: 4,
      weight: 64.8,
      notes: 'Trudny dzień, mały apetyt'
    }
  ];

  const consultations = [
    {
      id: 1,
      date: '2025-01-30',
      time: '11:30',
      dietitian: 'Dr Anna Zielińska',
      type: 'Konsultacja stacjonarna',
      status: 'upcoming',
      purpose: 'Omówienie planu żywieniowego',
      notes: 'Przygotować dziennik żywieniowy z ostatnich 3 dni'
    },
    {
      id: 2,
      date: '2025-01-15',
      time: '14:00',
      dietitian: 'Dr Anna Zielińska',
      type: 'Wideorozmowa',
      status: 'completed',
      purpose: 'Kontrola postępów',
      notes: 'Omówienie problemów z apetytem',
      summary: 'Pacjentka dobrze toleruje plan żywieniowy. Zalecono zwiększenie ilości płynów.'
    }
  ];

  const getContent = () => {
    switch (activeTab) {
      case 'meal-plan': return mealPlans;
      case 'recipes': return recipes;
      case 'tracking': return trackingData;
      case 'consultations': return consultations;
      default: return [];
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'upcoming': return 'text-blue-600 bg-blue-100';
      case 'completed': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Łatwy': return 'text-green-600 bg-green-100';
      case 'Średni': return 'text-yellow-600 bg-yellow-100';
      case 'Trudny': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        title="OnkoApp.AI"
        subtitle="Dietetyk"
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
            <h1 className="text-3xl font-bold text-gray-900">Porady żywieniowe</h1>
            <p className="text-gray-600 mt-2">Zadbaj o prawidłowe odżywianie podczas leczenia</p>
          </div>

          {/* Welcome Card */}
          <Card className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="apple" size="xl" color="primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Witaj w sekcji żywieniowej!</h2>
                <p className="text-gray-700">
                  Prawidłowe odżywianie jest kluczowe podczas leczenia onkologicznego. 
                  Tutaj znajdziesz plany żywieniowe, przepisy i narzędzia do śledzenia swojego odżywiania.
                </p>
              </div>
            </div>
          </Card>

          {/* Tabs */}
          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('meal-plan')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'meal-plan'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Plany żywieniowe ({mealPlans.length})
                </button>
                <button
                  onClick={() => setActiveTab('recipes')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'recipes'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Przepisy ({recipes.length})
                </button>
                <button
                  onClick={() => setActiveTab('tracking')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'tracking'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Śledzenie ({trackingData.length})
                </button>
                <button
                  onClick={() => setActiveTab('consultations')}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === 'consultations'
                      ? 'border-pink-500 text-pink-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Konsultacje ({consultations.length})
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {getContent().length === 0 ? (
              <Card>
                <div className="text-center py-8">
                  <Icon name="apple" size="xl" color="gray" />
                  <p className="text-gray-500 mt-2">Brak treści w tej kategorii</p>
                </div>
              </Card>
            ) : (
              getContent().map((item: Record<string, unknown>, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  {activeTab === 'meal-plan' && (
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{String(item.name || 'Plan żywieniowy')}</h3>
                          <p className="text-sm text-gray-600 mb-3">{String(item.description || 'Opis planu żywieniowego')}</p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div className="text-center p-2 bg-blue-50 rounded">
                              <div className="font-semibold text-blue-700">{String(item.totalCalories || 0)}</div>
                              <div className="text-blue-600">kcal</div>
                            </div>
                            <div className="text-center p-2 bg-green-50 rounded">
                              <div className="font-semibold text-green-700">{String((item.nutrients as Record<string, unknown>)?.protein || '0g')}</div>
                              <div className="text-green-600">białko</div>
                            </div>
                            <div className="text-center p-2 bg-yellow-50 rounded">
                              <div className="font-semibold text-yellow-700">{String((item.nutrients as Record<string, unknown>)?.carbs || '0g')}</div>
                              <div className="text-yellow-600">węglowodany</div>
                            </div>
                            <div className="text-center p-2 bg-purple-50 rounded">
                              <div className="font-semibold text-purple-700">{String((item.nutrients as Record<string, unknown>)?.fat || '0g')}</div>
                              <div className="text-purple-600">tłuszcze</div>
                            </div>
                          </div>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.status ? getStatusColor(String(item.status)) : 'bg-gray-100 text-gray-800'}`}>
                          {String(item.status) === 'active' ? 'Aktywny' : String(item.status) === 'upcoming' ? 'Nadchodzący' : 'Plan'}
                        </span>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Posiłki:</h4>
                        {item.meals ? (item.meals as Array<Record<string, unknown>>).map((meal: Record<string, unknown>, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <div className="flex items-center space-x-3">
                              <Icon name="clock" size="sm" color="gray" />
                              <span className="font-medium">{String(meal.time || '00:00')}</span>
                              <span className="text-gray-600">{String(meal.name)}</span>
                            </div>
                            <div className="text-sm text-gray-600">
                              {String(meal.calories)} kcal
                            </div>
                          </div>
                        )) : <p className="text-gray-500">Brak posiłków</p>}
                      </div>
                    </div>
                  )}

                  {activeTab === 'recipes' && (
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-pink-100 rounded-lg flex items-center justify-center">
                        <Icon name="book-open" size="md" className="text-pink-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{String(item.name || 'Przepis')}</h3>
                          <div className="flex items-center space-x-2">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${item.difficulty ? getDifficultyColor(String(item.difficulty)) : 'bg-gray-100 text-gray-800'}`}>
                              {String(item.difficulty || 'Średni')}
                            </span>
                            <span className="text-sm text-gray-500">{String(item.calories || 0)} kcal</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center space-x-2">
                            <Icon name="clock" size="sm" color="gray" />
                            <span>{String(item.prepTime || '30 min')}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="tag" size="sm" color="gray" />
                            <span>{String(item.category || 'Ogólne')}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">{String(item.benefits || 'Korzyści zdrowotne')}</p>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-gray-900">Składniki:</h4>
                          <ul className="text-sm text-gray-600 list-disc list-inside">
                            {item.ingredients ? (item.ingredients as Array<string>).map((ingredient: string, index: number) => (
                              <li key={index}>{ingredient}</li>
                            )) : <li>Brak składników</li>}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'tracking' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">{String(item.date || 'Dzisiaj')}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>Waga: {String(item.weight || 0)} kg</span>
                          <span>Woda: {String(item.water || 0)} szklanek</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium text-gray-900">Posiłki:</h4>
                        {item.meals ? (item.meals as Array<Record<string, unknown>>).map((meal: Record<string, unknown>, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                            <div className="flex items-center space-x-3">
                              <Icon name="utensils" size="sm" color="gray" />
                              <span className="font-medium">{String(meal.name)}</span>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>{String(meal.calories)} kcal</span>
                              <span>B: {String(meal.protein)}g</span>
                              <span>W: {String(meal.carbs)}g</span>
                              <span>T: {String(meal.fat)}g</span>
                            </div>
                          </div>
                        )) : <p className="text-gray-500">Brak posiłków</p>}
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded">
                        <div className="text-sm font-medium text-blue-700 mb-1">Dzienne podsumowanie:</div>
                        <div className="text-sm text-blue-900">
                          Łącznie: {String(item.totalCalories)} kcal | Białko: {item.meals ? (item.meals as Array<Record<string, unknown>>).reduce((sum, meal) => sum + Number(meal.protein || 0), 0) : 0}g | 
                          Węglowodany: {item.meals ? (item.meals as Array<Record<string, unknown>>).reduce((sum, meal) => sum + Number(meal.carbs || 0), 0) : 0}g | 
                          Tłuszcze: {item.meals ? (item.meals as Array<Record<string, unknown>>).reduce((sum, meal) => sum + Number(meal.fat || 0), 0) : 0}g
                        </div>
                      </div>
                      
                      {Boolean(item.notes) && (
                        <div className="p-3 bg-gray-50 rounded">
                          <p className="text-sm text-gray-700">{String(item.notes)}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'consultations' && (
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{String(item.type || 'Konsultacja')}</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-2">
                              <Icon name="user" size="sm" color="gray" />
                              <span>{String(item.dietitian || 'Dietetyk')}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Icon name="calendar" size="sm" color="gray" />
                              <span>{String(item.date || 'Dzisiaj')} {String(item.time || '10:00')}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 mt-2">{String(item.purpose || 'Konsultacja żywieniowa')}</p>
                          {Boolean(item.notes) && (
                            <p className="text-sm text-gray-600 mt-1">Notatki: {String(item.notes)}</p>
                          )}
                          {Boolean(item.summary) && (
                            <div className="mt-3 p-3 bg-green-50 rounded-lg">
                              <p className="text-sm font-medium text-green-700 mb-1">Podsumowanie konsultacji:</p>
                              <p className="text-sm text-green-900">{String(item.summary)}</p>
                            </div>
                          )}
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(String(item.status || 'upcoming'))}`}>
                          {String(item.status) === 'upcoming' ? 'Nadchodząca' : 'Zakończona'}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-3 pt-3 border-t border-gray-200 mt-3">
                    {activeTab === 'meal-plan' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="edit" size="sm" />
                          <span className="ml-1">Edytuj</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="download" size="sm" />
                          <span className="ml-1">Pobierz</span>
                        </Button>
                      </>
                    )}
                    {activeTab === 'recipes' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="eye" size="sm" />
                          <span className="ml-1">Zobacz przepis</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="heart" size="sm" />
                          <span className="ml-1">Dodaj do ulubionych</span>
                        </Button>
                      </>
                    )}
                    {activeTab === 'tracking' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="edit" size="sm" />
                          <span className="ml-1">Edytuj</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="chart" size="sm" />
                          <span className="ml-1">Wykres</span>
                        </Button>
                      </>
                    )}
                    {activeTab === 'consultations' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Icon name="calendar" size="sm" />
                          <span className="ml-1">Przełóż</span>
                        </Button>
                        <Button variant="outline" size="sm">
                          <Icon name="video" size="sm" />
                          <span className="ml-1">Wideorozmowa</span>
                        </Button>
                      </>
                    )}
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
                <Icon name="plus" size="sm" />
                <span className="ml-2">Dodaj posiłek</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="calendar" size="sm" />
                <span className="ml-2">Umów konsultację</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="book-open" size="sm" />
                <span className="ml-2">Nowy przepis</span>
              </Button>
              <Button variant="outline" className="justify-start">
                <Icon name="chart" size="sm" />
                <span className="ml-2">Raport żywieniowy</span>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <Footer userRole="patient" />
    </div>
  );
}
