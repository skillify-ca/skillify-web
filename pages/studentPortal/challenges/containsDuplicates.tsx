import React, { useState } from 'react';

// Types
interface DuplicateGiftsState {
  giftList: number[];
  currentIndex: number;
  seenGifts: Set<number>;
  duplicateFound: boolean;
  currentGift: number | null;
  message: string;
  stage: 'IDLE' | 'CHECKING' | 'FOUND_DUPLICATE' | 'NO_DUPLICATES';
  comparisonCount: number;
  duplicateGift?: number;
  firstSeenIndex?: number;
}

// Button Component
const Button = ({ 
  label, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  disabled = false 
}: { 
  label: string; 
  onClick: () => void; 
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}) => {
  const baseStyles = "font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-purple-600 hover:bg-purple-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    warning: "bg-orange-600 hover:bg-orange-700 text-white"
  };
  
  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-5 py-2.5 text-base",
    large: "px-6 py-3 text-lg"
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]}`}
    >
      {label}
    </button>
  );
};

// Gift Icon Component
const GiftIcon = ({ number, status }: { number: number; status: 'pending' | 'current' | 'checked' | 'duplicate' }) => {
  const statusStyles = {
    pending: 'bg-gray-100 border-gray-300 text-gray-400',
    current: 'bg-yellow-400 border-yellow-600 text-gray-900 scale-110 shadow-lg',
    checked: 'bg-gray-200 border-gray-400 text-gray-500',
    duplicate: 'bg-red-100 border-red-500 text-red-700 animate-pulse'
  };
  
  return (
    <div className={`relative inline-flex flex-col items-center transition-all duration-300 ${statusStyles[status]}`}>
      <div className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center ${statusStyles[status]}`}>
        <div className="text-2xl">🎁</div>
      </div>
      <div className={`absolute -bottom-2 px-2 py-0.5 rounded-full text-xs font-bold border ${statusStyles[status]}`}>
        #{number}
      </div>
    </div>
  );
};

