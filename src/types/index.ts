export interface GameState {
  currentSlide: number;
  userName: string;
  gameStarted: boolean;
  timer: number;
  users: UserScore[];
}

export interface UserScore {
  name: string;
  time: number;
}

export interface JumbledWord {
  jumbled: string;
  answer: string;
}

export interface RebusPuzzle {
  imageUrl: string;
  answer: string;
}

export interface AlphabetTrivia {
  question: string;
  answer: string;
}

export interface CountryLogo {
  country: string;
  flag: string;
}