'use client';

import React, { useState } from 'react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import Icon from '../ui/Icon';

interface RiskCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  userRole: 'patient' | 'doctor' | 'admin';
}

interface FormData {
  age: number;
  bmi: number;
  smokingStatus: string;
  diabetes: string;
  asa: string;
  surgeryType: string;
  sentinelLymphNodeBiopsy: string;
  immediateReconstruction: string;
}

export default function RiskCalculator({ isOpen, onClose }: RiskCalculatorProps) {
  const [formData, setFormData] = useState<FormData>({
    age: 55,
    bmi: 27.1,
    smokingStatus: 'Former',
    diabetes: 'No',
    asa: 'II',
    surgeryType: 'Mastectomy',
    sentinelLymphNodeBiopsy: 'Yes',
    immediateReconstruction: 'No'
  });
  
  const [isCalculating, setIsCalculating] = useState(false);
  const [riskResult, setRiskResult] = useState<number | null>(null);



  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculate = async () => {
    setIsCalculating(true);
    setRiskResult(null);
    
    // Simulate AI calculation
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Mock calculation result (12% as shown in the image)
    const calculatedRisk = 12;
    setRiskResult(calculatedRisk);
    setIsCalculating(false);
  };

  const getRiskLevel = (risk: number) => {
    if (risk < 10) return { level: 'LOW', color: 'green' };
    if (risk < 20) return { level: 'MEDIUM', color: 'yellow' };
    return { level: 'HIGH', color: 'red' };
  };

  const riskLevel = riskResult ? getRiskLevel(riskResult) : null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Kalkulator ryzyka powikłań"
      size="lg"
      showCloseButton={!isCalculating}
    >
      <div className="space-y-6">
        {!isCalculating && !riskResult && (
          <>
            {/* Form */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Wiek</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', parseInt(e.target.value) || 0)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                      <button
                        onClick={() => handleInputChange('age', formData.age + 1)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Icon name="arrow-up" size="sm" />
                      </button>
                      <button
                        onClick={() => handleInputChange('age', Math.max(0, formData.age - 1))}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Icon name="arrow-down" size="sm" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">BMI</label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.1"
                      value={formData.bmi}
                      onChange={(e) => handleInputChange('bmi', parseFloat(e.target.value) || 0)}
                      className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                      <button
                        onClick={() => handleInputChange('bmi', Number((formData.bmi + 0.1).toFixed(1)))}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Icon name="arrow-up" size="sm" />
                      </button>
                      <button
                        onClick={() => handleInputChange('bmi', Number((Math.max(0, formData.bmi - 0.1)).toFixed(1)))}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <Icon name="arrow-down" size="sm" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Status palenia</label>
                  <select
                    value={formData.smokingStatus}
                    onChange={(e) => handleInputChange('smokingStatus', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="Never">Nigdy</option>
                    <option value="Former">Były palacz</option>
                    <option value="Current">Obecny palacz</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cukrzyca</label>
                  <select
                    value={formData.diabetes}
                    onChange={(e) => handleInputChange('diabetes', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="No">Nie</option>
                    <option value="Yes">Tak</option>
                  </select>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">ASA</label>
                  <select
                    value={formData.asa}
                    onChange={(e) => handleInputChange('asa', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="I">I</option>
                    <option value="II">II</option>
                    <option value="III">III</option>
                    <option value="IV">IV</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Typ operacji</label>
                  <select
                    value={formData.surgeryType}
                    onChange={(e) => handleInputChange('surgeryType', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="Lumpectomy">Lumpektomia</option>
                    <option value="Mastectomy">Mastektomia</option>
                    <option value="Bilateral Mastectomy">Obustronna mastektomia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Biopsja węzła wartowniczego</label>
                  <select
                    value={formData.sentinelLymphNodeBiopsy}
                    onChange={(e) => handleInputChange('sentinelLymphNodeBiopsy', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="No">Nie</option>
                    <option value="Yes">Tak</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Natychmiastowa rekonstrukcja</label>
                  <select
                    value={formData.immediateReconstruction}
                    onChange={(e) => handleInputChange('immediateReconstruction', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="No">Nie</option>
                    <option value="Yes">Tak</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Calculate Button */}
            <div className="flex justify-center pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleCalculate}
                className="px-8"
              >
                <Icon name="chart" size="sm" className="mr-2" />
                Oblicz ryzyko
              </Button>
            </div>
          </>
        )}

        {/* Loading State */}
        {isCalculating && (
          <div className="text-center py-12">
            <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Obliczamy ryzyko...</h3>
            <p className="text-gray-600">AI analizuje dane i kalkuluje ryzyko powikłań</p>
          </div>
        )}

        {/* Results */}
        {riskResult && !isCalculating && (
          <div className="text-center">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ryzyko powikłań</h3>
              <div className="text-4xl font-bold text-gray-900 mb-4">{riskResult}%</div>
              
              {/* Risk Level Bar */}
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div 
                  className={`h-4 rounded-full ${
                    riskLevel?.color === 'green' ? 'bg-green-500' :
                    riskLevel?.color === 'yellow' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${Math.min(100, (riskResult / 30) * 100)}%` }}
                />
              </div>
              
              {/* Risk Level Labels */}
              <div className="flex justify-between text-xs text-gray-600">
                <span>NISKIE</span>
                <span>ŚREDNIE</span>
                <span>WYSOKIE</span>
              </div>
            </div>

            <div className="flex space-x-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setRiskResult(null);
                  setIsCalculating(false);
                }}
              >
                Nowe obliczenie
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={onClose}
              >
                Zamknij
              </Button>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
