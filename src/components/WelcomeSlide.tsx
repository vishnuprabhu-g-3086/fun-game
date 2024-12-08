import React from 'react';
import { Gamepad2 } from 'lucide-react';

export const WelcomeSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
      <Gamepad2 className="w-24 h-24 text-indigo-600 animate-bounce" />
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
        Virtual Games
      </h1>
      <p className="text-2xl text-gray-600">Get ready for some fun!</p>
      <div className="flex space-x-4">
        <div className="animate-pulse bg-indigo-100 p-4 rounded-lg">
          <p className="text-indigo-600">5 Exciting Games</p>
        </div>
        <div className="animate-pulse bg-purple-100 p-4 rounded-lg">
          <p className="text-purple-600">Multiple Challenges</p>
        </div>
        <div className="animate-pulse bg-pink-100 p-4 rounded-lg">
          <p className="text-pink-600">Team Building</p>
        </div>
      </div>
    </div>
  );
};