'use client';

import { useState, useEffect } from 'react';
import { forecastGrossProfit, GpInputs } from '@/lib/gpModelTotton';
import { NavSelectNative } from '@/components/NavSelectNative';
import { NAV_ITEMS } from '@/config/navItems';
import { CompanyLogo } from '@/components/CompanyLogo';

export default function TottonGpCalculator() {
  const [inputs, setInputs] = useState<GpInputs>({
    bookings: 0,
    hoursAvailable: 0,
    efficiency: 0,
    rate: 0,
  });

  const [forecast, setForecast] = useState<number>(0);

  // Update forecast whenever inputs change
  useEffect(() => {
    // Convert efficiency from percentage to model format (divide by 10)
    const modelInputs: GpInputs = {
      ...inputs,
      efficiency: inputs.efficiency / 1,
    };
    const result = forecastGrossProfit(modelInputs);
    setForecast(result);
  }, [inputs]);

  const handleInputChange = (field: keyof GpInputs, value: string) => {
    const numValue = parseFloat(value) || 0;
    setInputs((prev) => ({
      ...prev,
      [field]: numValue,
    }));
  };

  // Check if all inputs are filled
  const allInputsFilled = 
    inputs.bookings > 0 &&
    inputs.hoursAvailable > 0 &&
    inputs.efficiency > 0 &&
    inputs.rate > 0;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-200 via-sky-100 to-fuchsia-200">
      <div className="w-full max-w-2xl rounded-3xl border border-white/40 bg-white/30 p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-md border border-black/10 bg-white/80 shadow-sm ring-1 ring-black/5">
            <CompanyLogo className="h-full w-full object-cover" width={64} />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-3">
            Totton GP Weekly Predictor
          </h1>
          <p className="text-slate-700 text-base">
          This data will explain <span className="text-blue-600 font-bold text-lg">91%</span> of what will happen this week
          </p>
          
        </div>

        {/* Input Form */}
        <div className="space-y-6 mb-8">
          {/* Bookings */}
          <div>
            <label
              htmlFor="bookings"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Bookings From <span className="text-blue-600 font-bold text-lg">2</span> Weeks earlier
            </label>
            <input
              id="bookings"
              type="number"
              value={inputs.bookings || ''}
              onChange={(e) => handleInputChange('bookings', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter number of bookings"
            />
          </div>

          {/* Hours Available */}
          <div>
            <label
              htmlFor="hoursAvailable"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Hours Available
            </label>
            <input
              id="hoursAvailable"
              type="number"
              value={inputs.hoursAvailable || ''}
              onChange={(e) => handleInputChange('hoursAvailable', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter hours available"
            />
          </div>

          {/* Efficiency */}
          <div>
            <label
              htmlFor="efficiency"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Efficiency (%)
            </label>
            <input
              id="efficiency"
              type="number"
              step="0.01"
              value={inputs.efficiency || ''}
              onChange={(e) => handleInputChange('efficiency', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter efficiency as percentage (e.g., 56.4)"
            />
          </div>

          {/* Rate */}
          <div>
            <label
              htmlFor="rate"
              className="block text-sm font-semibold text-slate-700 mb-2"
            >
              Rate (£/hour)
            </label>
            <input
              id="rate"
              type="number"
              value={inputs.rate || ''}
              onChange={(e) => handleInputChange('rate', e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter hourly rate"
            />
          </div>
        </div>

        {/* Forecast Output */}
        <div className="rounded-xl p-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <p className="text-sm font-semibold text-slate-600 mb-2 text-center">
            Forecast Gross Profit
          </p>
          {allInputsFilled ? (
            <p className="text-5xl font-bold text-center text-blue-600">
              £{forecast.toLocaleString('en-GB', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
              })}
            </p>
          ) : (
            <p className="text-5xl font-bold text-center text-slate-300">
              —
            </p>
          )}
          
        </div>
        {/* Navigation Select under Forecast Output */}
        <div className="mt-4 flex justify-center">
          <NavSelectNative items={NAV_ITEMS} />
        </div>
      </div>
    </div>
  );
}