// Hash Set Shelf Component
const HashSetShelf = ({ seenGifts, currentGift, duplicateFound }: { 
  seenGifts: Set<number>; 
  currentGift: number | null;
  duplicateFound: boolean;
}) => {
  const seenArray = Array.from(seenGifts);
  
  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 rounded-lg p-6 border-2 border-amber-300 min-h-[200px]">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">📚</span>
        <h4 className="text-lg font-bold text-gray-800">Gift Registry (Hash Set)</h4>
      </div>
      
      {seenArray.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">📭</div>
          <p className="text-sm">No gifts registered yet</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {seenArray.map((gift) => (
            <div 
              key={gift}
              className={`px-4 py-2 rounded-lg border-2 font-bold transition-all duration-300 ${
                duplicateFound && gift === currentGift 
                  ? 'bg-red-200 border-red-500 text-red-700 animate-bounce' 
                  : 'bg-white border-amber-400 text-gray-700'
              }`}
            >
              🎁 #{gift}
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-4 text-xs text-gray-600">
        Total registered: {seenArray.length} gifts
      </div>
    </div>
  );
};

// Main Component
const DuplicateGiftsLesson = () => {
  const [stateHistory, setStateHistory] = useState<DuplicateGiftsState[]>([]);
  const [inputValue, setInputValue] = useState('1,2,3,2,4');
  
  const currentState = stateHistory[stateHistory.length - 1] || {
    giftList: [],
    currentIndex: -1,
    seenGifts: new Set<number>(),
    duplicateFound: false,
    currentGift: null,
    message: 'Enter a gift list and click Next to start',
    stage: 'IDLE' as const,
    comparisonCount: 0
  };

  const initializeState = (giftList: number[]): DuplicateGiftsState => ({
    giftList,
    currentIndex: 0,
    seenGifts: new Set<number>(),
    duplicateFound: false,
    currentGift: giftList[0] || null,
    message: giftList.length > 0 ? `Starting check with gift #${giftList[0]}` : 'No gifts to check',
    stage: giftList.length > 0 ? 'CHECKING' : 'IDLE',
    comparisonCount: 0
  });

  const handleNext = () => {
    if (currentState.stage === 'IDLE') {
      const giftList = inputValue.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
      if (giftList.length === 0) {
        alert('Please enter valid gift numbers');
        return;
      }
      setStateHistory([initializeState(giftList)]);
      return;
    }

    if (currentState.stage === 'FOUND_DUPLICATE' || currentState.stage === 'NO_DUPLICATES') {
      return;
    }

    const newState = { ...currentState };
    const currentGift = newState.giftList[newState.currentIndex];

    if (newState.seenGifts.has(currentGift)) {
      newState.duplicateFound = true;
      newState.duplicateGift = currentGift;
      newState.firstSeenIndex = newState.giftList.indexOf(currentGift);
      newState.message = `🚨 Duplicate found! Gift #${currentGift} was already brought by another friend!`;
      newState.stage = 'FOUND_DUPLICATE';
    } else {
      newState.seenGifts = new Set(newState.seenGifts);
      newState.seenGifts.add(currentGift);
      newState.comparisonCount++;
      
      if (newState.currentIndex < newState.giftList.length - 1) {
        newState.currentIndex++;
        newState.currentGift = newState.giftList[newState.currentIndex];
        newState.message = `✅ Gift #${currentGift} added to registry. Now checking gift #${newState.currentGift}`;
      } else {
        newState.message = `🎉 All gifts are unique! No duplicates found.`;
        newState.stage = 'NO_DUPLICATES';
      }
    }

    setStateHistory([...stateHistory, newState]);
  };

  const handlePrevious = () => {
    if (stateHistory.length > 1) {
      setStateHistory(stateHistory.slice(0, -1));
    }
  };

  const handleReset = () => {
    setStateHistory([]);
  };

  const handleRandomList = () => {
    const scenarios = [
      '1,2,3,4,5',
      '1,2,3,2,4',
      '5,4,3,2,1',
      '7,7,8,9',
      '10,20,30,40,50,60,20',
      '1,1',
      '42'
    ];
    const random = scenarios[Math.floor(Math.random() * scenarios.length)];
    setInputValue(random);
    setStateHistory([]);
  };

  const getGiftStatus = (index: number): 'pending' | 'current' | 'checked' | 'duplicate' => {
    if (currentState.stage === 'IDLE') return 'pending';
    if (currentState.duplicateFound && currentState.giftList[index] === currentState.duplicateGift) {
      return 'duplicate';
    }
    if (index === currentState.currentIndex) return 'current';
    if (index < currentState.currentIndex) return 'checked';
    return 'pending';
  };

  const calculateNaiveComparisons = (n: number) => {
    return (n * (n - 1)) / 2;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-purple-200">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
              🎂 Liiyaani's Birthday Gift Tracker
            </h1>
            <p className="text-gray-600 text-lg">
              Help detect if any friends accidentally brought duplicate gifts!
            </p>
          </div>
        </div>

        {/* Input Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="max-w-3xl mx-auto">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Gift List (comma-separated numbers):
            </label>
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-center font-mono text-lg"
                placeholder="e.g., 1,2,3,2,4"
              />
              <Button label="🎲 Random" onClick={handleRandomList} variant="warning" size="medium" />
            </div>
            
            <div className="flex justify-center gap-3 mt-4">
              <Button 
                label="← Previous" 
                onClick={handlePrevious} 
                variant="secondary"
                disabled={stateHistory.length <= 1}
              />
              <Button 
                label="Next →" 
                onClick={handleNext} 
                variant="primary"
                disabled={currentState.stage === 'FOUND_DUPLICATE' || currentState.stage === 'NO_DUPLICATES'}
              />
              <Button label="↺ Reset" onClick={handleReset} variant="success" />
            </div>
          </div>
        </div>

        {/* Story Panel */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl shadow-lg p-6 border-2 border-purple-300">
          <div className="flex items-center gap-4">
            <div className="text-6xl">👧🏾</div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-purple-900 mb-1">Current Status:</h3>
              <p className="text-lg text-purple-800">{currentState.message}</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Interactive Visualization */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🎁</span> Gift Array Visualization
            </h3>
            
            {currentState.giftList.length > 0 ? (
              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 justify-center p-4 bg-gray-50 rounded-lg min-h-[120px]">
                  {currentState.giftList.map((gift, index) => (
                    <div key={index} className="text-center">
                      <GiftIcon number={gift} status={getGiftStatus(index)} />
                      <div className="text-xs text-gray-500 mt-1">pos {index}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-3 text-xs justify-center">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-yellow-400 rounded"></div>
                    <span>Current</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-gray-200 rounded"></div>
                    <span>Checked</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-gray-100 rounded border border-gray-300"></div>
                    <span>Pending</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-100 rounded border border-red-500"></div>
                    <span>Duplicate</span>
                  </div>
                </div>

                {currentState.currentGift !== null && currentState.stage === 'CHECKING' && (
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm font-semibold text-gray-700 mb-1">Current Operation:</p>
                    <p className="text-lg">
                      Checking gift <span className="font-bold text-blue-600">#{currentState.currentGift}</span>
                      {' '}at position {currentState.currentIndex}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Is #{currentState.currentGift} in the registry? {currentState.seenGifts.has(currentState.currentGift) ? '❌ YES - Duplicate!' : '✅ NO - Safe to add'}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <div className="text-6xl mb-2">🎁</div>
                <p>Enter a gift list to begin</p>
              </div>
            )}
          </div>

          {/* Hash Set Shelf */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📚</span> Gift Registry
            </h3>
            <HashSetShelf 
              seenGifts={currentState.seenGifts} 
              currentGift={currentState.currentGift}
              duplicateFound={currentState.duplicateFound}
            />
          </div>

          {/* Algorithm Comparison */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Algorithm Comparison</h3>
            
            <div className="space-y-4">
              <div className="border-2 border-red-200 rounded-lg p-4 bg-red-50">
                <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                  <span>🐌</span> Naive Approach (Nested Loops)
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Compare each gift with all previous gifts
                </p>
                <div className="bg-white rounded p-3 font-mono text-sm">
                  <div>Time: O(n²)</div>
                  <div>Space: O(1)</div>
                  {currentState.giftList.length > 0 && (
                    <div className="mt-2 text-red-600">
                      Comparisons needed: {calculateNaiveComparisons(currentState.giftList.length)}
                    </div>
                  )}
                </div>
              </div>

              <div className="border-2 border-green-200 rounded-lg p-4 bg-green-50">
                <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                  <span>🚀</span> Hash Set Approach
                </h4>
                <p className="text-sm text-gray-700 mb-2">
                  Check registry once per gift
                </p>
                <div className="bg-white rounded p-3 font-mono text-sm">
                  <div>Time: O(n)</div>
                  <div>Space: O(n)</div>
                  {currentState.giftList.length > 0 && (
                    <div className="mt-2 text-green-600">
                      Comparisons needed: {currentState.giftList.length}
                    </div>
                  )}
                </div>
              </div>

              {currentState.giftList.length > 0 && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                  <div className="text-sm font-semibold text-purple-900 mb-1">Efficiency Gain:</div>
                  <div className="text-2xl font-bold text-purple-600">
                    {Math.round((1 - currentState.giftList.length / calculateNaiveComparisons(currentState.giftList.length)) * 100)}% faster
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Execution History */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📜 Execution History</h3>
            
            <div className="max-h-96 overflow-y-auto space-y-2">
              {stateHistory.length === 0 ? (
                <div className="text-center py-8 text-gray-400">
                  <div className="text-4xl mb-2">📝</div>
                  <p className="text-sm">No execution history yet</p>
                </div>
              ) : (
                stateHistory.map((state, index) => {
                  const isCurrentStep = index === stateHistory.length - 1;
                  const bgColor = state.duplicateFound 
                    ? 'bg-red-50 border-red-300' 
                    : state.stage === 'NO_DUPLICATES'
                    ? 'bg-green-50 border-green-300'
                    : 'bg-blue-50 border-blue-200';
                  
                  return (
                    <div 
                      key={index}
                      className={`rounded-lg border p-3 ${bgColor} ${isCurrentStep ? 'ring-2 ring-purple-400' : ''}`}
                    >
                      <div className="flex items-start justify-between mb-1">
                        <span className="font-bold text-sm">Step {index + 1}</span>
                        <span className="text-xs text-gray-600">
                          Pos: {state.currentIndex}/{state.giftList.length}
                        </span>
                      </div>
                      <div className="text-sm">{state.message}</div>
                      <div className="flex gap-4 mt-2 text-xs text-gray-600">
                        <div>Registry: {state.seenGifts.size} gifts</div>
                        {state.currentGift && <div>Current: #{state.currentGift}</div>}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Learning Resources</h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-700 mb-2">💡 What is a Hash Set?</h4>
              <p className="text-sm text-gray-700">
                A hash set is like a registry book that lets you instantly check if something has been recorded before. It uses special math (hashing) to make lookups super fast!
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-700 mb-2">⚡ Why So Fast?</h4>
              <p className="text-sm text-gray-700">
                Instead of comparing with every previous gift (slow!), we just check our registry once. It's like looking up a word in a dictionary vs. reading the whole book.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-bold text-purple-700 mb-2">🎯 Real-World Uses</h4>
              <p className="text-sm text-gray-700">
                Duplicate detection is everywhere: email signup (no duplicate accounts), voting systems (one vote per person), and shopping carts (unique items).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DuplicateGiftsLesson;