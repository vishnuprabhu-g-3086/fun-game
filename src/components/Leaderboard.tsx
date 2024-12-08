import React from 'react';
import { Trophy } from 'lucide-react';
import { UserScore } from '../types';

interface LeaderboardProps {
  scores: UserScore[];
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
  const sortedScores = [...scores].sort((a, b) => a.time - b.time);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
        <Trophy className="inline-block mr-2" />
        Leaderboard
      </h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {sortedScores.map((score, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 ${
              index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
            }`}
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-bold text-indigo-600">#{index + 1}</span>
              <span className="text-lg">{score.name}</span>
            </div>
            <span className="text-lg font-semibold">{score.time.toFixed(1)}s</span>
          </div>
        ))}
      </div>
    </div>
  );
};