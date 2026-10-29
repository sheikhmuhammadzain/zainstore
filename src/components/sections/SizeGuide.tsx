import React, { useState } from 'react';

const SizeGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState('mens');
  const [selectedUnit, setSelectedUnit] = useState('us');

  const mensData = {
    us: [
      { us: '7', uk: '6', eu: '40', cm: '25' },
      { us: '7.5', uk: '6.5', eu: '40.5', cm: '25.5' },
      { us: '8', uk: '7', eu: '41', cm: '26' },
      { us: '8.5', uk: '7.5', eu: '41.5', cm: '26.5' },
      { us: '9', uk: '8', eu: '42', cm: '27' },
      { us: '9.5', uk: '8.5', eu: '42.5', cm: '27.5' },
      { us: '10', uk: '9', eu: '43', cm: '28' },
      { us: '10.5', uk: '9.5', eu: '43.5', cm: '28.5' },
      { us: '11', uk: '10', eu: '44', cm: '29' },
      { us: '11.5', uk: '10.5', eu: '44.5', cm: '29.5' },
      { us: '12', uk: '11', eu: '45', cm: '30' },
    ],
  };

  const womensData = {
    us: [
      { us: '5', uk: '3', eu: '36', cm: '22' },
      { us: '5.5', uk: '3.5', eu: '36.5', cm: '22.5' },
      { us: '6', uk: '4', eu: '37', cm: '23' },
      { us: '6.5', uk: '4.5', eu: '37.5', cm: '23.5' },
      { us: '7', uk: '5', eu: '38', cm: '24' },
      { us: '7.5', uk: '5.5', eu: '38.5', cm: '24.5' },
      { us: '8', uk: '6', eu: '39', cm: '25' },
      { us: '8.5', uk: '6.5', eu: '39.5', cm: '25.5' },
      { us: '9', uk: '7', eu: '40', cm: '26' },
      { us: '9.5', uk: '7.5', eu: '40.5', cm: '26.5' },
      { us: '10', uk: '8', eu: '41', cm: '27' },
    ],
  };

  const Step = ({ number, title, icon }: { number: string; title: string; icon: JSX.Element }) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-4 text-gray-800">{icon}</div>
      <h3 className="text-sm font-medium tracking-wider mb-2">STEP {number}</h3>
      <p className="text-sm text-gray-600 tracking-wider text-center">{title}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h1 className="heading-1 mb-4">Size Guide</h1>
          <p className="body-text max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive size guide
          </p>
        </div>

        {/* How to Measure Section */}
        <div className="premium-card p-8 mb-12">
          <h2 className="heading-2 text-center mb-8">
            How to Measure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Step
              number="1"
              title="Stand on paper against a wall"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              }
            />
            <Step
              number="2"
              title="Mark the longest toe and heel"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                </svg>
              }
            />
            <Step
              number="3"
              title="Measure the length in centimeters"
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" 
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </div>

        {/* Size Chart Section */}
        <div className="premium-card p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="flex space-x-8 mb-8">
              {['mens', 'womens'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm tracking-wider px-6 py-2 font-light transition-colors duration-200
                    ${activeTab === tab 
                      ? 'border-b-2 border-black text-black' 
                      : 'text-gray-500 hover:text-gray-900'}`}
                >
                  {tab === 'mens' ? "MEN'S SIZES" : "WOMEN'S SIZES"}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {['us', 'uk', 'eu', 'cm'].map((unit) => (
                <button
                  key={unit}
                  onClick={() => setSelectedUnit(unit)}
                  className={`text-xs tracking-wider px-4 py-2 rounded-full transition-colors duration-200
                    ${selectedUnit === unit
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {unit.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Size Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-6 py-4 text-xs font-medium tracking-wider text-left">US</th>
                  <th className="px-6 py-4 text-xs font-medium tracking-wider text-left">UK</th>
                  <th className="px-6 py-4 text-xs font-medium tracking-wider text-left">EU</th>
                  <th className="px-6 py-4 text-xs font-medium tracking-wider text-left">CM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {(activeTab === 'mens' ? mensData.us : womensData.us).map((size, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600">{size.us}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{size.uk}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{size.eu}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{size.cm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Sizing Tips */}
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-light tracking-wider mb-6 text-center">
              Sizing Tips
            </h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              <p className="text-sm text-gray-600 tracking-wide">
                • For the most accurate fit, measure your feet in the afternoon
              </p>
              <p className="text-sm text-gray-600 tracking-wide">
                • If you're between sizes, we recommend going up a size
              </p>
              <p className="text-sm text-gray-600 tracking-wide">
                • Consider the socks you'll be wearing with your shoes
              </p>
              <p className="text-sm text-gray-600 tracking-wide">
                • Different styles may fit differently, refer to product details for specific sizing advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;