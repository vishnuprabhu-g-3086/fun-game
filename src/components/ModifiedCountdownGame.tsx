import React, { useState, useEffect } from 'react';
import { Timer, RefreshCw, Play, Square } from 'lucide-react';
import { Leaderboard } from './Leaderboard';
import { UserScore } from '../types';

interface ModifiedCountdownGameProps {
  scores: UserScore[];
  onComplete: (score: UserScore) => void;
}

export const ModifiedCountdownGame: React.FC<ModifiedCountdownGameProps> = ({ scores, onComplete }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [collegeName, setCollegeName] = useState('');
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
    if (collegeName.trim()) {
      setShowInput(false);
      setIsRunning(true);
      setTime(0);
    }
  };

  const handleStop = () => {
    setIsRunning(false);
    onComplete({ name: collegeName, time });
    setShowInput(true);
    setCollegeName('');
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(true);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            {showInput ? (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">New Participant</h3>
                <input
                  type="text"
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  onClick={handleStart}
                  disabled={!collegeName.trim()}
                  className="w-full px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play className="inline-block mr-2 h-4 w-4" />
                  Start Timer
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{collegeName}</h3>
                  <div className="text-4xl font-bold text-indigo-600">
                    <Timer className="inline-block mr-2" />
                    {time.toFixed(1)}s
                  </div>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleReset}
                    className="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    <RefreshCw className="inline-block mr-2 h-4 w-4" />
                    Reset
                  </button>
                  <button
                    onClick={handleStop}
                    className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    <Square className="inline-block mr-2 h-4 w-4" />
                    Stop
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="bg-indigo-50 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-indigo-800 mb-4">Instructions:</h3>
            <ul className="list-disc list-inside space-y-2 text-indigo-700">
              <li>Enter the name and click Start</li>
              <li>Start counting down from 50 to 1</li>
              <li>Click Stop when counting is complete</li>
              <li>Use Reset if needed to restart the timer</li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <Leaderboard scores={scores} />
        </div>
      </div>
    </div>
  );
};