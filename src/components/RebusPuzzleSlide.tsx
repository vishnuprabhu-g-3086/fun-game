import React from 'react';
import { RebusPuzzle } from '../types';

interface RebusPuzzleSlideProps {
  puzzle: RebusPuzzle;
  isAnswer: boolean;
}

export const RebusPuzzleSlide: React.FC<RebusPuzzleSlideProps> = ({ puzzle, isAnswer }) => {
  return (
    <div className="text-center space-y-8">
      <h2 className={`text-4xl font-bold ${isAnswer ? 'text-green-600' : 'text-indigo-600'}`}>
        {isAnswer ? 'Answer' : 'Solve This!'}
      </h2>
      {isAnswer ? (
        <p className="text-6xl font-mono tracking-wider">{puzzle.answer}</p>
      ) : (
        <div className="flex justify-center">
          <img
            src={puzzle.imageUrl}
            alt="Rebus Puzzle"
            className="w-[500px] h-[300px] object-contain rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};