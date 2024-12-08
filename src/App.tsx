import React, { useState } from 'react';
import { Puzzle, Brain, AlignLeft, Globe, Timer } from 'lucide-react';
import { WelcomeSlide } from './components/WelcomeSlide';
import { GameIntro } from './components/GameIntro';
import { ModifiedCountdownGame } from './components/ModifiedCountdownGame';
import { RebusPuzzleSlide } from './components/RebusPuzzleSlide';
import { JumbledWordSlide } from './components/JumbledWordSlide';
import { AlphabetTriviaSlide } from './components/AlphabetTriviaSlide';
import { CountryLogoSlide } from './components/CountryLogoSlide';
import { GameState, UserScore } from './types';
import { backgroundPattern } from './styles/background';
import {
  jumbledWords,
  rebusPuzzles,
  alphabetTrivia,
  alphabetTrivia2,
  countryLogos,
} from './data/gameData';
import { ThankYouSlide } from './components/ThankYouSlide';

function App() {
  const [gameState, setGameState] = useState<GameState>({
    currentSlide: 0,
    userName: '',
    gameStarted: false,
    timer: 0,
    users: [],
  });

  const totalSlides = 
    1 + // Welcome
    1 + // Jumbled intro
    jumbledWords.length * 2 + // Questions and answers
    1 + // Rebus intro
    rebusPuzzles.length * 2 +
    1 + // Alphabet intro
    alphabetTrivia.length * 2 +
    1 + // Alphabet 2 intro
    alphabetTrivia2.length * 2 +
    1 + // Country intro
    countryLogos.length * 2 +
    1 + // Countdown intro
    1 + // Countdown game
    1; // Thank you

  const handleNext = () => {
    if (gameState.currentSlide < totalSlides - 1) {
      setGameState(prev => ({ ...prev, currentSlide: prev.currentSlide + 1 }));
    }
  };

  const handlePrev = () => {
    if (gameState.currentSlide > 0) {
      setGameState(prev => ({ ...prev, currentSlide: prev.currentSlide - 1 }));
    }
  };

  const handleComplete = (score: UserScore) => {
    setGameState(prev => ({
      ...prev,
      users: [...prev.users, score],
    }));
  };

  const renderSlide = () => {
    const { currentSlide } = gameState;

    // Welcome slide
    if (currentSlide === 0) return <WelcomeSlide />;

    let offset = 1;

    // Jumbled Words
    if (currentSlide === offset) {
      return (
        <GameIntro
          title="Jumbled Words"
          description="Unscramble the letters to find the hidden word!"
          icon={Puzzle}
        />
      );
    }
    offset++;

    for (let i = 0; i < jumbledWords.length; i++) {
      if (currentSlide === offset + i * 2) {
        return <JumbledWordSlide word={jumbledWords[i]} isAnswer={false} />;
      }
      if (currentSlide === offset + i * 2 + 1) {
        return <JumbledWordSlide word={jumbledWords[i]} isAnswer={true} />;
      }
    }
    offset += jumbledWords.length * 2;

    // Rebus Puzzles
    if (currentSlide === offset) {
      return (
        <GameIntro
          title="Rebus Puzzles"
          description="Solve these visual word puzzles!"
          icon={Brain}
        />
      );
    }
    offset++;

    for (let i = 0; i < rebusPuzzles.length; i++) {
      if (currentSlide === offset + i * 2) {
        return <RebusPuzzleSlide puzzle={rebusPuzzles[i]} isAnswer={false} />;
      }
      if (currentSlide === offset + i * 2 + 1) {
        return <RebusPuzzleSlide puzzle={rebusPuzzles[i]} isAnswer={true} />;
      }
    }
    offset += rebusPuzzles.length * 2;

    // Alphabet Trivia
    if (currentSlide === offset) {
      return (
        <GameIntro
          title="Alphabet Trivia"
          description="All the answers starts with FL!"
          icon={AlignLeft}
        />
      );
    }
    offset++;

    for (let i = 0; i < alphabetTrivia.length; i++) {
      if (currentSlide === offset + i * 2) {
        return <AlphabetTriviaSlide trivia={alphabetTrivia[i]} isAnswer={false} />;
      }
      if (currentSlide === offset + i * 2 + 1) {
        return <AlphabetTriviaSlide trivia={alphabetTrivia[i]} isAnswer={true} />;
      }
    }
    offset += alphabetTrivia.length * 2;

    // Alphabet Trivia 2
    if (currentSlide === offset) {
      return (
        <GameIntro
          title="Alphabet Trivia"
          description="All the answers starts with TE!"
          icon={AlignLeft}
        />
      );
    }
    offset++;

    for (let i = 0; i < alphabetTrivia2.length; i++) {
      if (currentSlide === offset + i * 2) {
        return <AlphabetTriviaSlide trivia={alphabetTrivia2[i]} isAnswer={false} />;
      }
      if (currentSlide === offset + i * 2 + 1) {
        return <AlphabetTriviaSlide trivia={alphabetTrivia2[i]} isAnswer={true} />;
      }
    }
    offset += alphabetTrivia2.length * 2;

    // Country Logos
    if (currentSlide === offset) {
      return (
        <GameIntro
          title="Country Names & Logos"
          description="Guess The Country Name And Logos!"
          icon={Globe}
        />
      );
    }
    offset++;

    for (let i = 0; i < countryLogos.length; i++) {
      if (currentSlide === offset + i * 2) {
        return <CountryLogoSlide countryLogo={countryLogos[i]} isAnswer={false} />;
      }
      if (currentSlide === offset + i * 2 + 1) {
        return <CountryLogoSlide countryLogo={countryLogos[i]} isAnswer={true} />;
      }
    }
    offset += countryLogos.length * 2;

    // Countdown Game
    if (currentSlide === offset) {
      return (
        <GameIntro
          title="Countdown Challenge"
          description="Count down from 50 to 1 as fast as you can!"
          icon={Timer}
        />
      );
    }
    offset++;

    if (currentSlide === offset) {
      return (
        <ModifiedCountdownGame
          scores={gameState.users}
          onComplete={handleComplete}
        />
      );
    }
    offset++;

    // Thank You slide
    if (currentSlide === offset) {
      return <ThankYouSlide />;
    }
  };


  return (
    <div className={`${backgroundPattern.base} ${backgroundPattern.pattern}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl p-8 min-h-[600px] flex flex-col">
          <div className="flex-grow flex items-center justify-center">
            {renderSlide()}
          </div>
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrev}
              disabled={gameState.currentSlide === 0}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors duration-200"
            >
              Previous
            </button>
            <div className="text-gray-600 font-medium">
              Slide {gameState.currentSlide + 1} of {totalSlides}
            </div>
            <button
              onClick={handleNext}
              disabled={gameState.currentSlide === totalSlides - 1}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-colors duration-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;