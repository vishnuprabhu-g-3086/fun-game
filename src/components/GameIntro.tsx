import React from 'react';
import { Icon } from 'lucide-react';

interface GameIntroProps {
  title: string;
  description: string;
  icon: Icon;
}

export const GameIntro: React.FC<GameIntroProps> = ({ title, description, icon: IconComponent }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <IconComponent className="w-20 h-20 text-indigo-600" />
      <h2 className="text-4xl font-bold text-gray-800">{title}</h2>
      <p className="text-xl text-gray-600 max-w-2xl text-center">{description}</p>
      <div className="mt-8 animate-bounce">
        <p className="text-indigo-600">Get Ready!</p>
      </div>
    </div>
  );
};