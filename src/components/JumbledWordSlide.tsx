import React from 'react';
import { JumbledWord } from '../types';

interface JumbledWordSlideProps {
  word: JumbledWord;
  isAnswer: boolean;
}

export const JumbledWordSlide: React.FC<JumbledWordSlideProps> = ({ word, isAnswer }) => {
  return (
    <div className="text-center space-y-8">
      <h2 className={`text-4xl font-bold ${isAnswer ? 'text-green-600' : 'text-indigo-600'}`}>
        {isAnswer ? 'Answer' : 'Unscramble This!'}
      </h2>
      <p className="text-6xl font-mono tracking-wider">
        {isAnswer ? word.answer : word.jumbled}
      </p>
    </div>
  );
};