import React from 'react';
import { AlphabetTrivia } from '../types';

interface AlphabetTriviaSlideProps {
  trivia: AlphabetTrivia;
  isAnswer: boolean;
}

export const AlphabetTriviaSlide: React.FC<AlphabetTriviaSlideProps> = ({ trivia, isAnswer }) => {
  return (
    <div className="text-center space-y-8">
      <h2 className={`text-4xl font-bold ${isAnswer ? 'text-green-600' : 'text-indigo-600'}`}>
        {isAnswer ? 'Answer' : 'Question'}
      </h2>
      {isAnswer ? (
        <p className="text-6xl font-mono">{trivia.answer}</p>
      ) : (
        <p className="text-3xl">{trivia.question}</p>
      )}
    </div>
  );
};