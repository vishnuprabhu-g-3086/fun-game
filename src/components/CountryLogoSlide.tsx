import React from 'react';
import { CountryLogo } from '../types';

interface CountryLogoSlideProps {
  countryLogo: CountryLogo;
  isAnswer: boolean;
}

export const CountryLogoSlide: React.FC<CountryLogoSlideProps> = ({ countryLogo, isAnswer }) => {
  return (
    <div className="text-center space-y-8">
      <h2 className={`text-4xl font-bold ${isAnswer ? 'text-green-600' : 'text-indigo-600'}`}>
        {isAnswer ? 'Answer' : 'Guess the Country / Logo'}
      </h2>
      {isAnswer ? (
        <p className="text-6xl font-mono">{countryLogo.country}</p>
      ) : (
        <div className="flex justify-center space-x-8">
          <img
            src={countryLogo.flag}
            alt="Flag"
            className="object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};