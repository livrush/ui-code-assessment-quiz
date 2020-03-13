import { TQuestion } from './types';

export const shuffleArray = (arrays: string[]) => {
  const shuffledArray: string[] = arrays.slice(0);
  for (let currentIndex = shuffledArray.length - 1; currentIndex > 0; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[currentIndex]];
  }
  return shuffledArray;
}

export const normalizeBooleanQuestion = ({
  question,
  correct_answer
}: TQuestion) => {
  return {
    question,
    correct_answer,
    answers: [
      'True',
      'False',
    ],
  };
};

export const normalizeMultipleQuestion = ({
  question,
  correct_answer,
  incorrect_answers,
}: TQuestion) => {
  const allPossibleAnswers = incorrect_answers.concat(correct_answer);
  const shuffledAnswers = shuffleArray(allPossibleAnswers);
  return {
    question,
    correct_answer,
    answers: shuffledAnswers,
  };
};

export const normalizeTextQuestion = ({
  question,
  correct_answer,
}: TQuestion) => {
  return {
    question,
    correct_answer,
  };
};
