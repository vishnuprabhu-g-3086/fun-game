import React from 'react';
import { PartyPopper, Heart } from 'lucide-react';

export const ThankYouSlide: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 animate-fade-in">
      <div className="flex items-center space-x-4">
        <PartyPopper className="w-16 h-16 text-yellow-500 animate-bounce" />
        <Heart className="w-16 h-16 text-pink-500 animate-pulse" />
        <PartyPopper className="w-16 h-16 text-yellow-500 animate-bounce" />
      </div>
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
        Thank You!
      </h1>
      <p className="text-2xl text-gray-600 text-center max-w-2xl">
        We hope you enjoyed the games and had fun participating!
      </p>
      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-indigo-100 p-4 rounded-lg animate-pulse">
          <p className="text-indigo-600">Fun Games</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg animate-pulse delay-100">
          <p className="text-purple-600">Team Building</p>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg animate-pulse delay-200">
          <p className="text-pink-600">Great Memories</p>
        </div>
      </div>
    </div>
  );
};