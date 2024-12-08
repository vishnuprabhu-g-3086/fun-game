import React, { useState, useEffect } from 'react';
import { Timer, RefreshCw, Flag } from 'lucide-react';

interface CountdownGameProps {
  onComplete: (time: number) => void;
  onGiveUp: () => void;
}

export const CountdownGame: React.FC<CountdownGameProps> = ({ onComplete, onGiveUp }) => {
  const [count, setCount] = useState(50);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [userName, setUserName] = useState('');
  const [showInput, setShowInput] = useState(true);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleStart = () => {
    if (userName.trim()) {
      setShowInput(false);
      setIsRunning(true);
    }
  };

  const handleNumber = (num: number) => {
    if (num === count - 1) {
      setCount(num);
      if (num === 1) {
        setIsRunning(false);
        onComplete(time);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      {showInput ? (
        <div className="space-y-4">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={handleStart}
            className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="text-4xl font-bold text-indigo-600">
            <Timer className="inline-block mr-2" />
            {time.toFixed(1)}s
          </div>
          <div className="grid grid-cols-10 gap-2 max-w-4xl">
            {Array.from({ length: 50 }, (_, i) => 50 - i).map((num) => (
              <button
                key={num}
                onClick={() => handleNumber(num)}
                className={`w-12 h-12 rounded-lg ${
                  num > count
                    ? 'bg-gray-200 text-gray-600'
                    : num === count
                    ? 'bg-indigo-600 text-white animate-pulse'
                    : 'bg-green-500 text-white'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              <RefreshCw className="inline-block mr-2" />
              Reset
            </button>
            <button
              onClick={onGiveUp}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              <Flag className="inline-block mr-2" />
              Give Up
            </button>
          </div>
        </>
      )}
    </div>
  );
};